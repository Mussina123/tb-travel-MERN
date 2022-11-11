const Posts = require('../models/Posts');
const User = require('../models/User');

module.exports = {
    getPosts: async (req, res) => {
        try {
            const allPosts = await Posts.find({ user: req.user.id });
            res.status(200).json(allPosts);
        } catch (err) {
            console.log(err)
        }
    },
    createPost: async (req, res) => {
        try {
            if (!req.body) {
                res.status(400)
                throw new Error("Please fill in all areas")
            }

            console.log(req.body);
            const createdPost = await Posts.create({ location: req.body.location, urlOfImg: req.body.urlOfImg, cost: req.body.cost, resortName: req.body.resortName, review: req.body.review, comments: req.body.comments, user: req.user.id })
            console.log('New Post has been added')
            res.status(200).json(createdPost);
        } catch (err) {
            console.log(err)
        }
    },
    deletePost: async (req, res) => {
        try {
            const post = await Posts.findById(req.params.id)

            if (!post) {
                res.status(400)
                throw new Error('Post not found')
            }

            const currentUser = await User.findById(req.user.id)

            if (!currentUser) {
                res.status(401)
                throw new Error('User Not Found')
            }

            // ensuring current/logged in user matches post user 
            if (post.user.toString() !== currentUser.id) {
                res.status(401)
                throw new Error('User not authorized')
            }

            await post.remove()

            res.status(200).json({ message: `Post id: ${req.params.id}` })

        } catch (err) {
            console.log(err)
            res.status(400)
            throw new Error("Could not delete your post...")
        }
    },
    updatePost: async (req, res) => {
        const post = await Posts.findById(req.params.id)

        if (!post) {
            res.status(400)
            throw new Error("Post not found")
        }

        const currentUser = await User.findById(req.user.id)

        if (!currentUser) {
            res.status(401)
            throw new Error('User Not Found')
        }

        // ensuring current/logged in user matches post user 
        if (post.user.toString() !== currentUser.id) {
            res.status(401)
            throw new Error('User not authorized')
        }

        const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, { new: false })
        console.log(req.body);

        res.status(200).json(updatedPost)
    }
}