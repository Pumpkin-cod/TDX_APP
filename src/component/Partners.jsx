/* eslint-disable no-unused-vars */
import React from 'react'
import GSMA from '../assets/gsma5121 1.png'
import meda from '../assets/MEDA-Logo-Green 1.png'
import mest from '../assets/mest 1.png'
import growthafrica from '../assets/images 1.png'
import starta from '../assets/https___cdn.evbuc 1.png'


const Partners = () => {
  return (
      <div className='mx-32 my-16'>
          <div>
              <h1 className='text-black text-5xl text-center mb-2'>Our Trusted Partners</h1>
          </div>
          <div>
              <p className='text-slate-400 text-xl text-center mb-4'>We work with trusted partners worldwide</p>
          </div>
          <div className='flex flex-row space-x-1 justify-between items-center'>
              <div>
                  <img src={GSMA} alt='' className='w-28' />
              </div>
              <div>
                  <img src={meda} alt='' className='w-28' />
              </div>
              <div>
                  <img src={mest} alt='' className='w-28' />
              </div>
              <div>
                  <img src={growthafrica} alt='' className='w-28' />
              </div>
              <div>
                  <img src={starta} alt='' className='w-28' />
              </div>
          </div>
      
    </div>
  )
}

export default Partners
