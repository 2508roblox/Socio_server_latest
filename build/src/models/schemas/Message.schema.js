"use strict";

var mongoose = require('mongoose');
var MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'conversations',
    required: true
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  file: {
    fileName: {
      type: String
    },
    fileSize: {
      type: Number
    },
    fileType: {
      type: String
    }
  }
});
var Messenger = mongoose.model('messages', MessengerSchema);
module.exports = Messenger;