import { useContext, useEffect} from 'react'
import { SearchTagContext } from '../../context/search-tag/search-tag.context';

import { Map, Marker, Overlay } from "pigeon-maps";

const GoogleMap = () => {
    const {result} = useContext(SearchTagContext)
  return (
    <div>
        <Map
          mx={20}
          width={850}
          height={400}
          defaultCenter={[60.17114299375396, 24.956196766060668]}
          defaultZoom={11}
        >
          {result.map((place, index) => (
            <Overlay key={index} anchor={[place.location.lat, place.location.lon]}>
              <Marker
                width={30}
                anchor={[place.location.lat, place.location.lon]}
                
                offset={[0, 1000]}
              />
              <p>{place.name.en}</p>
            </Overlay>
          ))}
        </Map>
    </div>
  )
}

export default GoogleMap