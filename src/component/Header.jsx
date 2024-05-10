import React, { useContext, useEffect, useState } from 'react';
import '../CSS/Header.css'
import { Context } from './Context';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from "../Images/Nima_Logo_dummy-removebg-preview.png"
import { FaBeer, FaFacebook, FaHamburger, FaInstagram, FaTwitter } from "react-icons/fa";
import "animate.css"
import { useRef } from 'react';

const Header = () => {
const location=useLocation()
const {theme}=useContext(Context)
console.log(theme)




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
      }

      
   }

   document.addEventListener('mousedown',handleClickOutside)
      return ()=>{
         document.removeEventListener('mousedown',handleClickOutside)
      }
},[])

  return (
    <div className='HeaderWrap'>
        <div className='Header'>
           <div className='LogoWrap'>
              <img src={Logo} alt="Logo"/>
           </div>
           <div className='MenuWrap'>
              <NavLink to={"/"} className={location.pathname==="/"?"MenuWrapActive":""}>Home</NavLink>
              <NavLink to={"/aboutus"} className={location.pathname==="/aboutus"?"MenuWrapActive":""}>About</NavLink>
              <NavLink to={"/ourservices"} className={location.pathname==="/ourservices"?"MenuWrapActive":""} >Services</NavLink>
              <NavLink to={"/properties"} className={location.pathname==="/properties"?"MenuWrapActive":""}>Properties</NavLink>
              <NavLink to={"/contactus"} className={location.pathname==="/contactus"?"MenuWrapActive":""}>Contact Us</NavLink>
           </div>
           <div className='BurgerWrap'>
               <FaHamburger className='BurgerIcon' onClick={()=>setMobileMenuShow(true)} />
           </div>
           {mobileMenuShow&&<div ref={menuRef} className='MobileMenuWrap animate__animated animate__slideInRight'>
               <NavLink onClick={()=>setMobileMenuShow(false)}>X-Close menu</NavLink>
              <NavLink to={"/"} className={location.pathname==="/"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >Home</NavLink>
              <NavLink to={"/aboutus"} className={location.pathname==="/aboutus"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >About</NavLink>
              <NavLink to={"/ourservices"} className={location.pathname==="/ourservices"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >Services</NavLink>
              <NavLink to={"/properties"} className={location.pathname==="/properties"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >Properties</NavLink>
              <NavLink to={"/contactus"} className={location.pathname==="/contactus"?"MenuWrapActive":""} onClick={()=>setMobileMenuShow(false)} >Contact Us</NavLink>
           </div>}

        </div>
    </div>
  )
}

export default Header
