import React from 'react'
import { useEffect, useState } from 'react'
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


    const [searchedValue, setSearchedValue] = useState('')



    // const { user } = useSelector((state) => state.auth)
    const { posts, isLoading, isError, message } = useSelector((state) => state.posts)

    const filteredPosts = posts.filter((post) => { return post.location.toLowerCase().includes(searchedValue) })

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
                <div className='mb-4'>
                    <input
                        className="rounded-md pl-1"
                        type='search'
                        name='search'
                        id='search'
                        value={searchedValue}
                        placeholder="Search by location!"
                        onChange={(event) => {
                            const searchedInput = event.target.value.toLowerCase()
                            setSearchedValue(searchedInput)
                        }} />
                </div>
            </section>
            {/* <PostForm /> */}

            <section >
                {filteredPosts.length > 0 ? (
                    <div className='md:grid md:grid-cols-3 md:gap-4 text-center'>
                        {filteredPosts.map((post) => (
                            <PostItemFinalHome key={post._id} post={post} />
                        ))}
                    </div>
                ) : (<h3 className='text-center'> You have not created any experiences </h3>)}
            </section>

        </>
    )
}

export default FinalHome