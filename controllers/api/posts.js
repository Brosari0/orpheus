const Post = require('../../models/post')

module.exports = {
  create,
  find,
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
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
}