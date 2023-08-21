const { uploadFile } = require('../../config/aws-server-manager');
const Post = require('../../models/post')
const Video = require('../../models/video');

module.exports = {
  create,
  find,
  upload,
  deletePost,
};

async function deletePost(req, res) {
  Post.findOneAndDelete({'_id': req.params.id, 'post.user': req.user._id});
  res.json();
}

async function upload(req, res) {
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
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

async function create(req, res) {
  try {
    req.body.user = req.user._id
    if (req.body.url.includes('watch?v=')) {
      req.body.isYoutube = true;
      req.body.url = req.body.url.replace('watch?v=', 'embed/');
      if (req.body.url.includes("&")) req.body.url = req.body.url.slice(0, req.body.url.indexOf('&') - 2)
    }
    const post = new Post(req.body)
    await post.save();
    res.json(post);
  } catch {
    res.status(400)
  }
}

async function find(req, res) {
  try {
    const posts = await Post.find({}).populate("user").exec();
    res.json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
}
