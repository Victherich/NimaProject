import React, { useContext } from 'react'
import "../CSS/Properties.css"
import { useState,useEffect } from 'react';
import Img1 from "../Images/house1.webp"
import Img2 from "../Images/house2.jpg"
import Img3 from "../Images/house3.jpg"
import Img4 from "../Images/house4.jpg"
import {useNavigate} from 'react-router-dom'
import { Context } from './Context';
import Swal from "sweetalert2"
import SearchComponent from './SearchComponent';
import SearchComponent2 from './SearchComponent2';



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


const [imageNumbers, setImageNumbers] = useState(propertiesData.map(() => 0));

useEffect(() => {
    const intervalId = setInterval(() => {
        setImageNumbers(prevNumbers => prevNumbers.map((number, index) => (number + 1) % 4));
    }, 5000);
    return () => clearInterval(intervalId);
}, []);

const nextHouse = (index) => {
    setImageNumbers(prevNumbers => {
        const updatedNumbers = [...prevNumbers];
        updatedNumbers[index] = (updatedNumbers[index] + 1) % 4;
        return updatedNumbers;
    });
};

const prevHouse = (index) => {
    setImageNumbers(prevNumbers => {
        const updatedNumbers = [...prevNumbers];
        updatedNumbers[index] = (updatedNumbers[index] - 1 + 4) % 4;
        return updatedNumbers;
    });
};

  return (
    <div className='PropertiesWrap'>
        <h1>All Properties</h1>
        <div className='PropertySearchWrap'>
            {/* <h2>Search Available Properites:</h2> */}


            {/* <div className='SearchBarWrap'>
              <input 
              type="text"
              value={searchInputData}
              onChange={(e)=>setSearchInputData(e.target.value)}
              placeholder='Property name or location'/><p onClick={handleSearch}>Search</p>
            </div> */}
            <SearchComponent2/>
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
        <div className="PropertiesContainer">

      {originalDataShow===true?    propertiesData2.map((data,index)=>(<div className="PropertyCard" key={data.id}>
      <div className="carousel">
      <div className="carousel-inner">
                                <img
                                    src={
                                        imageNumbers[index] === 0 ? data.pic1 :
                                            imageNumbers[index] === 1 ? data.pic2 :
                                                imageNumbers[index] === 2 ? data.pic3 :
                                                    data.pic4
                                    }
                                    alt="House"
                                />
                            </div>
                            <button className="prev" onClick={() => prevHouse(index)}>&#10094;</button>
                            <button className="next" onClick={() => nextHouse(index)}>&#10095;</button>
                        </div>
      <div className="property-details">
        <h3 style={{color:"rgba(0,0,255,0.7)"}}>{data.propertyType}</h3>
        
        <p>{data.bedrooms} bedroom</p>
        <p>{data.Addition}</p>
        <p>{data.state} {data.propertyLocation}</p>
        <p>{data.category}</p>
        <p>Price: {data.propertyAmount} NGN</p>
        <button onClick={() => navigate("/contactus")}>Contact now</button>
      </div>
    </div>))

    :

      propertiesData.map((data,index)=>(<div className="PropertyCard" key={data.id}>
      <div className="carousel">
      <div className="carousel-inner">
                                <img
                                    src={
                                        imageNumbers[index] === 0 ? data.pic1 :
                                            imageNumbers[index] === 1 ? data.pic2 :
                                                imageNumbers[index] === 2 ? data.pic3 :
                                                    data.pic4
                                    }
                                    alt="House"
                                />
                            </div>
                            <button className="prev" onClick={() => prevHouse(index)}>&#10094;</button>
                            <button className="next" onClick={() => nextHouse(index)}>&#10095;</button>
                        </div>
      <div className="property-details">
        <h3 style={{color:"rgba(0,0,255,0.7)"}}>{data.propertyType}</h3>
        <p>{data.bedrooms} bedroom</p>
        <p>{data.Addition}</p>
        <p>{data.state} {data.propertyLocation}</p>

        <p>{data.category}</p>
        <p>Price: {data.propertyAmount} NGN</p>
        <button onClick={() => navigate("/contactus")}>Contact now</button>
      </div>
    </div>))
      }
    </div>
    </div>
  )
}

export default Properties
