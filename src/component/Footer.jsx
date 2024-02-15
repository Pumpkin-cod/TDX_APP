/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/Logo original .png';
import '@fortawesome/fontawesome-free/css/all.css';
import ContactForm from './ContactForm';

const Footer = () => {
    return (
        <footer id='footer' className="bg-gray-100 text-black py-8 px-4 md:px-16">
            <div className="container flex flex-col md:flex-row justify-center items-center md:items-start">
                {/* Left Column */}
                <div className="w-full md:w-1/3 md:pr-8">
                    <div className="mb-8">
                        <img src={logo} alt="Logo" className="h-16 mb-4 mx-auto md:mx-0" />
                        <div className="text-center md:text-left mb-4">
                            <h4 className='text-lg md:text-xl font-bold'>Mission</h4>
                            <p>We are building one platform to enhance agricultural commodity trading process.</p>
                        </div>
                        <div className="text-center md:text-left mb-8">
                            <h4 className='text-lg md:text-xl font-bold'>Vision</h4>
                            <p>We want to be the most trusted platform that ensures a seamless and inclusive process for all players across the value chain.</p>
                        </div>
                    </div>
                    <div className="text-center md:text-left mb-8">
                        <ul className="flex justify-center md:justify-start space-x-4">
                            <li>
                                <a href="#" className="text-black hover:text-green-500 text-lg md:text-2xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-green-500 text-lg md:text-2xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-green-500 text-lg md:text-2xl">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <a href="https://platform.tdxapp.ai/join-tdx">
                            <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded">
                                Join TDX Today
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-2/3">
                    <div className='flex items-center justify-center'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
