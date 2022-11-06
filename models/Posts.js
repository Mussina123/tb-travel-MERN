const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    // user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    location: { type: String, required: true },
    urlOfImg: { type: String, required: true },
    cost: { type: Number, required: true },
    resortName: { type: String, required: true },
    review: { type: Number, required: true },
    comments: { type: String, required: true },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', PostSchema)