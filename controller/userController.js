

// Register new user 
// POST request @ api route: /users/
const registerUser = (req, res) => {
    res.json({ message: 'Register User' })
}
// Authenticate user 
// POST request @ api route: /users/login
const loginUser = (req, res) => {
    res.json({ message: 'Logged in User' })
}
// Get specific logged in user 
// GET request @ api route: /users/me
const getMyself = (req, res) => {
    res.json({ message: 'User specific data' })
}

module.exports = {
    registerUser,
    loginUser,
    getMyself
}