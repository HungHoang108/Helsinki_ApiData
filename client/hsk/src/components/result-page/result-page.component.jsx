import {React, useContext} from 'react'
import { SearchTagContext } from '../../context/search-tag/search-tag.context'
import './result-page.styles.css'

const Result = () => {
    const {result} = useContext(SearchTagContext)

  return (
    <div>
        {result.map((placeData, index)=>{


            try {
                return (
                
                    <div className="resultBox" key={index}>
                        <div className="resultConent">
                            <h1>{placeData.name.fi}</h1>
                            
                            {/* {placeData.description.images[0].url ?  <img className='result-page-img' src={placeData.description.images[0].url} alt={placeData.name.fi} /> : null} */}
                            <a href='{placeData.info_url}'>{placeData.info_url}</a>
                            <p><b>Address:</b> {placeData.location.address.street_address}, {placeData.location.address.postal_code}, {placeData.location.address.locality}</p>
                            <p><b>Description:</b> {placeData.description.body}</p>
                            
                            {/* <img className='result-page-img' src={imageUrl ? imageUrl : "nat-2.jpg"} alt={placeData.name.fi} />  */}
                            
                            {/* <img className='result-page-img' src={placeData.description.images[0].url} alt={placeData.name.fi} /> */}
                            
                        </div>
                    </div>
                    )
            } catch (error) {
                console.log(error)
            }


            // return (
                
            // <div className="resultBox" key={index}>
            //     <div className="resultConent">
            //         <h1>{placeData.name.fi}</h1>
                    
            //         {/* <p><b>Website:</b> <a href='{placeData.info_url}'>{placeData.info_url}</a></p> */}
            //         <a href='{placeData.info_url}'>{placeData.info_url}</a>
            //         <p><b>Address:</b> {placeData.location.address.street_address}, {placeData.location.address.postal_code}, {placeData.location.address.locality}</p>
            //         <p><b>Description:</b> {placeData.description.body}</p>
            //         {placeData.description.images[0].url ? 
            //         <img className='result-page-img' src={placeData.description.images[0].url} alt={placeData.name.fi} /> :
            //         null}
            //         {/* <img className='result-page-img' src={placeData.description.images[0].url} alt={placeData.name.fi} /> */}
                    
            //     </div>
            // </div>
            // )
        })}
    </div>
  )
}

export default Result