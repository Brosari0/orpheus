const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/posts'

// GET (get a media stream)
router.get('/media', ensureLoggedIn, postsCtrl.getMedia);

// POST (create a post) 
router.post('/', ensureLoggedIn, postsCtrl.create);

module.exports = router;