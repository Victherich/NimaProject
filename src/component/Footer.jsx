import React from 'react';
import '../CSS/Footer.css'; // import your CSS file
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../Images/Nima_Logo_dummy-removebg-preview.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={Logo} alt="Nima Geo Environmental and Real Estate Services" />
          <h1>Nima Geo Environmental and Real Estate Services</h1>
        </div>
        <div className="footer__contact">
          <p style={{fontWeight:"bold",}}>Contact:</p>
          <ul>
            <li>Phone: +1234567890</li>
            <li>Email: info@nimageo.com</li>
            <li>Address: 123 Johnson Avenue by Estate housing Lekki Phase 1 Lagos state Nigeria</li>
          </ul>
        </div>
        <div className="footer__social">
          <p style={{fontWeight:"bold",}}>Follow Us:</p>
          <ul>
            <li><a href="https://www.facebook.com/nimageo" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"><FaFacebook className='FbIcon'/></i></a></li>
            <li><a href="https://www.twitter.com/nimageo" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"><FaTwitter className='TwitterIcon'/></i></a></li>
            <li><a href="https://www.instagram.com/nimageo" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"><FaInstagram className='InstagramIcon'/></i></a></li>
            {/* Add more social media icons as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
