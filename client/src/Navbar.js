import React from 'react'
import mainLogo from './images/mainLogo.png'
// import { CiStar } from "react-icons/ci";

const Navbar = () => {
    return (
        <header className='flex justify-between'>
            <img src={mainLogo} className="h-36 ml-6" alt='main-logo'></img>

            <ul className='flex items-center mr-20 text-white'>
                <button className='pr-6'>Login</button>
                <button className='pl-10'>Sign Up</button>
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