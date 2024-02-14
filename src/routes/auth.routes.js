import { Router } from 'express'
import asyncHandlerWrapper from '../utils/handlers.js';
import { RefreshTokenController, loginController, logoutController, registerController } from '../controllers/auth.controller.js';
import { refreshTokenValidator } from '../middlewares/user.middleware.js';


const authRouter = Router()




// Đăng ký tài khoản mới
authRouter.post('/login', asyncHandlerWrapper(loginController))

// Đăng nhập và lấy thông tin người dùng
authRouter.post('/register', asyncHandlerWrapper(registerController));
authRouter.post('/logout', asyncHandlerWrapper(logoutController));
authRouter.post('/refresh-token', asyncHandlerWrapper(refreshTokenValidator), asyncHandlerWrapper(RefreshTokenController));



export default authRouter