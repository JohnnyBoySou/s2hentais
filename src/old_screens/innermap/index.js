
import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import { View,  Text, Dimensions, ScrollView, FlatList, Image, Animated , ImageBackground, SafeAreaView } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { TouchableRipple, ProgressBar } from 'react-native-paper';
import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,
  Mark,
  MarkLabel,

  Modal,
  ModalImg,
  ModalText,

  Button, 
  ButtonIcon, 
  ButtonLabel,
  Quick,
  Back,

  Description,
  Address,
  Img,
  Spacing,
  Valor,
  Chip,


  OfertaBlock,
  Ofertas,

  ZoomOut,
  ZoomIn,

  Imoveis, 
  ImoveisLabel,


  PointLabel,
  Point,
} from './styles';

import {Svg, Image as ImageSvg} from 'react-native-svg';


import RowLarge from '../../new_components/lists/row_large/index';

import MapView,  { Marker, Callout, Circle, } from 'react-native-maps';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Skeleton } from '@motify/skeleton'
import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import { ThemeContext } from 'styled-components/native';
//import Carousel, { Pagination }  from 'react-native-snap-carousel';


import { Modalize } from 'react-native-modalize';

export default function InnerMap({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


  const latitude = -23.322323
  const longitude = -23.322323

  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const modalizeRef = useRef(null);
  const modalizeCache = useRef(null);
  const modalizeSingle = useRef(null);
  
  const onOpen = (item) => {
    setAlturaMapa( 0.6 * height)
    modalizeRef.current?.open();
  };

  const [cache, setCache] = useState(data)

  

  const mapview = useRef()
  const [handlePoint, setPoint] = useState(false)


  function anim(item){
    const lat = parseFloat(item.latitude)
    const long = parseFloat(item.longitude)
    modalizeCache.current?.open();
    console.log(item)
    setCache(data)
    setPoint(true)
    mapview.current.animateCamera({
      center: {
        latitude: lat,
        longitude: long
      }, 
        zoom: 18,
        heading: 0,
        pitch: 0,
        altitude: 10
      }, { duration: 800 })
  }

  const [data, setData] = useState([])
  const [perfil, setPerfil] = useState()
  const [preferences, setPreferences] = useState()
  const [loading, setLoading] = useState(true)

  const ofertas = data.length

  useEffect(() => {
    getPreferences()
  }, [])


  async function getDados(valor){
     const headers = {
      'Accept': "application/json"
    }
    const max = 'valor_max=' + valor.valor_max
    
    if(valor.alugar){
      await Axios.get(`https://s2hentais.com/novoimovel/wp-json/feed/alugar?${valor.item1}${max}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        setLoading(false)
    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      await Axios.get(`https://s2hentais.com/novoimovel/wp-json/feed/comprar?${valor.item1}${max}`, {
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
  
  const pegarPost = (item) => {
    modalizeRef.current?.close()
    navigation.navigate('DetailsDois', { dados: item, });};

  
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);



  


 function Points(props){
    const dados = props.data;

    return(
    <View>
      {dados.map((item, index) => (
      <Marker key={index} onPress={() => anim(item)} coordinate={{latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude)}}>
        <Point >
          <PointLabel>R$ {item.valor_mensal}{item.valor_unico}</PointLabel>
        </Point>
      </Marker> 

    ))}

    </View>
)}
  
  

  const [alturaMapa, setAlturaMapa] = useState(0.95 * height)
  const [zoom, setZoom] = useState(13)
  function zoomout(){
    setZoom(zoom - 3)
    mapview.current.animateCamera({
      center: {
        latitude: -26.4863307,
        longitude: -49.083026,
      }, 
        zoom: zoom,
        heading: 0,
        pitch: 0,
        altitude: 5
      }, { duration: 800 })
  }
  
  function zoomin(){
    setZoom(zoom + 3)
    mapview.current.animateCamera({
      center: {
        latitude: -26.4863307,
        longitude: -49.083026,
      }, 
        zoom: zoom,
        heading: 0,
        pitch: 0,
        altitude: 5
      }, { duration: 800 })
  }

  const renderItem = ({ item }) => (
    <RowLarge  data={item} />
  ) 

  const a = false;

return (
  <Main>
  <Wrapper>
    <ScrollView style={{paddingTop: 0, flex: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12,}}>
    
      { loading && <View style={{marginTop: 300, paddingTop: 50, paddingHorizontal: 42, paddingBottom: 50,}}>
        <Title style={{textAlign: 'center', fontSize: 32, lineHeight: 35, marginBottom: 30, }}>Carregando mapa</Title>
        <ProgressBar indeterminate color={color.primary} />
      </View>}





    </ScrollView>
  </Wrapper>

  <Modalize      
    ref={modalizeRef} 
    overlayStyle={{backgroundColor: "transparent",}} handlePosition="inside" 
    modalStyle={{backgroundColor: "#FFF", paddingTop: 10, }} >
    <View style={{ marginTop: 20, paddingBottom: 10, paddingHorizontal: 20 }}>
      <Title>Encontramos {data?.length} imóveis</Title>
      <FlatList data={data} 
            ListFooterComponent={() => <View style={{width: 30, height: 50,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
    </View>
  </Modalize>


  
  <Modalize      
    ref={modalizeCache} 
    overlayStyle={{backgroundColor: "transparent",}} handlePosition="inside" 
    modalStyle={{backgroundColor: "#FFF", paddingTop: 10, }} >
    <View style={{ marginTop: 20, paddingBottom: 10, paddingHorizontal: 20 }}>
     
      <FlatList data={cache} 
            ListFooterComponent={() => <View style={{width: 30, height: 50,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
    </View>
  </Modalize>



    {a && <Back onPress={() => navigation.goBack()}>
      <MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-left" size={42} color="#fff" />
    </Back>}


    <Imoveis onPress={() => modalizeRef.current?.open()}>
      <ImoveisLabel>Imóveis</ImoveisLabel>
    </Imoveis>

    
    <ZoomIn onPress={zoomin}>
      <AntDesign name="plus"  style={{ textAlign: 'center'}}  size={32} color="#000" />
    </ZoomIn>

    <ZoomOut onPress={zoomout}>
      <AntDesign name="minus"  style={{ textAlign: 'center'}}  size={36} color="#FFF" />
    </ZoomOut>

  </Main>
  )
}