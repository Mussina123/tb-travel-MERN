import React from 'react'
// import { deletePost } from '../features/post/postSlice'
// import { useDispatch } from 'react-redux'
// import { FaRegTrashAlt } from 'react-icons/fa'


const PostItemFinalHome = ({ post }) => {
    // const dispatch = useDispatch()


    // const { user } = useSelector((state) => state.auth)

    return (

        <div className='mt-10'>
            {/* {new Date(post.createdAt).toLocaleString('en-US')} */}

            <img
                alt='Experience visited'
                className='urlImg rounded-lg'
                src={post.urlOfImg} />
            <h2>Location: {post.location}</h2>
            {/* <h2>{post.urlOfImg}</h2> */}
            <h2>Resort Name: {post.resortName}</h2>
            <h2>Cost: ${post.cost}</h2>
            <h2>Review: {post.review}</h2>
            <h2>Comments: {post.comments}</h2>
            <h2>Posted on: {new Date(post.createdAt).toLocaleString('en-US')}</h2>

            {/* {user ? (
                <button
                    className='trashButton'
                    onClick={() => dispatch(deletePost(post._id))}
                ><FaRegTrashAlt /></button>
            ) : <span></span>
            } */}
        </div>
    )
}

export default PostItemFinalHome