import React, { useEffect, useState } from 'react'
import "../CSS/Projects.css"
import "animate.css"
// import HeroImg1 from "../Images/images (9).jpg"
// import HeroImg2 from "../Images/images (8).jpg"
// import HeroImg3 from "../Images/HOUSE2-removebg-preview (1) 1.png"
// import HeroImg4 from "../Images/06532644919c1c-modern-beautifully-finished-home-semi-detached-duplexes-for-sale-ajah-lagos.jpeg"
import HeroImg1 from "../Images/house1.webp"
import HeroImg2 from "../Images/house2.jpg"
import HeroImg3 from "../Images/house3.jpg"
import HeroImg4 from "../Images/house4.jpg"
import HeroImg5 from "../Images/p1.jpeg"
import HeroImg6 from "../Images/p2.jpeg"
import HeroImg7 from "../Images/p3.jpeg"
import HeroImg8 from "../Images/p4.jpeg"
import SearchBar from './SearchBar'
import SearchComponent from './SearchComponent'


const Projects = () => {

        //handling Hero Slide
const [heroSlide,setHeroSlide]=useState(1)

useEffect(() => {
        const intervalId = setInterval(() => {
          setHeroSlide(prevState => (prevState % 4) + 1);
        }, 4000);
        return () => clearInterval(intervalId);
      }, []);
// console.log(heroSlide)


  return (
    <div className='Hero2Wrap' id="projects">
        {heroSlide===1&&<div className='Hero2'>
                {/* <img className='animate__animated animate__slideInRight' src={HeroImg5} alt="HeroImg"/> */}
                <img src={HeroImg5} alt="HeroImg"/>
                <div className='HeroMask'>
                        <div className='Hero2MaskTextWrap'>
                        <div className='Hero2MaskTextLeft'>
                        <h1>PROJECTS</h1>
                        {/* <h2>Geo-Environmental and Real Estate services</h2> */}
                        </div>
                        {/* <div className='HeroMaskCenter'>
                                <input type="text" placeholder='Search'/> <button>Search</button>
                        </div> */}
                        {/* <SearchBar/> */}
                        <div className='Hero2MaskTextRight animate__animated animate__zoomIn'>
                        <p>Green Residential Community Development</p>
                        </div>
                        </div>
                        </div>
                
              
        </div>}
        {heroSlide===2&&<div className='Hero2'>
        {/* <img className="animate__animated animate__slideInRight" src={HeroImg6} alt="HeroImg"/> */}
        <img src={HeroImg6} alt="HeroImg"/>
        <div className='Hero2Mask'>
        <div className='Hero2MaskTextWrap'>
        <div className='Hero2MaskTextLeft'>
                        <h1>PROJECTS</h1>
                        {/* <h2>Geo-Environmental and Real Estate services</h2> */}
                        </div>
                        {/* <SearchBar/> */}
                        <div className='Hero2MaskTextRight animate__animated animate__zoomIn'>
                        <p>Brownfield Remediation and Redevelopment</p>
                 
                        </div>
        </div>

                </div>
           
        </div>}
        {heroSlide===3&&<div className='Hero2'>
        {/* <img className='animate__animated animate__slideInRight' src={HeroImg7} alt="HeroImg"/> */}
        <img src={HeroImg7} alt="HeroImg"/>
        <div className='Hero2Mask'>
        <div className='Hero2MaskTextWrap'>
        <div className='Hero2MaskTextLeft'>
                        <h1>PROJECTS</h1>
                        {/* <h2>Geo-Environmental and Real Estate services</h2> */}
                        </div>
                        {/* <SearchBar/> */}
                        <div className='Hero2MaskTextRight animate__animated animate__zoomIn'>
                        <p>Renewable Energy Installation Project</p>
                 
                        </div>
        </div>

                </div>
              
        </div>}
        {heroSlide===4&&<div className='Hero2'>
        {/* <img className="animate__animated animate__slideInRight" src={HeroImg8} alt="HeroImg"/> */}
        <img src={HeroImg8} alt="HeroImg"/>
        <div className='Hero2Mask'>
        <div className='Hero2MaskTextWrap'>
        <div className='Hero2MaskTextLeft'>
                        <h1>PROJECTS</h1>
                        {/* <h2>Geo-Environmental and Real Estate services</h2> */}
                        </div>
                        {/* <SearchBar/> */}
                        <div className='Hero2MaskTextRight animate__animated animate__zoomIn'>
                        <p>Commercial Property Environmental Assessment</p>
                 
                        </div>
        </div>

                </div>
                
        </div>}

        <div className='CircleWrap'>
             <div className={heroSlide===1?'CircleActive':'Circle'}>
                </div>      
                <div className={heroSlide===2?'CircleActive':'Circle'}>
                </div> 
                <div className={heroSlide===3?'CircleActive':'Circle'}>
                </div> 
                <div className={heroSlide===4?'CircleActive':'Circle'}>
                </div>              
        </div>
    </div>
  )
}

export default Projects
