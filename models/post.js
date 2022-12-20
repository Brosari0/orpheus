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
  url: {type: String},
  isYoutube: {type: Boolean, default: false},
  comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);