// routes/friend.routes.js

import express from 'express';
import {
    sendFriendRequestController,
    getIncomingRequestsController,
    getSentRequestsController,
    confirmFriendRequestController,
    getFriendsController,
    deleteFriendController
} from '../controllers/friends.controller.js';
import asyncHandlerWrapper from '../utils/handlers.js';

const friendRouter = express.Router();

// Gửi yêu cầu kết bạn đến người dùng có ID cụ thể
friendRouter.post('/friend-requests/:id', asyncHandlerWrapper(sendFriendRequestController));

// Lấy danh sách yêu cầu kết bạn từ người khác đến người dùng có ID cụ thể
friendRouter.get('/friend-requests/:id', asyncHandlerWrapper(getIncomingRequestsController));

// Lấy danh sách yêu cầu kết bạn từ người dùng đến người khác có ID cụ thể
friendRouter.get('/friend-requests/sent/:id', asyncHandlerWrapper(getSentRequestsController));

// Xác nhận yêu cầu kết bạn từ người dùng có ID cụ thể
friendRouter.put('/friend-requests/:id/confirm', asyncHandlerWrapper(confirmFriendRequestController));

// Lấy danh sách bạn bè đã xác nhận của người dùng có ID cụ thể
friendRouter.get('/friends/:id', asyncHandlerWrapper(getFriendsController));

// Xóa bạn bè có ID cụ thể của người dùng
friendRouter.delete('/friends/:id', asyncHandlerWrapper(deleteFriendController));

export default friendRouter;