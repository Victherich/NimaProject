import React, { useContext, useState,useEffect } from 'react'
import { createContext } from 'react'
import Img1 from "../Images/house1.webp"
import Img2 from "../Images/house2.jpg"
import Img3 from "../Images/house3.jpg"
import Img4 from "../Images/house4.jpg"
import Swal from "sweetalert2"


export const Context = createContext();


const ContextProvider = ({children}) => {
  // const navigate=useNavigate()
    const [theme,setTheme]=useState(true)

    const propertiesData = [
      {
          "id": 1,
          "propertyType": "Duplex",
          "propertyAmount": 8000000,
          "propertyLocation": "Ikoyi",
          "category": "For rent",
          "propertyDescription": "This stunning 2 bedroom duplex offers modern living at its finest. With spacious rooms, contemporary design, and state-of-the-art amenities, it provides the perfect combination of comfort and luxury. Located in the heart of Lagos, it ensures convenience and accessibility to all urban conveniences.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":4,
          "state":"Lagos"
          
      },
      {
          "id": 2,
          "propertyType": "Flat",
          "propertyAmount": 30000000,
          "propertyLocation": "Umuahia",
          "category": "For sale",
          "propertyDescription": "This spacious flat is perfect for family living or as an investment opportunity. Featuring a modern open-plan layout, high-quality finishes, and ample natural light, it offers a comfortable and stylish lifestyle. Situated in the vibrant area of Ikorodu, it enjoys proximity to schools, shops, and recreational facilities.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":3,
          "state":"Abia"
      },
      {
          "id": 3,
          "propertyType": "Bungalow",
          "propertyAmount": 2000000,
          "propertyLocation": "Onitsha",
          "category": "For rent",
          "propertyDescription": "Nestled in the serene neighborhood of Surulere, this charming bungalow offers a peaceful retreat from the bustling city life. Boasting spacious interiors, lush greenery, and a private garden, it provides the perfect setting for relaxation and rejuvenation. With easy access to amenities and transportation, it combines convenience with tranquility.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":3,
          "state":"Anambra"
      },
      {
          "id": 4,
          "propertyType": "Flat",
          "propertyAmount": 2000000,
          "propertyLocation": "Enugu",
          "category": "For sale",
          "propertyDescription": "Experience coastal living at its best in this stylish flat located in the picturesque town of Epe. Featuring breathtaking ocean views, spacious balconies, and elegant interiors, it offers a luxurious lifestyle in a tranquil setting. With easy access to beaches, restaurants, and recreational activities, it promises the ultimate seaside retreat.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":2,
          "state":"Enugu"
      },
      {
          "id": 5,
          "propertyType": "Duplex",
          "propertyAmount": 3500000,
          "propertyLocation": "Ibadan",
          "category": "For sale",
          "propertyDescription": "Situated in the upscale neighborhood of Lekki, this exquisite 2 bedroom duplex epitomizes modern elegance and sophistication. With its sleek architectural design, premium finishes, and panoramic views of the city skyline, it offers a luxurious urban living experience. Enjoy world-class amenities and unparalleled convenience in this prestigious address.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":2,
          "state":"Ibadan"
      },
      {
          "id": 6,
          "propertyType": "Flat",
          "propertyAmount": 2000000,
          "propertyLocation": "Owerri",
          "category": "For rent",
          "propertyDescription": "Indulge in luxury living in this stunning flat located in the prestigious enclave of Victoria Island. Boasting breathtaking views of the waterfront, expansive living spaces, and world-class amenities, it offers an unparalleled urban lifestyle. With proximity to fine dining, entertainment, and cultural attractions, experience the epitome of cosmopolitan living.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":3,
          "state":"Imo"
      },
      {
          "id": 7,
          "propertyType": "Bungalow",
          "propertyAmount": 2000000,
          "propertyLocation": "Ajah",
          "category": "For rent",
          "propertyDescription": "Escape to the tranquil surroundings of Ajah in this charming bungalow nestled amidst lush greenery. Featuring cozy interiors, a private garden, and serene outdoor spaces, it offers a peaceful retreat from the hustle and bustle of city life. Enjoy easy access to amenities, shopping centers, and recreational facilities in this idyllic setting.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":2,
          "state":"Lagos"
      },
      {
          "id": 8,
          "propertyType": "Duplex",
          "propertyAmount": 20000000,
          "propertyLocation": "Asaba",
          "category": "For sale",
          "propertyDescription": "Experience the epitome of luxury living in this exquisite 2 bedroom duplex located in the prestigious neighborhood of Ikoyi. Boasting opulent interiors, bespoke furnishings, and panoramic views of the city skyline, it offers a lifestyle of unparalleled elegance and sophistication. Indulge in world-class amenities and unparalleled convenience in this exclusive address.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":4,
          "state":"Delta"
      },
      {
          "id": 9,
          "propertyType": "Bungalow",
          "propertyAmount": 1000000,
          "propertyLocation": "Asaba",
          "category": "For rent",
          "propertyDescription": "Discover the perfect blend of comfort and convenience in this cozy bungalow located in the heart of Agege. Featuring spacious interiors, a well-manicured garden, and ample outdoor space, it offers a peaceful retreat from the urban hustle. With easy access to amenities and transportation, it provides a lifestyle of ease and relaxation.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":2,
          "state":"Delta"
      },
      {
          "id": 10,
          "propertyType": "Duplex",
          "propertyAmount": 40000000,
          "propertyLocation": "Abuja",
          "category": "For rent",
          "propertyDescription": "Experience urban living at its finest in this stylish 2 bedroom duplex located in the vibrant neighborhood of Ikeja. With its contemporary design, spacious layout, and premium finishes, it offers a luxurious lifestyle in the heart of the city. Enjoy easy access to amenities, entertainment, and transportation in this prime location.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          "bedrooms":4,
          "state":"Abuja"
      }
  ]
  
console.log(propertiesData)


//decalring search input 
const [searchInputData,setSearchInputData]=useState('')
console.log(searchInputData)

//serahc Result array
const [propertiesData2,setPropertiesData2]=useState([])

//declaring number of search result state
const [resultNumber,setResultNumber]=useState(null)

//declaring original data and search data state toggle
const [originalDataShow,setOriginaldataShow]=useState(false)

//handling serach
// const handleSearch = (filteredProperties)=>{
//   if(searchInputData!==""){

//     const loadingAlert = Swal.fire({
//       title: "Loading",
//       text: "Please wait...",
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       showConfirmButton: false,
//       timer:1000
//     });

//     Swal.showLoading();


//     const searchResult=propertiesData.filter((e)=>e.propertyType.toLowerCase().includes(searchInputData.toLocaleLowerCase())
//   ||e.propertyLocation.toLocaleLowerCase().includes(searchInputData.toLocaleLowerCase()));
//   setPropertiesData2(searchResult)
//   setShowClearSearch(true)
//   setResultNumber(propertiesData2.length)
//   setOriginaldataShow(true)
//   setSearchInputData('')
//   }else{

//   }

// }

const handleSearch = (filteredProperties)=>{
  

    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      timer:1000
    });

    Swal.showLoading();


  //   const searchResult=propertiesData.filter((e)=>e.propertyType.toLowerCase().includes(searchInputData.toLocaleLowerCase())
  // ||e.propertyLocation.toLocaleLowerCase().includes(searchInputData.toLocaleLowerCase()));
  setPropertiesData2(filteredProperties)
  setShowClearSearch(true)
  setResultNumber(propertiesData2.length)
  setOriginaldataShow(true)
  setSearchInputData('')

}

//ensuring the search result number is updating
useEffect(()=>{
  setResultNumber(propertiesData2.length)
},[resultNumber,handleSearch,propertiesData2.length])

//show clear search state
const [showClearSearch,setShowClearSearch]=useState(false)


//setting search array as initial properties data at mounting of the page 
useEffect(()=>{
  setPropertiesData2(propertiesData)
},[])

//setting serach array as initial propeties data at clear search amd then clearing search input
const handleClearSearch = ()=>{
  setPropertiesData2(propertiesData)
  setSearchInputData("")
  setShowClearSearch(false)
  setResultNumber(null)
  setOriginaldataShow(false)
  setBedrooms("")
  setCategory("")
  setMaxPrice("")
  setMinPrice("")
  setState("")
  setPropertyType("")
}


//declaring about menu drop down show
const [aboutMenuShow,setAboutMenuShow]=useState(false)

//handling scroo to who we are
const scrollToWhoWeAre = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
};


//handling scroiol to what we do
const scrollToWhatWeDo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
};

//handling scroll to mission
const scrollToOurMission = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
};


//handling scroll to our vision
const scrollToOurVision = (sectionId)=>{
  const ourvision = document.getElementById("ourvision")
  if (ourvision){
      const offsetTop = ourvision.offsetTop;
      window.scrollTo({
          top:offsetTop,behavior:"smooth"
      })
  }
}


//handling scroll to our team
const scrollToOurTeam = (sectionId)=>{
  console.log("omk ok ok ")
  const ourteam = document.getElementById("ourteam")
  if (ourteam){
      const offsetTop = ourteam.offsetTop;
      window.scrollTo({
          top:offsetTop,behavior:"smooth"
      })
  }
}


//states for property page search

const [propertyType, setPropertyType] = useState('');
const [bedrooms, setBedrooms] = useState('');
const [category, setCategory] = useState('');
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');
const [state, setState] = useState('');


const handleWhoWeAre = async()=>{
  setAboutMenuShow(false)
// await navigate("/")
  scrollToWhoWeAre("whoweare")
}

const handleWhatWeDo = async()=>{
  setAboutMenuShow(false)
// await navigate("/")
scrollToWhatWeDo("whatwedo")
}

const handleOurMission = async()=>{
  setAboutMenuShow(false)
// await navigate("/")
scrollToOurMission("ourmission")
}

const handleOurVision = async()=>{
  setAboutMenuShow(false)
// await navigate("/")
scrollToOurVision("ourvision")
}

const handleOurTeam = async()=>{
  setAboutMenuShow(false)
// await navigate("/")
scrollToOurTeam("ourteam")
}



//handling scroll to projects
const scrollToProjects = (sectionId)=>{
  const projects = document.getElementById("projects")
  if (projects){
      const offsetTop = projects.offsetTop;
      window.scrollTo({
          top:offsetTop,behavior:"smooth"
      })
  }
}

//handling scroll to Gallery
const scrollToGallery = (sectionId)=>{
  const gallery = document.getElementById("gallery")
  if (gallery){
      const offsetTop = gallery.offsetTop;
      window.scrollTo({
          top:offsetTop,behavior:"smooth"
      })
  }
}


  return (
    <Context.Provider value={{theme,setTheme,
    handleSearch,
    searchInputData,
    setSearchInputData,
    propertiesData,
    propertiesData2,setPropertiesData2,resultNumber,resultNumber,originalDataShow,showClearSearch,handleClearSearch,
    aboutMenuShow,setAboutMenuShow,scrollToOurTeam,scrollToOurMission,scrollToOurVision,scrollToWhatWeDo,scrollToWhoWeAre,
    propertyType,setPropertyType,bedrooms,setBedrooms,category,setCategory,minPrice,setMinPrice,maxPrice,setMaxPrice,state,setState,
    handleWhoWeAre,handleWhatWeDo,handleOurVision,handleOurMission,handleOurTeam,
    scrollToGallery,scrollToProjects
    }}>
        {children}
    </Context.Provider>
      
    
  )
}

export default ContextProvider
