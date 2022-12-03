import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import PostForm from './PostForm'
import Spinner from '../components/Spinner'
import { reset, getAllPosts } from '../features/post/postSlice'
// import PostItem from './PostItem'
import PostItemFinalHome from './PostItemFinalHome'



const FinalHome = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // const { user } = useSelector((state) => state.auth)
    const { posts, isLoading, isError, message } = useSelector((state) => state.posts)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        // if (!user) {
        //     navigate('/login')
        // }

        dispatch(getAllPosts())

        return () => {
            dispatch(reset())
        }
    }, [navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='text-center	'>
                <h1 className='text-2xl mb-4'>
                    See Everybody's Experiences!
                </h1>
                {/* <p className='text-xl'>See Everybody's Experiences!</p> */}
            </section>
            {/* <PostForm /> */}

            <section >
                {posts.length > 0 ? (
                    <div className='md:grid md:grid-cols-3 md:gap-4 text-center'>
                        {posts.map((post) => (
                            <PostItemFinalHome key={post._id} post={post} />
                        ))}
                    </div>
                ) : (<h3 className='text-center'> You have not created any experiences </h3>)}
            </section>

        </>
    )
}

export default FinalHome