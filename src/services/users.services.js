import { envConfig } from "../constants/config.js";
import User from "../models/schemas/User.schema.js";
import RefreshToken from "../models/schemas/RefreshToken.schema.js";
import { signToken } from "../utils/jwt.js";

export class UserService {
  async signRefreshToken(payload) {
    let token = signToken(payload, envConfig.jwtSecretRefreshToken, {
      expiresIn: envConfig.refreshTokenExpiresIn,
    });
    return token;
  }
  async signAccessToken(payload) {
    let token = signToken(payload, envConfig.jwtSecretAccessToken, {
      expiresIn: envConfig.accessTokenExpiresIn,
    });
    return token;
  }
  async signAccessAndRefreshToken(payload) {
    let accessToken = await this.signAccessToken(payload);
    let refreshToken = await this.signRefreshToken(payload);
    return {
      accessToken,
      refreshToken,
    };
  }
  async login(credentials) {
    const { email, password } = credentials;
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordMatch = await user.matchPassword(password);

    if (!isPasswordMatch) {
      throw new Error("Invalid email or password");
    }
    let { accessToken, refreshToken } = await this.signAccessAndRefreshToken({
      user_id: user._id.toString(),
    });
    await RefreshToken.create({
      token: refreshToken,
      user_id: user._id.toString(),
    });
    return { accessToken, refreshToken };
  }

  async register(body) {
    const { username, email, password, firstName, lastName, age } = body;
    let isExist = await User.findOne({ username, email });

    if (isExist) {
      throw new Error("User already exists ");
    }

    const newUser = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      age,
    });

    await newUser.save();
    // sign access and refresh token
    let user_payload = {
      user_id: newUser._id.toString(),
    };
    let { accessToken, refreshToken } = await this.signAccessAndRefreshToken(
      user_payload
    );
    // insert refresh token to database
    await RefreshToken.create({
      token: refreshToken,
      user_id: newUser._id.toString(),
    });
    return { accessToken, refreshToken };
  }
  async getAccessTokenByRefreshToken(user_id) {
    let token = await this.signAccessToken(
      { user_id: user_id }
    );
    return { token };
  }
  async logout(user_id) {
    await RefreshToken.deleteMany({ user_id });

    return "Logout successfully!";
  }
  async getAllUsers() {
    const users = await User.find();
    return users;
  }

  async getUserById(userId) {
    const user = await User.findById(userId);
    return user;
  }

  async updateUser(userId, updatedData) {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    }).exec();
    return updatedUser;
  }
}

const userService = new UserService();
export default userService;
