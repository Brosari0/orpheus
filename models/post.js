const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: { Type: String }
}, {
  timestamps: true
});

const postSchema = new Schema({
  title: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {type: String},
  url: {type: String, required: true},
  isYoutube: {type: Boolean, default: false},
  comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);