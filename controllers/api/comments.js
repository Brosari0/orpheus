const Post = require('../../models/post')

module.exports = {
  create,
}

async function create(req, res) {
  req.body.user = req.user._id;
  let post = await Post.findById(req.params.id);
  post.comments.push(req.body)
  post.save();
  res.json(post);
}
