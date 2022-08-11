import React, { useState, useEffect , useRef, useContext, } from 'react';



import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
import Marker from './components/Marker';

import { Container,
  Left,
  Right,
  Mapa,
  Title,
  QtdText,
  UserLocation,
} from './styles';
import geoJson from "./geojson.json";
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import {Sk2} from '../../structure/skeleton';
import { requestPreferences } from '../../api/request';

import ListH3 from '../../structure/cards/list_h_3'

import {ButtonBR} from '../../theme/global'

import { BiCurrentLocation } from 'react-icons/bi'

const MapExplore = () => {

    const {color, font} = useContext(ThemeContext)

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2Rlc291c2EyMSIsImEiOiJjbDZlM3BqMjMwMnJ3M2NvYXJwdWk5M2RoIn0.SuRNU78Z1ub0KS0xIIs5Yw';
  

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
  
    const [ customMap, setMap ] = useState({ lng: 292929, lat: 9929292}) 

    const addMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
    
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      setMap(map)

      geoJson.features.forEach((feature) => {
        // Create a React ref
        const ref = React.createRef();
        // Create a new DOM node and save it to the React ref
        ref.current = document.createElement("div");
        // Render a Marker Component on our new DOM node
        ReactDOM.render(
          <Marker onClick={markerClicked} feature={feature} />,
          ref.current
        );
  
        // Create a Mapbox Marker at our new DOM node
        new mapboxgl.Marker(ref.current)
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });


     return () => map.remove();
    }

    useEffect(() => {
     addMap()
     
     requestPreferences().then(
      function(item) {
        setData(item)
        setLoad(false)
      })
    
    }, [])



    const setItemsMap = (item) =>{
      const data = item
      console.log(data)

      data.forEach((dat) => {
        const ref = React.createRef();
        ref.current = document.createElement("div");

        console.log(data.ID)
        
        const coordinates = [data.longitude, data.latitude]


        ReactDOM.render(
          <Marker data={data} />,
          ref.current
        );
        new mapboxgl.Marker(ref.current)
        .setLngLat(coordinates)
        .addTo(map);


      })
      }
  
    const markerClicked = (title) => {
      window.alert(title);
    };
  

    const qtds = data?.length
    const a = true;

    function handleLocation  ( item )  {
      setLng(item.longitude)
      setLat(item.latitude)
      customMap.flyTo({center: [item.latitude, item.longitude], zoom: 9, essential: true,});
    
    }

  return (
    <Container>
      <Left>  
        <div style={{marginLeft: 10,}}><Title>Encontramos <QtdText>{qtds}</QtdText> imóveis confome suas <Link style={{color: color.primary,}} to="/preferences">preferências</Link> de pesquisa. </Title>
        <div style={{width: '100%', height: 2, background: '#00000020', marginTop: 20, marginBottom: 20,}}/>
        </div>


        {load && <div>
          <Sk2/><Sk2/><Sk2/>
        </div>} 
        
        {!load && <div>
        {data?.map((data) => <ListH3 data={data} handleClick={() => handleLocation(data)} key={data.ID}/>)}
        </div> }
      </Left>
    <Right>
   
    <span>Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</span>
      {a && <Mapa ref={mapContainer}/>}

      <UserLocation>
          <BiCurrentLocation />

      </UserLocation>
    </Right>
    </Container>
  )
}

export default MapExplore