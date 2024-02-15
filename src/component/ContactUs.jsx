/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import bgimage from '../assets/tdx bg image 1.png';
import groupimage from '../assets/tdx image update 3.png';
import groupimage2 from '../assets/tdx image update 2 1.png';
import groupimage3 from '../assets/tdx image 3.png';
import groupimage4 from '../assets/tdx image 4.png';
import '../Animation.css';

const ContactUs = () => {
    useEffect(() => {
        const handleScroll = () => {
            const animatedElements = document.querySelectorAll('.animate-overlay');

            animatedElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;

                if (elementPosition < screenHeight * 0.75) {
                    element.classList.add('animate-overlay');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex items-center justify-center bg-blue-950 h-full py-10 md:pr-32'>
            <div className='hidden md:flex w-1/2 pl-32 mr-20 relative justify-center items-center py-10'>
                <img src={bgimage} alt='image' />
                <img
                    src={groupimage}
                    alt='Overlay'
                    className='absolute inset-4 object-cover w-2/5 left-80 top-56 animate-on-scroll animate-overlay'
                />
                <img
                    src={groupimage2}
                    alt='Overlay'
                    className='absolute inset-4 object-cover w-48 left-36 top-56 animate-on-scroll animate-overlay'
                />
                <img
                    src={groupimage3}
                    alt='Overlay'
                    className='absolute inset-4 object-cover w-2/5 left-32 top-0 animate-on-scroll animate-overlay'
                />
                <img
                    src={groupimage4}
                    alt='Overlay'
                    className='absolute inset-4 object-cover w-2/5 left-80 top-2 animate-on-scroll animate-overlay'
                />
            </div>

            <div className='flex flex-col w-full md:w-1/2'>
                {/* Background Image for Mobile */}
                <img src={bgimage} alt='image' className='w-full h-auto md:hidden' />

                <div className='text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl font-bold text-white pb-2'>
                        Empowering Small Farmers
                    </h1>
                    <p className='text-lg md:text-xl px-2 text-white pt-4 md:pr-10'>
                        In partnership with developmental agencies and financial institutions,
                        we enable small farmers to improve their productivity and gain access
                        to global markets.
                    </p>

                    <a href='https://platform.tdxapp.ai/join-tdx'>
                        <button className='mt-6 py-2 outline-double border-green-700 hover:bg-white text-green-700 rounded-full w-40 font-bold'>
                            Join TDX
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

