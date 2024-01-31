import mongoose from "mongoose";


export const ConversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }],
    // Add additional fields for conversation information below
    title: {
        type: String,
        required: false,
    },
    cover_image: {
        type: String,
        required: false,
    },
    
    // Add more fields as needed
}, {
    timestamps: true
});
const Conversation = mongoose.model.Conversation || mongoose.model('Conversation', ConversationSchema);
export default Conversation


