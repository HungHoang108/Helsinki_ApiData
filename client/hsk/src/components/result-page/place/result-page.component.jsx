import {React, useContext} from 'react'
import { SearchTagContext } from '../../../context/search-tag/search-tag.context'
import GoogleMap from '../../google-map/google-map.component'
import '../result-page.styles.scss'

const Result = () => {
    const {result} = useContext(SearchTagContext)

  return (
    <div>
        <GoogleMap/>
    
    <div className='result-page-container'>
        <div className='result-page-subcontainer'>
        {result.map((placeData, index)=>{


            try {
                return (
                
                    <div className="resultBox" key={index}>
                        <div className="resultConent">
                            {/* <img className='img-result-page' src={placeData.description.images[1].url} alt={placeData.name.fi} /> */}
                            <h1>{placeData.name.fi}</h1>
                            <p><b>Openning hours: </b>{placeData.opening_hours? placeData.opening_hours.hours[0].opens.slice(0, 5): null} - {placeData.opening_hours? placeData.opening_hours.hours[0].closes.slice(0, 5): null}</p>
                            <a href='{placeData.info_url}'>{placeData.info_url}</a>
                            <p><b>Address:</b> {placeData.location.address.street_address}, {placeData.location.address.postal_code}, {placeData.location.address.locality}</p>
                            <p><b>Description:</b> {placeData.description.body}</p>
                        </div>
                    </div>
                    )
            } catch (error) {
                console.log(error)
            }

        })}
        </div>
    </div>
    </div>
  )
}

export default Result