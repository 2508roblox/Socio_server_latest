
import express from 'express';
import {
    getAllUsersController,
    getUserByIdController,
    updateUserController
} from '../controllers/users.controller.js';

const userRouter = express.Router();

// Get all users
userRouter.get('/all', getAllUsersController);

// Get a user by ID
userRouter.get('/:id', getUserByIdController);

// Update a user by ID
userRouter.put('/:id', updateUserController);

export default userRouter;