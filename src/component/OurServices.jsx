import React from 'react';
import '../CSS/OurServices.css'; // import your CSS file
// import Service1Image from './images/service1.jpg'; // import images for services
// Import images for other services here
import Img1 from "../Images/site assesment.jpeg"
import Img2 from "../Images/ecological consult.jpeg"
import Img3 from "../Images/real estate development.jpeg"
import Img4 from "../Images/land use plan.jpeg"
import Img5 from "../Images/oil and gas2.jpeg"
import Img6 from "../Images/environmental consult.jpeg"
import Img7 from "../Images/waste management 3.jpeg"
import Img8 from "../Images/project management.jpeg"
import AdOns from "../component/AdOns"
import { useState,useRef,useEffect } from 'react';

function OurServices() {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state when the component is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsVisible2(true);
          observer.unobserve(componentRef.current);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Observe the component's reference
    observer.observe(componentRef.current);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);



  return (
    <div>
      <div className="our-services" id="OurServices">
      <h1>Our Services</h1>
      <div className="service-cards">
      <div className="service-card animate__animated animate__slideInLeft">
          <img src={Img1} alt="Service 1" />
          <div className="service-details">
            <h3>Environmental Site Assessments</h3>
            <p>Our experienced team conducts thorough environmental site assessments to evaluate potential environmental risks associated with properties. We provide detailed reports outlining findings and recommendations for mitigation measures.</p>
          </div>
        </div>

        <div ref={componentRef} className="service-card animate__animated animate__slideInRight">
          <img src={Img2} alt="Service 1" />
          <div className="service-details">
            <h3>Ecological Consulting</h3>
            <p>We offer comprehensive ecological consulting services aimed at preserving and enhancing natural habitats. From habitat assessments to endangered species surveys, our experts provide solutions that promote environmental sustainability.</p>
          </div>
        </div>

        <div className="service-card animate__animated animate__slideInLeft" >
          <img src={Img3} alt="Service 1" />
          <div className="service-details">
            <h3>Real Estate Development</h3>
            <p>Nima Geo specializes in real estate development projects, from residential to commercial properties. Our services encompass site selection, feasibility studies, project management, and more, ensuring successful development ventures.</p>
          </div>
        </div>

        <div className="service-card animate__animated animate__slideInRight">
          <img src={Img4} alt="Service 1" />
          <div className="service-details">
            <h3>Sustainable Land Use Planning</h3>
            <p>Our sustainable land use planning services focus on maximizing land potential while minimizing environmental impact. We collaborate with clients and stakeholders to design land-use strategies that prioritize sustainability and community well-being.</p>
          </div>
        </div>

        <div className="service-card animate__animated animate__slideInLeft">
          <img src={Img5} alt="Service 1" />
          <div className="service-details">
            <h3>Oil and Gas services</h3>
            <p>We specialize in tailored solutions for the oil and gas industry, ensuring operational efficiency, regulatory compliance, and environmental stewardship throughout the lifecycle. Our expertise spans exploration, drilling, production, and distribution.</p>
          </div>
        </div>

        <div className="service-card animate__animated animate__slideInRight">
          <img src={Img6} alt="Service 1" />
          <div className="service-details">
            <h3>Environmental Consultancy Services:</h3>
            <p>Our consultancy offers strategic advice and technical expertise to address environmental challenges, ensuring regulatory compliance and sustainability. From assessments to mitigation strategies, we deliver solutions that protect the environment and enhance business performance.</p>
          </div>
        </div>

        <div className="service-card animate__animated animate__slideInLeft">
          <img src={Img7} alt="Service 1" />
          <div className="service-details">
            <h3>Waste Management:</h3>
            <p>We provide waste management solutions to minimize environmental impact and maximize resource efficiency. Our services include waste reduction, recycling, and hazardous waste management, contributing to a cleaner, healthier environment.</p>
          </div>
        </div>

        <div className="service-card animate__animated animate__slideInRight ">
          <img src={Img8} alt="Service 1" />
          <div className="service-details">
            <h3>Project Management</h3>
            <p>Our project management services ensure successful project execution from inception to completion. With a focus on stakeholder engagement, risk management, and collaboration, we deliver projects on time, within budget, and to the highest quality standards.</p>
          </div>
        </div>
        {/* Repeat the above structure for other services */}
      </div>
    </div>
    <AdOns/>
    </div>
  );
}

export default OurServices;
