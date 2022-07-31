import React, { useState, useEffect } from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';



import { FiSearch , FiMap, FiMenu, FiHome, FiSliders, FiBookmark, FiSettings} from "react-icons/fi";


import { Container , Input, Bt, Complement, 
  BtLabel, SideBar, BtBar,
  Sublabel,
  Line,

} from './styles'
import { color } from '@mui/system';
import Drawer from '@mui/material/Drawer';

import { Link , useLocation, useNavigate  } from "react-router-dom";
import { ButtonBR, ButtonPR, Ripple } from '../../theme/global'
import Logo from '../../assets/imgs/logo_sidebar.png'
import  ImgSidebar from '../../assets/imgs/sidebar.png'
export default function Search() {

  const [inicio, setInicio] = useState(false)
  const [map, setMap] = useState(false)
  const [collections, setCollections] = useState(false)

  const location = useLocation()

  const navigate = useNavigate()

  useEffect(() => {
    if(location.pathname == '/'){setInicio(true)}
    else if(location.pathname == '/collections'){setCollections(true)
    }else if(location.pathname == '/map'){setMap(true)}
  }, [])

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  function changeLink( value ){
    if(value == 'inicio'){
      setInicio(true)
      setCollections(false)
      setMap(false)
    }
    else if(value == 'map'){
      setInicio(false)
      setCollections(false)
      setMap(true)
    }
    else if(value == 'collections'){
      setInicio(false)
      setCollections(true)
      setMap(false)
    }
  }

  const List = ( ) => (
    <SideBar>
        <img src={Logo} style={{width: 84, marginBottom: 20, borderRadius: 12,}}/>
        <Sublabel>GERAL</Sublabel>
        <Link to="/">
          <BtBar disabled={inicio} onClick={() => changeLink('inicio')} activity={inicio}>
            <FiHome style={{marginRight: 10, marginBottom: -2,}} size={22}/>
            Início</BtBar>
        </Link> 
        
      
        <Link to="/map">
          <BtBar disabled={map} onClick={() => changeLink('map')} activity={map}>
          <FiMap style={{marginRight: 10, marginBottom: -2,}} size={22}/>
            Mapa</BtBar></Link>
        
        <Link to="/collections">
          <BtBar disabled={collections} onClick={() => changeLink('collections')} a activity={collections}>
          <FiBookmark style={{marginRight: 10, marginBottom: -2,}} size={22}/>
            Coleções</BtBar>
        </Link>

        <Line style={{marginTop: 10, marginBottom: 20,}}/>


        <Sublabel>OUTROS</Sublabel>
        <Link to="/preferences">
          <BtBar activity={false}>
          <FiSliders style={{marginRight: 10, marginBottom: -2,}} size={22}/>
            Preferências</BtBar>
        </Link>
        
        <Link to="/settings">
          <BtBar activity={false}>
          <FiSettings style={{marginRight: 10, marginBottom: -2,}} size={22}/>
            Configurações</BtBar>
        </Link>


        <img src={ImgSidebar} style={{position: 'absolute', bottom: 20, width: 200,alignSelf: 'center'}}/>
        
    </SideBar>

  )

  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState()
  

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };


  const searchOpen = () => {
    navigate(`../search/${searchValue}`, { replace: true });
    }


  const [focused, setFocused] = useState(false)


  const [view, setView] = useState(false)
  const a = false

  return (
    <div>
    <Container>

      <IconButton onClick={toggleDrawer('left', true)} sx={{ p: '10px' }} aria-label="menu">
       <FiMenu/>
      </IconButton>
      
      <Input placeholder='Pesquisar imóvel...' onFocus={() => setView(true)} onBlur={() => setView(false)} value={searchValue} onChange={handleSearch}/>

      <Bt type="submit" onClick={searchOpen} focus={focused}>
       <FiSearch size={18} color={(open ? "#5B72F2" : "#FFFFFF")}/>
      </Bt>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <Link to="/map "><IconButton color={color.primary}  sx={{ p: '10px' }} aria-label="directions">
        <FiMap color={color.primary}/>
      </IconButton></Link>
      
      <div>

        
      
          
          <Drawer
            anchor="left"
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            <List/>
          </Drawer>
    </div>


    
    </Container>

    {a &&
    
      <Complement>
        <Ripple><BtLabel>Ir para imobiliárias</BtLabel></Ripple>
        <Ripple><BtLabel>Ir para Imóveis</BtLabel></Ripple>
        <Ripple><BtLabel>Ir para Coleções</BtLabel></Ripple>
      
      
      </Complement>}
    </div>
  );
}
