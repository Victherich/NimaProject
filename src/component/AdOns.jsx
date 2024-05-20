import React, { useContext } from 'react'
import "../CSS/AdOns.css"
import { useNavigate } from 'react-router-dom'
import {FaAssistiveListeningSystems, FaBalanceScale, FaBeer, FaBuilding, FaChevronCircleDown, FaCreativeCommonsZero, FaDev, FaDharmachakra, FaDirections, FaHeadSideCough, FaHome, FaMobile, FaMoneyBill, FaMoneyCheck, FaOilCan, FaProductHunt, FaProjectDiagram, FaRecycle, FaRegUserCircle, FaSalesforce, FaUser, FaUsers, FaWeebly} from "react-icons/fa"
import { FaBookOpenReader, FaBuildingCircleCheck, FaHeartCircleCheck, FaOilWell, FaTriangleExclamation, FaWaterLadder } from 'react-icons/fa6'

const AdOns = () => {
 
    
  return (
    <div className='OurServicesWrap'>
        <div className='OurServices'>
            
            <div className='OurServicesBody'>
              
                <div className='OurService'>
                    <FaDharmachakra className='OurServiceBodyIcon'/>
                    <p>INSTALLATION AND MAINTENANCE OF PROFILING BEDS</p>
                    {/* <p>We offer tailored solutions to meet your unique needs, websites for your business and company, web applications, portfolio websites and lots more.</p> */}
                </div>

                

                <div className='OurService'>
                    <FaHeartCircleCheck className='OurServiceBodyIcon'/>
                    <p>MAINTENANCE & IMPROVEMENT OF PUBLIC HEALTH</p>
                    {/* <p>We help you build your intuitive and feature-rich mobile applications for iOS, Android, and more.</p> */}
                </div>

                <div className='OurService'>
                    <FaOilWell className='OurServiceBodyIcon'/>
                    <p>OIL BASE DRILLING MUD CLEAN UP</p>
                    {/* <p>We Creating visually stunning and user-friendly interfaces to enhance user experiences.</p> */}
                </div>

                <div className='OurService'>
                    <FaOilCan className='OurServiceBodyIcon'/>
                    <p>OIL SPILL RESPONSE & EVACUATION OF OILY BASE MUD</p>
                    {/* <p>Ensuring your software remains reliable and up-to-date with ongoing assistance and upkeep.</p> */}
                </div>

                <div className='OurService'>
                    <FaRecycle className='OurServiceBodyIcon'/>
                    <p>WASTE MANAGEMENT</p>
                    {/* <p>Expert oversight from inception to delivery, ensuring your projects are completed on time and within budget.</p> */}
                </div>

                {/* <div className='OurService'>
                    
                    <FaWaterLadder className='OurServiceBodyIcon'/>
                    <p>UNDERWATER WELDING</p>
                    </div> */}

                <div className='OurService'>
                    <FaBuilding className='OurServiceBodyIcon'/>
                    <p>CONSTRUCTION</p>
                    {/* <p>Designing and implementing APIs to seamlessly integrate your systems and services.</p> */}
                </div>

                <div className='OurService'>
                    <FaBuildingCircleCheck className='OurServiceBodyIcon'/>
                    <p>FACILITY MANAGEMENT</p>
                    {/* <p>Streamlining transactions by integrating secure payment gateways into your software or website, ensuring smooth and secure financial transactions for your users.</p> */}
                </div>

                <div className='OurService'>
                    <FaChevronCircleDown className='OurServiceBodyIcon'/>
                    <p>ENVIRONMENTAL IMPACT ASSESSMENT</p>
                    {/* <p>Streamlining transactions by integrating secure payment gateways into your software or website, ensuring smooth and secure financial transactions for your users.</p> */}
                </div>

                <div className='OurService'>
                    <FaProjectDiagram className='OurServiceBodyIcon'/>
                    <p>PROJECT MANAGEMENT</p>
                    {/* <p>Streamlining transactions by integrating secure payment gateways into your software or website, ensuring smooth and secure financial transactions for your users.</p> */}
                </div>

                {/* <div className='OurService'>
                    <FaBookOpenReader className='OurServiceBodyIcon'/>
                    <p>TRAININGS</p>
                   </div> */}
            </div>
            <div>
             
            </div>
        </div>
    </div>
  )
}

export default AdOns
