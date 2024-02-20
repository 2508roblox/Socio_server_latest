import mongoose from "mongoose";

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

export default mongoose.model.Friend || mongoose.model('Friend', FriendRequestSchema);