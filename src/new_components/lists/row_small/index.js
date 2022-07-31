
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


Img,
Tag,

 } from './styles'

import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';




import { SharedElement } from 'react-navigation-shared-element'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RowSmall({ route, ...props }){

  const item = props?.data


  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity, font } = useContext(ThemeContext)

  
  return(
   <View style={{marginLeft: 18, borderWidth: 2, height: 94, borderColor: color.border, borderRadius: 8 }}>
     

    <TouchableRipple  onPress={() => navigation.push('DetailsDois', { dados: item, })}  style={{borderRadius: 6, flexDirection: 'row', justifyContent: 'center', }} 
    rippleColor="#FFF" borderless={true}>
      <>
      <SharedElement id={`item.${item.ID}.photo`}> 
        <Img source={{uri: item.imagem1}} resizeMode="cover"/>
      </SharedElement>
    
      <Description>
        <Tag>{item.categoria}</Tag>
        <Title>{item.nome}</Title>
        <View style={{flexDirection: 'row', width: 100,}}>
          <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 8,}} />
          <Address>{item.bairro}</Address>
        </View>
        
      </Description>      


      <View style={{justifyContent: 'center', marginRight: 10,}}>
      <View style={{backgroundColor: color.primary, borderRadius: 8,  width: 52, height: 52, justifyContent: 'center', }}>
        <Text style={{fontFamily: font.medium, fontSize: 28, color: "#fff" , textAlign: 'center',  }}>{item.qtd1}</Text>
        </View>
        <Text style={{fontFamily: font.medium, fontSize: 16, color: color.primary, textAlign: 'center', marginTop: 4, alignSelf: 'center', marginRight: 10,}}>{item.item1}s</Text>
      </View>


      </>
    </TouchableRipple>
  
  </View>

  )
}




