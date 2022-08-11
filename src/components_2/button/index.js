import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';



import { AntDesign } from '@expo/vector-icons';

import {  
  ButtonView,
  Label,
  Icon,
} from './styles';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Button({route, ...props }){



  const color = props?.color
  const label = props?.label
  const icon = props?.icon
  const onpress = props?.onPress

  return(

    <ButtonView onPress={onpress} color={color}>
      <>
        <Label>{label}</Label>
        <Icon/>
        <>

          {icon == 'arrowdown' && <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowdown" size={28} color="#FFF" />}
          
          {icon == 'arrowup' && <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowup" size={28} color="#FFF" />}

          {icon == 'arrowleft' && <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowleft" size={28} color="#FFF" />}

          {icon == 'arrowright' && <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />}

        </>
              
      </>
    </ButtonView>




          

  )
}