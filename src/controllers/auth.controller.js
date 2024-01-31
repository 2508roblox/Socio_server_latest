//controller: call service method and return json
import userService from "../services/users.services.js"
export const loginController = async (req, res) => {
  console.log(req.body)
  const result = await userService.login(req.body)
  return res.json({ result })
}
export const registerController = async (req, res) => {
  console.log(req.body)
  const result = await userService.register(req.body)
  return res.json({ result })
}