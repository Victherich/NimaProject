import React, { useState } from 'react';
import '../CSS/Footer.css'; // import your CSS file
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import Logo from "../Images/Nima_Logo_dummy-removebg-preview.png"
// import Logo from "../Images/Nima Logo  1.jpg"
import Logo from "../Images/Nima_Logo_4-removebg-preview.png"


function Footer() {

  const [state,setState]=useState(false)
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={Logo} alt="Nima Geo Environmental and Real Estate Services" />
          <h1>Nima Geoenviromental services limited</h1>
          <p> info@nimageoenviromental.net</p>
        </div>
        <div className="footer__contact">
          {/* <p style={{fontWeight:"bold",}}>Contact:</p> */}
          <ul>
          {/* <li><span style={{fontWeight:"500"}}>Email:</span> info@nimageoenviromental.net</li> */}
            <br/>
            {/* <li style={{marginLeft:"53px"}}>+1 747 930 5003</li> */}
            <li><span style={{fontWeight:"500"}}>Head Office:</span> <br/>Plot 4 Hart Avenue,Somitel<br/> Palm grove estate <br/>Port Harcourt <br/>Rivers state <br/> Nigeria</li>
            <li><span style={{fontWeight:"500"}}>Phone:</span> +234 706 690 8969</li>
            <br/>
            <li><span style={{fontWeight:"500"}}>Branch Office:</span> <br/>Old Vicarage building,<br/> Trinity road <br/>BS2 0NW <br/>Bristol <br/> United Kingdom <br/>England</li>
            <li><span style={{fontWeight:"500"}}>Phone:</span> +44 747 930 5003</li>
            <br/>
            <li><span style={{fontWeight:"500"}}>Branch Office:</span><br/> No 4 Idatshaba street<br/> Ekpan Warri<br/> Delta state<br/> Nigeria</li>
            <li><span style={{fontWeight:"500"}}>Phone:</span> +234 706 690 8969</li>

            
          </ul>
        </div>
        
        <div className="footer__social">
          <p style={{fontWeight:"bold",}}>Follow Us:</p>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61560348502889" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"><FaFacebook className='FbIcon'/></i></a></li>
            <li><a href="https://www.twitter.com/nimageo" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"><FaTwitter className='TwitterIcon'/></i></a></li>
            <li><a href="https://www.instagram.com/nimageo" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"><FaInstagram className='InstagramIcon'/></i></a></li>
            {/* Add more social media icons as needed */}
          </ul>
        </div>
      </div>
      <div className='FooterDesktopContact'>
            {/* <div className='FooterDesktopContactA'>
            <p style={{fontWeight:"bold",}}>Contact:</p>
            <p><span style={{fontWeight:"500"}}>Email:</span> info@nimageoenviromental.net</p>
            </div> */}
            <div className='FooterDesktopContactA'>
            
            <p><span style={{fontWeight:"500"}}>Head Office:</span> <br/>Plot 4 Hart Avenue, Somitel<br/> Palm grove estate <br/>Port Harcourt <br/>Rivers state <br/> Nigeria</p>
        <br/>    <p><span style={{fontWeight:"500"}}>Phone:</span> +234 706 690 8969</p>
            
            </div>


            <div className='FooterDesktopContactA'>
            <p><span style={{fontWeight:"500"}}>Branch Office:</span> <br/>Old Vicarage building,<br/> Trinity road <br/>BS2 0NW <br/>Bristol <br/> United Kingdom <br/>England</p>
            <br/><p><span style={{fontWeight:"500"}}>Phone:</span> +44 747 930 5003</p>

            </div>
            <div className='FooterDesktopContactA'>
            <p><span style={{fontWeight:"500"}}>Branch Office:</span><br/> No 4 Idatshaba street<br/> Ekpan Warri<br/> Delta state<br/> Nigeria</p>
            <br/><p><span style={{fontWeight:"500"}}>Phone:</span> +234 706 690 8969</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
