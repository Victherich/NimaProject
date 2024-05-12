import React, { useContext } from 'react'
import "../CSS/Properties.css"
import { useState,useEffect } from 'react';
import Img1 from "../Images/house1.webp"
import Img2 from "../Images/house2.jpg"
import Img3 from "../Images/house3.jpg"
import Img4 from "../Images/house4.jpg"
import {useNavigate} from 'react-router-dom'
import { Context } from './Context';



const Properties = () => {
    const navigate = useNavigate();

    // receiving functions and state from context
    const {handleSearch,
      searchInputData,
      setSearchInputData,
      resultNumber,
      propertiesData,
      propertiesData2,
      originalDataShow,showClearSearch,handleClearSearch}=useContext(Context)

    
console.log(propertiesData2.length)


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
        <div className='PropertySearchWrap'>
            <h2>Search Available Properites:</h2>


            <div className='SearchBarWrap'>
              <input 
              type="text"
              value={searchInputData}
              onChange={(e)=>setSearchInputData(e.target.value)}
              placeholder='Enter property name or location'/><p onClick={handleSearch}>Search</p>
            </div>
            {resultNumber!==null&&originalDataShow===true?<p style={{color:"#007bff",
            fontWeight:"500",
            cursor:"pointer",
            marginTop:"10px",
            marginBottom:"10px",
            fontSize:"1.2rem"}}>Search Result: Found ({resultNumber}) Properties</p>:""}

            {showClearSearch&&<p style={{color:"#007bff",
            fontStyle:"italic",
            fontWeight:"bold",
            cursor:"pointer",
            marginTop:"10px",
            marginBottom:"30px",
            textDecoration:"underline",
            fontSize:"1.2rem"}} onClick={handleClearSearch}>X-Clear Search</p>}
        </div>
        <div className="container">

      {originalDataShow===true?    propertiesData2.map((data)=>(<div className="card" key={data.id}>
      <div className="carousel">
        <div className="carousel-inner">
          {Houses.map((House, idx) => (
            <img key={idx} src={House} alt={`Property House ${idx + 1}`} style={{ display: idx === currentIndex ? 'block' : 'none' }} />
          ))}
        </div>
        <button className="prev" onClick={prevHouse}>&#10094;</button>
        <button className="next" onClick={nextHouse}>&#10095;</button>
      </div>
      <div className="property-details">
        <h3>{data.propertyType}</h3>
        <p>Location: {data.propertyLocation}</p>
        <p>Price: {data.propertyAmount}</p>
        <p>{data.category}</p>
        <button onClick={() => navigate("/contactus")}>Contact Agent</button>
      </div>
    </div>))

    :

      propertiesData.map((data)=>(<div className="card" key={data.id}>
      <div className="carousel">
        <div className="carousel-inner">
          {Houses.map((House, idx) => (
            <img key={idx} src={House} alt={`Property House ${idx + 1}`} style={{ display: idx === currentIndex ? 'block' : 'none' }} />
          ))}
        </div>
        <button className="prev" onClick={prevHouse}>&#10094;</button>
        <button className="next" onClick={nextHouse}>&#10095;</button>
      </div>
      <div className="property-details">
        <h3>{data.propertyType}</h3>
        <p>Location: {data.propertyLocation}</p>
        <p>Price: {data.propertyAmount}</p>
        <p>{data.category}</p>
        <button onClick={() => navigate("/contactus")}>Contact Agent</button>
      </div>
    </div>))
      }
    </div>
    </div>
  )
}

export default Properties
