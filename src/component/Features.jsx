/* eslint-disable no-unused-vars */
import React from 'react';
import image1 from '../assets/logo1 1.png';
import image2 from '../assets/logo 2 1.png';
import image3 from '../assets/logo 3 1.png';
import image4 from '../assets/logo 4 1.png';

const Features = () => {
    return (
        <div className='mx-4 md:mx-32 my-8 md:my-16'>
            <div>
                <h1 className='text-black text-3xl font-bold md:text-5xl text-center mb-6'>Our Platform Features</h1>
            </div>
            <div>
                <p className='text-slate-400 text-lg md:text-xl text-center mb-8'>Secure, accessible, and up-to-date solutions for big markets
                    <br /> to connect with small farmers.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center pt-8'>
                <div className="border h-72 border-gray-300 rounded w-full md:w-56 flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img src={image1} alt='image' className="w-32 h-32 object-cover rounded-t" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">Easy Accessibility</h2>
                        <p className="text-gray-700">Connect with small farmers easily and quickly.</p>
                    </div>
                </div>
                <div className="border h-72 border-gray-300 rounded w-full md:w-56 flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img src={image2} alt='image' className="w-32 h-32 object-cover rounded-t" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">Real-Time Updates</h2>
                        <p className="text-gray-700">Real-Time price offers directly from small farmers at the last mile.</p>
                    </div>
                </div>
                <div className="border h-72 border-gray-300 rounded w-full md:w-56 flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img src={image3} alt='image' className="w-32 h-32 object-cover rounded-t" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">Secure Transactions</h2>
                        <p className="text-gray-700">Reduces logistics costs associated with traditional sourcing methods.</p>
                    </div>
                </div>
                <div className="border h-72 border-gray-300 rounded w-full md:w-56 flex flex-col justify-center items-center mb-4 md:mb-0">
                    <img src={image4} alt='image' className="w-32 h-32 object-cover rounded-t" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">Improved Efficiency</h2>
                        <p className="text-gray-700">Streamlines and simplifies your sourcing and aggregation process.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
