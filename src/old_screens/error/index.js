
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, TouchableOpacity} from 'react-native';


import { Ionicons, MaterialIcons, AntDesign  } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  Subtitle,




  Modal,

  Imagem,
  Spacing,
} from './styles';

import Button from '../../components/button/index';

import { TouchableRipple } from 'react-native-paper';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import Header from '../../components/header/index';
import { ThemeContext } from 'styled-components/native';
import { Modalize } from 'react-native-modalize';

export default function Error({ navigation, route }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  

  
  const modalizeCheck = useRef(null);

  const onOpen = () => {
    modalizeCheck.current?.open();
  };
   const onClose = () => {
    modalizeCheck.current?.close();
  };


return (
  <Main>
  <Header title="Erro" subtitle=""/>
  <Wrapper style={{justifyContent: 'center', marginHorizontal: 24,}}>
  <Imagem source={require('../../assets/404.png')} style={{width: 190, alignSelf: 'center', marginBottom: 20,}}/>
    <Title>Encontramos um erro!</Title>
    <Subtitle>Algo desconhecido aconteceu! Tente novamente mais tarde, ou se prefirir volte ao início.</Subtitle>
    <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}><Button color={color.primary} label="Voltar ao Início" icon="arrowleft"/></TouchableOpacity>



  </Wrapper>
  </Main>
  )
}