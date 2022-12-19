const {uploadFile, downloadFile} = require('../../config/aws-server-manager');
const Post = require('../../models/post')
const Video = require('../../models/video');

module.exports = {
  create,
  find,
  upload,
};

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
    } else {
      throw new Error('Something went wrong.');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

async function create(req, res) {
  req.body.user = req.user._id
  if (req.body.url.includes('watch?v=')) {
    req.body.isYoutube = true;
    req.body.url = req.body.url.replace('watch?v=', 'embed/').slice(0, req.body.url.indexOf('&') - 2);
  }
  const post = new Post(req.body)
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
