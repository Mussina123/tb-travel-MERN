import React from 'react'
import { deletePost } from '../features/post/postSlice'
import { useDispatch } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'

const PostItem = ({ post }) => {
    const dispatch = useDispatch()

    return (

        <div className='mt-10'>
            {/* {new Date(post.createdAt).toLocaleString('en-US')} */}

            <img
                className='urlImg rounded-lg'
                src={post.urlOfImg} />
            <h2>Location: {post.location}</h2>
            {/* <h2>{post.urlOfImg}</h2> */}
            <h2>Resort Name: {post.resortName}</h2>
            <h2>Cost: ${post.cost}</h2>
            <h2>Review: {post.review}</h2>
            <h2>Comments: {post.comments}</h2>
            <h2>Posted on: {new Date(post.createdAt).toLocaleString('en-US')}</h2>
            <button
                className='trashButton'
                onClick={() => dispatch(deletePost(post._id))}
            ><FaRegTrashAlt /></button>
        </div>
    )
}

export default PostItem