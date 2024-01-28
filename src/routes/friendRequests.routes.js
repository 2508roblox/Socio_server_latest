import express from 'express'
const friendRouter = express.Router();

// Gửi yêu cầu kết bạn đến người dùng có ID cụ thể
friendRouter.post('/friend-requests/:id', async (req, res) => {
 
});

// Lấy danh sách yêu cầu kết bạn từ người khác đến người dùng có ID cụ thể
friendRouter.get('/friend-requests/:id', async (req, res) => {
  
});

// Lấy danh sách yêu cầu kết bạn từ người dùng đến người khác có ID cụ thể
friendRouter.get('/friend-requests/sent/:id', async (req, res) => {
  
});

// Xác nhận yêu cầu kết bạn từ người dùng có ID cụ thể
friendRouter.put('/friend-requests/:id/confirm', async (req, res) => {
  
});

// Lấy danh sách bạn bè đã xác nhận của người dùng có ID cụ thể
friendRouter.get('/friends/:id', async (req, res) => {
  
});

// Xóa bạn bè có ID cụ thể của người dùng
friendRouter.delete('/friends/:id', async (req, res) => {
 
});

export default friendRouter;