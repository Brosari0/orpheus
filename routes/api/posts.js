const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/posts'

// GET (get the posts)
router.get('/find', postsCtrl.find);

// POST (create a post) 
router.post('/create', ensureLoggedIn, postsCtrl.create);

// POST (upload a video)
router.post('/upload', ensureLoggedIn, upload.single('video'), postsCtrl.upload);

// DELETE (delete a post)
router.delete('/delete/:id', ensureLoggedIn, postsCtrl.deletePost)

module.exports = router;