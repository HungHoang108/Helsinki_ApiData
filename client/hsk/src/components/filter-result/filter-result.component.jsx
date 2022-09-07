import {React, useContext} from 'react'
import { SearchTagContext } from '../../context/search-tag/search-tag.context'


const FilterResult = () => {
    const {filterResult} = useContext(SearchTagContext)
    return (
    <div>
        {filterResult.map((placename, index)=>{
            return (
            <div className="resultBox" key={index}>
                <div className="resultConent">
                    <h1>{placename.name.fi}</h1>
                    <p><b>Openning hours: </b>{placename.opening_hours.hours[0].opens} - {placename.opening_hours.hours[0].closes}</p>

                    <p><b>Website:</b> <a href='{placename.info_url}'>{placename.info_url}</a></p>
                    <p><b>Address:</b> {placename.location.address.street_address}, {placename.location.address.postal_code}, {placename.location.address.locality}</p>
                    <p><b>Description:</b> {placename.description.body}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default FilterResult