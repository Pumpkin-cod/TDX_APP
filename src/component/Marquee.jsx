/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css';
import maize from '../assets/maize 2.png';
import sorghum from '../assets/Group 17.png';

const Marquee = () => {
  return (
    <div>
      <div className="marquee-container">
        <div className="marquee-button">
                  <img className="w-10 h-10 object-contain" src={maize} alt="maize" />
                  <p>Yellow Maize</p>
              </div>
              <div className="marquee-button">
                  <img className="w-10 h-10 object-contain" src={maize} alt="maize" />
                  <p>White Maize</p>
              </div>
              <div className="marquee-button">
                  <img className="w-10 h-10 object-contain" src={sorghum} alt="sorghum" />
                  <p>Sorghum</p>
              </div>
        <div className="marquee-button">
          <img className="w-10 h-10 object-contain" src={sorghum} alt="soybean" />
          <p>SoyBean</p>
        </div>
        <div className="marquee-button">
          <img className="w-10 h-10 object-contain" src={sorghum} alt="Peanut" />
          <p>Peanut</p>
        </div>
        <div className="marquee-button">
          <img className="w-10 h-10 object-contain" src={sorghum} alt="sesame seeds" />
          <p>Sesame Seeds</p>
        </div>
        <div className="marquee-button">
          <img className="w-10 h-10 object-contain" src={sorghum} alt="shea nuts" />
          <p>Shea nuts</p>
        </div>

          </div>
    </div>
  )
}

export default Marquee