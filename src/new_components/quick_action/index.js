
import React, { useState, useRef, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, Text, Dimensions, ImageBackground, FlatList , SafeAreaView } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { Chip, Description, Title, Address, Valor, OfertaBlock, Ofertas, ID, IDLabel,

HeadLine,
More,
Div,

Button,
ButtoLabel,
Spacing,
 } from './styles'

import { Ionicons, Fontisto , MaterialIcons, Feather, EvilIcons } from '@expo/vector-icons';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function QuickAction({ route, ...props }){

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  

  
  return(
    <View>
      <View style={{paddingBottom: 20, flexDirection: 'row', justifyContent: 'center', }}>
        <Button onPress={() => {}}> 
          <EvilIcons name="arrow-right" size={38} color={color.primary} style={{textAlign: 'center'}} />
        </Button>
        <Spacing/>
        <Button onPress={() => {}}> 
          <EvilIcons name="heart" size={38} color={color.primary} style={{textAlign: 'center'}} />
        </Button>
        <Spacing/>
        <Button onPress={() => {}}> 
          <EvilIcons name="share-google" size={38} color={color.primary} style={{textAlign: 'center'}} />
        </Button>
      </View>
    </View>
  )
}




