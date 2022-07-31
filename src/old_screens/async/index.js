import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View,  Text, ScrollView, Dimensions, Image,  } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProgressBar, } from 'react-native-paper';

import {
  Img,
  Vetor,
  VetorCenter,
  Circle,
  Left,
  Right,
  Column
} from './styles';


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'

export default function AsyncSplash({ navigation }){
  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const [preferences, setPreferences] = useState()
  function redirect(valor){
    const preferences = valor;
    if(preferences != null){
      navigation.navigate('TabNavigator')
    }else{
      navigation.navigate('Splash')
    }}

  async function getPreferences(){
    try {
      const jsonValue = await AsyncStorage.getItem('@preferences')
      if(jsonValue != null) {
        const valor = JSON.parse(jsonValue)
        setTimeout(
          function redirect(){
              navigation.navigate('TabNavigator')
            }
        , 1000)
      }else{
        navigation.navigate('Splash')
      }
    } catch(e) {
      console.log(e)
    }}
  
  useEffect(() => {
    getPreferences()
  }, [])

  return(
    <View style={{flex: 1, backgroundColor: "#fff", justifyContent: 'center', marginLeft: -40, }}>
    <MotiView 
      from={{opacity: 0,
        transform: [
            {scale: 0.8,},]
        }} 
      animate={{
        opacity: 1,  
        transform: [
            {scale: 1},
        ]}} 
      transition={{type: "spring", duration: 2000,}}>
      
      <Column>
        <MotiView from={{rotate: "25deg",}} animate={{rotate: "360deg",}} transition={{type: 'timing', duration: 20000, loop: true,}}> 
          <View>
            <Img source={require('../../assets/animation/half_circle_light.png')}/>
          </View>
        </MotiView>
        <MotiView  from={{scale: 0.4,}} animate={{scale: [0.9, 1, 0.8],}} transition={{type: 'timing',duration: 4000, loop: true,}}>
          <View style={{ transform: [{scale: 1.2}], zIndex: 99 }}>
            <Img source={require('../../assets/animation/circle_blue.png')}/>
          </View>
        </MotiView>
      </Column>

      <Column>
        <MotiView from={{rotate: "25deg",}} animate={{rotate: "-360deg",}} transition={{type: 'timing',duration: 20000, loop: true,}}>
          <View style={{zIndex: 99, transform: [{rotate: "40deg"},{scale: 0.9}],}}>
            <Img source={require('../../assets/animation/triangle_blue.png')} />
          </View>
        </MotiView>
        <MotiView from={{rotate: "25deg",}} animate={{rotate: "360deg",}} transition={{type: 'timing',duration: 10000, loop: true,}}>
          <View style={{transform: [{rotate: "25deg"}], zIndex: -99,}}>
            <Img style={{borderRadius: 16,}} source={require('../../assets/animation/square_light.png')}/>
          </View>
        </MotiView>
      </Column>
      
      <Column>
      
        <MotiView  delay={1000} from={{scale: 0.4,}} animate={{scale: [0.9, 1, 0.8],}} transition={{type: 'timing',duration: 4000, loop: true,}}>
          <View style={{ transform: [{scale: 1.2}],}}>
            <Img source={require('../../assets/animation/circle_light.png')}/>
          </View>
        </MotiView>

        <MotiView from={{rotate: "25deg",}} animate={{rotate: "360deg",}} transition={{type: 'timing', duration: 20000, loop: true,}}> 
          <View style={{zIndex: 99}}>
            <Img source={require('../../assets/animation/square_blue.png')}/>
          </View>
        </MotiView>
      </Column>
    </MotiView>
    </View>

  )
}