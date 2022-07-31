
import React, { useState, useEffect, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, Text, Dimensions, ImageBackground  } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { Ionicons, Fontisto , MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { TouchableRipple,  } from 'react-native-paper';



import {  
  LikeAs
} from './styles';


import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonLabel, Title,  } from './styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Like({route, ...props }){


  const code = props.codigo

  useEffect(() => {
    getSaveIDs()
  },[])

  const [listIDS, setListIDS] = useState([])
  const [ativo, setAtivo] = useState();

  const getSaveIDs = async ( next ) => {
    try {
      const value = await AsyncStorage.getItem('@SAVE__IDS')
      if(value !== null) {
        const result = JSON.parse(value)
        setListIDS(result)
        getInitial(result, code)
      }
    } catch(e) {
      console.log(e)
    }
  }

  const getInitial = (array, value) => {
    if (array.indexOf(value) > -1) {
     setAtivo(true)
    }else{setAtivo(false)}
  }


  const saveCode = async ( value ) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@SAVE__IDS', jsonValue)
      } catch (e) {
        console.log(e)
      }
    }

  
  function action(){
    setAtivo(!ativo)
    atualizarSaveIDS(listIDS, code)
  }


    function atualizarSaveIDS (array, value) {
      if (array.indexOf(value) === -1) {
          array.push(value)
          saveCode(array)
      } else if (array.indexOf(value) > -1) {
          array.splice(array.indexOf(value), 1)
          saveCode(array)
      }
    }


  return(
    <MotiView>
    
     <LikeAs color="#5B72F2" off={ativo} onPress={action} >
            <>
              {ativo == false && 
              <AnimatePresence>
              <MotiView from={{opacity: 0, transform: [{translateY: -20,}]}} animate={{opacity: 1, transform: [{translateY: 0,}]}}>
                <AntDesign style={{textAlign: 'center'}} name="hearto" size={24} color="#5B72F2" />
              </MotiView></AnimatePresence>}

               {ativo == true && 
               <AnimatePresence>
               <MotiView from={{opacity: 0, transform: [{translateY: 20,}]}} animate={{opacity: 1, transform: [{translateY: 0,}]}}>
                <AntDesign style={{textAlign: 'center'}} name="heart" size={24} color="#FFF" />
              </MotiView></AnimatePresence>}
            </>
          </LikeAs>
      
    </MotiView>

  )
}




