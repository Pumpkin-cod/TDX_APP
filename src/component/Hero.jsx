/* eslint-disable no-unused-vars */
import React from 'react';
import desktop from '../assets/tdx desktop2 1.png'

const Hero = () => {
    return (
        <div className="flex items-center w-full">
            <div className="text-black mr-16 flex flex-col w-1/2 text-left pl-32">
                <h1 className="text-6xl font-bold mb-4"><span className='text-gray-400'>Seamless Trading,</span> 
                    <br /><span className='text-green-700'>Maximum Impact</span></h1>
                <p className="text-2xl">We bridge the gap between commodity traders
                <br/> and small farmers - facilitating smoother
                <br/> and  more efficient trades.</p>

                <button className='text-white bg-green-600 text-lg mr-5 rounded-full py-4  w-52 mt-8'>Register Your Interest</button>
            </div>

            <div className='pl-40 w-1/2'>
                <div className="relative w-96 h-96 bg-slate-200 rounded-full my-16">
                    <img
                        src={desktop} alt="desktop" className="absolute inset-2 w-full h-full object-cover rounded-full transform scale-110 rotate-6"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
