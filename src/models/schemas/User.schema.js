import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     // Add additional fields for user information below
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//     },
//     age: {
//         type: Number,
//         required: true,
//     },
//     // Add more fields as needed
// });
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },

    password: {
        type: String,
    },

    // Add more fields as needed
});

const User = mongoose.model('users', UserSchema);
export default User;