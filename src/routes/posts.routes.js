import express from 'express';
import asyncHandlerWrapper from '../utils/handlers.js';
import {
    createPostController,
    getPostByIdController,
    getPostsByUserIdController,
    likePostController,
    unlikePostController,
    updatePostController,
    deletePostController
} from '../controllers/posts.controller.js';
import { accessTokenValidator } from '../middlewares/user.middleware.js';

const postsRouter = express.Router();

// Create a new post
postsRouter.post('/create', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(createPostController));

// Get a specific post by ID
postsRouter.get('/:id', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getPostByIdController));

// Get posts by a specific user ID
postsRouter.get('/user/:id', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getPostsByUserIdController));

// Like a post with a specific ID
postsRouter.put('/:id/like', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(likePostController));

// Unlike a post with a specific ID
postsRouter.put('/:id/unlike', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(unlikePostController));

// Update a post with a specific ID
postsRouter.put('/:id/update', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(updatePostController));

// Delete a post with a specific ID
postsRouter.delete('/:id/delete', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(deletePostController));

export default postsRouter;