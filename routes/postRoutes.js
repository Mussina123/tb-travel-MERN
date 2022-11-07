const express = require('express');
const router = express.Router();
// const { ensureAuth, ensureGuest } = require('../middleware/authMiddleware');
const postController = require('../controller/post');

router.get('/', /* ensureAuth, */ postController.getPosts);

router.post('/createPost', postController.createPost);

router.put('/updatePost/:id', postController.updatePost);

router.delete('/deletePost/:id', postController.deletePost);

module.exports = router

