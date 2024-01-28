const express = require('express');
const postsRouter = express.Router();

// Tạo bài đăng mới
postsRouter.post('/posts', async (req, res) => {
  
});

// Lấy thông tin bài đăng có ID cụ thể
postsRouter.get('/posts/:id', async (req, res) => {
   
});

// Lấy danh sách bài đăng của người dùng có ID cụ thể
postsRouter.get('/posts/user/:id', async (req, res) => {
  
});

// Thích một bài đăng có ID cụ thể
postsRouter.put('/posts/:id/like', async (req, res) => {
   
});

// Bỏ thích một bài đăng có ID cụ thể
postsRouter.put('/posts/:id/unlike', async (req, res) => {
  
});

export default postsRouter;