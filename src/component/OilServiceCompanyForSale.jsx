import React from 'react'
import prod1 from "../Images/prod1.jpeg"
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'


const OilServiceCompanyForSale = () => {
  const navigate=useNavigate()
  return (
    <div className='Product1'>
        
          <div className='Product1TitleWrap'><h2>For Sale !!! </h2>
          <h1> A FUNCTIONING OIL SERVICES COMPANY</h1>
          <h3 style={{color:"rgba(0,0,255,0.8)",textAlign:"center"}}>AT PORT HARCOURT, RIVERS STATE NIGERIA</h3><br/>
          </div>
          <div className='Product1LocationAndPriceWrap' style={{width:"150px"}}>
<div className="Product1LocationAndPrice">
  <p><span>PRICE:</span></p>
  <p>$3.5M</p>
</div>



</div>
          <div className='Product1PicAndDescription'>
            {/* <video controls>
                <source src="/video1.mp4" type="video/mp4" />
            </video> */}

<ReactPlayer url="/video1.mp4" controls width="100%" style={{backgroundColor:"rgba(0,0,0,0.7)"}}/>
            
        
          </div>

          <div className='SubmitButtonWrap'>
                            <button type="button" onClick={()=>navigate("/contactus")}>Contact Now </button>
                            </div>
          
          
        </div>
  )
}

export default OilServiceCompanyForSale
