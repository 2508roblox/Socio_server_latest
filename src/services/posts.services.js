import User from "../models/schemas/User.schema.js";
import Post from "../models/schemas/Post.schema.js";

export class PostService {
  async create(credentials, user_id) {
    const { content, images } = credentials;

    const user = await User.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    const newPost = new Post({
      user: user_id,
      content,
      images: [...images]
    });

    const createdPost = await newPost.save();
    return createdPost;
  }

  async getPostById(postId) {
    const post = await Post.findById(postId);
    return post;
  }

  async getPostsByUserId(user_id) {
    const posts = await Post.find({ 'user': user_id });
    return posts;
  }

  async likePost(postId, user_id) {
    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found");
    }

    if (post.likes.includes(user_id)) {
      throw new Error("User has already liked this post");
    }

    post.likes.push(user_id);
    await post.save();
    return post;
  }

  async unlikePost(postId, user_id) {
    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found");
    }

    post.likes.pull(user_id);
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