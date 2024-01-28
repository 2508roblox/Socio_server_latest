"use strict";

var mongoose = require('mongoose');
var FriendRequestSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  status: {
    type: String,
    "enum": ['pending', 'confirmed'],
    "default": 'pending'
  }
});
var FriendRequest = mongoose.model('friends', FriendRequestSchema);
module.exports = FriendRequest;