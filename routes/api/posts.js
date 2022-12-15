const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/posts'

// GET (get the posts)
router.get('/find', ensureLoggedIn, postsCtrl.find);

// POST (create a post) 
router.post('/', ensureLoggedIn, postsCtrl.create);

module.exports = router;