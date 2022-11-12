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
  Routes,
  Route,
  BtSearch,
} from './styles';
import ReactDOM from 'react-dom';

import Select from 'react-select' 
import Switch from 'react-switch';

import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import {Sk2} from '../../structure/skeleton';
import { requestPreferences, requestSearch } from '../../api/request';

import ListH3 from '../../structure/cards/list_h_3'

import {ButtonBR, ButtonChecked} from '../../theme/global'
import logo from '../../assets/imgs/logo1.png'

import { FiSearch , FiMap,} from "react-icons/fi";

import  ImgSidebar from '../../assets/imgs/sidebar.png'

import { MdKeyboardArrowRight } from 'react-icons/md'
import Bairro from '../../new_components/bairro'

import useScrollPosition from '../../utils/scrollPosition'

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

    const [mapView, setMapView] = useState(true)


    const [focused, setFocused] = useState(false)
    const [view, setView] = useState(false)

    const scroll = document.getElementById('scroll')
    const { scrollX, scrollY } = useScrollPosition('scroll')

    const searchBt = ( ) => {
      console.log(scrollY)
      if (scrollY > 300) {
        setSearchButton(true)
      }else{
        setSearchButton(false)
      }
    }


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
    }, [mapView])

    useEffect(() => {
      searchBt()
    },)


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


    const options = [
      { value: 'Popular', label: 'Popular' },
      { value: 'Recentes', label: 'Recentes' },
      { value: 'Aleatorio', label: 'Aleatório' }
    ]

    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? color.light : color.title,
       fontFamily: font.medium,
      }),
      control: () => ({
        border: '1px solid #00000020',
       display: 'flex',
       borderRadius: 5,  
       fontFamily: font.medium,
        flexDirection: 'row'
      }),
      indicatorSeparator: () => ({
        width: 0,
        display: 'none'
      }),

      dropdownIndicator : () => ({
        color: "#000",
        fontSize: 28,
        marginRight: 5,
        marginLeft: -5,
      })
    }

    const a = false

    const [bairro, setBairro] = useState(true)
    const [searchButton, setSearchButton] = useState(false) 
    
return (


    <Container style={{height: heightMax}}>
      <Left id="scroll" style={{height: 0.94 * heightMax, width: mapView ? '40%' : '100%' }} >  

      {searchButton &&  <BtSearch type="submit" onClick={handleGetSearch} focus={focused}>
          <FiSearch size={18} color="#fff"/>
        </BtSearch>}

      <div  style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Routes>
          <Route  onClick={handleLogo}>Mapa</Route>
          <MdKeyboardArrowRight/>
          <Route style={{textDecoration: 'underline', color: color.title,}}>Feed</Route>
        </Routes>


        <div style={{fontFamily: font.book, display: 'flex'}}>
          <span style={{marginTop: 8, marginRight: 6,}}>Mapa Grande</span> 
      
      <div style={{marginTop: 6,}}>
        <Switch 
        onChange={() => setMapView(!mapView)}
        checked={mapView} checkedIcon={false} uncheckedIcon={false}
        height={14} width={30} handleDiameter={20}
        offColor="#D1D1D1" onColor="#8D9FFF"
        onHandleColor={color.primary} offHandleColor="#9C9C9C"
        /></div>
      </div>


      </div>

      <div style={{width: '97%', marginLeft: 10, height: 2, background: '#00000020', marginTop: 20, marginBottom: 20,}}/>
       
      <div style={{marginLeft: 10,}}><Title>Encontramos <QtdText>{qtds}</QtdText> imóveis conforme suas <Link style={{color: color.primary,}} to="/preferences">preferências</Link> de pesquisa. </Title>
       </div>



    {a &&  <Logo src={logo} onClick={handleLogo}/>}

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


      <ButtonChecked style={{borderRadius:100, marginBottom: 5, marginLeft: 10,}} checked={bairro} onClick={() => setBairro(!bairro)}>Por Bairro</ButtonChecked>
     {!bairro && <div style={{marginTop: 20, marginLeft: 10, marginRight: 10}}>
      <Bairro /></div>}



        {load && <div>
          <Sk2/><Sk2/><Sk2/> 
          
        </div>} 

        
      <div style={{width: '97%', marginLeft: 10, height: 2, background: '#00000020', marginTop: 20, marginBottom: 20,}}/>
       <div style={{flexDirection: 'row', display: 'flex', marginRight: 10, marginLeft: 10, marginBottom: 10, justifyContent: 'space-between'}}>
        
        <div>

        <Title style={{fontSize: 18,}}>Encontramos <QtdText style={{fontSize: 22,}}>{qtds}</QtdText> imóveis</Title>
        </div>
        <div style={{fontFamily: font.book, display: 'flex'}}>
          <span style={{marginTop: 8, marginRight: 10,}}>Ordernar por</span> 
          <Select styles={customStyles} options={options} defaultValue={options[0]} />
        </div>
       </div>
        
        {!load && <div style={{display: 'flex',flexWrap: 'wrap', flexDirection: 'row', }}>
        {data?.map((data) => <ListH3 data={data} handleClick={() => handleLocation(data)} key={data.ID}/>)}
        </div> }

        <div style={{flexDirection: 'column', marginTop: 50, display: 'flex', justifyItems: 'center', }}>
        <Title style={{textAlign: 'center'}}>Ajuste suas <Link style={{color: color.primary,}} to="/preferences">preferências</Link> de pesquisa para encontrar mais imóveis. </Title>
          
          <img style={{width: 200, height: 130, objectFit: 'cover', borderRadius: 12, marginTop: 10, marginBottom: 20,alignSelf: 'center'}} src={ImgSidebar}/>
        </div>
      </Left>

    <Right style={{width: mapView ? '60%' : '40%' }}>
   
    
      <Mapa style={{height: 0.98 * heightMax, }} ref={mapContainer}/>

     
    </Right>


    </Container>
  )

}

export default MapExplore