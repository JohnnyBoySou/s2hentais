import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';


import { View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import {  
  Label,
  BarOn,
  BarOff,
  Spacing
} from './styles';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'


export default function Counter({route, ...props }){


  const value = props?.value;

  return(
  <View style={{justifyContent: 'space-between', marginHorizontal: 24,}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>   
      
      { value == 2 && 
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <BarOn/>
      <Spacing/>
      <BarOn/>
      <Spacing/>
      <BarOff/> 
      <Spacing/>
      <BarOff/> 
      </View> }

      { value == 1 && 
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <BarOn/>
      <Spacing/>
      <BarOff/>
      <Spacing/>
      <BarOff/> 
      <Spacing/>
      <BarOff/> 
      </View> }

       { value == 3 && 
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <BarOn/>
      <Spacing/>
      <BarOn/>
      <Spacing/>
      <BarOn/> 
      <Spacing/>
      <BarOff/> 
      </View> }

      
       { value == 4 && 
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <BarOn/>
      <Spacing/>
      <BarOn/>
      <Spacing/>
      <BarOn/> 
      <Spacing/>
      <BarOn/> 
      </View> }
    
    </View>
  </View>

  )}