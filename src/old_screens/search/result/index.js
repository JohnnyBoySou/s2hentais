
import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View, TouchableOpacity,  Animated, FlatList, ActivityIndicator, Text, ScrollView, StatusBar, ImageBackground, BackHandler, Dimensions, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


import { Ionicons, Fontisto , MaterialIcons } from '@expo/vector-icons';
import { TouchableRipple, Surface  } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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

Modal,
ProfileImg,
Name,
Email,

Button,
ButtonLabel,
ButtonIcon,
} from './styles';

import Carousel, { Pagination }  from 'react-native-snap-carousel';

import Axios from 'axios';
import Header from '../../../components/header/index';


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'


export default function Result({ navigation, route, ...props }) {


  const data = route.params?.data
  
  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef(null);

  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const bt = true;
  const pegarPost = (item) => {
      navigation.navigate('DetailsDois', { dados: item, });
    };

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

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
        <Address>{item.endereco}</Address>
      </Description>      
    </>
  </View>
  ), []);


return (
  <Main>
  <Header title="Resultados" />

  <Wrapper>

   <View style={{flex: 1, marginTop: 40,}}>

    {data.length > 0 && <>
   <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginBottom: 40,}}>
    <Ofertas>Encontramos</Ofertas>
      <AnimatePresence>
      <MotiView
      
      from={{
        scale: 0,
        opacity: 0,
      }}

      animate={{
        opacity: 1,
        scale: [
          {value: 1, type: 'timing'},
          {value: 1.1, type: 'spring'},
          {value: 1, type: 'timing'}
      ]}}>

          <OfertaBlock>{data.length}</OfertaBlock>
        </MotiView>
        
      </AnimatePresence>

    
  </View>
  
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
        dotsLength={data.length}
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
 
    </>}


    {data.length == 0 && <View style={{justifyContent: 'center', flex: 1, marginHorizontal: 24, marginTop: 40,}}>
      <Image source={require('../../../assets/404.png')} style={{width: 300, height: 300, alignSelf: 'center', marginBottom: 20,}}/>
      <Title>Não conseguimos encontrar nada. Tente novamente com outro termo.</Title>
      <Button color="#5B72F2" off={false} onPress={() => navigation.goBack()}>
          <>
            <ButtonLabel off={false}>Voltar</ButtonLabel>
            <ButtonIcon off={false}/>
            <MotiView 
              from={{
                opacity: 0,
                transform: [{translateY: 20,}]}} 
              animate={{
                opacity: 1,
                transform: [{translateY: 0,}]}}>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowleft" size={28} color="#FFF" />
            </MotiView>
          </>
        </Button>
    </View>}


   </View>
  </Wrapper>

  </Main>
  )
}