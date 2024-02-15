/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import ContactImage from '../assets/serviced-offices-22-bissau-avenue-east-legon-accra-map-thumb_250_250_s_c1_center 1.png';

const ContactForm = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Function to handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://platform.tdxapp.ai/api/v1/contact', formData);
            console.log('Form submission successful!', response.data);

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    return (
        <div id='contactForm' className=''>
            <div className='flex justify-center text-center text-2xl text-black font-bold pb-8 md:mt-0 mt-6'>
                <h1>Contact Us</h1>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className="w-full md:w-1/2 mx-auto">
                    <form className="flex flex-col space-y-4 md:ml-4" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="flex items-center border border-gray-300 rounded">
                            <span className="px-3 py-4 text-green-700 bg-white border-r-2">
                                <i className="fas fa-user bg-white"></i>
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Your Name"
                                className="w-full py-4 px-4 outline-none"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex items-center border border-gray-300 rounded">
                            <span className="px-3 py-4 text-green-700 bg-white border-r-2">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Your Email"
                                className="w-full py-4 px-4 outline-none"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Phone Number Input */}
                        <div className="flex items-center border border-gray-300 rounded">
                            <span className="px-3 py-4 text-green-700 bg-white border-r-2">
                                <i className="fas fa-phone"></i>
                            </span>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                placeholder="Your Phone Number"
                                className="w-full py-4 px-4 outline-none"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="flex flex-col border border-gray-300 rounded">
                            <span className="px-3 pt-3 text-green-700 bg-white">
                                <i className="fas fa-paper-plane"></i>
                            </span>
                            <textarea
                                name="message"
                                value={formData.message}
                                rows="5"
                                placeholder="Your Message"
                                className="w-full py-2 px-4 outline-none"
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Send Message Button */}
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Image Container */}
                <div className="hidden md:flex md:w-1/2 pl-8">
                    <img src={ContactImage} alt="Contact" className="w-full h-full rounded-md shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;


