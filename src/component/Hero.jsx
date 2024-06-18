import React, { useEffect, useState } from 'react'
import "../CSS/Hero.css"
import "animate.css"
// import HeroImg1 from "../Images/images (9).jpg"
// import HeroImg2 from "../Images/images (8).jpg"
// import HeroImg3 from "../Images/HOUSE2-removebg-preview (1) 1.png"
// import HeroImg4 from "../Images/06532644919c1c-modern-beautifully-finished-home-semi-detached-duplexes-for-sale-ajah-lagos.jpeg"
import HeroImg1 from "../Images/house1.webp"
import HeroImg2 from "../Images/house2.jpg"
import HeroImg3 from "../Images/house3.jpg"
import HeroImg4 from "../Images/house4.jpg"
import HeroImg5 from "../Images/house5.jpg"
import HeroImg6 from "../Images/house6.jpg"
import HeroImg7 from "../Images/house7 (2).jpg"
import HeroImg8 from "../Images/house8 (2).jpg"
import SearchBar from './SearchBar'
import SearchComponent from './SearchComponent'


const Hero = () => {

        //handling Hero Slide
const [heroSlide,setHeroSlide]=useState(1)

useEffect(() => {
        const intervalId = setInterval(() => {
          setHeroSlide(prevState => (prevState % 4) + 1);
        }, 7000);
        return () => clearInterval(intervalId);
      }, []);
// console.log(heroSlide)


  return (
    <div className='HeroWrap'>
        {heroSlide===1&&<div className='Hero'>
                {/* <img className='animate__animated animate__fadeIn' src={HeroImg5} alt="HeroImg"/> */}
                <img src={HeroImg5} alt="HeroImg"/>
                <div className='HeroMask'>
                        <div className='HeroMaskTextWrap'>
                        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geoenviromental services limited</h2>
                        </div>
                        {/* <div className='HeroMaskCenter'>
                                <input type="text" placeholder='Search'/> <button>Search</button>
                        </div> */}
                        {/* <SearchBar/> */}
                        <div className='HeroMaskTextRight animate__animated animate__fadeIn'>
                        <p>"Unlock the doorway to sustainable living with Nima Geo."</p>
                        </div>
                        </div>
                        </div>
                
              
        </div>}
        {heroSlide===2&&<div className='Hero'>
        {/* <img className="animate__animated animate__fadeIn" src={HeroImg6} alt="HeroImg"/> */}
        <img src={HeroImg6} alt="HeroImg"/>
        <div className='HeroMask'>
        <div className='HeroMaskTextWrap'>
        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geoenviromental services limited</h2>
                        </div>
                        {/* <SearchBar/> */}
                        <div className='HeroMaskTextRight animate__animated animate__fadeIn'>
                        <p>"Experience a world where nature and luxury intertwine."</p>
                 
                        </div>
        </div>

                </div>
           
        </div>}
        {heroSlide===3&&<div className='Hero'>
        {/* <img className='animate__animated animate__fadeIn' src={HeroImg7} alt="HeroImg"/> */}
        <img src={HeroImg7} alt="HeroImg"/>
        <div className='HeroMask'>
        <div className='HeroMaskTextWrap'>
        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geoenviromental services limited</h2>
                        </div>
                        {/* <SearchBar/> */}
                        <div className='HeroMaskTextRight animate__animated animate__fadeIn'>
                        <p>"Discover harmony between urban living and ecological preservation."</p>
                 
                        </div>
        </div>

                </div>
              
        </div>}
        {heroSlide===4&&<div className='Hero'>
        {/* <img className="animate__animated animate__fadeIn" src={HeroImg8} alt="HeroImg"/> */}
        <img src={HeroImg8} alt="HeroImg"/>
        <div className='HeroMask'>
        <div className='HeroMaskTextWrap'>
        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geoenviromental services limited</h2>
                        </div>
                        {/* <SearchBar/> */}
                        <div className='HeroMaskTextRight animate__animated animate__fadeIn'>
                        <p>"Every home is a testament to our environmental stewardship."</p>
                 
                        </div>
        </div>

                </div>
                
        </div>}
        <SearchComponent/>
    </div>
  )
}

export default Hero
