
import express from 'express';
import {
    getAllUsersController,
    getUserByIdController,
    updateUserController
} from '../controllers/users.controller.js';
import asyncHandlerWrapper from '../utils/handlers.js';
import { accessTokenValidator } from '../middlewares/user.middleware.js';

const userRouter = express.Router();

// Get all users
userRouter.get('/all', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getAllUsersController));

// Get a user by ID
userRouter.get('/:id', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getUserByIdController));

// Update a user by ID
userRouter.put('/', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(updateUserController));

export default userRouter;