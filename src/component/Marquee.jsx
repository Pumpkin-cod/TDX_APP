/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import maize from '../assets/maize 3.png';
import sorghum from '../assets/sorghum.png';
import soyabean from '../assets/soybean.png';
import peanut from '../assets/peanut2.png';
import sesame from '../assets/sesame seed.png';
import sheanut from '../assets/shea nut 1.png';

const commodities = [
  { name: 'Yellow Maize', image: maize },
  { name: 'White Maize', image: maize },
  { name: 'Sorghum', image: sorghum },
  { name: 'Soya Beans', image: soyabean },
  { name: 'Peanuts', image: peanut },
  { name: 'Sesame Seeds', image: sesame },
  { name: 'Shea Nuts', image: sheanut },
];

const Marquee = () => {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  if (isMobile) {
    const marqueeItems = [...commodities, ...commodities.slice(0, 2)]; // Duplicate items for looping

    return (
      <div className="marquee-container">
        {marqueeItems.map((commodity, index) => (
          <div className="marquee-button" key={index}>
            <img
              className="w-8 md:w-12 h-8 md:h-10 object-contain"
              src={commodity.image}
              alt={commodity.name}
            />
            <p className="text-xs md:text-base">{commodity.name}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="marquee-container">
      {commodities.map((commodity, index) => (
        <div className="marquee-button" key={index}>
          <img
            className="w-8 md:w-12 h-8 md:h-10 object-contain"
            src={commodity.image}
            alt={commodity.name}
          />
          <p className="text-xs md:text-base">{commodity.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Marquee;



