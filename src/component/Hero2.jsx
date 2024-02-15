/* eslint-disable no-unused-vars */
import React from 'react';

const Hero2 = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-gray-100 h-auto md:h-96 px-6 md:px-32'>
      {/* Left Column (Text) */}
      <div className='md:w-1/2 md:pr-20 mb-8 md:mb-0 text-center md:text-left'>
        <h1 className='text-4xl md:text-6xl pb-8 text-black'>
          <span className='text-green-700'>Direct Sourcing </span>
          for <br />
          Maximum<span className='text-green-700'> Profit<span>*</span> </span>
          <br /> Growth
        </h1>
      </div>

      {/* Right Column (Button and Additional Text) */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
        <p className='text-lg md:text-2xl'>Generate higher profit margins by sourcing directly from the last mile. A cost-effective solution for enhancing efficiency and boosting profits.</p>
        <a href="#contactForm">
          <button className='mt-6 py-2 outline-double hover:bg-green-600 hover:text-white border-green-700 text-green-700 rounded-full w-40 font-bold'>
            Contact Us
          </button>
        </a>
        <a href=''>
          <p className='text-black hover:text-green-600 underline mt-3 mb-5'>* Terms  & Conditions Apply</p>
        </a>
      </div>
    </div>
  );
};

export default Hero2;

