import React, { useState, useEffect , useRef, useContext, } from 'react';

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
  ProfileImg,
  Label,
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

    const navigate = useNavigate()
    
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)



  
    
  return (
    <Container>
        <div style={{display: 'flex', flexDirection: 'row', }}>
            <ProfileImg />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Title>Imobiliaira</Title>
                <Label>Descrição</Label>
            </div>
        </div>
        <Title>Imóveis</Title>
        
    </Container>
  )
}

export default MapExplore