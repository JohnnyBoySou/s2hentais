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
  Input, 
  Bt,
  SearchDiv,
  Logo,
} from './styles';
import ReactDOM from 'react-dom';


import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import {Sk2} from '../../structure/skeleton';
import { requestPreferences, requestSearch } from '../../api/request';

import ListH3 from '../../structure/cards/list_h_3'

import {ButtonBR} from '../../theme/global'
import logo from '../../assets/imgs/logo1.png'

import { FiSearch , FiMap,} from "react-icons/fi";

import  ImgSidebar from '../../assets/imgs/sidebar.png'

import { BiCurrentLocation } from 'react-icons/bi'

const MapExplore = () => {

    const {color, font} = useContext(ThemeContext)

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2Rlc291c2EyMSIsImEiOiJjbDZlM3BqMjMwMnJ3M2NvYXJwdWk5M2RoIn0.SuRNU78Z1ub0KS0xIIs5Yw';
  
    const navigate = useNavigate()
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-26.4868);
    const [lat, setLat] = useState(-49.069);
    const [zoom, setZoom] = useState(2);
    
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
  
    const [ customMap, setMap ] = useState({ lng: 292929, lat: 9929292}) 


    const [focused, setFocused] = useState(false)
    const [view, setView] = useState(false)

    function handleDetails  ( item ) {
      navigate(`/details/${item.ID}`)
    }

    const handleLogo = () => {
      navigate(`/app`)  
    }

    const [searchValue, setSearchValue] = useState()
    const handleSearch = (event) => {
      setSearchValue(event.target.value);
    };


  const addMap = (item) => {
    if(item.length > 1){
      
      //add map
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });

      map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true,showUserHeading: true}));
      map.addControl(new mapboxgl.NavigationControl(), 'top-right',)
        
      setMap(map)


      item.forEach((item) => {

         const ref = React.createRef();
         ref.current = document.createElement("div");
          ReactDOM.render(
          <Marker  handleDetails={handleDetails} data={item}  />,
          ref.current
        );

      new mapboxgl.Marker(ref.current)
          .setLngLat([item.longitude, item.latitude])
          .addTo(map);
      });


     return () => map.remove();
    }else{console.log('error request')}}

    useEffect(() => {
      handlePreferences()
    }, [])


    const handlePreferences = () => {
      setLoad(true)
      requestPreferences().then(
        function(item) {
          setData(item)
          setLoad(false)
          addMap(item)
        })  
    }

    const handleGetSearch = () => {
      setLoad(true)
      requestSearch(searchValue).then(
        function(item) {
          setData(item)
          setLoad(false)
          addMap(item)
        })  
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleGetSearch()
      }
    }
  

    const qtds = data?.length


    const handleLocation =  ( item ) => {
      setLng(item.longitude)
      setLat(item.latitude)
      customMap.flyTo({center: [item.latitude, item.longitude], zoom: 9, essential: true,});
    
    }

    const heightMax = window.innerHeight;
  return (


    <Container style={{height: heightMax}}>
      <Left style={{height: 0.94 * heightMax}} >  

      <Logo src={logo} onClick={handleLogo}/>

      <SearchDiv>
        <Input placeholder='Pesquisar imóvel...'  
        onFocus={() => setView(true)} 
        onBlur={() => setView(false)} 
        value={searchValue} 
        view={view}
        onKeyDown={handleKeyDown}
        onChange={handleSearch} />

        <Bt type="submit" onClick={handleGetSearch} focus={focused}>
          <FiSearch size={18} color="#fff"/>
        </Bt>
      </SearchDiv>


        <div style={{marginLeft: 10,}}><Title>Encontramos <QtdText>{qtds}</QtdText> imóveis confome suas <Link style={{color: color.primary,}} to="/preferences">preferências</Link> de pesquisa. </Title>
        <div style={{width: '100%', height: 2, background: '#00000020', marginTop: 20, marginBottom: 20,}}/>
        </div>


        {load && <div>
          <Sk2/><Sk2/><Sk2/> 
          
        </div>} 
        
        {!load && <div>
        {data?.map((data) => <ListH3 data={data} handleClick={() => handleLocation(data)} key={data.ID}/>)}
        </div> }

        <div style={{flexDirection: 'column', display: 'flex', justifyItems: 'center', }}>

          <Title style={{fontFamily: 'Font_Medium', textAlign: 'center', marginTop: 50}}>Você chegou ao final da lista!</Title>
          <img style={{width: 200, height: 130, objectFit: 'cover', borderRadius: 12, marginTop: 10, marginBottom: 20,alignSelf: 'center'}} src={ImgSidebar}/>
        </div>
      </Left>
    <Right>
   
    
      <Mapa style={{height: 0.98 * heightMax, }} ref={mapContainer}/>

     
    </Right>
    </Container>
  )
}

export default MapExplore