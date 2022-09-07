import {React, useContext} from 'react'
import { SearchTagContext } from '../../context/search-tag/search-tag.context'
import axios from "axios"


const SearchBar = () => {
    const {tagQuery, settagQuery, setResult, route, setStatus} = useContext(SearchTagContext)

    function handleTag(event){
        const {name, value} = event.target
        settagQuery(prev =>{
          return {
            ...prev, 
            [name] : value
          }
        })
      }

      function searchNow(event) {

        axios.post(`http://localhost:9000${route}`, tagQuery)
        .then(response => setResult(response.data))
        .catch(error =>{
          console.log(error)})
    
        event.preventDefault();
        setStatus(false)
   
    }

    
  return (
    <div>
        <form>
          <input
            name="tag"
            type="search"
            placeholder="search tag"  
            onChange={handleTag}
            value= {tagQuery.tag}
          />
          <button onClick={searchNow}>Search</button>
        </form>
    </div>
  )
}

export default SearchBar