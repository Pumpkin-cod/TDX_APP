/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css'
import GSMA from '../assets/gsma5121 1.png';
import meda from '../assets/MEDA-Logo-Green 1.png';
import mest from '../assets/mest 1.png';
import growthafrica from '../assets/images 1.png';
import starta from '../assets/https___cdn.evbuc 1.png';


const Partners = () => {
    return (
        <div className='mx-32 my-28 overflow-hidden'>
            <div>
                <h1 className='text-black text-5xl text-center mb-2'>Our Trusted Partners</h1>
            </div>
            <div>
                <p className='text-slate-400 text-xl text-center mb-4'>We work with trusted partners worldwide</p>
            </div>
            <div className='partner-container'>
              
                {[GSMA, meda, mest, growthafrica, starta].map((logo, index) => (
                    <div key={index} className='inline-block marquee-item'>
                        <img src={logo} alt={`partner-logo-${index}`} className='w-28' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;

