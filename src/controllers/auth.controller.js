//controller: call service method and return json
import userService from "../services/users.services.js"
export const loginController = async (req, res) => {
  const result = await userService.login(req.body)
  return res.json({ result })
}
export const registerController = async (req, res) => {
  const result = await userService.register(req.body)
  return res.json({ result })
}
export const logoutController = async (req, res) => {
  const result = await userService.logout(req.body.user_id)
  return res.json({ result })
}