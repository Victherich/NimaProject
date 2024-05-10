import React from 'react'
import "../CSS/AboutUs.css"
import { useState } from 'react';
import CEOImage from "../Images/ceoimg.png"
import s3 from '../Images/s3.jpg'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate()

  const [showDescription, setShowDescription] = useState(false);

  // Function to toggle description visibility
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleNavigate= ()=>{
    navigate('/contactus')
  }

  return (
    <div className='AboutUsWrap'>
        <div className='AboutUsHeaderWrap'>
            <h1>About Us</h1>
        </div>
        <div className="about-us">
      <div className='WhoWeAreAndDoWrap'>
            <div className='WhoWeAreAndDoImgWrap'>
              <img src={s3} alt="Who We are and Do"/>
            </div>
            <div className='WhoWeAreAndDo'>
            <section className="sectionA">
        <h2>Who We Are</h2>
        <p>
"Nima Geo Environmental and Real Estate Services is a leading firm dedicated to sustainable solutions in environmental consulting, real estate development, and land use planning. Committed to excellence and innovation."</p>
      </section><br/>
      <section className="sectionA">
        <h2>What We Do</h2>
        <p><span>Integrated Solutions:</span> Nima Geo offers comprehensive services merging environmental expertise with real estate development, ensuring sustainable, value-driven outcomes.<br/><br/>
<span>Client-Centric Approach:</span> Our tailored strategies prioritize client goals, fostering collaborative partnerships and delivering personalized solutions for long-term success.<br/><br/> 
<span>Innovation and Sustainability:</span> Embracing cutting-edge technologies and eco-conscious practices, we pioneer innovative approaches to environmental challenges, driving sustainable development and growth.</p>
      </section>
            </div>
      </div>
      <section className="section">
        <h2>Our Team</h2>
        <p>Meet our team with diverse ranges of expertise spanning environmental sciences, real estate development, ecological consulting, and sustainable land use planning. Our team is united by a shared commitment to excellence and innovation.</p>
        <div className="team">
          <div className="team-member" onClick={()=>setShowDescription(1)} onPointerEnter={()=>setShowDescription(1)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={CEOImage} alt="CEO" />
            <h4>CEO - John Doe</h4>
            <div className={`overlay ${showDescription===1 ? "active" : ""}`}>
              <p>CEO - John Doe</p>
              <p>"John Doe, our CEO, is a visionary leader with a passion for environmental sustainability and real estate development. His strategic insights drive our company's growth and success."</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(2)} onPointerEnter={()=>setShowDescription(2)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={CEOImage} alt="CEO" />
            <h4>Manager - John Clara</h4>
            <div className={`overlay ${showDescription===2 ? "active" : ""}`}>
              <p>Manager - John Clara</p>
              <p>
John Clara, our dedicated manager, leads with expertise and integrity. With a keen eye for detail and a passion for excellence, he ensures our projects exceed expectations every time.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(3)} onPointerEnter={()=>setShowDescription(3)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={CEOImage} alt="CEO" />
            <h4>IT Expert - Mark Ani</h4>
            <div className={`overlay ${showDescription===3 ? "active" : ""}`}>
              <p>IT Expert - Mark Ani</p>
              <p>"Mark Ani is a seasoned IT expert with vast experience in system administration, network security, and cloud computing. He excels in problem-solving and stays updated with emerging technologies."</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(4)} onPointerEnter={()=>setShowDescription(4)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={CEOImage} alt="CEO" />
            <h4>Manager - John Clara</h4>
            <div className={`overlay ${showDescription===4 ? "active" : ""}`}>
              <p>Manager - John Clara</p>
              <p>
John Clara, our dedicated manager, leads with expertise and integrity. With a keen eye for detail and a passion for excellence, he ensures our projects exceed expectations every time.</p>
            </div>
          </div>
          {/* Repeat the above structure for other team members */}
        </div>
      </section>
    </div>
    <div className='ContactUsNowWrap'>
                <h1 onClick={handleNavigate}>Contact us now !!!</h1>
              </div>
    </div>
  )
}

export default About
