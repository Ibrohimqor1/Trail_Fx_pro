import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import PartySpeakers from '../Components/PartySpeakers_Pages/PartySpeakers'

const Party = () => {
  return (
    <div>
        <Navbar/>
        <PartySpeakers/>
        <Footer/>
    </div>
  )
}

export default Party