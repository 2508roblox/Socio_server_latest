import express from 'express'
const userRouter = express.Router();

// Lấy danh sách tất cả người dùng
userRouter.get('/users', async (req, res) => {
   
});

// Lấy thông tin của người dùng có ID cụ thể
userRouter.get('/users/:id', async (req, res) => {
  
});

// Cập nhật thông tin của người dùng có ID cụ thể
userRouter.put('/users/:id', async (req, res) => {
   
});

export default userRouter; 