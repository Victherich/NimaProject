import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './component/About';
import ContactUs from './component/ContactUs';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import OurServices from './component/OurServices';
import ScrollToTop from "./component/ScrollToTop"
import Properties from './component/Properties';
import Career from './component/Career';
import Blogs from './component/Blogs';
import { Context } from './component/Context';
import AboutUsDropDownMenu from './component/AboutUsDropDownMenu';
import OurProductCollections from './component/OurProductCollections';



const App = () => {
  return (
   <BrowserRouter>
   <ScrollToTop/>
   <Header/>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          {/* <Route path="/aboutus" element={<About/>}/> */}
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/ourservices" element={<OurServices/>}/>
          <Route path="/properties" element={<Properties/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/aboutusUI" element={<AboutUsDropDownMenu/>}/>
          <Route path="/ourproductcollections" element={<OurProductCollections/>}/>
          {/* <Route path="/context" element={<Context/>}/> */}
        </Routes>
      <Footer/>
   </BrowserRouter>
    
  )
}

export default App
