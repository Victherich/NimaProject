import React from 'react';
import '../CSS/Career.css'; // Import CSS file for styling
import { FaBox, FaBoxOpen, FaDirections, FaEnvelope, FaHeart, FaIdCard, FaProcedures } from 'react-icons/fa';
import { FaSquareSteam } from 'react-icons/fa6';
import Swal from 'sweetalert2'

const Career = () => {

    const handleAlert =()=>{
        Swal.fire({icon:"success",text:"coming soon..."})
    }

  return (
    <div className='CareerWrap'>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>WORK WITH US</h1>
          <p>Join our team and make a difference in the world.</p>
          <a href="#jobs" className="scroll-down-btn">View Jobs</a>
        </div>
      </section>

      {/* About Working Here Section */}
      <section className="about-section">
      <h1>About Working Here</h1>
        <div className="container">
          
          <div className="CareerCard">
            <FaBoxOpen className="CareerIcon"/>
            <div className="text">
              <h3>Diverse Opportunities:</h3>
              <p> Nima Geoenviromental services limited offers varied roles in environmental consulting and real estate, providing employees with diverse career paths and growth opportunities.</p>
            </div>
          </div>

          <div className="CareerCard">
            <FaSquareSteam className="CareerIcon"/>
            <div className="text">
              <h3>Commitment to Sustainability:</h3>
              <p> Employees contribute to impactful sustainability projects, aligning with Our dedication to environmental conservation and responsible real estate practices.</p>
            </div>
          </div>

          <div className="CareerCard">
            <FaBox className="CareerIcon"/>
            <div className="text">
              <h3>Professional Development:</h3>
              <p>Nima Geoenviromental services limited fosters employee growth through training and mentorship, empowering individuals to advance their skills and excel in their careers.</p>
            </div>
          </div>

          <div className="CareerCard">
            <FaIdCard className="CareerIcon"/>
            <div className="text">
              <h3>Collaborative Work Environment:</h3>
              <p>Encouraging teamwork and inclusivity, Nima Geoenviromental services limited cultivates a supportive culture where diverse perspectives thrive and innovation flourishes.</p>
            </div>
          </div>

          <div className="CareerCard">
            <FaDirections className="CareerIcon"/>
            <div className="text">
              <h3>Industry Leadership: </h3>
              <p>As a leading player in environmental and real estate sectors, Nima Geoenviromental services limited offers employees the chance to work on prestigious projects and be part of groundbreaking initiatives.</p>
            </div>
          </div>

          <div className="CareerCard">
            <FaHeart className="CareerIcon"/>
            <div className="text">
              <h3>Employee Wellbeing:</h3>
              <p>Valuing health and happiness, Nima Geoenviromental services limited prioritizes employee wellbeing with competitive benefits, flexible work arrangements, and initiatives supporting work-life balance.</p>
            </div>
          </div>
          {/* Repeat the CareerCard structure for the remaining points */}
          {/* Two CareerCards in one line */}
        </div>
      </section>

      {/* Background Image Section */}
      <section className="bg-image-section"></section>

      {/* Open Positions Section */}
      <section id="jobs" className="open-positions">
      <h1>Open Positions</h1>
        <div className="container">
          
          <div className="job">
            <h3>Environmental Consultant:</h3>
            <p>Conduct environmental assessments, develop mitigation strategies, and provide expertise on regulatory compliance.</p>
            <button onClick={handleAlert}>Apply</button>
          </div>

          <div className="job">
            <h3>Real Estate Agent</h3>
            <p>Assist clients in buying, selling, and renting properties, leveraging market knowledge and negotiation skills to achieve successful transactions.</p>
            <button onClick={handleAlert}>Apply</button>
          </div>

          <div className="job">
            <h3>Project Manager</h3>
            <p>Oversee environmental and real estate projects, coordinate teams, manage budgets, and ensure timely delivery of deliverables.</p>
            <button onClick={handleAlert}>Apply</button>
          </div>
          {/* Repeat the job structure for the remaining positions */}
        </div>
      </section>
    </div>
  );
}

export default Career;
