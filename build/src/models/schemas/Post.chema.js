"use strict";

var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  // Add additional fields for post information below
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
var Post = mongoose.model('posts', PostSchema);
module.exports = Post;