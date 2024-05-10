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


const Hero = () => {

        //handling Hero Slide
const [heroSlide,setHeroSlide]=useState(1)

useEffect(() => {
        const intervalId = setInterval(() => {
          setHeroSlide(prevState => (prevState % 4) + 1);
        }, 7000);
        return () => clearInterval(intervalId);
      }, []);
console.log(heroSlide)


  return (
    <div className='HeroWrap'>
        {heroSlide===1&&<div className='Hero'>
                <img className='animate__animated animate__fadeIn' src={HeroImg1} alt="HeroImg"/>
                <div className='HeroMask'>
                        <div className='HeroMaskTextWrap'>
                        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geo-Enironmental and Real Estate services</h2>
                        </div>
                        <div className='HeroMaskTextRight animate__animated animate__slideInRight'>
                        <p>"Unlock the doorway to sustainable living with Nima Geo: where environmental consciousness meets exceptional real estate solutions."</p>
                 
                        </div>
                        </div>
                        </div>
                
              
        </div>}
        {heroSlide===2&&<div className='Hero'>
        <img className="animate__animated animate__fadeIn" src={HeroImg2} alt="HeroImg"/>
        <div className='HeroMask'>
        <div className='HeroMaskTextWrap'>
        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geo-Enironmental and Real Estate services</h2>
                        </div>
                        <div className='HeroMaskTextRight animate__animated animate__slideInRight'>
                        <p>"Experience a world where nature and luxury intertwine seamlessly – welcome to Nima Geo Environmental and Real Estate Services."</p>
                 
                        </div>
        </div>

                </div>
           
        </div>}
        {heroSlide===3&&<div className='Hero'>
        <img className='animate__animated animate__fadeIn' src={HeroImg3} alt="HeroImg"/>
        <div className='HeroMask'>
        <div className='HeroMaskTextWrap'>
        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geo-Enironmental and Real Estate services</h2>
                        </div>
                        <div className='HeroMaskTextRight animate__animated animate__slideInRight'>
                        <p>"Discover a sanctuary of harmony between urban living and ecological preservation – Nima Geo invites you to redefine your lifestyle."</p>
                 
                        </div>
        </div>

                </div>
              
        </div>}
        {heroSlide===4&&<div className='Hero'>
        <img className="animate__animated animate__fadeIn" src={HeroImg4} alt="HeroImg"/>
        <div className='HeroMask'>
        <div className='HeroMaskTextWrap'>
        <div className='HeroMaskTextLeft'>
                        <h1>NIMA</h1>
                        <h2>Geo-Enironmental and Real Estate services</h2>
                        </div>
                        <div className='HeroMaskTextRight animate__animated animate__slideInRight'>
                        <p>"Embark on a journey where every home is a testament to our commitment to environmental stewardship and unparalleled comfort. Welcome to Nima Geo."</p>
                 
                        </div>
        </div>

                </div>
                
        </div>}
    </div>
  )
}

export default Hero
