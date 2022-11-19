import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Signup = () => {

    const [signUpData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = signUpData

    const onChange = () => {

    }

    return (
        <>
            <section className=''>
                <main className='flex'>
                    <FaUser /> <h1> Sign Up </h1>
                </main>
                <p>Create an account </p>
            </section>

            <section>
                <form>
                    {/* this div is used to sytle inputs */}
                    <div>
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
                            type='password2'
                            name='password2'
                            id='password2'
                            value={password2}
                            placeholder="Confirm password"
                            onChange={onChange} />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signup
