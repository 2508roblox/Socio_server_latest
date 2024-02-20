import mongoose from "mongoose";
import bcrypt from 'bcrypt';
export const UserSchema = new mongoose.Schema({

    avatar: {
        type: String,
        default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    banner: {
        type: String,
        default: 'https://learn.bestfriendsclub.ca/wp-content/themes/thrive-theme/inc/assets/images/featured_image.png'

    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Add additional fields for user information below
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    age: {
        type: Number,
    },
},
    { timestamps: true }
);
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model.Users || mongoose.model('User', UserSchema);