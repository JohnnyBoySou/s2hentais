
import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View, TouchableOpacity,  Animated, FlatList, ActivityIndicator, Text, ScrollView, StatusBar, ImageBackground, BackHandler, Dimensions, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableRipple,   } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



import Internet from '../../components/internet/index';
import AwaitLoad from '../../components/awaitload/index';
import Item from '../../components/item/index';
import { Modalize } from 'react-native-modalize';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';

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
Bt, 
BtLabel,

Spacing,
Button,
ButtonIcon,
ButtonLabel,

Item1, Item1Label,
Item1Title,
} from './styles';

import Financiamento from '../../components/financiamento/index'

import Days from '../../components/days/index';

import Header from '../../components/header/index';
import Carousel, { Pagination }  from 'react-native-snap-carousel';

import Axios from 'axios';
import { Skeleton } from '@motify/skeleton'


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'


export default function Tag({ navigation, route, ...props }) {

  const [data, setData] = useState()
  const [perfil, setPerfil] = useState()
  const [preferences, setPreferences] = useState()
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused();

  const reload = route.params?.reload

  const url = route.params?.url
  const type = route.params?.type
  const amount = route.params?.amount

  useEffect(() => {
    getPreferences()
  }, [reload])



  
  async function getDados(valor){
     const headers = {
      'Accept': "application/json"
    }
    const max = 'valor_max=' + valor.valor_max
    setLoading(true)
    if(valor.alugar){
      if(url == 1){
        await Axios.get(`https://maisconectados.com/wp-json/tag/alugar/1?item1=${type}&qtd1=${amount}`, {
          headers: headers}).then(function (response) {
          setData(response.data)
          setLoading(false)
        }).catch(error => {console.log(error)})}

      else if(url == 2){
        await Axios.get(`https://maisconectados.com/wp-json/tag/alugar/2?item2=${type}&qtd2=${amount}`, {
            headers: headers}).then(function (response) {
            setData(response.data)
            setLoading(false)
          }).catch(error => {console.log(error)})}
      
      else if(url == 3){
        await Axios.get(`https://maisconectados.com/wp-json/tag/alugar/3?item3=${type}&qtd3=${amount}`, {
            headers: headers}).then(function (response) {
            setData(response.data)
            setLoading(false)
          }).catch(error => {console.log(error)})}
    
    }


    if(valor.comprar){
      await Axios.get(`https://maisconectados.com/wp-json/feed/comprar?${valor.item1}${max}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        setLoading(false)
    }).catch(error => { 
        console.log(error)
    })
    }
  }
  
  async function getPreferences(){
    try {
      const jsonValue = await AsyncStorage.getItem('@preferences')
      if(jsonValue != null) {
        const valor = JSON.parse(jsonValue)
        setPreferences(valor)
        getDados(valor)
      }
    } catch(e) {
      console.log(e)
    }
  }

  
  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
 
  const ofertas = data?.length
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef(null);

  const largura = 0.7 * width;
  const altura = 0.6 * height;
  const altura2 = 0.48 * height;

  const pegarPost = (item) => {
      navigation.navigate('DetailsDois', { dados: item, });};

  const cidade = preferences?.cidade
  const modalizeRef = useRef(null);


  const modalizePreferences = useRef(null);

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

  const modalizeClose = useRef(null);
   
  const onCloseA = () => {
    modalizeClose.current?.open();
  };
   
  const onCloseAClose = () => {
    modalizeClose.current?.close();
  };
  

  const renderItem = useCallback(({ item, index }) => (
    <View onPress={() => pegarPost(item)}
      style={{
        borderRadius: 12,
        height: altura,
        marginLeft: 5,
        marginRight: 5,
      }}>
      <>

    <TouchableRipple onPress={() => pegarPost(item)} style={{flex: 1,borderRadius: 12, }} rippleColor="#FFF" borderless={true}>
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
  ), []);

  const regx = preferences?.item1.slice(6)

  const item = regx?.slice(0, regx.length - 1)


  const a = false;



return (
  <Main>

  <Wrapper>


  
  <Header title="Filtro" />



  
  <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: 20,}}>
    { loading && <Skeleton show={loading} radius={8} height={48} width={230} colorMode="light"/>}
    { loading == false && <>
    {ofertas > 0 && <><Ofertas>Resultados para:</Ofertas>
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

        </MotiView>
      </AnimatePresence>
      </>
    }
      </>}
  </View>

    <View style={{alignSelf: 'center', marginTop: 20, marginBottom: 10,}}><Item amount={amount} type={type}/></View>

  <View style={{flex: 1, marginTop: 20,}}>
   {loading == false && <>{ofertas == 0 && <View style={{marginHorizontal: 24,}}>
      <Image source={require('../../assets/404.png')}  style={{width: 200, height: 200, alignSelf: 'center'}}/>


      <Title>Não conseguimos encontrar nada. Tente mudar seu feed</Title>

      <Button color="#5B72F2" off={false} onPress={() => navigation.navigate('Mapa')}>
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
    </View>}</>}
    {loading && 
    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center',  textAlign: 'center'}}>
      <Skeleton show={loading} radius={12} height={altura2} width={largura} colorMode="light"/>
      <View style={{marginTop: 20,}}/>
      <Skeleton show={loading} radius={8} height={42} width={220} colorMode="light"  />
      <View style={{marginTop: 15,}}/>
      <Skeleton show={loading} radius={4} height={28} width={250} colorMode="light"  />
    </View> }
   
    {loading == false &&  <Carousel 
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
        /> }

      {loading == false &&  <Pagination
        dotsLength={ofertas}
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
      />}


  </View>

  </Wrapper>


  </Main>
  )
}