/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/Logo original .png';
import '@fortawesome/fontawesome-free/css/all.css';
import ContactForm from './ContactForm';

const Footer = () => {
    return (
        <footer id='footer' className="bg-gray-100 text-black py-8 px-16">
            <div className="container flex justify-between items-start px-16">
                {/* Left Column */}
                <div className="w-1/3 pr-8">
                   
                    <div>
                        <img src={logo} alt="Logo" className="h-16 mr-4 mb-8" />
                        <div className="mb-4">
                            <h4 className='text-2xl pb-4 font-bold'>Mission</h4>
                            <p>We're building one platform to enhance agricultural commodity trading process.</p>
                        </div>
                        <div className='mb-4'>
                            <h4 className='text-2xl pb-4 font-bold'>Vision</h4>
                            <p>We want to be the most trusted platform that ensures a seamless and inclusive process for all players across the value chain.</p>
                        </div>
                        <div>
                            {/* <h2 className='text-2xl pb-4 font-bold'>Follow Us On</h2> */}
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="#" className="text-black hover:text-green-500 text-3xl">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-green-500 text-3xl">
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
                        <div className="mt-5">
                            {/* <h2 className='text-2xl pb-4 font-bold'>Join Us</h2> */}
                            <a href="https://platform.tdxapp.ai/join-tdx">
                                <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded">
                                    Join TDX Today
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-2/3 ">
                    <div className='flex items-center justify-center'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
