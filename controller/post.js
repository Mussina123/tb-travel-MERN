const Posts = require('../models/Posts');

module.exports = {
    getPosts: async (req, res) => {
        console.log(req.user);
        try {
            const allPosts = await Posts.find();
            res.json(allPosts);
        } catch (err) {
            console.log(err)
        }
        // },
        // createPost: async (req, res) => {
        //     try {
        //         const parsedBody = JSON.parse(req.body);
        //         console.log(req.body);
        //         await Posts.create({ location: parsedBody.location, urlOfImg: parsedBody.urlOfImg, cost: parsedBody.cost, resortName: parsedBody.resortName, review: parsedBody.review, comments: parsedBody.comments })
        //         console.log('New Post has been added');
        //         // res.redirect('/posts')
        //     } catch (err) {
        //         console.log(err)
        //     }
        // }
    },
    createPost: async (req, res) => {
        try {
            console.log(req.body);
            await Posts.create({ location: req.body.location, urlOfImg: req.body.urlOfImg, cost: req.body.cost, resortName: req.body.resortName, review: req.body.review, comments: req.body.comments })
            console.log('New Post has been added')
            res.json({ response: "ok" });
        } catch (err) {
            console.log(err)
        }
    }
}