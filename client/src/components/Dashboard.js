import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostForm from './PostForm'
import Spinner from '../components/Spinner'
import { reset, getPosts } from '../features/post/postSlice'
import PostItem from './PostItem'



const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { posts, isLoading, isError, message } = useSelector((state) => state.posts)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getPosts())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='text-center	'>
                <h1 className='text-2xl mb-4'>
                    Welcome {user && user.name}
                </h1>
                <p className='text-xl'>Post About Your Vacations!</p>
            </section>
            <PostForm />

            <section >
                {posts.length > 0 ? (
                    <div>
                        {posts.map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))}
                    </div>
                ) : (<h3> You have not created any experiences </h3>)}
            </section>

        </>
    )
}

export default Dashboard