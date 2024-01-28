import express from 'express'
const conversationRouter = express.Router();

// Tạo cuộc trò chuyện mới
conversationRouter.post('/conversations', async (req, res) => {
 
});

// Tạo nhóm trò chuyện mới
conversationRouter.post('/conversations/groups', async (req, res) => {
  
});

// Lấy danh sách tin nhắn trong cuộc trò chuyện có ID cụ thể
conversationRouter.get('/conversations/:id', async (req, res) => {
  
});

// Lấy danh sách tin nhắn trong nhóm trò chuyện có ID cụ thể
conversationRouter.get('/conversations/groups/:id', async (req, res) => {
  
});

export default conversationRouter;