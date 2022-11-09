const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMyself } = require('../controller/userController')
// const authController = require('../controller/auth');
// const homeController = require('../controller/home');
// const { ensureAuth, ensureGuest } = require('../middlewear/auth');

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMyself)


// router.get('/', homeController.getHello)
// router.get('/login', authController.getLogin)
// router.post('/login', authController.postLogin)
// router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
// router.post('/signup', authController.postSignup)


module.exports = router