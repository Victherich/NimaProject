import React from 'react'
import Header from '../component/Header'
import Hero from "../component/Hero"
import Footer from '../component/Footer'
import OurServices from '../component/OurServices'
import Properties from '../component/Properties'
import About from '../component/About'
import "../CSS/LandingPage.css"
import FeaturedProperties from '../component/FeaturedProperties'
import AdOns from '../component/AdOns'
import Projects from '../component/Projects'
import Gallery from '../component/Gallery'
import { useNavigate } from 'react-router-dom'
import OurProductCollectionForHome from '../component/OurProductCollectionForHome'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className='LandingPage'>
        
        <Hero/>
        <OurServices/>
        {/* <AdOns/> */}
        <FeaturedProperties/>
        <OurProductCollectionForHome/>
        <Projects/>
        <Gallery/>
        <About/>
        
    </div>
  )
}

export default LandingPage
