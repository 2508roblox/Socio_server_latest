import { Router } from 'express'
import asyncHandlerWrapper from '../utils/handlers.js';
import { loginController, logoutController, registerController } from '../controllers/auth.controller.js';


const authRouter = Router()




// Đăng ký tài khoản mới
authRouter.post('/login', asyncHandlerWrapper(loginController))

// Đăng nhập và lấy thông tin người dùng
authRouter.post('/register', asyncHandlerWrapper(registerController));
authRouter.post('/logout', asyncHandlerWrapper(logoutController));
authRouter.post('/refresh-token', asyncHandlerWrapper(logoutController));



export default authRouter