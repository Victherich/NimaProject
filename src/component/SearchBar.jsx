import React from 'react'
import { Context } from './Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const navigate = useNavigate()
    const {handleSearch,searchInputData,setSearchInputData}=useContext(Context)

    const handleNavigateAndSearch = async ()=>{
        await navigate("/properties")
        handleSearch()
    }
  return (
    <div className='PropertySearchWrap'>

            
            <div className='SearchBarWrap'>
              <input 
              type="text"
              value={searchInputData}
              onChange={(e)=>setSearchInputData(e.target.value)}
              placeholder='Enter property name or location'/><p onClick={handleNavigateAndSearch}>Search</p>
            </div>
           
        </div>
  )
}

export default SearchBar
