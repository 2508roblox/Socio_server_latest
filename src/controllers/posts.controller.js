//controller: call service method and return json
import postService from "../services/posts.services.js"
export const createPostController = async (req, res) => {
    console.log(req.body)
    const result = await postService.create(req.body)
    return res.json({ result })
}
export const getPostByIdController = async (req, res) => {

    const postId = req.params.id;
    const post = await postService.getPostById(postId);

    return res.json({ post });

};

export const getPostsByUserIdController = async (req, res) => {

    const userId = req.params.id;
    console.log(userId)
    const posts = await postService.getPostsByUserId(userId);
    return res.json({ posts });

};

export const likePostController = async (req, res) => {

    const postId = req.params.id;
    const { userId } = req.body;
    const post = await postService.likePost(postId, userId);
    return res.json({ post });

};

export const unlikePostController = async (req, res) => {

    const postId = req.params.id;
    const { userId } = req.body;
    const post = await postService.unlikePost(postId, userId);
    return res.json({ post });


};
export const updatePostController = async (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;

    const updatedPost = await postService.updatePost(postId, updatedData);
    return res.json({ post: updatedPost });
};

// Delete a post with a specific ID
export const deletePostController = async (req, res) => {
    const postId = req.params.id;

    await postService.deletePost(postId);
    return res.json({ message: "Post deleted successfully" });
};