import User from "../models/schemas/User.schema.js";

// services: database, main logic
export class UserService {

  async login({ user_id, verify }) {
    const { access_token, refresh_token } = await this.signAccessAndRefreshToken({ user_id, verify })
    await databaseService.refreshTokens.insertOne(
      new RefreshToken({ token: refresh_token, user_id: new ObjectId(user_id) })
    )
    return { access_token, refresh_token }
  }
  async register(body) {
    const { username, password } = body;
    let isExist = await User.create({ username, password })
    return isExist;
    // const newUser = new User({ username, password });
    // await newUser.save();

  }
}
const userService = new UserService()
export default userService