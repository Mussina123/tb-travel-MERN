import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signup, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


const Signup = () => {

    const [signUpData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = signUpData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/dashboard')
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

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name, email, password
            }

            dispatch(signup(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className=''>
                <main className='flex justify-center mb-4 items-center	'>
                    <FaUser /> <h1 className='ml-2'> Sign Up </h1>
                </main>
                <p className='flex justify-center mb-4'>Create an account </p>
            </section>

            <section>
                <form onSubmit={onSubmit} className='text-black flex flex-col justify-center items-center'>
                    {/* this div is used to sytle inputs */}
                    <div className=''>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange} />
                    </div>
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
                        <input
                            type='password'
                            name='password2'
                            id='password2'
                            value={password2}
                            placeholder="Confirm password"
                            onChange={onChange} />
                    </div>
                    <div>
                        <button type='submit' className='rounded-full bg-[#E1F959] text-black' >Submit</button>
                    </div>
                </form>
            </section >
        </>
    )
}

export default Signup
