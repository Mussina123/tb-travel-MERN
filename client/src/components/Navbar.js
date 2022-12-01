import React from 'react'
import mainLogo from '../images/mainLogo.png'
// import { CiStar } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice';
import { IoLogoBuffer } from "react-icons/io5";

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='flex justify-between header'>
            <Link to='/'>
                <img src={mainLogo} className="h-36 ml-2 md:ml-6" alt='main-logo'></img>
            </Link>

            <ul className='flex items-center md:mr-20 justify-between'>
                {user ? (
                    <>
                        <li className='mr-6 ml-0'>
                            <Link to='dashboard'>
                                <button className='flex items-center gap-2'>
                                    <IoLogoBuffer />
                                    Dashboard
                                </button>
                            </Link>
                        </li>
                        <li className='mr-6 ml-2'>
                            <button onClick={onLogout} className='flex items-center gap-2'>
                                <FaSignOutAlt />
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
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
                    </>)}


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