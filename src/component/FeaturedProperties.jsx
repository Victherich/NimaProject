// import React, { useContext } from 'react'
// import "../CSS/Properties.css"
// import { useState,useEffect } from 'react';
// import Img1 from "../Images/house1.webp"
// import Img2 from "../Images/house2.jpg"
// import Img3 from "../Images/house3.jpg"
// import Img4 from "../Images/house4.jpg"
// import {useNavigate} from 'react-router-dom'
// import { Context } from './Context';



// const FeaturedProperties = () => {
//     const navigate = useNavigate();

//     //handling navigate to properties page
//     const handleNavigate = ()=>{
//         navigate("/properties")
//     }

//     // receiving functions and state from context
//     const {handleSearch,
//       searchInputData,
//       setSearchInputData,
//       resultNumber,
//       propertiesData,
//       propertiesData2,
//       originalDataShow,showClearSearch,handleClearSearch}=useContext(Context)

    
// console.log(propertiesData2.length)


//         // const Houses = [
//         //   Img1,
//         //   Img2,
//         //   Img3,
//         //   Img4
//         // ];
      
//         // const [currentIndex, setCurrentIndex] = useState(0);
      
//         // useEffect(() => {
//         //   const interval = setInterval(() => {
//         //     setCurrentIndex(prevIndex => (prevIndex + 1) % Houses.length);
//         //   }, 5000); // Auto change House every 5 seconds
//         //   return () => clearInterval(interval);
//         // }, [Houses.length]);


//         const [imageNumber,setImageNumber]=useState(0)
//         useEffect(()=>{
//           const intervalId = setInterval(()=>{
//               setImageNumber(prevState=>(prevState+1)%4)
//           },5000);
//           return ()=> clearInterval(intervalId)
//         },[])

//         console.log(imageNumber)
      
//         const nextHouse = (id) => {
//           setImageNumber(prevState => (prevState + 1) % 4);
//         };
      
//         const prevHouse = (id) => {
//           setImageNumber(prevState => (prevState - 1 + 4) % 4);
//         };

//   return (
//     <div className='PropertiesWrap'>
//         <h1>Featured Properties</h1>

//         <div className="container">

//       {propertiesData.slice(-3).map((data)=>(<div className="card" key={data.id}>
//       <div className="carousel">
//         <div className="carousel-inner">
//           {/* {Houses.map((House, idx) => (
//             <img key={idx} src={House} alt={`Property House ${idx + 1}`} style={{ display: idx === currentIndex ? 'block' : 'none' }} />
//           ))} */}
//           <img src={imageNumber===0&&data.pic1||imageNumber===1&&data.pic2||imageNumber===2&&data.pic3||imageNumber===3&&data.pic4} alt="House"/>
//         </div>
//         <button className="prev" onClick={()=>prevHouse(data.id)}>&#10094;</button>
//         <button className="next" onClick={()=>nextHouse(data.id)}>&#10095;</button>
//       </div>
//       <div className="property-details">
//         <h3>{data.propertyType}</h3>
//         <p>Location: {data.propertyLocation}</p>
//         <p>Price: {data.propertyAmount}</p>
//         <p>{data.category}</p>
//         <button onClick={() => navigate("/contactus")}>Contact Agent</button>
//         {/* <button style={{marginLeft:"50px",backgroundColor:"transparent",border:"1px solid blue",color:"blue"}}>View Property</button> */}
//       </div>
//     </div>))}


//     <div className='ContactUsNowWrap'>
//                 <h1 onClick={handleNavigate} style={{margin:"0",fontStyle:"italic", fontWeight:"500"}}>View all Properites...</h1>
//               </div>
    
//     </div>
//     </div>
//   )
// }

// export default FeaturedProperties





import React, { useContext, useState, useEffect } from 'react';
import "../CSS/Properties.css";
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

const FeaturedProperties = () => {
    const navigate = useNavigate();
    const { propertiesData } = useContext(Context);

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

    const handleNavigate = () => {
        navigate("/properties");
    };

    return (
        <div className='PropertiesWrap'>
            <h1>Featured Properties</h1>
            <div className="PropertiesContainer">
                {propertiesData.slice(-3).map((data, index) => (
                    <div className="PropertyCard" key={data.id}>
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
        <p>{data.state} {data.propertyLocation}</p>
        <p>{data.category}</p>
        <p>Price: {data.propertyAmount} NGN</p>
                            <button onClick={() => navigate("/contactus")}>Contact now</button>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='ContactUsNowWrap'>
                    <h1 onClick={handleNavigate} style={{ margin: "0",marginTop:"30px", fontStyle: "italic", fontWeight: "500" }}>View all Properites...</h1>
                </div>
        </div>
    );
};

export default FeaturedProperties;
