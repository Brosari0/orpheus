const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String },
  url: { type: String }
})

module.exports = mongoose.model('Video', videoSchema);