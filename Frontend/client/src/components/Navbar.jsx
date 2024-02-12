import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            <div className='flex flex-row justify-evenly pt-10 ml-5'>
                <div id='logo'>
                    <img src='https://picsum.photos/70/70' alt='Logo'></img>
                </div>

                <div>
                    <ul className='flex flex-row justify-around'>
                        <Link to='/'><li className='m-4 hover:text-red-500 transition duration-300 ease-in-out cursor-pointer'>Home</li></Link>
                        <li className='m-4 hover:text-red-500 transition duration-300 ease-in-out cursor-pointer'>Services</li>
                        <li className='m-4 hover:text-red-500 transition duration-300 ease-in-out cursor-pointer'>About Us</li>
                        <li className='m-4 hover:text-red-500 transition duration-300 ease-in-out cursor-pointer'>Emergency</li>
                    </ul>
                </div>

                <div className='pt-3'>
                    <button className='bg-purple-400 h-9 w-36 rounded-full text-white pb-0.5 hover:bg-purple-600 transition duration-300 ease-in-out cursor-pointer'>Contact Us</button>
                    {
                        isAuthenticated ? (
                            <>
                          
                                <button className='ml-5 pb-1 h-9 w-28 bg-gray-200 rounded-xl hover:bg-black transition duration-300 ease-in-out cursor-pointer hover:text-white' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </button>
                                <p>{user.email}</p> {/* Display user's email */}
                         
                            </>
                        ) : (
                            <button className='ml-5 pb-1 h-9 w-28 bg-gray-200 rounded-xl hover:bg-black transition duration-300 ease-in-out cursor-pointer hover:text-white' onClick={() => loginWithRedirect()}>Log In</button>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;
