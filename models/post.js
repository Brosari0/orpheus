const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: String, required: true},
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {type: String},
  url: {type: String},
  isYoutube: {type: Boolean, default: false}
});

module.exports = mongoose.model('Post', postSchema);