/* eslint-disable no-unused-vars */
// font - family: 'EB Garamond', serif;
import React from 'react'

import styled from 'styled-components';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Hero2 from './component/Hero2'
import Footer from './component/Footer'
import Partners from './component/Partners'
import Features from './component/Features'
import ContactUs from './component/ContactUs'
import ContactForm from './component/ContactForm'
import Marquee from './component/marquee';


const StyledContainer = styled.div`
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
`;
const App = () => {
  return (
    <StyledContainer>
    <div>
      <Marquee />
      <Navbar />
      <Hero />
      <Hero2 />
      <ContactUs />
      <Features />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
    </StyledContainer>
  )
}

export default App
