/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import logo from '../assets/tdx logo.png';
import maize from '../assets/maize 2.png';
import sorghum from '../assets/Group 17.png';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white px-4 h-20 flex justify-center pt-6">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo on the left */}
                    <div className='pl-12'>
                        <img src={logo} alt="Logo" className="w-full h-10 object-contain" />
                    </div>

                    {/* Marquee section */}
                    <div className="marquee-container">
                        <button className="marquee-button">
                            <img className="w-10 h-10 object-contain text-green-700" src={maize} alt="maize" />
                            <p>Yellow Maize</p>
                        </button>
                        <button className="marquee-button">
                            <img className="w-10 h-10 object-contain" src={maize} alt="maize" />
                            <p>White Maize</p>
                        </button>
                        <button className="marquee-button">
                            <img className="w-10 h-10 object-contain" src={sorghum} alt="sorghum" />
                            <p>Sorghum</p>
                        </button>
                        
                    </div>

                
                    <div className='flex justify-start'>
                        <ul className="flex space-x-2 items-center">
                            <li><a href="#" className="text-lg mr-3 text-green-600">Support</a></li>
                            <li><a href="#" className="text-black mr-3 text-lg">About Us</a></li>
                            <li><a href="#" className="text-black mr-3 text-lg">Register With Us</a></li>
                            <li><button className="text-white bg-green-600 text-lg mr-5 rounded-full px-6 py-2">Sign In</button></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='bg-gray-600 py-2 text-white pl-32'>
                <p className="text-start text-sm">TDXApp streamlines trading processes, ensuring simplicity,
                    efficiency and inclusivity for both traders and farmers in a risk-adjusted manner.</p>
            </div>
        </div>
    );
};

export default Navbar;
