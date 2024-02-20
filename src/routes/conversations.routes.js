import express from 'express'
const conversationRouter = express.Router();
import asyncHandlerWrapper from '../utils/handlers.js';
import { createConversationController, deleteConversationTitleController, editConversationImageController, editConversationTitleController, getAllConversationController, getAllMembersByRoomIdController, getConversationByQueryController, getConversationController, getConversationsByUserIdController, inviteMembersController, removeMembersController } from '../controllers/conversations.controller.js';
import { accessTokenValidator } from '../middlewares/user.middleware.js';

// Tạo cuộc trò chuyện mới
// @POST - Tạo một cuộc trò chuyện mới
conversationRouter.post('/',  asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(createConversationController));

// Tìm kiếm cuộc trò chuyện dựa trên chuỗi truy vấn
// @GET - Tìm kiếm cuộc trò chuyện dựa trên chuỗi truy vấn
conversationRouter.get('/:query/search', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getConversationByQueryController));

// Lấy tất cả cuộc trò chuyện
// @GET - Lấy tất cả cuộc trò chuyện
conversationRouter.get('/all', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getAllConversationController));

// Lấy thông tin về một cuộc trò chuyện cụ thể dựa trên ID
// @GET - Lấy thông tin về một cuộc trò chuyện cụ thể dựa trên ID
conversationRouter.get('/:id/room',  asyncHandlerWrapper(getConversationController));

// Mời thành viên vào một cuộc trò chuyện cụ thể dựa trên ID
// @PUT - Mời thành viên vào một cuộc trò chuyện cụ thể dựa trên ID
conversationRouter.put('/:id/invite', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(inviteMembersController));

// Xóa thành viên khỏi một cuộc trò chuyện cụ thể dựa trên ID
// @PUT - Xóa thành viên khỏi một cuộc trò chuyện cụ thể dựa trên ID
conversationRouter.put('/:id/remove_members', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(removeMembersController));

// Chỉnh sửa tiêu đề của một cuộc trò chuyện cụ thể dựa trên ID
// @PUT - Chỉnh sửa tiêu đề của một cuộc trò chuyện cụ thể dựa trên ID
conversationRouter.put('/:id/title', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(editConversationTitleController));

// Chỉnh sửa ảnh bìa của một cuộc trò chuyện cụ thể dựa trên ID
// @PUT - Chỉnh sửa ảnh bìa của một cuộc trò chuyện cụ thể dựa trên ID
conversationRouter.put('/:id/cover_image', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(editConversationImageController));

// Xóa một cuộc trò chuyện cụ thể dựa trên ID
// @DELETE - Xóa một cuộc trò chuyện cụ thể dựa trên ID
conversationRouter.delete('/:id/remove_conversation', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(deleteConversationTitleController));

// Lấy danh sách cuộc trò chuyện của một người dùng cụ thể dựa trên ID người dùng
// @GET - Lấy danh sách cuộc trò chuyện của một người dùng cụ thể dựa trên ID người dùng
conversationRouter.get('/user_conversation', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getConversationsByUserIdController));
// Lấy danh sách thành viên trong một cuộc trò chuyện cụ thể dựa trên ID
// @GET - Lấy danh sách thành viên trong một cuộc trò chuyện cụ thể dựa trên ID
conversationRouter.get('/:id/members', asyncHandlerWrapper(accessTokenValidator), asyncHandlerWrapper(getAllMembersByRoomIdController));
 

export default conversationRouter;