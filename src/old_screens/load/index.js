
import React, { useState, useContext, useEffect } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image, Pressable, TextInput } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';


import { 
  Wrapper, 
  Container, 
  TitleA, 
  Title,
  Main,
  Label,

  Button,
  ButtonIcon,
  ButtonLabel,
  AreaValor,
  LabelValor,
  SplashImg,

  
  Modal,
  Address,
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import { ProgressBar } from 'react-native-paper';


export default function Load({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


  const [loading, setLoading] = useState(100)
  const [complete, setComplete ] = useState(false)
  function ir(){
    setComplete(true)
    setTimeout(() => navigation.navigate('TabNavigator', {params: {voltar: true}, screen: "Home"}), 500)    
  }

return (
  <Main>
  <Wrapper>
    <View style={{alignSelf: 'center', marginBottom: 100,}}>
      <AnimatedCircularProgress
            size={200}
            width={10}
            fill={loading}
            tintColor={color.primary}
            onAnimationComplete={ir}
            backgroundColor={opacity.dois}
            rotation={0}
            lineCap="round"
            duration={3000}
            children={() =>  <Animatable.Text duration={1000} delay={2000} animation="fadeInUpBig"><Ionicons name="checkmark" size={102} color={color.primary} /></Animatable.Text>}
            />
        </View>
        
       
  
    <View style={{paddingVertical: 40, paddingHorizontal: 24, backgroundColor: "#FFF", justifyContent: 'center'}}>
      
      <Title>Salvando suas preferências</Title>
      <ProgressBar indeterminate color={color.primary} />
    </View>
  </Wrapper>
  </Main>
  )
}


