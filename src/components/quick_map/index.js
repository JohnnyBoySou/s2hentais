import React, { useContext , useState, useEffect, useRef,} from 'react';
import { Link } from 'react-router-dom';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Spacing,
  Title,
  Label,

  Right,
  Left,
  Hr,
  Tag,
  Cords,
  ZoomIn,
  ZoomOut,

  Map,
} from './styles';
import { ButtonBR, Ripple } from '../../theme/global';

const QuickMap = ( props ) => {
    const location = props.location;
    const { color, title } = useContext(ThemeContext)
    const late = location?.lat
    const long = location?.long

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    const a = false;

  
    const API_KEY_MAPS = "AIzaSyCY8dXjxyHFTJt4pEgkfKGPSblXD-OnywE"
   

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2Rlc291c2EyMSIsImEiOiJjbDZlM3BqMjMwMnJ3M2NvYXJwdWk5M2RoIn0.SuRNU78Z1ub0KS0xIIs5Yw';


    useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
      });
      });
    
  return (
    
    <Container> 

      {a &&  <Left>
        <div style={{padding: 32, }}>
            <Label>Este imóvel é</Label>
            <Title>Bem Localizado!</Title>
        </div>
        <Hr/>
             <div style={{padding:12, paddingTop: 12, display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
        </div>

        </Left> }

    <div style={{marginBottom: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

      <Title style={{color: color.title, fontSize: 28, marginTop: 6,}}>Mapa</Title>
      {a && <ButtonBR>Abrir no Google Maps</ButtonBR>}
   
   </div>
        <Right>



            <div style={{justifyContent: 'space-between', paddingRight: 20, display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 20,
              position: 'absolute', marginTop: 20,}}>
                <Cords>Abrir no Google Maps &#127758;</Cords>
                
                <div style={{position: 'absolute', top: 180, left: 0,}}>
                    <ZoomIn>+</ZoomIn>
                    <ZoomOut>-</ZoomOut>
                </div>
            </div>


          <Map style={{height: 300, borderRadius: 12,}} ref={mapContainer}></Map>


        </Right>
    </Container>
  );
};

export default QuickMap;