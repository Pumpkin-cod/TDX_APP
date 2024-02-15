/* eslint-disable no-unused-vars */
import React from 'react';
import desktop from '../assets/tdx desktop2 1.png';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center w-full">
            {/* Image Section (for Mobile) */}
            <div className="md:hidden w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
                <div className="relative w-80 h-80 md:w-64 md:h-64 bg-slate-200 rounded-full mt-5">
                    <img
                        src={desktop}
                        alt="desktop"
                        className="absolute inset-0 w-full h-full object-contain transform scale-75 md:scale-100 rotate-6"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="text-black md:mr-16 flex flex-col md:w-1/2 text-center md:text-left md:pl-32">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className='text-black'> Seamless Trading,</span>
                    <br /><span className='text-green-700'>Maximum Impact</span>
                </h1>
                <p className="text-lg md:text-2xl">
                    We bridge the gap between commodity traders
                    <span className="md:hidden"> </span> {/* For mobile, include a space */}
                    <br className="hidden md:block" /> {/* For larger screens, include <br /> */}
                    and small farmers - facilitating smoother
                    <span className="md:hidden"> </span> {/* For mobile, include a space */}
                    <br className="hidden md:block" /> {/* For larger screens, include <br /> */}
                    and more efficient trades.
                </p>


                <a href="https://platform.tdxapp.ai/register-your-interest" className="inline-block">
                    <button className="text-white font-bold px-4 bg-green-600 hover:bg-green-800 text-base mb-8 md:text-lg mr-5 rounded-full py-3 md:py-4  md:w-72 mt-8">Register Your Interest</button>
                </a>
            </div>

            {/* Image Section (for Larger Screens) */}
            <div className="hidden md:block md:pl-40 w-1/2 md:w-1/2 justify-center items-center">
                <div className="relative w-96 h-96 bg-slate-200 rounded-full my-10">
                    <img
                        src={desktop}
                        alt="desktop"
                        className="absolute inset-0 w-full h-full object-contain transform scale-75 md:scale-100 rotate-6"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
