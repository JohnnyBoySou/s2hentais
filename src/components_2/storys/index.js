import React, { useState } from 'react';
import { View } from 'react-native';

import {  
  Button,
  Image, 
  Label,
  ImobilImage
} from './styles';


export default function Storys({...props }){

  const link = props?.link
  const imobilimg = props?.imobilimg
  const imobilnome = props?.imobilnome

  return(
    <Button>
      
          <View>
            <Image source={require('../../assets/storys.png')}/>
            <View style={{bottom: 20, position: 'absolute', alignSelf: 'center'}}>
              <ImobilImage source={{uri: imobilimg}}/>
              <Label>{imobilnome}</Label>
            </View>
          </View>
      
    </Button>
  )
}