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
 

const Settings = ( ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()

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
          <MenuItem on={true}>Profile</MenuItem>
          <MenuItem on={false}>Chats</MenuItem>
        </Menu>
        
       <Section>
        <Card>
            <CardTitle>Profile Settings</CardTitle>
        </Card>
        </Section>
      </Container>

  );
};

export default Settings;