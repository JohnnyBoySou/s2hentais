
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  ImageBackground } from 'react-native';


import { FontAwesome5 } from '@expo/vector-icons';

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { TouchableRipple,  } from 'react-native-paper';

import { 
  Title, 
  Imagem,
} from './styles';

import { ThemeContext } from 'styled-components/native';

export default function FindMap({ navigation, route, ...props } ) {

  
return (
  <View style={{borderWidth: 2, borderColor: "#E7E7E7", borderRadius: 8,}}>  
    <TouchableRipple borderless={true} style={{borderRadius: 8, padding: 10,}} rippleColor="#FFF">
    
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{justifyContent: 'center',}}>
          <Title>Mostrar {"\n"}no Mapa</Title>
        </View>
        <Imagem style={{alignSelf: 'center'}} source={require('../../assets/findmap.png')}/>

      </View>
    </TouchableRipple>
  </View>
)}