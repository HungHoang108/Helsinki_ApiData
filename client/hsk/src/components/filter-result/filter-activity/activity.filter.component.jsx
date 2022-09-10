import {React, useContext} from 'react'
import { SearchTagContext } from '../../../context/search-tag/search-tag.context'


const ActivityFilter = () => {
    const {filterResult} = useContext(SearchTagContext)
    return (
    <div>
        {filterResult.map((placeData, index)=>{
            return (
            <div className="resultBox" key={index}>
                <div className="resultConent">

                <img style={{width: 600}} className='img-result-page' src={placeData.description.images[0].url} alt={placeData.name.fi} />
                            <h1>{placeData.name.fi}</h1>
                            <a href='{placeData.info_url}'>{placeData.info_url}</a>
                            <p><b>Address:</b> {placeData.location.address.street_address}, {placeData.location.address.postal_code}, {placeData.location.address.locality}</p>
                            <p><b>Duration: </b> {placeData.where_when_duration.duration ? placeData.where_when_duration.duration : null} </p>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default ActivityFilter