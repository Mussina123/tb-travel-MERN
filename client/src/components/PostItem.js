import React from 'react'
import { deletePost } from '../features/post/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'


const PostItem = ({ post }) => {
    const dispatch = useDispatch()


    const { user } = useSelector((state) => state.auth)

    return (

        <div className='mt-10'>
            {/* {new Date(post.createdAt).toLocaleString('en-US')} */}

            <img
                alt='Experience visited'
                className='urlImg rounded-lg'
                src={post.urlOfImg} />
            <div className='flex justify-center mb-.5 mt-2'>
                <span className='font-bold mr-2'>Location:</span><h2 className='align-end'> {post.location}</h2>
            </div>
            <div className='flex justify-center mb-.5'>
                <span className='font-bold mr-2'>Resort Name: </span><h2 className='align-end'> {post.resortName}</h2>
            </div>
            <div className='flex justify-center mb-.5'>
                <span className='font-bold mr-2'>Cost: </span><h2 className='align-end'> ${post.cost}</h2>
            </div>
            <div className='flex justify-center mb-.5'>
                <span className='font-bold mr-2'>Review:</span><h2 className='align-end'> {post.review}</h2>
            </div>
            <div className='flex justify-center mb-.5'>
                <span className='font-bold ml-4'>Comments:</span><h2 className='mx-2 mr-3 text-left max-w-xs'> {post.comments}</h2>
            </div>
            <div className='flex justify-center mb-.5'>
                <span className='font-bold mr-2'>Posted At:</span><h2 className='align-end'> {new Date(post.createdAt).toLocaleString('en-US')}</h2>
            </div>
            {/* <h2>Location: {post.location}</h2> */}
            {/* <h2>{post.urlOfImg}</h2> */}
            {/* <h2>Resort Name: {post.resortName}</h2>
            <h2>Cost: ${post.cost}</h2>
            <h2>Review: {post.review}</h2>
            <h2 className='mx-4'>Comments: {post.comments}</h2>
            <h2>Posted on: {new Date(post.createdAt).toLocaleString('en-US')}</h2> */}

            {user ? (
                <button
                    className='trashButton mt-2'
                    onClick={() => dispatch(deletePost(post._id))}
                ><FaRegTrashAlt /></button>
            ) : <span></span>
            }
        </div>
    )
}

export default PostItem