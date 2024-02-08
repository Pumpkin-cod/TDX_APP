/* eslint-disable no-unused-vars */
import React from 'react'
import bgimage from '../assets/tdx bg image 1.png'
import groupimage from '../assets/Group 21.png'

const ContactUs = () => {
  return (
      <div className='flex items-center  bg-blue-950 h-96'>
          <div className='w-1/2 pl-32 mr-20 relative flex justify-center items-center'>
             
             <img src={bgimage} alt='image' />
              <img src={groupimage} alt="Overlay" className="absolute inset-4 object-cover w-1/2 left-56 top-10" />
          </div>

          <div className='flex flex-col w-2/6 mr-0'>
              <h1 className='text-4xl text-white pb-2'>Empowering Small Farmers</h1>
              <p className='text-xl text-white'>In partnership with developmental agencies and financial institutions, 
              we enable small farmers to improve their productivity and gain access to global markets.</p>

              <button className='mt-6 py-2 outline-double border-green-700 text-green-700 rounded-full w-40 font-bold'>Contact Us</button>
          </div>
      </div>
  )
}

export default ContactUs
