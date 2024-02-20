// routes/friend.routes.js

import express from 'express';
import {
    sendFriendRequestController,
    getIncomingRequestsController,
    getSentRequestsController,
    confirmFriendRequestController,
    getFriendsController,
    deleteFriendController,
    InfoFriendsController
} from '../controllers/friends.controller.js';
import asyncHandlerWrapper from '../utils/handlers.js';
import { accessTokenValidator } from '../middlewares/user.middleware.js';

const friendRouter = express.Router();

// Gửi yêu cầu kết bạn đến người dùng có ID cụ thể
friendRouter.post('/friend-requests', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(sendFriendRequestController));

// Lấy danh sách yêu cầu kết bạn từ người khác đến người dùng có ID cụ thể
friendRouter.get('/friend-requests', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getIncomingRequestsController));

// Lấy danh sách yêu cầu kết bạn từ người dùng đến người khác có ID cụ thể
friendRouter.get('/friend-requests/sent', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getSentRequestsController));

// Xác nhận yêu cầu kết bạn từ người dùng có ID cụ thể
friendRouter.put('/friend-requests/confirm', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(confirmFriendRequestController));

// Lấy danh sách bạn bè đã xác nhận của người dùng có ID cụ thể
friendRouter.get('/friends', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getFriendsController));

// Xóa bạn bè có ID cụ thể của người dùng
friendRouter.delete('/friends', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(deleteFriendController));
friendRouter.get('/friend-requests/info/:id', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(InfoFriendsController));

export default friendRouter;