import React, { useContext, useState,useEffect } from 'react'
import { createContext } from 'react'
import Img1 from "../Images/house1.webp"
import Img2 from "../Images/house2.jpg"
import Img3 from "../Images/house3.jpg"
import Img4 from "../Images/house4.jpg"
import Swal from "sweetalert2"

export const Context = createContext();

const ContextProvider = ({children}) => {

    const [theme,setTheme]=useState(true)

    const propertiesData = [
      {
          "id": 1,
          "propertyType": "2 Bedroom Duplex",
          "propertyAmount": 700000,
          "propertyLocation": "Lagos",
          "category": "For rent",
          "propertyDescription": "This stunning 2 bedroom duplex offers modern living at its finest. With spacious rooms, contemporary design, and state-of-the-art amenities, it provides the perfect combination of comfort and luxury. Located in the heart of Lagos, it ensures convenience and accessibility to all urban conveniences.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
          
      },
      {
          "id": 2,
          "propertyType": "Flats",
          "propertyAmount": 1000000,
          "propertyLocation": "Ikorodu",
          "category": "For sale",
          "propertyDescription": "This spacious flat is perfect for family living or as an investment opportunity. Featuring a modern open-plan layout, high-quality finishes, and ample natural light, it offers a comfortable and stylish lifestyle. Situated in the vibrant area of Ikorodu, it enjoys proximity to schools, shops, and recreational facilities.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 3,
          "propertyType": "Bungalow",
          "propertyAmount": 2000000,
          "propertyLocation": "Surulere",
          "category": "For rent",
          "propertyDescription": "Nestled in the serene neighborhood of Surulere, this charming bungalow offers a peaceful retreat from the bustling city life. Boasting spacious interiors, lush greenery, and a private garden, it provides the perfect setting for relaxation and rejuvenation. With easy access to amenities and transportation, it combines convenience with tranquility.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 4,
          "propertyType": "Flats",
          "propertyAmount": 200000,
          "propertyLocation": "Epe",
          "category": "For sale",
          "propertyDescription": "Experience coastal living at its best in this stylish flat located in the picturesque town of Epe. Featuring breathtaking ocean views, spacious balconies, and elegant interiors, it offers a luxurious lifestyle in a tranquil setting. With easy access to beaches, restaurants, and recreational activities, it promises the ultimate seaside retreat.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 5,
          "propertyType": "2 Bedroom duplex",
          "propertyAmount": 500000,
          "propertyLocation": "Lekki",
          "category": "For sale",
          "propertyDescription": "Situated in the upscale neighborhood of Lekki, this exquisite 2 bedroom duplex epitomizes modern elegance and sophistication. With its sleek architectural design, premium finishes, and panoramic views of the city skyline, it offers a luxurious urban living experience. Enjoy world-class amenities and unparalleled convenience in this prestigious address.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 6,
          "propertyType": "Flats",
          "propertyAmount": 2000000,
          "propertyLocation": "Victoria Island",
          "category": "For rent",
          "propertyDescription": "Indulge in luxury living in this stunning flat located in the prestigious enclave of Victoria Island. Boasting breathtaking views of the waterfront, expansive living spaces, and world-class amenities, it offers an unparalleled urban lifestyle. With proximity to fine dining, entertainment, and cultural attractions, experience the epitome of cosmopolitan living.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 7,
          "propertyType": "Bungalow",
          "propertyAmount": 100000,
          "propertyLocation": "Ajah",
          "category": "For rent",
          "propertyDescription": "Escape to the tranquil surroundings of Ajah in this charming bungalow nestled amidst lush greenery. Featuring cozy interiors, a private garden, and serene outdoor spaces, it offers a peaceful retreat from the hustle and bustle of city life. Enjoy easy access to amenities, shopping centers, and recreational facilities in this idyllic setting.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 8,
          "propertyType": "2 Bedroom Duplex",
          "propertyAmount": 1000000,
          "propertyLocation": "Ikoyi",
          "category": "For sale",
          "propertyDescription": "Experience the epitome of luxury living in this exquisite 2 bedroom duplex located in the prestigious neighborhood of Ikoyi. Boasting opulent interiors, bespoke furnishings, and panoramic views of the city skyline, it offers a lifestyle of unparalleled elegance and sophistication. Indulge in world-class amenities and unparalleled convenience in this exclusive address.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 9,
          "propertyType": "Bungalow",
          "propertyAmount": 1000000,
          "propertyLocation": "Agege",
          "category": "For rent",
          "propertyDescription": "Discover the perfect blend of comfort and convenience in this cozy bungalow located in the heart of Agege. Featuring spacious interiors, a well-manicured garden, and ample outdoor space, it offers a peaceful retreat from the urban hustle. With easy access to amenities and transportation, it provides a lifestyle of ease and relaxation.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
      },
      {
          "id": 10,
          "propertyType": "2 Bedroom Duplex",
          "propertyAmount": 1000000,
          "propertyLocation": "Ikeja",
          "category": "For rent",
          "propertyDescription": "Experience urban living at its finest in this stylish 2 bedroom duplex located in the vibrant neighborhood of Ikeja. With its contemporary design, spacious layout, and premium finishes, it offers a luxurious lifestyle in the heart of the city. Enjoy easy access to amenities, entertainment, and transportation in this prime location.",
          "pic1": `${Img1}`,
          "pic2": `${Img2}`,
          "pic3": `${Img3}`,
          "pic4": `${Img4}`,
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
const handleSearch = ()=>{
  if(searchInputData!==""){

    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      timer:1000
    });

    Swal.showLoading();


    const searchResult=propertiesData.filter((e)=>e.propertyType.toLowerCase().includes(searchInputData.toLocaleLowerCase())
  ||e.propertyLocation.toLocaleLowerCase().includes(searchInputData.toLocaleLowerCase()));
  setPropertiesData2(searchResult)
  setShowClearSearch(true)
  setResultNumber(propertiesData2.length)
  setOriginaldataShow(true)
  setSearchInputData('')
  }else{

  }

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
}





  return (
    <Context.Provider value={{theme,setTheme,
    handleSearch,
    searchInputData,
    setSearchInputData,
    propertiesData,
    propertiesData2,setPropertiesData2,resultNumber,resultNumber,originalDataShow,showClearSearch,handleClearSearch,
    }}>
        {children}
    </Context.Provider>
      
    
  )
}

export default ContextProvider
