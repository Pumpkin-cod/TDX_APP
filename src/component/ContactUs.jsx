/* eslint-disable no-unused-vars */
import React from 'react'
import bgimage from '../assets/tdx bg image 1.png'
import groupimage from '../assets/tdx image 1.png'
import groupimage2 from '../assets/tdx image 2.png'
import groupimage3 from '../assets/tdx image 3.png'
import groupimage4 from '../assets/tdx image 4.png'

const ContactUs = () => {
  return (
      <div className='flex items-center  bg-blue-950 h-full py-10'>
          <div className='w-1/2 pl-32 mr-20 relative flex justify-center items-center py-10'>
             
             <img src={bgimage} alt='image' />
              <img src={groupimage} alt="Overlay" className="absolute inset-4 object-cover w-2/5 left-96 top-60" />
              <img src={groupimage2} alt="Overlay" className="absolute inset-4 object-cover w-2/5 left-36 top-64" />
              <img src={groupimage3} alt="Overlay" className="absolute inset-4 object-cover w-2/5 left-44 top-0" />
              <img src={groupimage4} alt="Overlay" className="absolute inset-4 object-cover w-2/5 left-96 top-2" />
          </div>

          <div className='flex flex-col w-1/2 mr-0'>
              <h1 className='text-5xl font-bold text-white pb-2'>Empowering Small Farmers</h1>
              <p className='text-xl text-white pt-4 pr-10'>In partnership with developmental agencies and financial institutions,
              <br /> 
              we enable small farmers to improve their productivity and gain access 
              <br/>to global markets.</p>

              <a href="/ContactForm">
                  <button className='mt-6 py-2 outline-double border-green-700 text-green-700 rounded-full w-40 font-bold'>
                      Join TDX
                  </button>
              </a>

          </div>
      </div>
  )
}

export default ContactUs
