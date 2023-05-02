import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Soundbars_pages from '../Components/Soundbars_Pages/Soundbars_pages'

const Soundbars = () => {
  return (
    <div>
        <Navbar/>
        <Soundbars_pages/>
        <Footer/>
    </div>
  )
}

export default Soundbars