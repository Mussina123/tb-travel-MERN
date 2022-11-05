const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    location: { type: String, required: true },
    urlOfImg: { type: String, required: true },
    cost: { type: Number, required: true },
    resortName: { type: String, required: true },
    review: { type: Number, required: true },
    comments: { type: String, required: true },
});

module.exports = mongoose.model('Post', PostSchema)