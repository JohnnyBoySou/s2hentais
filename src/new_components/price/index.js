
import React, { useState, useRef, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, Text, Dimensions, ImageBackground, FlatList , SafeAreaView } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { Chip, Description, Title, Address, Valor, OfertaBlock, Ofertas, ID, IDLabel,

HeadLine,
HeadLabel,
More,
Div,


 } from './styles'

import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';




import { SharedElement } from 'react-navigation-shared-element'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import RowLarge from '../lists/row_large/index';
import RowSmall from '../lists/row_small/index';


export default function Price({ route, ...props }){

  const data = props?.data


  const value_max = props.value_max



  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  


  const renderItem2 = ({ item }) => (
    <RowSmall data={item} />
  ) 


  
  return(
    <View style={{paddingBottom: 20,}}>
      <Div/>        
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 20, marginTop: 20,
      marginHorizontal: 20,}}>


        <View style={{width: width,}}>
          <HeadLine>&#8212; Até R$ {value_max}</HeadLine>
          <HeadLabel>Escolhemos alguns imóveis que cabem no seu bolso</HeadLabel>
        </View>
       
       
      </View>

    <SafeAreaView style={{flex: 1,}}>

      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
          />

          
    </SafeAreaView>

    </View>

  )
}




