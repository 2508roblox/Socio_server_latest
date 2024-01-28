import express from 'express'
const messageRouter = express.Router();

// Lấy tất cả các tin nhắn trong một cuộc trò chuyện
messageRouter.get('/messages/:conversationId', async (req, res) => {
  
});

// Tạo một tin nhắn mới
messageRouter.post('/messages', async (req, res) => {
  
});

// Cập nhật một tin nhắn
messageRouter.put('/messages/:messageId', async (req, res) => {
  
});

// Xóa một tin nhắn
messageRouter.delete('/messages/:messageId', async (req, res) => {
  
});

export default messageRouter;