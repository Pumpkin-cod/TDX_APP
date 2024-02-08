/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Hero2 from './component/Hero2'
import Footer from './component/Footer'
import Partners from './component/Partners'
import Features from './component/Features'
import ContactUs from './component/ContactUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <ContactUs />
      <Features />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
