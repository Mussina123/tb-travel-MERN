import React from 'react'
import mainLogo from '../images/mainLogo.png'
// import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const Navbar = () => {
    return (
        <header className='flex justify-between header'>
            <Link to='/'>
                <img src={mainLogo} className="h-36 ml-6" alt='main-logo'></img>
            </Link>

            <ul className='flex items-center mr-20 justify-between	'>
                <li className='mr-12'>
                    <Link to='login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='Signup'>
                        <FaUser /> Signup
                    </Link>
                </li>

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