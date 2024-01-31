//controller: call service method and return json
import userService from "../services/users.services.js"
export const loginController = async (req, res) => {
  const result = await userService.login({})
  return res.json({ message: USER_MESSAGES.LOGIN_SUCCESS, result })
  throw new Error('fff')
}
export const registerController = async (req, res) => {
  console.log(req.body)
  const result = await userService.register(req.body)
  return res.json({ result })
  throw new Error('fff')
}