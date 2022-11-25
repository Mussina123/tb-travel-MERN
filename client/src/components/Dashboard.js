import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostForm from './PostForm'

const Dashboard = () => {
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <section>
                <h1>
                    Welcome {user && user.name}
                </h1>
                <p>Vacation Posts Dashboard</p>
            </section>
            <PostForm />

        </>
    )
}

export default Dashboard