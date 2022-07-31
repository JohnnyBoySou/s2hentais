
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
Toast,
ToastLabel,
Spacing,

Input,
InputButton,
InputLabel,
InputTitle,
 } from './styles'

import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RowLarge({ route, ...props }){

  const item = props?.data
  const direction = props?.direction 


  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  
  const pegarPost = () => {
      navigation.push('DetailsDois', { dados: item, });};


  return(
  <>
   <View style={{borderWidth: 2, borderColor: color.border, borderRadius: 6, }}>
     
    <TouchableRipple onPress={() =>  navigation.push('DetailsDois', { dados: item, })} 
      style={{borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between', }} rippleColor="#FFF" borderless={true}>
      <>
     
      <Img source={{uri: item.imagem1}} resizeMode="cover"/>
      
      <Description>
        <Title>{item.nome}</Title>
        <View style={{flexDirection: 'row'}}>
          <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 8,}} />
          <Address>{item.bairro}</Address>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10,}}>
          <Toast>
            <ToastLabel>{item.qtd1} {item.item1}s</ToastLabel>
          </Toast> 
          <Spacing/>
          <Toast>
            <ToastLabel>{item.area} m&#xB2;</ToastLabel>
          </Toast>
        </View>


        <Input>
        
          <View style={{flexGrow: 2,}}>
            <InputLabel>Por mês</InputLabel>
            <InputTitle>R$ {item.valor_mensal}{item.valor_unico}</InputTitle>
          </View>

          
        </Input>

        
      </Description>    


      </>
    </TouchableRipple>
  </View>

    {direction == "horizontal" && <Spacing/>}
    {direction == "vertical" && <><Spacing/><Spacing/></>}
</>
  )
}




