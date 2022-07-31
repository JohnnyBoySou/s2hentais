
import React, { useEffect, useState, useRef, useCallback, useContext , useReducer} from 'react';
import { View, TouchableOpacity,  Animated, Image, Text, ScrollView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const largura = 0.7 * width;
const altura = 0.6 * height;


import { Ionicons, Fontisto , MaterialIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,

  Bar,
  BarOn,
  BarOff,
  Div,

  BarOffStart,
  BarOffEnd,
  BarOnEnd,
  BarOnStart,
  LabelOn,
  LabelOff,
} from './styles';

import { ThemeContext } from 'styled-components/native';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

export default function Conservacao({ navigation, route, ...props }) {
  const nivel = props?.nivel;
  console.log(nivel)
  
  const { color } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  return (
  <Main>

  {nivel != true && 
  <View>

  {nivel != undefined && 
  <>

  
  <Title>Estado de Conservação</Title>
  <Bar>

    {nivel == 0 && 
      <>
      <BarOffStart/>
      <Div/>
      <BarOff/>
      <Div/>
      <BarOffEnd/>
      </>
    }
    
    {nivel == 1 && 
      <>
      <BarOnStart/>
      <Div/>
      <BarOff/>
      <Div/>
      <BarOffEnd/>
      </>
    }

    {nivel == 2 && 
      <>
      <BarOnStart/>
      <Div/>
      <BarOn/>
      <Div/>
      <BarOffEnd/>
      </>
    }

    {nivel == 3 && 
      <>
      <BarOnStart/>
      <Div/>
      <BarOn/>
      <Div/>
      <BarOnEnd/>
      </>
    }
  
    </Bar>

<View style={{flexDirection: 'row',}}>

  {nivel == 0 && 
    <>
      <LabelOff>Razoável</LabelOff>
      <LabelOff>Bom</LabelOff>
      <LabelOff>Ótimo</LabelOff>
    </>}

    {nivel == 1 && 
    <>
      <LabelOn>Razoável</LabelOn>
      <LabelOff>Bom</LabelOff>
      <LabelOff>Ótimo</LabelOff>
    </>}


    {nivel == 2 && 
    <>
      <LabelOff>Razoável</LabelOff>
      <LabelOn>Bom</LabelOn>
      <LabelOff>Ótimo</LabelOff>
    </>}

    {nivel == 3 && 
    <>
      <LabelOff>Razoável</LabelOff>
      <LabelOff>Bom</LabelOff>
      <LabelOn>Ótimo</LabelOn>
    </>}

    </View>

    </>}
    </View>}

  </Main>
  )
}