import User from "../models/schemas/User.schema.js";
import Post from "../models/schemas/Post.schema.js";

export class PostService {
  async create(credentials) {
    const { userId, content, title } = credentials;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const newPost = new Post({
      user: user,
      content,
      title,
    });

    const createdPost = await newPost.save();
    return createdPost;
  }

  async getPostById(postId) {
    const post = await Post.findById(postId);
    return post;
  }

  async getPostsByUserId(userId) {
    const posts = await Post.find({ 'user': userId });
    return posts;
  }

  async likePost(postId, userId) {
    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found");
    }

    if (post.likes.includes(userId)) {
      throw new Error("User has already liked this post");
    }

    post.likes.push(userId);
    await post.save();
    return post;
  }

  async unlikePost(postId, userId) {
    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found");
    }

    post.likes.pull(userId);
    await post.save();
    return post;

  }
  async updatePost(postId, updatedData) {
    const updatedPost = await Post.findByIdAndUpdate(postId, updatedData, {
      new: true,
    }).exec();
    return updatedPost;
  };

  async deletePost(postId) {
    await Post.findByIdAndDelete(postId).exec();
  };
}



const postService = new PostService();
export default postService;