import React from 'react'
import Header from '../component/Header'
import Hero from "../component/Hero"
import Footer from '../component/Footer'
import OurServices from '../component/OurServices'
import Properties from '../component/Properties'
import About from '../component/About'
import "../CSS/LandingPage.css"

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        
        <Hero/>
        <OurServices/>
        <Properties/>
        <About/>
        
    </div>
  )
}

export default LandingPage
