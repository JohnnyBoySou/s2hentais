
import React, { useState, useRef, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, Text, Dimensions, ImageBackground  } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableRipple,  } from 'react-native-paper';

import { ButtonLabel, Title,  } from './styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function InternetOff({ route, ...props }){
  
  return(
    <MotiView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#EA3F3F", padding: 10, }}>
        <Title><Feather style={{alignSelf: 'center'}} name="alert-circle" size={18} color="#fff" /> Parece que não há internet</Title>
        <TouchableRipple style={{backgroundColor: '#ffffff40', padding: 6, paddingHorizontal: 14, borderRadius: 6, justifyContent: 'center'}}><ButtonLabel>Atualizar</ButtonLabel></TouchableRipple>
      </View>
    </MotiView>

  )
}




