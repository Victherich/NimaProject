import React, { useContext, useEffect, useState } from 'react';
import '../CSS/Header.css'
import { Context } from './Context';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import Logo from "../Images/Nima_Logo_dummy-removebg-preview.png"
import Logo from "../Images/Nima_Logo_4-removebg-preview.png"
// import Logo from "../Images/nima logo3 bg.jpeg"
// import Logo from "../Images/"
import { FaArrowDown, FaBeer, FaFacebook, FaHamburger, FaInstagram, FaTwitter } from "react-icons/fa";
import "animate.css"
import { useRef } from 'react';
import { FaArrowDown19, FaArrowDownWideShort, FaChevronDown, FaLessThanEqual } from 'react-icons/fa6';
import AboutUsDropDownMenu from "./AboutUsDropDownMenu"

const Header = () => {
   const navigate=useNavigate()
const location=useLocation()
const {theme,aboutMenuShow,setAboutMenuShow,
   handleWhoWeAre,handleWhatWeDo,handleOurVision,handleOurMission,handleOurTeam,scrollToProjects,scrollToGallery
}=useContext(Context)
// console.log(theme)


const [aboutMobileMenuShow,setAboutMobileMenuShow]=useState(false)

// declaring active menu handling 
const [Active,setActive]=useState("home")


//mobile Menu show handling for mobile
const [mobileMenuShow,setMobileMenuShow]=useState(false)

// handling click away
const menuRef=useRef();
useEffect(()=>{
   const handleClickOutside = (event)=>{
      if(menuRef.current&&!menuRef.current.contains(event.target)){
         setMobileMenuShow(false)
         setAboutMobileMenuShow(false)
      }
      
   }
   document.addEventListener('mousedown',handleClickOutside)
      return ()=>{
         document.removeEventListener('mousedown',handleClickOutside)
      }
},[])




const AboutMenuRef=useRef()

useEffect(()=>{
   const handleClickOutside2 = (event)=>{
      if(AboutMenuRef.current&&!AboutMenuRef.current.contains(event.target)){
         setAboutMenuShow(false)
      }
   }
   document.addEventListener("mousedown",handleClickOutside2);
   return ()=>{
      document.removeEventListener("mousedown",handleClickOutside2)
   }
},[])


const handleWhoWeAre2 = async()=>{
   setAboutMenuShow(false)
 await navigate("/")
 handleWhoWeAre()
 setMobileMenuShow(false)
   // scrollToWhoWeAre("whoweare")
 }
 
 const handleWhatWeDo2 = async()=>{
   setAboutMenuShow(false)
 await navigate("/")
 handleWhatWeDo()
 setMobileMenuShow(false)
 // scrollToWhatWeDo("whatwedo")
 }
 
 const handleOurMission2 = async()=>{
   setAboutMenuShow(false)
 await navigate("/")
 handleOurMission()
 setMobileMenuShow(false)
 // scrollToOurMission("ourmission")
 }
 
 const handleOurVision2 = async()=>{
   setAboutMenuShow(false)
 await navigate("/")
   handleOurVision()
   setMobileMenuShow(false)
 // scrollToOurVision("ourvision")
 }
 
 const handleOurTeam2 = async()=>{
   setAboutMenuShow(false)
 await navigate("/")
 handleOurTeam()
 setMobileMenuShow(false)
 // scrollToOurTeam("ourteam")
 }


const handleProjects = async()=>{
   await navigate("/")
   scrollToProjects("projects")
   setMobileMenuShow(false)
}

const handleGallery = async()=>{
   await navigate("/")
   scrollToGallery("gallery")
   setMobileMenuShow(false)
}

  return (
    <div className='HeaderWrap'>
        <div className='Header'>
           <div className='LogoWrap'>
              <img src={Logo} alt="Logo"/>
           </div>
           <div className='MenuWrap'>
              <NavLink to={"/"} className={location.pathname==="/"?"MenuWrapActive":"Menu"}>HOME</NavLink>
              <NavLink className={location.pathname==="/aboutus"?"":"Menu"} onClick={()=>setAboutMenuShow(true)} onMouseEnter={()=>setAboutMenuShow(true)} 
              style={{display:"flex", justifyContent:"center",alignItems:"center",gap:"5px"}}>ABOUT US<FaChevronDown/></NavLink>
              {aboutMenuShow&&<AboutUsDropDownMenu ref={AboutMenuRef}/>}
              <NavLink to={"/ourservices"} className={location.pathname==="/ourservices"?"MenuWrapActive":"Menu"} >SERVICES</NavLink>
              <NavLink to={"/properties"} className={location.pathname==="/properties"?"MenuWrapActive":"Menu"}>PROPERTIES</NavLink>
              
              <p onClick={handleProjects} className="NavP">PROJECTS</p>
              <p onClick={handleGallery} className="NavP">GALLERY</p>

              <NavLink to={"/contactus"} className={location.pathname==="/contactus"?"MenuWrapActive":"Menu"}>CONTACT US</NavLink>

              

              <NavLink to={"/career"} className={location.pathname==="/career"?"MenuWrapActive":"Menu"}>CAREER</NavLink>
              <NavLink to={"/blogs"} className={location.pathname==="/blogs"?"MenuWrapActive":"Menu"}>BLOGS</NavLink>
           </div>
           <div className='BurgerWrap'>
               <FaHamburger className='BurgerIcon' onClick={()=>setMobileMenuShow(true)} />
           </div>
           {mobileMenuShow&&<div ref={menuRef} className='MobileMenuWrap animate__animated animate__slideInRight'>
              <NavLink to={"/"} className={location.pathname==="/"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >HOME</NavLink>
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <NavLink className={location.pathname==="/aboutus"?"":"Menu"} onClick={()=>setAboutMobileMenuShow(!aboutMobileMenuShow)} 
              style={{display:"flex", justifyContent:"center",alignItems:"center",gap:"5px"}}>ABOUT US<FaChevronDown/></NavLink>
              {aboutMobileMenuShow&&<div className='MobileAboutOptions'>
                  <p onClick={handleWhoWeAre2}>- WHO WE ARE</p>
                  <p onClick={handleWhatWeDo2}>- WHAT WE DO</p>
                  <p onClick={handleOurMission2}>- OUR MISSION</p>
                  <p onClick={handleOurVision2}>- OUR VISION</p>
                  <p onClick={handleOurTeam2}>- OUR TEAM</p>
              </div>}
              {/* <NavLink to={"/aboutus"} className={location.pathname==="/aboutus"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >ABOUT US</NavLink> */}
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <NavLink to={"/ourservices"} className={location.pathname==="/ourservices"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >SERVICES</NavLink>
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <NavLink to={"/properties"} className={location.pathname==="/properties"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >PROPERTIES</NavLink>
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <p onClick={handleProjects} className="NavP">PROJECTS</p>
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <p onClick={handleGallery} className="NavP">GALLERY</p>
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <NavLink to={"/contactus"} className={location.pathname==="/contactus"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >CONTACT US</NavLink>
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <NavLink to={"/career"} className={location.pathname==="/career"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >CAREER</NavLink>
              <div style={{width:"100%",height:"1px",backgroundColor:"rgba(0,0,255,0.5)"}}></div>
              <NavLink to={"/blogs"} className={location.pathname==="/blogs"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >BLOGS</NavLink>
           </div>}

        </div>
    </div>
  )
}

export default Header
