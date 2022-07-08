import {React, useContext} from 'react'
import { SearchTagContext } from '../../context/search-tag/search-tag.context';

const FilterBar = () => {
    const { result, setStatus, setFilterResult} = useContext(SearchTagContext)

    function handlefilter(event){
        
        const inputforfilter = event.target.value.toLowerCase();
        const newPlaceArray = result.filter((resultfilter)=>{ //filter will return a new array which meet the condition
          return resultfilter.name.fi.toLowerCase().includes(inputforfilter) 
          // use another usestate to set new filtered results, then use the state to return the filter result
        })
        setFilterResult(newPlaceArray)
        setStatus(true)
      }

  return (
    <div>
        <form>
            <input
            placeholder="filter results"  
            onChange={handlefilter}
            />
            <button className="searchfromresult">Find</button>
        </form>
    </div>
  )
}

export default FilterBar

