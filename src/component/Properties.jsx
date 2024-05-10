import React from 'react'
import "../CSS/Properties.css"
import { useState,useEffect } from 'react';
import Img1 from "../Images/house1.webp"
import Img2 from "../Images/house2.jpg"
import Img3 from "../Images/house3.jpg"
import Img4 from "../Images/house4.jpg"
import {useNavigate} from 'react-router-dom'


const Properties = () => {
    const navigate = useNavigate();

        const Houses = [
          Img1,
          Img2,
          Img3,
          Img4
        ];
      
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % Houses.length);
          }, 5000); // Auto change House every 5 seconds
          return () => clearInterval(interval);
        }, [Houses.length]);
      
        const nextHouse = () => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % Houses.length);
        };
      
        const prevHouse = () => {
          setCurrentIndex(prevIndex => (prevIndex - 1 + Houses.length) % Houses.length);
        };

  return (
    <div className='PropertiesWrap'>
        <h1>Properties</h1>
        <div className="container">
      <div className="card">
        <div className="carousel">
          <div className="carousel-inner">
            {Houses.map((House, index) => (
              <img key={index} src={House} alt={`Property House ${index + 1}`} style={{ display: index === currentIndex ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="prev" onClick={prevHouse}>&#10094;</button>
          <button className="next" onClick={nextHouse}>&#10095;</button>
        </div>
        <div className="property-details">
          <h3>Beautiful Home in Prime Location</h3>
          <p>Address: 123 Main Street, City, State</p>
          <p>Price: N500,000</p>
          <button onClick={()=>navigate("/contactus")}>Contact Agent</button>
        </div>
      </div>
      <div className="card">
        <div className="carousel">
          <div className="carousel-inner">
            {Houses.map((House, index) => (
              <img key={index} src={House} alt={`Property House ${index + 1}`} style={{ display: index === currentIndex ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="prev" onClick={prevHouse}>&#10094;</button>
          <button className="next" onClick={nextHouse}>&#10095;</button>
        </div>
        <div className="property-details">
          <h3>Luxury Villa with Stunning Views</h3>
          <p>Address: 456 Elm Street, City, State</p>
          <p>Price: N1,000,000</p>
          <button onClick={()=>navigate("/contactus")}>Contact Agent</button>
        </div>
      </div>
      <div className="card">
        <div className="carousel">
          <div className="carousel-inner">
            {Houses.map((House, index) => (
              <img key={index} src={House} alt={`Property House ${index + 1}`} style={{ display: index === currentIndex ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="prev" onClick={prevHouse}>&#10094;</button>
          <button className="next" onClick={nextHouse}>&#10095;</button>
        </div>
        <div className="property-details">
          <h3>Charming Cottage in Quiet Neighborhood</h3>
          <p>Address: 789 Oak Avenue, City, State</p>
          <p>Price: N300,000</p>
          <button onClick={()=>navigate("/contactus")}>Contact Agent</button>
        </div>
      </div>
      <div className="card">
        <div className="carousel">
          <div className="carousel-inner">
            {Houses.map((House, index) => (
              <img key={index} src={House} alt={`Property House ${index + 1}`} style={{ display: index === currentIndex ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="prev" onClick={prevHouse}>&#10094;</button>
          <button className="next" onClick={nextHouse}>&#10095;</button>
        </div>
        <div className="property-details">
          <h3>Spacious Apartment with Modern Amenities</h3>
          <p>Address: 1012 Pine Road, City, State</p>
          <p>Price: N700,000</p>
          <button onClick={()=>navigate("/contactus")}>Contact Agent</button>
        </div>
      </div>

      <div className="card">
        <div className="carousel">
          <div className="carousel-inner">
            {Houses.map((House, index) => (
              <img key={index} src={House} alt={`Property House ${index + 1}`} style={{ display: index === currentIndex ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="prev" onClick={prevHouse}>&#10094;</button>
          <button className="next" onClick={nextHouse}>&#10095;</button>
        </div>
        <div className="property-details">
          <h3>Spacious Apartment with Modern Amenities</h3>
          <p>Address: 1012 Pine Road, City, State</p>
          <p>Price: N700,000</p>
          <button onClick={()=>navigate("/contactus")}>Contact Agent</button>
        </div>
      </div>

      <div className="card">
        <div className="carousel">
          <div className="carousel-inner">
            {Houses.map((House, index) => (
              <img key={index} src={House} alt={`Property House ${index + 1}`} style={{ display: index === currentIndex ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="prev" onClick={prevHouse}>&#10094;</button>
          <button className="next" onClick={nextHouse}>&#10095;</button>
        </div>
        <div className="property-details">
          <h3>Spacious Apartment with Modern Amenities</h3>
          <p>Address: 1012 Pine Road, City, State</p>
          <p>Price: N700,000</p>
          <button onClick={()=>navigate("/contactus")}>Contact Agent</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Properties
