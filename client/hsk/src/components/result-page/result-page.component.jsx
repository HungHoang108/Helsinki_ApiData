import {React, useContext} from 'react'
import { SearchTagContext } from '../../context/search-tag/search-tag.context'

const Result = () => {
    const {result} = useContext(SearchTagContext)
  return (
    <div>
        {result.map((placeData, index)=>{
            return (
            <div className="resultBox" key={index}>
                <div className="resultConent">
                    <h1>{placeData.name.fi}</h1>
                    <p><b>Website:</b> <a href='{placeData.info_url}'>{placeData.info_url}</a></p>
                    <p><b>Address:</b> {placeData.location.address.street_address}, {placeData.location.address.postal_code}, {placeData.location.address.locality}</p>
                    <p><b>Description:</b> {placeData.description.intro}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Result