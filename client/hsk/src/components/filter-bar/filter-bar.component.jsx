import {React, useContext} from 'react'
import { SearchTagContext } from '../../context/search-tag/search-tag.context';

import './filter-bar.styles.css'

const FilterBar = () => {
    const { result, setStatus, setFilterResult} = useContext(SearchTagContext)

    function handlefilter(event){
        
        const inputforfilter = event.target.value.toLowerCase();
        const newPlaceArray = result.filter((resultfilter)=>{ //filter will return a new array which meet the condition
          return resultfilter.name.fi.toLowerCase().includes(inputforfilter) 
        })
        setFilterResult(newPlaceArray)
        setStatus(true)
        // inputforfilter == null? setStatus(false) : ;
      }

  return (
    <div>
        <form>
            <input
            placeholder="filter results"  
            onChange={handlefilter}
            className="filter-bar"
            />
            <button className="searchfromresult">Find</button>
        </form>
    </div>
  )
}

export default FilterBar

