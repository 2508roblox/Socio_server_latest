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
