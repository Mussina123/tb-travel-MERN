import React from 'react'
import mainLogo from './images/mainLogo.png'
// import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='flex justify-between'>
            <Link to='/'>
                <img src={mainLogo} className="h-36 ml-6" alt='main-logo'></img>
            </Link>

            <ul className='flex items-center mr-20 text-white'>
                <Link to='login'>
                    <button className='pr-6'>Login</button>
                </Link>
                <Link to='signup'>
                    <button className='pl-10'>Sign Up</button>
                </Link>
                <div className='star'>
                    {/* <CiStar
                        style={{ fill: 'yellow', color: '#E9C46A' }}
                        size={100}
                    /> */}
                </div>
            </ul>

        </header>
    )
}

export default Navbar