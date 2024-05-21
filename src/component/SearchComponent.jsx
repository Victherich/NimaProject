import React, { useContext, useState } from 'react';
import '../CSS/SearchComponent.css';
import Swal from 'sweetalert2'
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';

function SearchComponent() {
const {propertiesData,handleSearch}=useContext(Context)
const navigate = useNavigate()

  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [state, setState] = useState('');

  const handleSearch2 = () => {
    if (!propertyType && !bedrooms && !category && !minPrice && !maxPrice && !state) {
      // alert("Please select an option for your search");
      Swal.fire({icon:"warning",text:"Please select an option for your search"})
      return;
    }
    
    // Filter properties based on selected options
    const filteredProperties = propertiesData.filter(property => {
      return (!propertyType || property.propertyType === propertyType) &&
             (!bedrooms || property.bedrooms === parseInt(bedrooms)) &&
             (!category || property.category === category) &&
             (!minPrice || property.propertyAmount >= parseInt(minPrice)) &&
             (!maxPrice || property.propertyAmount <= parseInt(maxPrice)) &&
             (!state || property.state === state);
    });

    // Call the onSearch function with filtered properties
      handleNavigateAndSearch(filteredProperties)
  };

  const handleNavigateAndSearch = async (filteredProperties)=>{
    await navigate("/properties")
    handleSearch(filteredProperties);
  }

  return (
    <div className="search-container">
    <h2>Search Available Properties</h2>
    <div className="search-container1"> {/* Apply CSS class for styling */}
    
      <label>
        Property Type:
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">Any</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Duplex">Duplex</option>
          <option value="Flat">Flat</option>
          <option value="Semi-Detached Duplex">Semi-Detached Duplex</option>
          <option value="Shop">Shop</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Villa">Villa</option>
          <option value="Office">Office</option>
          <option value="Self Contained">Self Contained</option>
          
        </select>
      </label>
      
      <label>
        Bedrooms:
        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
          <option value="">Any</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
      
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Any</option>
          <option value="For sale">For Sale</option>
          <option value="For rent">For Rent</option>
        </select>
      </label>
      
      <label>
        Min Price:
        <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
          <option value="">Any</option>
          <option value="100000">100,000 NGN</option>
          <option value="200000">200,000 NGN</option>
          <option value="300000">300,000 NGN</option>
          <option value="400000">400,000 NGN</option>
          <option value="500000">500,000 NGN</option>
          <option value="1000000">1,000,000 NGN</option>
          <option value="5000000">5,000,000 NGN</option>
          <option value="10000000">10,000,000 NGN</option>
          <option value="20000000">20,000,000 NGN</option>
          <option value="50000000">50,000,000 NGN</option>
          <option value="100000000">100,000,000 NGN</option>
          <option value="200000000">200,000,000 NGN</option>
          <option value="500000000">500,000,000 NGN</option>
          <option value="1000000000">1,000,000,000 NGN</option>
        </select>
      </label>
      
      <label>
        Max Price:
        <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
          <option value="">Any</option>
          <option value="100000">100,000 NGN</option>
          <option value="200000">200,000 NGN</option>
          <option value="300000">300,000 NGN</option>
          <option value="400000">400,000 NGN</option>
          <option value="500000">500,000 NGN</option>
          <option value="1000000">1,000,000 NGN</option>
          <option value="5000000">5,000,000 NGN</option>
          <option value="10000000">10,000,000 NGN</option>
          <option value="20000000">20,000,000 NGN</option>
          <option value="50000000">50,000,000 NGN</option>
          <option value="100000000">100,000,000 NGN</option>
          <option value="200000000">200,000,000 NGN</option>
          <option value="500000000">500,000,000 NGN</option>
          <option value="1000000000">1,000,000,000 NGN</option>
        </select>
      </label>
      
      <label>
        State:
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Any</option>
  <option value="Abia">Abia</option>
  <option value="Abuja">Abuja</option>
  <option value="Adamawa">Adamawa</option>
  <option value="Akwa_Ibom">Akwa Ibom</option>
  <option value="Anambra">Anambra</option>
  <option value="Bauchi">Bauchi</option>
  <option value="Bayelsa">Bayelsa</option>
  <option value="Benue">Benue</option>
  <option value="Borno">Borno</option>
  <option value="Cross_River">Cross River</option>
  <option value="Delta">Delta</option>
  <option value="Ebonyi">Ebonyi</option>
  <option value="Edo">Edo</option>
  <option value="Ekiti">Ekiti</option>
  <option value="Enugu">Enugu</option>
  <option value="Gombe">Gombe</option>
  <option value="Imo">Imo</option>
  <option value="Jigawa">Jigawa</option>
  <option value="Kaduna">Kaduna</option>
  <option value="Kano">Kano</option>
  <option value="Katsina">Katsina</option>
  <option value="Kebbi">Kebbi</option>
  <option value="Kogi">Kogi</option>
  <option value="Kwara">Kwara</option>
  <option value="Lagos">Lagos</option>
  <option value="Nasarawa">Nasarawa</option>
  <option value="Niger">Niger</option>
  <option value="Ogun">Ogun</option>
  <option value="Ondo">Ondo</option>
  <option value="Osun">Osun</option>
  <option value="Oyo">Oyo</option>
  <option value="Plateau">Plateau</option>
  <option value="Rivers">Rivers</option>
  <option value="Sokoto">Sokoto</option>
  <option value="Taraba">Taraba</option>
  <option value="Yobe">Yobe</option>
  <option value="Zamfara">Zamfara</option>
        </select>
      </label>
      
      <button onClick={handleSearch2}>Search</button>
    </div>
    </div>  
  );
}

export default SearchComponent;
