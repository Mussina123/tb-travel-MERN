import React from 'react'
import { deletePost } from '../features/post/postSlice'
import { useDispatch } from 'react-redux'

const PostItem = ({ post }) => {
    const dispatch = useDispatch()

    return (

        <div className='ml-24 mt-10'>
            {new Date(post.createdAt).toLocaleString('en-US')}

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