import React from 'react'
import { deletePost } from '../features/post/postSlice'
import { useDispatch } from 'react-redux'

const PostItem = ({ post }) => {
    const dispatch = useDispatch()

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
            <button
                onClick={() => dispatch(deletePost(post._id))}


            >X</button>
        </div>
    )
}

export default PostItem