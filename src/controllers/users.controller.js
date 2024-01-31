//controller: call service method and return json
import userService from "../services/users.services.js";

export const getAllUsersController = async (req, res) => {
    const users = await userService.getAllUsers();
    return res.json({ users });
};

// Get a user by ID
export const getUserByIdController = async (req, res) => {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    return res.json({ user });
};

// Update a user by ID
export const updateUserController = async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await userService.updateUser(userId, updatedData);
    return res.json({ user: updatedUser });
};