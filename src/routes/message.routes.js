import express from 'express'
import asyncHandlerWrapper from '../utils/handlers.js';
import { createMessageController, deleteMessageController, getAllMessageByIdController, getMessageByIdController, hiddenMessageController, updateMessageController } from '../controllers/messages.controller.js';
const messageRouter = express.Router();

// Lấy tất cả các tin nhắn trong một cuộc trò chuyện
messageRouter.get('/:conversationId/:page',asyncHandlerWrapper(getAllMessageByIdController));
messageRouter.get('/:messId',asyncHandlerWrapper(getMessageByIdController));

// Tạo một tin nhắn mới
messageRouter.post('/',asyncHandlerWrapper(createMessageController));

// Cập nhật một tin nhắn
messageRouter.put('/:messageId/update',asyncHandlerWrapper(updateMessageController));

// Xóa một tin nhắn
messageRouter.delete('/:messageId/delete', asyncHandlerWrapper(deleteMessageController));

messageRouter.put('/:messageId/hidden', asyncHandlerWrapper(hiddenMessageController));

export default messageRouter;