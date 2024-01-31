import mongoose from "mongoose";


const MessengerSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversations',
        required: true,
    },
    status: {
        type: String,
    },
    hidden: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        }
    ],
    file: [
        {
            fileName: {
                type: String,
            },
            fileSize: {
                type: Number,
            },
            fileType: {
                type: String,
            },
            data: Buffer,
        }
    ],
}, {
    timestamps: true
});

 

const Messenger = mongoose.model.Messenger || mongoose.model('Messenger', MessengerSchema);
export default Messenger