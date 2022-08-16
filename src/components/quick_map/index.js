import React, { useContext , useState, useEffect, useRef,} from 'react';
import { Link } from 'react-router-dom';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
import ReactDOM from 'react-dom';

import Marker from './components/Marker';

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


    const item = props?.item;
    const { color } = useContext(ThemeContext)

    const [ customMap, setMap ] = useState({ lng: 32, lat: 32}) 
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(Number(item.longitude));
    const [lat, setLat] = useState(Number(item.latitude));
    const [zoom, setZoom] = useState(4);

    const a = false;
    
    const zoomin = () => {
      setZoom(4)
      
      customMap.flyTo({center: [item.latitude, item.longitude], zoom: zoom, essential: true,});
    }
  
   const addMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });


      const ref = React.createRef();
      ref.current = document.createElement("div");
      ReactDOM.render(<div onClick={zoomin}><Marker  data={item}  /></div>, ref.current);

      new mapboxgl.Marker(ref.current)
         .setLngLat([item.longitude, item.latitude])
         .addTo(map);

      

      map.addControl(new mapboxgl.NavigationControl(), 'top-right',)
      setMap(map)
      return () => map.remove();
    }


  

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2Rlc291c2EyMSIsImEiOiJjbDZlM3BqMjMwMnJ3M2NvYXJwdWk5M2RoIn0.SuRNU78Z1ub0KS0xIIs5Yw';

    const handleLink = () => {
      const URL = `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`
      window.open(URL, '_blank', 'noopener,noreferrer');
    }

    useEffect(() => {
      addMap()
      }, [a]);
    
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
              position: 'absolute', marginTop: 20, zIndex: 99, cursor: 'pointer'}}>
                <Cords onClick={handleLink}>Abrir no Google Maps &#127758;</Cords>
                
               {a && <div style={{position: 'absolute', top: 180, left: 0,}}>
                    <ZoomIn>+</ZoomIn>
                    <ZoomOut>-</ZoomOut>
                </div>}
            </div>


          <Map style={{ borderRadius: 12, height: 300,}} ref={mapContainer}></Map>


        </Right>
    </Container>
  );
};

export default QuickMap;