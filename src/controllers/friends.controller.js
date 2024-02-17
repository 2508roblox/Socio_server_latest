// controllers/friend.controller.js

import FriendService from '../services/friends.services.js';

export const sendFriendRequestController = async (req, res) => {
    const { id } = req.params;
    const { senderId } = req.body;
    const friendRequest = await FriendService.sendFriendRequest(senderId, id);
    res.status(200).json(friendRequest);

};

export const getIncomingRequestsController = async (req, res) => {
    const { id } = req.params;
    const incomingRequests = await FriendService.getIncomingRequests(id);
    res.status(200).json(incomingRequests);

};

export const getSentRequestsController = async (req, res) => {
    const { id } = req.params;
    const sentRequests = await FriendService.getSentRequests(id);
    res.status(200).json(sentRequests);

};

export const confirmFriendRequestController = async (req, res) => {
    const { id } = req.params;
    const confirmedRequest = await FriendService.confirmFriendRequest(id);
    res.status(200).json(confirmedRequest);

};

export const getFriendsController = async (req, res) => {
    const user_id = req.decoded_authorization.user_id
    const friends = await FriendService.getFriends(user_id);
    res.status(200).json(friends);

};

export const deleteFriendController = async (req, res) => {
    const { id } = req.params;
    await FriendService.deleteFriend(id);
    res.status(200).json({ message: 'Friend deleted successfully' });

};