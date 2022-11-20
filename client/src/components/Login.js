import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {

    const [signUpData, setSignupData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = signUpData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
            // plan to change to user dashboard in future 

        }
        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setSignupData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className=''>
                <main className='flex justify-center mb-4 items-center	'>
                    <FaSignInAlt /> <h1 className='ml-2'> Login</h1>
                </main>
                {/* <p>Login and make some posts! </p> */}
            </section>

            <section>
                <form onSubmit={onSubmit} className='text-black flex flex-col justify-center items-center'>
                    {/* this div is used to sytle inputs */}
                    <div>
                        <input
                            type='email'
                            name='email'
                            id='emal'
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange} />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange} />
                    </div>

                    <div>
                        <button type='submit' className='rounded-full bg-[#E1F959] text-black' >Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
