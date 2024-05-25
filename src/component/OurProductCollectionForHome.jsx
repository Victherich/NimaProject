import React, { useEffect, useState } from 'react'
import prod1 from "../Images/prod8.jpeg"
import "../CSS/OurProductCollectionForHome.css"
import { useNavigate } from 'react-router-dom'
import prodpre from "../Images/prodpre2.jpeg"

const OurProductCollectionForHome = () => {
    const navigate = useNavigate()

    const [state,setState]=useState(0)
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setState(prevState=>(prevState+1)%2)
        },4000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[])
  return (
    <div className='OurProductCollectionForHomeWrap'>
        {state===0&&<div className='OurProductCollectionForHome'>
        <img src={prod1} alt="prod1"/>
        <div className='OurProductCollectionForHomeMask'>
            <h1>OUR PRODUCT COLLECTIONS</h1>
            {state===0&&<h2 className='animate__animated animate__flipInY' >Distress Sale !!!<br/>3000HP 15000PSI HEAVY SWAMP RIG</h2>}
            <button onClick={()=>navigate("/ourproductcollections")}>Explore Now !!!</button>
        </div>

    </div>}
    {state===1&&<div className='OurProductCollectionForHome'>
        <img src={prodpre} alt="prod1"/>
        <div className='OurProductCollectionForHomeMask'>
            <h1>OUR PRODUCT COLLECTIONS</h1>
            {state===1&&<h2 className='animate__animated animate__flipInX'>For Sale !!!<br/>A FUNCTIONING OIL SERVICES COMPANY</h2>}
            <button onClick={()=>navigate("/ourproductcollections")}>Explore Now !!!</button>
        </div>

    </div>}

    </div>
  )
}

export default OurProductCollectionForHome
