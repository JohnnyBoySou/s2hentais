
import React, { useState, useEffect, useRef, useContext } from 'react';

import { View,  Text, Dimensions, Image, } from 'react-native';

import {
  Title,
  Label,
  Card
 } from './styles';


import { ThemeContext } from 'styled-components/native';

export default function Noti({ item }){

  
  const { color } = useContext(ThemeContext)

  return (
      <Card>   
        <Title>{item.titulo}</Title>
        <View style={{flexGrow: 1, width: '100%', height: 2, backgroundColor: "#00000010", marginTop: 6, marginBottom: 6,}}/>
        <Label>{item.descricao}</Label>
      </Card>
  );
} 






