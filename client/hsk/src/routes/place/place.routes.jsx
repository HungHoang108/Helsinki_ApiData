import {React, useContext, useEffect} from 'react'
import SearchBar from '../../components/search-bar/search-bar.component'
import FilterBar from '../../components/filter-bar/filter-bar.component'
import FilterResult from '../../components/filter-result/filter-place/filter-result.component'
import Result from '../../components/result-page/place/result-page.component'
import { SearchTagContext } from '../../context/search-tag/search-tag.context'
import { useLocation } from 'react-router-dom';


const Place = () => {
  const location = useLocation()

  const {status, setRoute} = useContext(SearchTagContext)
  useEffect(()=>{
    setRoute(location.pathname)
  }, [])
  
  return (
    <div>
        <h2>Search for Restaurants, Bars, Cafe,..Places in Helsinki</h2>
        <br />
        <h5>Some sample search tags: Japanese, Vietnamese, Organic, 
        Vegetarian, StreetFood, Lunch, AliPay </h5>
        <SearchBar />
        <FilterBar />
        {status ? <FilterResult/> : <Result/>}
    </div>
  )
}

export default Place