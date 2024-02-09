/* eslint-disable no-unused-vars */
import React from 'react';
import desktop from '../assets/tdx desktop2 1.png'

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center w-full">
            <div className="text-black md:mr-16 flex flex-col md:w-1/2 text-left md:pl-32">
                <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className='text-gray-400'>Seamless Trading,</span>
                    <br /><span className='text-green-700'>Maximum Impact</span></h1>
                <p className="text-lg md:text-2xl">We bridge the gap between commodity traders
                    <br /> and small farmers - facilitating smoother
                    <br /> and  more efficient trades.</p>
{/* 
                <a href="https://tdxapp.ai" className="inline-block">
                    <button className="text-white bg-green-600 text-base md:text-lg mr-5 rounded-full py-3 md:py-4 w-full md:w-52 mt-8">Register Your Interest</button>
                </a> */}
            </div>

            <div className='pl-6 md:pl-40 w-1/2 md:w-1/2'>
                <div className="relative w-96 h-64 md:h-96 bg-slate-200 rounded-full my-6 md:my-16">
                    <img
                        src={desktop} alt="desktop" className="absolute inset-2 w-full h-full object-cover rounded-full transform scale-110 md:scale-125 rotate-6"
                    />
                </div>
            </div>

        </div>
    );
};

export default Hero;
