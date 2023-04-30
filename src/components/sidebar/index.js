import React, { useContext , useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  
  
  Nav,
  NavBt
} from './styles';
import './styles.css'

import LogoH from '../../assets/imgs/logo_s.png'
import { BsArrowRight , BsBookmarks} from 'react-icons/bs'

import { Column, Row } from '../../theme/global';
import { RxDashboard } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';
import { FiHome, FiMap , FiSearch , FiLogOut} from 'react-icons/fi';

export const Sidebar = ({ toggleTheme }) => {

  const { color, } = useContext(ThemeContext)

  const navigate = useNavigate()
  const a = false;
    
  

  return (
    <Nav>
       <Column style={{justifyContent: 'center', alignItems: 'center' }}>
          <a href="#planos" ><NavBt><FiHome/></NavBt></a>
          <a href="#planos"><NavBt><FiMap/></NavBt></a>
          <a href="#planos" > <NavBt><FiSearch/></NavBt></a>
          <a href="#planos" > <NavBt><RxDashboard/></NavBt></a>
          <a href="#planos" > <NavBt><FiLogOut/></NavBt></a>
        </Column>
      </Nav>

  );
};
