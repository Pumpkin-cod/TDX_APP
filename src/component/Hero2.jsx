/* eslint-disable no-unused-vars */
import React from 'react'

const Hero2 = () => {
  return (
    <div className='flex items-center  bg-gray-100 h-96'>
        <div className='w-1/2 pl-32 mr-20'>
              <h1 className='text-5xl pb-8 text-gray-400'><span className='text-green-700'>Direct Sourcing </span>for
            <br />
            Maximum<span className='text-green-700'> Profit</span>
            <br /> Growth</h1>
        </div>

        <div className='flex flex-col w-2/6 mr-0'>
              <p className='text-xl'>Generate higher profit margins by souring directly from the last mile.
             A cost effective solution for enhancing efficiency and boosting profits.</p>

             <button className='mt-6 py-2 outline-double border-green-700 text-green-700 rounded-full w-40 font-bold'>Join TDX</button>
        </div>
    </div>
  )
}

export default Hero2