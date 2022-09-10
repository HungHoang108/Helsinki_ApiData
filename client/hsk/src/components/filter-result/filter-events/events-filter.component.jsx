import {React, useContext} from 'react'
import { SearchTagContext } from '../../../context/search-tag/search-tag.context'


const EventFilter = () => {
    const {filterResult} = useContext(SearchTagContext)
    return (
    <div>
        {filterResult.map((placename, index)=>{
            return (
            <div className="resultBox" key={index}>
                <div className="resultConent">

                <h1>{placename.name.fi}</h1>
                            {/* <p><b>Staring date: </b>{placeData.event_dates.starting_day.slice(0, 10)} </p> */}
                            <a href='{placeData.info_url}'>{placename.info_url}</a>
                            <p><b>Address:</b> {placename.location.address.street_address}, {placename.location.address.postal_code}, {placename.location.address.locality}</p>
                            <p><b>Description:</b> {placename.description.intro}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default EventFilter