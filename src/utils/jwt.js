import jwt from "jsonwebtoken"

export const signToken = ( payload, privateKey, option = {
    algorithm: 'HS256'
} ) => {
    let token =  jwt.sign(payload, privateKey, option)
    return token
}
export const verifyToken = async (token, privateKey) => {
  return jwt.verify(token, privateKey)
  };