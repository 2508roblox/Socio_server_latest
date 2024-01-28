"use strict";

var mongoose = require('mongoose');
var ConversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }],
  // Add additional fields for conversation information below
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
  // Add more fields as needed
});
var Conversation = mongoose.model('conversations', ConversationSchema);
module.exports = Conversation;