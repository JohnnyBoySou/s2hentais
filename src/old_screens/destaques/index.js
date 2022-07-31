
import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View, TouchableOpacity,  Animated, FlatList, ActivityIndicator, Text, ScrollView, StatusBar, ImageBackground, BackHandler, Dimensions, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { Ionicons, Fontisto , MaterialIcons } from '@expo/vector-icons';
import { TouchableRipple, Surface, Button  } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { Modalize } from 'react-native-modalize';

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';


import { Wrapper, Container, Title, 

Local, 
LocalText,
LocalLabel,
Profile,
Ofertas,
OfertaBlock,
Address,
Description,
Main,
Valor,
Chip,

Card,
CardTitle,
B,
SplashImg,

} from './styles';


import Header from '../../components/header';


//import Carousel, { Pagination }  from 'react-native-snap-carousel';

import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import Axios from 'axios';
import { Skeleton } from '@motify/skeleton'

export default function Destaques({ navigation, route, ...props }) {

  
  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef(null);

  const [data, setData] = useState()
  const [destaques, setDestaques] = useState()
  const item = destaques;
  const [loading, setLoading] = useState(true)

  const largura = 0.7 * width;
  const altura = 0.4 * height;

  useEffect(() => {
    getDados()
  }, [])

  async function getDados(){
     const headers = {
      'Accept': "application/json"
    }
      await Axios.get(`https://maisconectados.com/wp-json/destaques/all`, {
        headers: headers
    }).then(function (response) {
        setDestaques(response.data)
        setLoading(false)
    }).catch(error => {
        console.log(error)
    })  
  }



  const pegarPost = (item) => {
      navigation.navigate('List', { data: item, });
    };


  const [toggleIsOpen, setToggleIsOpen] = useState(false)

  function handleOpenToggle(){
   setToggleIsOpen(!toggleIsOpen)
  }


  const paraVoce = useCallback(({ item, index }) => (
    <>
    {item?.tipo == "Para você" &&
    <Card onPress={() => navigation.navigate('List', {ordem: item.ordem, destaques: item, titulo: 'Para você' })}>
      <ImageBackground source={{uri: item?.imagem}} resizeMode="cover" imageStyle={{borderRadius: 12,}} style={{flex: 1, justifyContent: 'center',}}>
        <View style={{justifyContent: 'center', marginLeft: 36, marginTop: -5, }}>
          <CardTitle>{item?.nome}</CardTitle>
          <B>{item?.sub_nome}</B>
        </View>
      </ImageBackground>
    </Card>
   }
    </>
  ), []);


  const popular = useCallback(({ item, index }) => (
    <>
    {item?.tipo == "Popular" &&
    <Card onPress={() => navigation.navigate('List', {ordem: item.ordem, destaques: item, titulo: 'Popular' })}>
      <ImageBackground source={{uri: item.imagem}} resizeMode="cover" imageStyle={{borderRadius: 12,}} style={{flex: 1, justifyContent: 'center',}}>
        <View style={{justifyContent: 'center', marginLeft: 36, marginTop: -5, }}>
          <CardTitle>{item?.nome}</CardTitle>
          <B>{item?.sub_nome}</B>
        </View>
      </ImageBackground>
    </Card>
   }
    </>
  ), []);


return (
  <Main style={{justifyContent: 'center',}}>

  <Header title="Destaques" />
  <Wrapper>

   <View style={{flex: 1, marginHorizontal: 24,}}>


    <Title>Para você</Title>

    {loading && 
    <>
    <View style={{marginBottom: 20,}}>
      <Skeleton show={loading} radius={12} height={160} width="100%" colorMode="light">
      <View style={{marginTop: 30, zIndex: 99, marginLeft: 28,}}>
      <Skeleton show={loading} radius={4} height={42} width={220} colors={['#F1F1F1', '#DEDEDE']} colorMode="light"  />
      <View style={{marginTop: 10,}}/>
      <Skeleton show={loading} radius={4} height={42} width={250} colors={['#F1F1F1', '#DEDEDE']} colorMode="light"  />
      </View>
      </Skeleton>
    </View> 
    </> 
    }

    <FlatList renderItem={paraVoce} data={destaques}/>

    <Title>Popular</Title>

    {loading && 
    <>
    <View style={{marginBottom: 20,}}>
      <Skeleton show={loading} radius={12} height={160} width="100%" colorMode="light">
      <View style={{marginTop: 30, zIndex: 99, marginLeft: 28,}}>
      <Skeleton show={loading} radius={4} height={42} width={220} colors={['#F1F1F1', '#DEDEDE']} colorMode="light"  />
      <View style={{marginTop: 10,}}/>
      <Skeleton show={loading} radius={4} height={42} width={250} colors={['#F1F1F1', '#DEDEDE']} colorMode="light"  />
      </View>
      </Skeleton>
    </View> 
    <View style={{marginBottom: 20,}}>
      <Skeleton show={loading} radius={12} height={160} width="100%" colorMode="light">
      <View style={{marginTop: 30, zIndex: 99, marginLeft: 28,}}>
      <Skeleton show={loading} radius={4} height={42} width={220} colors={['#F1F1F1', '#DEDEDE']} colorMode="light"  />
      <View style={{marginTop: 10,}}/>
      <Skeleton show={loading} radius={4} height={42} width={250} colors={['#F1F1F1', '#DEDEDE']} colorMode="light"  />
      </View>
      </Skeleton>
    </View> 
    </> 
    }


    <FlatList renderItem={popular} data={destaques}/>
   </View>

  </Wrapper>
  </Main>
  )
}