
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  ImageBackground } from 'react-native';


import { FontAwesome5 } from '@expo/vector-icons';

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { TouchableRipple,  } from 'react-native-paper';

import { 
  Title, 
  Label,
} from './styles';

import { ThemeContext } from 'styled-components/native';

export default function Financiamento({ navigation, route, ...props } ) {

  
return (
  <View>  
    <TouchableRipple onPress={() => navigation.navigate('Financiar')} borderless={true} style={{borderRadius: 8}} rippleColor="#FFF">
      <ImageBackground source={require('../../assets/financiamento_call.png')} resizeMode="cover" style={{flex: 1,
    justifyContent: "center", padding: 20, paddingTop: 20, paddingBottom: 20}} imageStyle={{borderRadius: 8,}}>
            
        <View style={{width: 44, height: 44, backgroundColor: "#5B72F2", borderRadius: 4, justifyContent: 'center', marginBottom: 10,}}>
          <FontAwesome5 name="money-bill-wave" size={24} color="#F1F3FF" style={{ textAlign: 'center'}} /> 
        </View>

        <Title>Financiamos para você!</Title>
        <Label>Conheça os financiamentos disponíveis para conquistar seu imóvel!</Label>
      </ImageBackground>
         
    </TouchableRipple>
  </View>
)}