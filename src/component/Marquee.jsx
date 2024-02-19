/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import maize from '../assets/maize 3.png';
import sorghum from '../assets/sorghum.png';
import soyabean from '../assets/soybean.png';
import peanut from '../assets/peanut2.png';
import sesame from '../assets/sesame seed.png';
import sheanut from '../assets/shea nut 1.png';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-button">
        <img className="w-8 md:w-12 h-8 md:h-10 object-contain" src={maize} alt="maize" />
        <p className="text-xs md:text-base">Yellow Maize</p>
      </div>
      <div className="marquee-button">
        <img className="w-8 md:w-12 h-8 md:h-10 object-contain" src={maize} alt="maize" />
        <p className="text-xs md:text-base">White Maize</p>
      </div>
      <div className="marquee-button">
        <img className="w-8 md:w-12 h-8 md:h-10 object-contain" src={sorghum} alt="sorghum" />
        <p className="text-xs md:text-base">Sorghum</p>
      </div>
      <div className="marquee-button">
        <img className="w-8 md:w-8 h-8 md:h-10 object-contain" src={soyabean} alt="soybean" />
        <p className="text-xs md:text-base">Soya Beans</p>
      </div>
      <div className="marquee-button">
        <img className="w-8 md:w-10 h-8 md:h-10 object-contain" src={peanut} alt="Peanut" />
        <p className="text-xs md:text-base">Peanuts</p>
      </div>
      <div className="marquee-button">
        <img className="w-8 md:w-10 h-8 md:h-10 object-contain" src={sesame} alt="sesame seeds" />
        <p className="text-xs md:text-base">Sesame Seeds</p>
      </div>
      <div className="marquee-button">
        <img className="w-8 md:w-10 h-8 md:h-10 object-contain" src={sheanut} alt="shea nuts" />
        <p className="text-xs md:text-base">Shea Nuts</p>
      </div>
    </div>
  );
};

export default Marquee;


