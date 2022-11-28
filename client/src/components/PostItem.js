import React from 'react'

const PostItem = ({ post }) => {
    return (
        <div>
            <div>
                {new Date(post.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{post.location}</h2>
            <h2>{post.urlOfImg}</h2>
            <h2>{post.resortName}</h2>
            <h2>{post.cost}</h2>
            <h2>{post.review}</h2>
            <h2>{post.comments}</h2>
        </div>
    )
}

export default PostItem