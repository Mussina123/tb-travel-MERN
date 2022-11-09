const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// Register new user 
// POST request @ api route: /users/
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user already exists 

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password to safely encrypt password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user 

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


// Authenticate user 
// POST request @ api route: /users/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // checking if user info inputted is in the DB via email 
    const loggedUser = await User.findOne({ email })

    if (loggedUser && (await bcrypt.compare(password, loggedUser.password))) {
        res.json({
            _id: loggedUser.id,
            name: loggedUser.name,
            email: loggedUser.email,
            token: generateToken(loggedUser._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})
// Get specific logged in user 
// GET request @ api route: /users/me
const getMyself = asyncHandler(async (req, res) => {
    res.json({ message: 'User specific data' })
})

// GENERATE JWT 

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser,
    getMyself
}