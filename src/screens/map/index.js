import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react'

import Marker from './components/Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background: red;
`;

const Map = () => {

  const API_KEY = 'AIzaSyCY8dXjxyHFTJt4pEgkfKGPSblXD-OnywE'

  const LOS_ANGELES_CENTER =  [34.0522, -118.2437];
  const [places, setPlaces] = useState([])

  const fetchPlaces = async () => {
    fetch('places.json')
    .then((response) => response.json())
    .then((data) => setPlaces(data.results))
  }

  useEffect(() => {
    fetchPlaces();
  }, [])

  if (!places || places.length === 0) {
    return null;
  }

  return (
    <div style={{width: 400, height: 400, 
      backgroundColor: 'red',}}>
    <Wrapper>
      <GoogleMapReact
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{key: API_KEY}}
        defaultCenter={LOS_ANGELES_CENTER}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
    </div>
  )
}

export default Map