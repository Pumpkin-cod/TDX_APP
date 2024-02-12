/* eslint-disable no-unused-vars */
import React from 'react';
import ContactImage from '../assets/serviced-offices-22-bissau-avenue-east-legon-accra-map-thumb_250_250_s_c1_center 1.png';

const ContactForm = () => {
    return (
        <div  id='contactForm' className=''>
           <div className=' flex justify-center text-center text-2xl text-black font-bold pb-12'>
            <h1>Contact Us</h1>
           </div>
            <div className='flex flex-row'>
            <div className="flex-2">
                <form className="flex flex-col space-y-4 ml-28">
                    {/* Name Input */}
                    <div className="flex items-center border border-gray-300 rounded">
                        <span className="px-3 py-4 text-green-700 bg-white border-r-2">
                            <i className="fas fa-user bg-white"></i>
                        </span>
                        <input type="text" placeholder="Your Name" className="w-full py-4 px-4 outline-none" />
                    </div>

                    {/* Email Input */}
                    <div className="flex items-center border border-gray-300 rounded">
                        <span className="px-3 py-4 text-green-700 bg-white border-r-2">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <input type="email" placeholder="Your Email" className="w-full py-4 px-4 outline-none" />
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col border border-gray-300 rounded">
                        <span className="px-3 pt-3 text-green-700 bg-white">
                            <i className="fas fa-paper-plane"></i>
                        </span>
                        <textarea rows="5" placeholder="Your Message" className="w-full py-2 px-4 outline-none"></textarea>
                    </div>

                    {/* Send Message Button */}
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Image Container */}
            <div className="flex-1 mx-16">
                <img src={ContactImage} alt="Contact" className="w-full h-96 rounded-md shadow-lg" />
            </div>
            </div>
        </div>
    )
}

export default ContactForm;
