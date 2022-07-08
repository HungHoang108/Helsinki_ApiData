import {React, useContext} from 'react'
import SearchBar from '../../components/search-bar/search-bar.component'
import FilterBar from '../../components/filter-bar/filter-bar.component'
import Result from '../../components/result-page/result-page.component'
import FilterResult from '../../components/filter-result/filter-result.component'
import { SearchTagContext } from '../../context/search-tag/search-tag.context'
import { useLocation } from 'react-router-dom';


const Place = () => {
  const location = useLocation()

  const {status, setRoute} = useContext(SearchTagContext)
  setRoute(location.pathname)
  return (
    <div>
        <h1>Search for places in Helsinki</h1>
        <SearchBar />
        <FilterBar />
        {status ? <FilterResult/> : <Result/>}
    </div>
  )
}

export default Place