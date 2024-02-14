import express from 'express'
import asyncHandlerWrapper from '../utils/handlers.js';
import { createMessageController, deleteMessageController, getAllMessageByIdController, getMessageByIdController, hiddenMessageController, updateMessageController } from '../controllers/messages.controller.js';
import { accessTokenValidator } from '../middlewares/user.middleware.js';
const messageRouter = express.Router();

// Lấy tất cả các tin nhắn trong một cuộc trò chuyện
messageRouter.get('/:conversationId/:page',asyncHandlerWrapper(accessTokenValidator) , asyncHandlerWrapper(getAllMessageByIdController));
messageRouter.get('/:messId',asyncHandlerWrapper(accessTokenValidator) , asyncHandlerWrapper(getMessageByIdController));

// Tạo một tin nhắn mới
messageRouter.post('/',asyncHandlerWrapper(accessTokenValidator) , asyncHandlerWrapper(createMessageController));

// Cập nhật một tin nhắn
messageRouter.put('/:messageId/update',asyncHandlerWrapper(accessTokenValidator) , asyncHandlerWrapper(updateMessageController));

// Xóa một tin nhắn
messageRouter.delete('/:messageId/delete',asyncHandlerWrapper(accessTokenValidator) , asyncHandlerWrapper(deleteMessageController));

messageRouter.put('/:messageId/hidden',asyncHandlerWrapper(accessTokenValidator) , asyncHandlerWrapper(hiddenMessageController));

export default messageRouter;