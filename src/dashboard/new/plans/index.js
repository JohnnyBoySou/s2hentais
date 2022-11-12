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
} from './styles';

import { ButtonOffColor, Back, ButtonBR } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';
 

const Plans = ( ) => {

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
  
        <Card className='fadeUp'>
            <BsPatchCheck style={{fontSize: 32, color:  color.primary, marginBottom: 20,}}/>
            <CardTitle>
                Starter
            </CardTitle>
            <CardLabel>
                Basic features for validating and getting started
            </CardLabel>
            <CardValue>R$ 159</CardValue>
            <CardLabel style={{fontSize: 20, fontFamily: font.medium,}}>/year</CardLabel>
            
            <ButtonOffColor style={{marginBottom: 20,}}>Get starter plan</ButtonOffColor>

            <List>
               {items.map(items => <Item> 
                    <Icon><BiCheck/></Icon>    
                    <ItemLabel>{items.name}</ItemLabel>
                </Item>)}
            </List>
        </Card>

  );
};

export default Plans;