import React from 'react';
import '../CSS/OurServices.css'; // import your CSS file
// import Service1Image from './images/service1.jpg'; // import images for services
// Import images for other services here
import Img1 from "../Images/s1.jpg"
import Img2 from "../Images/s2.jpg"
import Img3 from "../Images/s3.jpg"
import Img4 from "../Images/s4.jpg"

function OurServices() {
  return (
    <div className="our-services" id="OurServices">
      <h1>Our Services</h1>
      <div className="service-cards">
        <div className="service-card">
          <img src={Img1} alt="Service 1" />
          <div className="service-details">
            <h3>Environmental Site Assessments</h3>
            <p>Our experienced team conducts thorough environmental site assessments to evaluate potential environmental risks associated with properties. We provide detailed reports outlining findings and recommendations for mitigation measures.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={Img2} alt="Service 1" />
          <div className="service-details">
            <h3>Ecological Consulting</h3>
            <p>We offer comprehensive ecological consulting services aimed at preserving and enhancing natural habitats. From habitat assessments to endangered species surveys, our experts provide solutions that promote environmental sustainability.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={Img3} alt="Service 1" />
          <div className="service-details">
            <h3>Real Estate Development</h3>
            <p>Nima Geo specializes in real estate development projects, from residential to commercial properties. Our services encompass site selection, feasibility studies, project management, and more, ensuring successful development ventures.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={Img4} alt="Service 1" />
          <div className="service-details">
            <h3>Sustainable Land Use Planning</h3>
            <p>Our sustainable land use planning services focus on maximizing land potential while minimizing environmental impact. We collaborate with clients and stakeholders to design land-use strategies that prioritize sustainability and community well-being.</p>
          </div>
        </div>
        {/* Repeat the above structure for other services */}
      </div>
    </div>
  );
}

export default OurServices;
