import {React, useContext, useEffect} from 'react'

import SearchBar from '../../components/search-bar/search-bar.component'
import FilterBar from '../../components/filter-bar/filter-bar.component'
import { SearchTagContext } from '../../context/search-tag/search-tag.context'
import { useLocation } from 'react-router-dom';
import EventResult from '../../components/result-page/events/event.result-page.component'
import EventFilter from '../../components/filter-result/filter-events/events-filter.component'


const Event = () => {
  const location = useLocation()

  const {status, setRoute} = useContext(SearchTagContext)
  useEffect(()=>{
    setRoute(location.pathname)
  }, [])
  

  return (
    <div>
        <h2>Search for events in Helsinki</h2>
        <br />
        <h5>Some sample search tags: Harrastuspassi (Helsinki), helmet, games, Events
          , Pupils, Helsinki, Vantaa, Senior citizens </h5>
        <SearchBar/>
        <FilterBar/>
        {status ? <EventFilter/> : <EventResult/>}
    </div>
  )
}

export default Event