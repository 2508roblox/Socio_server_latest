import FriendRequest from '../models/schemas/Friend.schema.js';

export class FriendService {
  async sendFriendRequest(senderId, receiverId) {
    const existingRequest = await FriendRequest.findOne({ sender: senderId, receiver: receiverId });

    if (existingRequest) {
      throw new Error('Friend request already sent');
    }

    const friendRequest = new FriendRequest({ sender: senderId, receiver: receiverId });
    await friendRequest.save();
    return friendRequest;
  }

  async getIncomingRequests(userId) {
    const incomingRequests = await FriendRequest.find({ receiver: userId }).populate('sender');
    return incomingRequests;
  }

  async getSentRequests(userId) {
    const sentRequests = await FriendRequest.find({ sender: userId }).populate('receiver');
    return sentRequests;
  }

  async confirmFriendRequest(requestId) {
    const friendRequest = await FriendRequest.findById(requestId);

    if (!friendRequest) {
      throw new Error('Friend request not found');
    }

    friendRequest.status = 'confirmed';
    await friendRequest.save();

    return friendRequest;
  }

  async getFriends(userId) {
    const friends = await FriendRequest.find({
      $or: [{ sender: userId }, { receiver: userId }],
      status: 'confirmed',
    })
      .populate('sender')
      .populate('receiver');
    return friends;
  }

  async deleteFriend(friendId) {
    await FriendRequest.findByIdAndDelete(friendId);
  }

  async deleteFriendByUsers(userId1, userId2) {
    await FriendRequest.deleteOne({
      $or: [
        { sender: userId1, receiver: userId2 },
        { sender: userId2, receiver: userId1 },
      ],
      status: 'confirmed',
    });
  }
}

const friendService = new FriendService();
export default friendService;