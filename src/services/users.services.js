
// services: database, main logic
class UserService {

    async login({ user_id, verify } ) {
        const { access_token, refresh_token } = await this.signAccessAndRefreshToken({ user_id, verify })
        await databaseService.refreshTokens.insertOne(
          new RefreshToken({ token: refresh_token, user_id: new ObjectId(user_id) })
        )
        return { access_token, refresh_token }
      }
}