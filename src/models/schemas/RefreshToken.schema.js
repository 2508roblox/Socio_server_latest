import mongoose from 'mongoose'
const RefreshTokenSchema = new mongoose.Schema({
    
    token: {
        type: String,
        required: true,
    },
    user_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }],
    // Add additional fields for RefreshToken information below
  
  
    // Add more fields as needed
}, {
    timestamps: true
});

const RefreshToken = mongoose.model('refresh_tokens', RefreshTokenSchema);

export default RefreshToken;