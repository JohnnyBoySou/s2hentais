
import React, { useState, useRef, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, Text, Dimensions, ImageBackground, ScrollView  } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { TouchableRipple,  } from 'react-native-paper';

import { Title,  
  Spacing,
  Button,
 } from './styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Additional({ route, ...props }){

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  const largura = 0.7 * width;
  const altura = 0.6 * height;
  const altura2 = 0.48 * height;

  
  
  return(
    <View>
    <Title style={{color: color.title, paddingLeft: 20, marginBottom: 18,}}>Explore</Title>
    <ScrollView horizontal style={{paddingLeft: 20, paddingBottom: 20,}} showsHorizontalScrollIndicator={false}>
      <Button style={{backgroundColor: color.primary}}>
        <View>
          <Title>Para toda a familía</Title>
          <Spacing/>
        </View>
      </Button>

      <Button style={{backgroundColor: "#37CB84"}}>
        <View>
          <Title>Leve seu Pet</Title>
          <Spacing/>
        </View>
      </Button>

      
      <Button style={{backgroundColor: "#E89893"}}>
        <View>
          <Title>Perto da escola</Title>
          <Spacing/>
        </View>
      </Button>

      
      <Button style={{backgroundColor: "#F8DAA7"}}>
        <View>
          <Title>Para universitários</Title>
          <Spacing/>
        </View>
      </Button>





    </ScrollView>


    
    </View>

  )
}




