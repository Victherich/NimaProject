import React, { useContext } from 'react'
import "../CSS/AboutUsDropDownMenu.css"
import { Context } from './Context'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom';

const AboutUsDropDownMenu = forwardRef((props,ref) => {
  const navigate = useNavigate()

const {aboutMenuShow,setAboutMenuShow,scrollToOurTeam,scrollToOurVision,scrollToOurMission,
  scrollToWhoWeAre,scrollToWhatWeDo,
  handleWhoWeAre,handleWhatWeDo,handleOurVision,handleOurMission,handleOurTeam}=useContext(Context)


  const handleWhoWeAre2 = async()=>{
    setAboutMenuShow(false)
  await navigate("/")
  handleWhoWeAre()
    // scrollToWhoWeAre("whoweare")
  }
  
  const handleWhatWeDo2 = async()=>{
    setAboutMenuShow(false)
  await navigate("/")
  handleWhatWeDo()
  // scrollToWhatWeDo("whatwedo")
  }
  
  const handleOurMission2 = async()=>{
    setAboutMenuShow(false)
  await navigate("/")
  handleOurMission()
  // scrollToOurMission("ourmission")
  }
  
  const handleOurVision2 = async()=>{
    setAboutMenuShow(false)
  await navigate("/")
    handleOurVision()
  // scrollToOurVision("ourvision")
  }
  
  const handleOurTeam2 = async()=>{
    setAboutMenuShow(false)
  await navigate("/")
  handleOurTeam()
  // scrollToOurTeam("ourteam")
  }




  return (
    <div ref={ref} className={`AboutUsDropDownMenu ${aboutMenuShow?"active":""}`}>
      <p onClick={handleWhoWeAre2}>WHO WE ARE</p>
      <p onClick={handleWhatWeDo2}>WHAT WE DO</p>
      <p onClick={handleOurMission2}>OUR MISSION</p>
      <p onClick={handleOurVision2}>OUR VISION</p>
      <p onClick={handleOurTeam2}>OUR TEAM</p>
      
    </div>
  )
});

export default AboutUsDropDownMenu
