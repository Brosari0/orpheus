const uploadFile = require('../../config/upload-file');
const Post = require('../../models/post')
const Video = require('../../models/video');

module.exports = {
  create,
  find,
  upload,
}

async function upload(req, res) {
  console.log(req.body);
  try {
    if (req.file) {
      // The uploadFile function will return the uploaded file's S3 endpoint
      const videoURL = await uploadFile(req.file);
      const videoDoc = await Video.create({
        url: videoURL,
        // As usual, other inputs sent with the file are available on req.body
        title: req.body.title
      });
      res.json(videoDoc);
    } else {
      throw new Error('Something went wrong.');
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
}

async function create(req, res) {
  req.body.user = req.user._id
  const post = new Post(req.body)
  console.log(post);
  post.save();
  res.json(post);
}

async function find(req, res) {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
}