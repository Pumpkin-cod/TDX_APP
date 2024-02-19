/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import GSMA from '../assets/gsma5121 1.png';
import meda from '../assets/MEDA-Logo-Green 1.png';
import mest from '../assets/mest 1.png';
import growthafrica from '../assets/images 1.png';
import starta from '../assets/https___cdn.evbuc 1.png';

const Partners = () => {
    return (
        <div className='mx-4 md:mx-32 my-8 md:my-28 overflow-hidden'>
            <div>
                <h1 className='text-black text-3xl font-bold md:text-5xl text-center mb-4'>Our Trusted Partners</h1>
            </div>
            <div>
                <p className='text-slate-400 text-lg md:text-xl text-center mb-8 md:mb-12'>We work with trusted partners worldwide.</p>
            </div>
            <div className='partner-container md:overflow-x-hidden'>
                {[GSMA, meda, mest, growthafrica, starta].map((logo, index) => (
                    <div key={index} className='inline-block marquee-item'>
                        <img src={logo} alt={`partner-logo-${index}`} className='w-24 md:w-28' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;



