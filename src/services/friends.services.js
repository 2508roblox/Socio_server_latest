import FriendRequest from '../models/schemas/Friend.schema.js';
import User from "../models/schemas/User.schema.js";

export class FriendService {
  async sendFriendRequest(receiverId, senderId) {
    const existingRequest = await FriendRequest.findOne({ sender: senderId, receiver: receiverId });

    if (existingRequest) {
      throw new Error('Friend request already sent');
    }

    const friendRequest = new FriendRequest({ sender: senderId, receiver: receiverId });
    await friendRequest.save();
    return friendRequest;
  }

  async getIncomingRequests(userId) {
    const incomingRequests = await FriendRequest.find({ receiver: userId, status: "pending" });
    const senderIds = incomingRequests.map((request) => request.sender);
    const receiverIds = incomingRequests.map((request) => request.receiver);

    const senders = await User.find({ _id: { $in: senderIds } });
    const receivers = await User.find({ _id: { $in: receiverIds } });

    const incomingRequestsWithInfo = incomingRequests.map((request) => {
      const sender = senders.find((user) => user._id.toString() === request.sender.toString());
      const receiver = receivers.find((user) => user._id.toString() === request.receiver.toString());

      return {
        ...request.toObject(),
        sender_info: sender,
        receiver_info: receiver,
      };
    });

    return incomingRequestsWithInfo;
  }
  async getSentRequests(userId) {
    const sentRequests = await FriendRequest.find({ sender: userId, status: "pending" });
    const senderIds = sentRequests.map((request) => request.sender);
    const receiverIds = sentRequests.map((request) => request.receiver);

    const senders = await User.find({ _id: { $in: senderIds } });
    const receivers = await User.find({ _id: { $in: receiverIds } });

    const sentRequestsWithInfo = sentRequests.map((request) => {
      const sender = senders.find((user) => user._id.toString() === request.sender.toString());
      const receiver = receivers.find((user) => user._id.toString() === request.receiver.toString());

      return {
        ...request.toObject(),
        sender_info: sender,
        receiver_info: receiver,
      };
    });

    return sentRequestsWithInfo;
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
    });

    const receiverIds = friends.map((friend) => friend.receiver);
    const senderIds = friends.map((friend) => friend.sender);

    const receivers = await User.find({ _id: { $in: receiverIds } });
    const senders = await User.find({ _id: { $in: senderIds } });

    const sentRequests = friends.map((friend) => {
      const receiver = receivers.find((user) => user._id.toString() === friend.receiver.toString());
      const sender = senders.find((user) => user._id.toString() === friend.sender.toString());

      return {
        sender_info: sender,
        receiver_info: receiver,
        _id: friend._id,
      };
    });

    return sentRequests;
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