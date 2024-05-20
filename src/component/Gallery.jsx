import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import "../CSS/Gallery.css"
import g1 from "../Images/g1.jpeg"
import g2 from "../Images/g4.jpeg"
import g3 from "../Images/g3.jpeg"
import g4 from "../Images/g8.jpeg"
import g5 from "../Images/g5.jpeg"
import g6 from "../Images/g6.jpeg"
import g7 from "../Images/g7.jpeg"
import g8 from "../Images/g8.jpeg"
import g9 from "../Images/g9.jpeg"

const Gallery = () => {

  const [state, setState] = useState(1);

  const increment = () => {
    setState(prevState => (prevState % 3) + 1);
  }
  
  const decrement = () => {
    setState(prevState => (prevState === 1 ? 3 : prevState - 1));
  }
  



  return (
    <div className='GalleryWrap' id="gallery">
      <h1>Gallery</h1>
      <div className='GalleryWrap2'>

      

      
          <FaArrowCircleRight className='Increament' onClick={increment}/>
      
      
          <FaArrowCircleLeft className='Decreament' onClick={decrement}/>
      
      {state===1&&<div className='Gallery animate__animated animate__fadeIn'>
          <div className='GalleryPhotoWrap'>
              <img src={g1} alt="Gallery Photo"/>
          </div>
          <div className='GalleryPhotoWrap'>
              <img src={g2} alt="Gallery Photo"/>
          </div>
          <div className='GalleryPhotoWrap'>
              <img src={g3} alt="Gallery Photo"/>
          </div>
      </div>}

      {state===2&&<div className='Gallery animate__animated animate__fadeIn'>
          <div className='GalleryPhotoWrap'>
              <img src={g4} alt="Gallery Photo"/>
          </div>
          <div className='GalleryPhotoWrap'>
              <img src={g5} alt="Gallery Photo"/>
          </div>
          <div className='GalleryPhotoWrap'>
              <img src={g6} alt="Gallery Photo"/>
          </div>
      </div>}

      {state===3&&<div className='Gallery animate__animated animate__fadeIn'>
          <div className='GalleryPhotoWrap'>
              <img src={g7} alt="Gallery Photo"/>
          </div>
          <div className='GalleryPhotoWrap'>
              <img src={g8} alt="Gallery Photo"/>
          </div>
          <div className='GalleryPhotoWrap'>
              <img src={g9} alt="Gallery Photo"/>
          </div>
      </div>}
      </div>

      <div className='CircleWrap'>
             <div className={state===1?'CircleActive':'Circle'}>
                </div>      
                <div className={state===2?'CircleActive':'Circle'}>
                </div> 
                <div className={state===3?'CircleActive':'Circle'}>
                </div> 
                             
        </div>
      
    </div>
  )
}

export default Gallery
