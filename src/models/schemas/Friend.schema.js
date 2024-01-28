const mongoose = require('mongoose');

const FriendRequestSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed'],
        default: 'pending',
    },
});

const FriendRequest = mongoose.model('friends', FriendRequestSchema);

module.exports = FriendRequest;