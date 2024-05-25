import React, { useEffect, useState } from 'react'
import "../CSS/OurProductCollections.css"
import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa'
import prod1 from "../Images/prod1.jpeg"
import prod2 from "../Images/prod2.jpeg"
import prod3 from "../Images/prod3.jpeg"
import prod4 from "../Images/prod4.jpeg"
import prod5 from "../Images/prod5.jpeg"
import prod6 from "../Images/prod6.jpeg"
import prod7 from "../Images/prod7.jpeg"
import prod8 from "../Images/prod8.jpeg"
import OilServiceCompanyForSale from './OilServiceCompanyForSale'
import { useNavigate } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa6'

const OurProductCollections = () => {
  const navigate = useNavigate()

const [state,setState]=useState(0)

useEffect(()=>{
  const interalId=setInterval(()=>{
    setState(prevState=>(prevState+1)%8)
  },5000)
  return ()=>{
    clearInterval(interalId)
  }
},[])

const handleLocation =()=>{
  window.history.back()
}

  return (
    <div className='OurProductCollectionsWrap'>
        <div className='OurProductCollectionsHero' >
            <p>Explore the wide ranges of</p>
            <h1>OUR PRODUCT COLLECTIONS</h1>
        </div>
        <div className='Product1'>
        
          <div className='Product1TitleWrap'><h2>Distress Sale !!! </h2><h1> 3000HP 15000PSI HEAVY SWAMP RIG</h1><br/></div>
          <div className='Product1LocationAndPriceWrap'>
          <div className="Product1LocationAndPrice">
  <p><span>LOCATION:</span></p>
  <p>Niger Delta</p>
</div>
{/* <div className="specificationLine"></div> */}

<div className="Product1LocationAndPrice">
  <p><span>PRICE:</span></p>
  <p>$33M NET</p>
</div>
{/* <div className="specificationLine"></div> */}

<div className="Product1LocationAndPrice">
  <p><span>FACILITATORS:</span></p>
  <p>10% FOR BOTH PARTIES</p>
</div>
{/* <div className="specificationLine"></div> */}

<div className="Product1LocationAndPrice">
  <p>ONLY FOR SERIOUS BUYERS</p>
</div>
{/* <div className="specificationLine"></div> */}


</div>
          <div className='Product1PicAndDescription'>
          <div className='Product1Left'>
              {state===0&&<img src={prod2} alt="1" className='Product1LeftBigImage'/>} 
                {state===1&&<img src={prod1} alt="2" className='Product1LeftBigImage'/>}
                {state===2&&<img src={prod3} alt="3" className='Product1LeftBigImage'/>}
                {state===3&&<img src={prod4} alt="4" className='Product1LeftBigImage'/>}
                {state===4&&<img src={prod5} alt="5" className='Product1LeftBigImage'/>} 
                {state===5&&<img src={prod6} alt="6" className='Product1LeftBigImage'/>}
                {state===6&&<img src={prod7} alt="7" className='Product1LeftBigImage'/>}
                {state===7&&<img src={prod8} alt="8" className='Product1LeftBigImage'/>}
                <FaArrowLeft className='ProductLeftArrow' onClick={()=>setState(prevState=>(prevState-1+8)%8)}/>
                <FaArrowRight className='ProductRightArrow' onClick={()=>setState(prevState=>(prevState+1)%8)}/>
              <div className='ProductLeftDownPics'>
                
                <img src={prod2} alt="1" className={state===0?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(0)}/>
                <img src={prod1} alt="2" className={state===1?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(1)}/>
                <img src={prod3} alt="3" className={state===2?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(2)}/>
                <img src={prod4} alt="4" className={state===3?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(3)}/>
                <img src={prod5} alt="5" className={state===4?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(4)}/>
                <img src={prod6} alt="6" className={state===5?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(5)}/>
                <img src={prod7} alt="7" className={state===6?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(6)}/>
                <img src={prod8} alt="8" className={state===7?"ActiveProduct1LeftSmallImage":'Product1LeftSmallImage'} onClick={()=>setState(7)}/>
                
              </div>
              <p>Click image thumbnails to see enlarged view</p>
          </div>
          <div className='Product1Right'>
              <h2>Specifications:</h2>
              <div className="Specificatoin">
  <p><span>PRESSURE RATING:</span></p>
  <p>3000 HP, 15000 PSI</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>LENGTH:</span></p>
  <p>220 ft</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>BREATH:</span></p>
  <p>20ft × HULL 14 ft</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>SLOT:</span></p>
  <p>WIDTH 20 ft × LENGTH 40 ft</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>WELL CENTRE TO SLOT END:</span></p>
  <p>12ft</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>TRANSIT DRAFT:</span></p>
  <p>7ft</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>LIGHT RIG DRAFT:</span></p>
  <p>6 ft</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>MAX WATER DEPTH:</span></p>
  <p>21 ft</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>ACCOMODATION:</span></p>
  <p>100 PAX</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>DIESEL:</span></p>
  <p>2,300 BBLS</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>DRILL WATER:</span></p>
  <p>6,600 BBLS</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>POT WATER:</span></p>
  <p>3,000 BBLS</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>MUD:</span></p>
  <p>2,041 BBLS</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>TOP DRIVE:</span></p>
  <p>CAN RIG 1250</p>
</div>
<div className="specificationLine"></div>

<div className="Specificatoin">
  <p><span>MUD PUMP:</span></p>
  <p>3(1×PZ11,2×P160)</p>
</div>
<div className="specificationLine"></div>



          </div>
          </div>
          <div className='SubmitButtonWrap'>
                            <button type="button" onClick={()=>navigate("/contactus")}>Contact Now </button>
                            </div>
        </div>
        <OilServiceCompanyForSale/>
        <div className='BackButtonWrap' style={{marginBottom:"30px"}}>
                    <button 
                    onClick={handleLocation}
                    ><FaBackward/> Back</button>
                </div>
    </div>
  )
}

export default OurProductCollections
