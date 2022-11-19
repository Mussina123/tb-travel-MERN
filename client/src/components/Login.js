import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {

    const [signUpData, setSignupData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = signUpData

    const onChange = (e) => {
        setSignupData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className=''>
                <main className='flex'>
                    <FaSignInAlt /> <h1> Login</h1>
                </main>
                {/* <p>Login and make some posts! </p> */}
            </section>

            <section>
                <form onSubmit={onSubmit} className='text-black'>
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
