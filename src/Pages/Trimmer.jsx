import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Trimmer_Pages from '../Components/Trimmers_Pages/Trimmer_Pages'

const Trimmer = () => {
  return (
    <div>
        <Navbar/>
        <Trimmer_Pages/>
        <Footer/>
    </div>
  )
}

export default Trimmer