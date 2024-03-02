/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../assets/Logo original .png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id='navbar'>
            <nav className="bg-white px-4 py-2 md:py-4 flex justify-between items-center">
                <div className='flex items-center'> {/* Changed justify-between to items-center */}
                    <div className=''>
                        <img src={logo} alt="Logo" className="w-28 h-10 md:w-full md:h-10 object-contain" />
                    </div>
                </div>
                <div className='w-4/5 flex justify-end items-center'> {/* Changed mr-10 to items-center */}
                    <div className='md:hidden' onClick={toggleMenu}>
                        <svg className="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </div>
                    <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <li className="md:mr-3 mt-2">
                            <a href="#" className="text-lg mr-3 px-3 text-green-600 font-bold hover:text-green-700">Support</a>
                        </li>
                        <li className="md:mr-3 mt-2">
                            <a href="#footer" className="text-black hover:text-green-600 font-bold mr-3 px-3 text-lg">About Us</a>
                        </li>
                        <li className="md:mr-3 mt-2">
                            <a href="https://platform.tdxapp.ai/register-your-inteterest" className="text-black font-bold hover:text-green-600 mr-3 px-3 text-lg">Register With Us</a>
                        </li>
                        <li>
                            <a href='https://platform.tdxapp.ai/login'><button className="text-white font-bold bg-green-600 hover:bg-green-800 text-lg mr-5 rounded-full px-6 py-2">Sign In</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='bg-gray-600 py-2 text-white pl-4 md:pl-32'>
                <p className="text-center text-sm">TDX streamlines trading processes, ensuring simplicity, efficiency and inclusivity for both traders and farmers in a risk-adjusted manner.</p>
            </div>
        </div>

    );
};

export default Navbar;
