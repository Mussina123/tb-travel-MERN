import React from 'react'
import { Link } from "react-router-dom"


const Error = () => {
    return (
        <>
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <Link to='/'>
                <button>Return to Home</button>
            </Link>
        </>
    )
}

export default Error