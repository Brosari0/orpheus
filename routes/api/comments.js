const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// ALL paths start with api/comments

// POST api/comments/create
router.post('/create/:id', ensureLoggedIn, commentsCtrl.create);


module.exports = router;