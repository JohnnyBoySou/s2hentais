import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Card,
  CardTitle,
  CardLabel,
  CardValue,
  List,
  Item,
  Icon,
  ItemLabel,
  MenuItem,
  Menu,
  Section,
} from './styles';

import { ButtonOffColor, Back, ButtonBR } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';
 import Profile from '../profile';

const Settings = ( props ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()

  const user = props.userData

  const data = {
    name: "",
    desc: "", 
    value: "",
    list: "",

  }


  const a = false;

    const items = [
        {name: "Unlimited views"},
        {name: "Show destaques"},
        {name: "Special stats"},
        {name: "Contact profile"},
        {name: "Unlimited likes"},
    ]

  return (
      <Container className='fadeUp'>
        <Menu>
          <MenuItem on={true}>Perfil</MenuItem>
          <MenuItem on={false}>Chats</MenuItem>
        </Menu>
        
       <Section>
          <CardTitle>Profile Settings</CardTitle>
          <Card></Card>
        </Section>
      </Container>

  );
};

export default Settings;