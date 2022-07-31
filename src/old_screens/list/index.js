
import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View, TouchableOpacity,  Animated, FlatList, ActivityIndicator, Text, ScrollView, StatusBar, ImageBackground, BackHandler, Dimensions, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 





import { Ionicons, Fontisto , MaterialIcons } from '@expo/vector-icons';
import { TouchableRipple, Surface, Button  } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const altura2 = 0.48 * height;

import { Modalize } from 'react-native-modalize';

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';


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

Length,
LengthLabel,
Txt,
} from './styles';

import Carousel, { Pagination }  from 'react-native-snap-carousel';

import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import Header from '../../components/header';
import Axios from 'axios';
import { Skeleton } from '@motify/skeleton'

export default function Lista({ navigation, route, ...props }) {

  const titulo = route.params?.titulo;
  const ordem = route.params?.ordem;
  const item = route.params?.destaques;
  const tituloDestaque = route.params?.destaques.nome;
  const subtituloDestaque = route.params?.destaques.sub_nome;

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef(null);
  
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const pontos = data?.length;

  useEffect(() => {
    getDestaques()
  }, [])

  async function getDestaques(){
    await Axios.get(`https://maisconectados.com/wp-json/destaques/search?tipo=Destaque${ordem}`).then(function (response) {
        console.log(response.data)
        setData(response.data)
        setLoading(false)
    }).catch(error => {
        console.log(error)
    })}



  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)



  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const pegarPost = (item) => {
    navigation.navigate('DetailsDois', { dados: item, tituloDestaque: tituloDestaque, subtituloDestaque: subtituloDestaque, destaque: true});
  };

  const [cidade, setCidade] = useState()

  const [toggleIsOpen, setToggleIsOpen] = useState(false)

  function handleOpenToggle(){
   setToggleIsOpen(!toggleIsOpen)    
  }

  const renderItem = useCallback(({ item, index }) => (
    <View onPress={() => pegarPost(item)}
      style={{
        borderRadius: 12,
        height: altura,
        marginLeft: 5,
        marginRight: 5,
      }}><>
    <TouchableRipple onPress={() => pegarPost(item)} style={{flex: 1,}} rippleColor="#FFF" borderless={true}>
      <ImageBackground source={{uri: item.imagem1}} resizeMode="cover" style={{flex: 1,}}
      imageStyle={{borderRadius: 12,}}>
      <Chip>      
        <>
          {item.tipo == "Ambos" && 
          <Valor>R$ {item.valor_mensal} / R$ {item.valor_unico}</Valor> }
          {item.tipo != "Ambos" && 
          <Valor>R$ {item.valor_mensal}{item.valor_unico}</Valor> }
        </>
      </Chip>
      </ImageBackground>
      </TouchableRipple>
      <Description>
        <Title>{item.nome}</Title>
        <Address>{item.rua}, {item.numero} - {item.bairro}</Address>
      </Description>
      </>
    </View>
  ), [ ]);


return (
  <Main>


  <Wrapper>
  <Header title={titulo} snack={pontos}/>
  <ScrollView>

  
  <View style={{marginHorizontal: 24,}}>
  <ImageBackground source={{uri: item.imagem}} resizeMode="cover" imageStyle={{borderRadius: 12, }} style={{flex: 1, justifyContent: 'center', height: 140,}}>
        <View style={{justifyContent: 'center', marginLeft: 36, marginTop: -5, }}>
          <CardTitle>{item?.nome}</CardTitle>
          <B>{item?.sub_nome}</B>
        </View>
      </ImageBackground>
  </View>
   <View style={{flex: 1, marginTop: 40,}}>
   
   {loading && 
    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center',  textAlign: 'center'}}>
      <Skeleton show={loading} radius={12} height={altura2} width={largura} colorMode="light"/>
      <View style={{marginTop: 20,}}/>
      <Skeleton show={loading} radius={8} height={42} width={220} colorMode="light"  />
      <View style={{marginTop: 15,}}/>
      <Skeleton show={loading} radius={4} height={28} width={250} colorMode="light"  />
    </View> }
    
   <Carousel 
          layout="default"
          ref={isCarousel}
          data={data}
          sliderWidth={width}
          itemWidth={largura}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          autoplay={false}
          autoplayInterval={6000}
          autoplayDelay={2000}
          activeAnimationType="timing"
        />

      <Pagination
        dotsLength={pontos}
        activeDotIndex={activeIndex}
        carouselRef={isCarousel}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 100,
          backgroundColor: color.primary,
        
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,

          borderRadius: 100,
          marginHorizontal: 0,
          backgroundColor: "#333",

        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />

      
   </View>


    
  </ScrollView>
  </Wrapper>
  </Main>
  )
}