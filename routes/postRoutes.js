const express = require('express');
const router = express.Router();
// const { ensureAuth, ensureGuest } = require('../middleware/authMiddleware');
const postController = require('../controller/postController');
const { protectAuth } = require('../middleware/authMiddleware')

router.get('/', protectAuth, postController.getPosts);

router.post('/createPost', protectAuth, postController.createPost);

router.put('/updatePost/:id', protectAuth, postController.updatePost);

router.delete('/deletePost/:id', protectAuth, postController.deletePost);

module.exports = router

