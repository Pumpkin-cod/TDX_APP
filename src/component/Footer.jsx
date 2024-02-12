/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/Logo original .png';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-8 h-80">
            <div className="container mx-auto flex justify-between items-start px-16">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-16 mr-4" />
                    
                </div>

                <div>
                    <h2 className='text-2xl pb-4 font-bold'>Follow Us On</h2>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-black hover:text-green-500  text-3xl">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-black hover:text-green-500  text-3xl">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-black hover:text-green-500 text-3xl">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                       
                    </ul>
                </div>

                <div>
                    <h2 className='text-2xl pb-4 font-bold'>Navigation</h2>
                    <ul>
                        <li>
                            <a href="#" className="block text-black hover:text-green-500  text-xl">Contacts</a>
                        </li>
                        <li>
                            <a href="#" className="block text-black hover:text-green-500  text-xl">Support</a>
                        </li>
                        <li>
                            <a href="#" className="block text-black hover:text-green-500  text-xl">About Us</a>
                        </li>
                        {/* <li>
                            <a href="#" className="block text-black hover:text-green-500  text-xl">FAQs</a>
                        </li> */}
                    </ul>
                </div>

                <div>
                    <h2 className='text-2xl pb-4 font-bold'>Join Us</h2>
                    <a href="https://tdxapp.ai">
                        <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded">
                            Join TDX Today
                        </button>
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
