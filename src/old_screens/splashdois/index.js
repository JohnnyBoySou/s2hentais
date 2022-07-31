
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, Dimensions, ScrollView,  } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  SplashImg,
} from './styles';

import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar, TouchableRipple } from 'react-native-paper';

export default function SplashDois({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


  const onOpen = () => {
    modalizeRef.current?.open();
  }
  const modalizeRef = useRef()


return (
  <Main>
  <Wrapper>
    <ScrollView style={{paddingVertical: 0, paddingHorizontal: 24, flex: 1, }}>

    </ScrollView>    
  </Wrapper>
  
  </Main>
  )
}