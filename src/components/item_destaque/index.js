import React, { useState } from 'react';
import { View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import {  
  Button,
  Image, 
  Label,
} from './styles';


export default function ItemDestaque({...props }){

  const color = props?.color
  const text = props?.text

  return(
    <Button>
      <View style={{flexDirection: 'row',alignContent: 'center'}}>
      
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <AntDesign name="staro" size={18} color="#fff" />
        <Label>{text}</Label>
      </View>
  
      </View>
    </Button>
  )
}