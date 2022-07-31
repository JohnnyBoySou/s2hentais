import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';



import { AntDesign } from '@expo/vector-icons';

import {  
  LikeAs
} from './styles';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Like({route, ...props }){

  const codigo = props?.codigo
  console.log(codigo)

  
  const [ativo, setAtivo] = useState(false);

  async function salvar(){
    if(ativo){
      setAtivo(false)
    }else{
      setAtivo(true)
      try {
        const jsonValue = JSON.stringify(codigo)
        await AsyncStorage.setItem('@salvos', jsonValue)
      }
      catch (e) {
        console.log(e)
      }}
  }

  return(

    <LikeAs color="#5B72F2" off={ativo} onPress={salvar} >
            <>
              {ativo == false && 
              <AnimatePresence>
              <MotiView from={{opacity: 0, transform: [{translateY: -20,}]}} animate={{opacity: 1, transform: [{translateY: 0,}]}}>
                <AntDesign style={{textAlign: 'center'}} name="hearto" size={28} color="#5B72F2" />
              </MotiView></AnimatePresence>}

               {ativo == true && 
               <AnimatePresence>
               <MotiView from={{opacity: 0, transform: [{translateY: 20,}]}} animate={{opacity: 1, transform: [{translateY: 0,}]}}>
                <AntDesign style={{textAlign: 'center'}} name="heart" size={28} color="#FFF" />
              </MotiView></AnimatePresence>}
            </>
          </LikeAs>

  )
}