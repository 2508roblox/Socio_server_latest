import { envConfig } from "../constants/config.js";
import { verifyToken } from "../utils/jwt.js";

export const accessTokenValidator = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      // Token missing or not in the correct format
       throw new Error('Access Token is required');
       
    }
    
    const token = authorizationHeader.split(' ')[1];
    
    // Perform your token validation logic here
    // For example, you can use a library like jsonwebtoken to verify the token
    
    try {
      const decodedToken = await verifyToken(token, envConfig.jwtSecretAccessToken); // replace verifyToken with your actual token verification logic
      req.decoded_authorization = decodedToken
      // Token is valid, you can proceed with the request
      // You can access the decoded token data using decodedToken, e.g., decodedToken.userId
      next(); // call the next middleware or continue with the request handling
    } catch (error) {
      // Token verification failed
      throw new Error('Unauthorized');
    }
  };
export const refreshTokenValidator = async (req, res, next) => {
    const token = req.body.refreshToken;
    
    if (!token  ) {
      // Token missing or not in the correct format
       throw new Error('Refresh Token is required');
       
    }
    
    
    
    // Perform your token validation logic here
    // For example, you can use a library like jsonwebtoken to verify the token
    
    try {
      const decodedToken = await verifyToken(token, envConfig.jwtSecretRefreshToken); // replace verifyToken with your actual token verification logic
      req.decoded_refresh_token = decodedToken
      // Token is valid, you can proceed with the request
      // You can access the decoded token data using decodedToken, e.g., decodedToken.userId
      next(); // call the next middleware or continue with the request handling
    } catch (error) {
      // Token verification failed
      throw new Error('Unauthorized');
    }
  };