
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


 } from './styles'

import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';




import { SharedElement } from 'react-navigation-shared-element'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Popular({ route, ...props }){

  const data = props?.data

  console.log(data)


  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  
  const pegarPost = (item) => {
      navigation.navigate('DetailsDois', { dados: item, });};


  const renderItem = ({ item }) => (
    <View style={{width: 150,  marginLeft: 18, }}>
     
      <>

    <TouchableRipple onPress={() => pegarPost(item)} style={{borderRadius: 12, height: 150, }} rippleColor="#FFF" borderless={true}>
      <SharedElement id={item.ID}>
    
      <ImageBackground source={{uri: item.imagem1}} resizeMode="cover" style={{width: 150, height: 150,}}
      imageStyle={{borderRadius: 10,}}>
      <Chip>      
        <>
         {item.tipo == "Ambos" && 
        <Valor>R$ {item.valor_mensal} / R$ {item.valor_unico}</Valor> }
        {item.tipo != "Ambos" && 
        <Valor>R$ {item.valor_mensal}{item.valor_unico}</Valor> }
        
        </>
      </Chip>
      </ImageBackground>

      </SharedElement>
      </TouchableRipple>
      
      <Description>
        <Title>{item.nome}</Title>
        <View style={{flexDirection: 'row'}}>
          <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 8,}} />
          <Address>{item.bairro}</Address>
        </View>
        
      </Description>      
    </>
  </View>
  )
 
  
  return(
    <View style={{paddingBottom: 20,}}>


      <Div/>        
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 20, marginTop: 20,
      marginHorizontal: 20,}}>

        <HeadLine>Popular</HeadLine>
        
       
        <More>
           <Ionicons style={{textAlign: 'center',}} name="arrow-forward" size={28} color={color.title} />
        </More>
      </View>

    <SafeAreaView style={{flex: 1,}}>
      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
  
    </SafeAreaView>

    </View>

  )
}




