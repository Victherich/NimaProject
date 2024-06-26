import React from 'react'
import "../CSS/AboutUs.css"
import { useState } from 'react';
import CEOImage from "../Images/ceonewpic.jpeg"
import s3 from '../Images/real estate development.jpeg'
import { useNavigate } from 'react-router-dom';
import ED from "../Images/ED2.jpeg"
import CFO from "../Images/CFO2.jpeg"
import IT from "../Images/IT2.jpeg"
import Lawyer from "../Images/Lawyer2.jpeg"
import SalesManager from "../Images/Sales Manager2.jpeg"
import Admin from "../Images/Admin2.jpeg"
import hr from "../Images/hr pic.jpeg"
import hse from "../Images/hse pic.jpeg"


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

  const [showMore,setShowMore]=useState(false)

  return (
    <div className='AboutUsWrap'>
        <div className='AboutUsHeaderWrap'>
            <h1>About Us</h1>
        </div>
        <div className="about-us">
      <div className='WhoWeAreAndDoWrap'>
            
            <div className='WhoWeAreAndDo' id="whoweare">
                  <div className='WhoWeAreAndDoImgWrap'>
                      <img src={s3} alt="Who We are and Do"/>
                  </div>
                  <div className="WhoWeAreTextWrap">
                      <h1>Who We Are</h1>
                        <p>
                        Nima Geoenviromental services limited is a leading firm dedicated to sustainable solutions in environmental consulting, real estate development, and land use planning. Established with a commitment to excellence and innovation, we strive to make a positive impact by addressing complex environmental challenges while fostering economic growth and social responsibility.
<br/><br/>
At Nima Geoenviromental services limited, we believe in the power of collaboration and integrity. Our team comprises passionate professionals with diverse backgrounds in environmental sciences, real estate development, ecological consulting, and sustainable land use planning. Together, we work tirelessly to provide innovative solutions that meet the needs of our clients and communities.
<br/><br/>
Driven by our core values of environmental stewardship and sustainability, we aim to create a harmonious balance between development and nature. Our dedication to quality, integrity, and client satisfaction sets us apart as a trusted partner in the pursuit of sustainable development and environmental preservation.
                      </p>
                  </div>
                  <br/>
            </div>



            <div className="WhatWeDo" id="whatwedo">
                 <h1>What We Do</h1>
                 <p>
                 At Nima Geoenviromental services limited, we are dedicated to providing comprehensive and sustainable solutions that meet the evolving needs of our clients and communities. Our value proposition lies in our commitment to excellence, innovation, and environmental stewardship, which sets us apart as a trusted partner in the pursuit of sustainable development.
<br/><br/>
<span>1. Integrated Expertise:</span>
With a multidisciplinary team of professionals specializing in environmental consulting, real estate development, and land use planning, we offer integrated solutions that address complex challenges at the intersection of environment and development.
<br/><br/>
<span>2. Sustainability Focus:</span>
We prioritize sustainability in all aspects of our work, from project inception to completion. By embracing cutting-edge technologies and eco-conscious practices, we ensure that our solutions promote environmental health, social equity, and economic prosperity.
<br/><br/>
<span>3. Client-Centric Approach:</span>
Our client's goals and objectives are at the heart of everything we do. We take the time to understand their unique needs and challenges, tailoring our strategies to deliver personalized solutions that drive long-term success and value.
<br/><br/>
<span>4. Regulatory Compliance:</span>
Navigating complex regulatory environments can be daunting. We provide expert guidance and support to ensure compliance with environmental regulations, mitigating risks and liabilities associated with development projects.
<br/><br/>
</p>

{showMore===false&&<p style={{width:"100px",fontWeight:"bold", color:"blue", fontStyle:"italic",cursor:"pointer"}} onClick={()=>setShowMore(true)}>Read More ...</p>
}
{showMore===true&&<p style={{width:"100px",fontWeight:"bold", color:"blue", fontStyle:"italic",cursor:"pointer"}} onClick={()=>setShowMore(false)}>Read Less ...</p>
}<br/>
{showMore&&<p >
<span>5. Innovation and Adaptability:</span>
Innovation is key to staying ahead in a rapidly evolving landscape. We continuously seek out new technologies, methodologies, and approaches to deliver innovative solutions that meet the ever-changing demands of our industry.
<br/><br/>
<span>6. Environmental Stewardship:</span>
As stewards of the environment, we are committed to safeguarding natural resources and enhancing ecological integrity. Our projects aim to minimize environmental impact while maximizing benefits for both present and future generations.
<br/><br/>
<span>7. Collaboration and Partnership:</span>
We believe in the power of collaboration and partnership. By fostering strong relationships with clients, stakeholders, and communities, we create synergies that drive positive change and create shared value for all parties involved.
<br/><br/>
<span>8. Exceptional Service:</span>
Our dedication to excellence extends beyond the completion of a project. We strive to exceed client expectations at every turn, providing responsive, reliable, and transparent service that builds trust and fosters long-term relationships.
<br/><br/>
At Nima Geoenviromental services limited, we are more than just a consulting firm. We are catalysts for progress, shaping a future where environmental sustainability and economic prosperity go hand in hand. Join us in creating a world where development is synonymous with sustainability, leaving a legacy of lasting impact for generations to come.
                  </p>     
}            

<br/>
{showMore===true&&<p style={{width:"100px",fontWeight:"bold", color:"blue", fontStyle:"italic",cursor:"pointer"}} onClick={()=>setShowMore(false)}>Read Less ...</p>
}
</div>
      </div>

      <div className='OurMissionAndVision'>
        <div className='OurMission' id="ourmission">
            <h1>Our Mission</h1>
            <p>At Nima Geoenviromental services limited, our mission is to be a beacon of excellence in the realms of oil & gas services, environmental consultancy, waste management, project management, ecological consulting, environmental site assessments, sustainable land use planning, and real estate development. We are committed to safeguarding the environment, promoting sustainable practices, and delivering exceptional value to our clients and communities. Through innovation, collaboration, and a steadfast dedication to integrity, we aim to surpass expectations, drive positive change, and cultivate a harmonious balance between development and environmental conservation.
              </p>
        </div>

        <div className='OurVision' id="ourvision">
            <h1>Our Vision</h1>
            <p>Nima Geoenviromental services limited envisions a world where sustainable development is the cornerstone of progress, where every action contributes to the preservation and enhancement of our planet's ecological integrity. Our vision is to be at the forefront of this movement, leading by example through our innovative solutions and unwavering commitment to environmental stewardship.

We envision a future where our comprehensive range of services, spanning oil & gas solutions, environmental consultancy, waste management, project management, ecological consulting, environmental site assessments, sustainable land use planning, and real estate development, serve as pillars of sustainability, driving positive change and inspiring others to follow suit.

</p>
        </div>

      </div>


      {/* <div className='OurMission'>
          <h1>Our Mission</h1>
          <div className='OurMissionBody'>
          <div className='OurMissionImageWrap'>
              <img src="" alt="OurMissionImg"/>
          </div>
          <div className='OurMissionTextWrap'>
              <p>
              At Nima Geo Environmental and Real Estate Services, our mission is to be a beacon of excellence in the realms of oil & gas services, environmental consultancy, waste management, project management, ecological consulting, environmental site assessments, sustainable land use planning, and real estate development. We are committed to safeguarding the environment, promoting sustainable practices, and delivering exceptional value to our clients and communities. Through innovation, collaboration, and a steadfast dedication to integrity, we aim to surpass expectations, drive positive change, and cultivate a harmonious balance between development and environmental conservation. Our mission is to be catalysts for progress, shaping a future where environmental stewardship and economic prosperity go hand in hand, leaving a lasting legacy of sustainability for generations to come.
              </p>
          </div>
          </div>
      </div> */}



      <section className="section" id="ourteam">
        <h2>Our Team</h2>
        <p>Meet our team with diverse ranges of expertise spanning environmental sciences, real estate development, ecological consulting, and sustainable land use planning. Our team is united by a shared commitment to excellence and innovation.</p>
        
        <div className="team-member" onClick={()=>setShowDescription(1)} onPointerEnter={()=>setShowDescription(1)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={CEOImage} alt="CEO" />
            <h4>Innocent .M. Agbaeze </h4>
            <p>CE0 & MD</p>
            <div className={`overlay ${showDescription===1 ? "active" : ""}`}>
              <p>Innocent .M. Agbaeze</p>
              <p>CE0 & MD</p>
              <p>"Our CEO & MD, is a visionary leader; His strategic insights drive our company's growth and success."</p>
            </div>
          </div>

        <div className="team">
          
          <br/>
          <br/>

          <div className="team-member" onClick={()=>setShowDescription(2)} onPointerEnter={()=>setShowDescription(2)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={ED} alt="ED" />
            <h4>Jane .C.Agbaeze</h4>
            <p>ED</p>
            <div className={`overlay ${showDescription===2 ? "active" : ""}`}>
              <p>Jane .C.Agbaeze</p>
              <p>ED</p>
              <p>
              Dedicated, expert, detail-oriented leader, passionate about excellence and integrity.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(3)} onPointerEnter={()=>setShowDescription(3)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={CFO} alt="CFO" />
            <h4>Virginia .O.Iwuoha</h4>
            <p>CFO</p>
            <div className={`overlay ${showDescription===3 ? "active" : ""}`}>
              <p>Virginia .O.Iwuoha</p>
              <p>CFO</p>
              <p>The CFO, a financial steward, guides with precision, strategy, and foresight.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(4)} onPointerEnter={()=>setShowDescription(4)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={IT} alt="IT" />
            <h4>Surv. Michael Okoronkwo</h4>
            <p>Chief IT Officer</p>
            <div className={`overlay ${showDescription===4 ? "active" : ""}`}>
              <p>Surv. Michael Okoronkwo</p>
              <p>Chief IT Officer</p>
              <p>
              Expert troubleshooter, dedicated to resolving issues swiftly with precision.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(5)} onPointerEnter={()=>setShowDescription(5)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={Lawyer} alt="Lawyer" />
            <h4>Barr. Daniel O Ezechukwu</h4>
            <p>Lawyer</p>
            <div className={`overlay ${showDescription===5 ? "active" : ""}`}>
              <p>Barr. Daniel O Ezechukwu</p>
              <p>Lawyer</p>
              <p>
              Our Lawyer: Diligent, knowledgeable, ethical; safeguarding legal interests with integrity.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(6)} onPointerEnter={()=>setShowDescription(6)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={SalesManager} alt="SalesManager" />
            <h4>Gold Ntinu</h4>
            <p>Sales / Marketing Manager</p>
            <div className={`overlay ${showDescription===6 ? "active" : ""}`}>
              <p>Gold Ntinu</p>
              <p>Sales / Marketing Manager</p>
              <p>
              Dynamic, strategic leader orchestrating growth, innovation, and client relationships expertly.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(7)} onPointerEnter={()=>setShowDescription(7)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={Admin} alt="Admin" />
            <h4>Priscilla Achiaw Owusu</h4>
            <p>Admin</p>
            <div className={`overlay ${showDescription===7 ? "active" : ""}`}>
              <p>Priscilla Achiaw Owusu</p>
              <p>Admin</p>
              <p>
              Efficient, organized, diligent; ensures smooth operations with precision and professionalism.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(8)} onPointerEnter={()=>setShowDescription(8)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={hr} alt="Admin" />
            <h4>Tirik Mohamed</h4>
            <p>Human Resource - HR</p>
            <div className={`overlay ${showDescription===8 ? "active" : ""}`}>
              <p>Tirik Mohamed</p>
              <p>Human Resource - HR</p>
              <p>
              Empathetic, strategic, and efficient; fosters a positive work environment and ensures optimal talent management with dedication and professionalism.</p>
            </div>
          </div>

          <div className="team-member" onClick={()=>setShowDescription(9)} onPointerEnter={()=>setShowDescription(9)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={hse} alt="Admin" />
            <h4>Micheal  Jones</h4>
            <p>Health, Safety & Environmental Officer-HSE</p>
            <div className={`overlay ${showDescription===9 ? "active" : ""}`}>
              <p>Micheal  Jones</p>
              <p>Health, Safety and Environmental Officer - HSE</p>
              <p>
              Diligent, meticulous, and proactive; safeguards health, safety, and environmental standards with unwavering commitment and expertise.</p>
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
