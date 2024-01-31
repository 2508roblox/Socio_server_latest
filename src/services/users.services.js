import User from "../models/schemas/User.schema.js";

export class UserService {
  async login(credentials) {
    const { email, password } = credentials;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordMatch = await user.matchPassword(password);

    if (!isPasswordMatch) {
      throw new Error("Invalid email or password");
    }

    return user;
  }
  async register(body) {
    // {
    //   "username": "john.doe",
    //   "email": "john.doe@example.com",
    //   "password": "password123",
    //   "firstName": "John",
    //   "lastName": "Doe",
    //   "age": 30
    // }
    const { username, email, password, firstName, lastName, age } = body;
    let isExist = await User.findOne({ username, email });

    if (isExist) {
      throw new Error("User already exists");
    }

    const newUser = new User({ username, email, password, firstName, lastName, age });

    await newUser.save();
    return newUser;
  }

  async getAllUsers() {
    const users = await User.find();
    return users;
  };

  async getUserById(userId) {
    const user = await User.findById(userId);
    return user;
  };

  async updateUser(userId, updatedData) {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    }).exec();
    return updatedUser;
  };
}


const userService = new UserService();
export default userService;