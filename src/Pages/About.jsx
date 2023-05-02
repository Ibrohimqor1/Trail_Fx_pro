import React from 'react'
import About_header from '../Components/About_header/About_header'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Offers from '../Components/Offers_hub/Offers'

const About = () => {
  return (
    <div>
        <Navbar/>
        <About_header/>
        <Offers/>
        <Footer/>
    </div>
  )
}

export default About