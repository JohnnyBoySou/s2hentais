
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image} from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


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

  Valor,
  Chip,
  Description,
  Address,
} from './styles';

import {Svg, Image as ImageSvg} from 'react-native-svg';
import { TouchableRipple, ProgressBar } from 'react-native-paper';

import MapView,  { Marker, Callout, Circle } from 'react-native-maps';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import { ThemeContext } from 'styled-components/native';

import { Modalize } from 'react-native-modalize';

export default function VerMapa({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const dados = route.params?.dados
  const imobil = route.params?.imobil
  const image = route.params?.dados.imagem1
  const titulo = route.params?.dados.nome
  const descricao = route.params?.dados.descricao

  const latitude = parseFloat(dados.latitude)
  const longitude = parseFloat(dados.longitude)


  const largura = 0.7 * width;
  const altura = 0.6 * height;


  const modalizeRef = useRef(null);

  const onOpen = () => {
    anim()
    modalizeRef.current?.open();
  };

  const mapview = useRef()
  function anim(){
    mapview.current.animateCamera({
      center: {
        latitude: latitude,
        longitude: longitude
      }, 
        zoom: 18,
        heading: 0,
        pitch: 0,
        altitude: 10
      }, { duration: 800 })
  }

  

  

return (
  <Main>
  
  <Wrapper>
    <View style={{paddingTop: 0, height: 1.1 * height, flex: 1, }}>

    <MapView
        style={{width: width, height: 1.048 * height, borderRadius: 12,}}
        showsPointsOfInterest={false}

        ref={mapview}

        customMapStyle={{overflow: 'hidden', borderRadius: 12,}}

        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0099000,
          longitudeDelta: 0.0045000,
        }}
        provider="google"
      >
      <Marker onPress={onOpen} coordinate={{latitude: latitude, longitude: longitude,}} pinColor={color.primary}>
        <Callout tooltip={true}>            
            <View style={{borderRadius: 8, backgroundColor: "#fff", width: 250, marginBottom: 5,}}>
              <View style={{borderRadius: 12,}}>
                <Svg width={250} height={160} >
                  <ImageSvg
                      style={{borderTopRightRadius: 12,}}
                      width={'100%'} 
                      height={'100%'}
                      preserveAspectRatio="xMidYMid slice"
                      href={{ uri: dados.imagem1}}
                  />
                </Svg>
              </View>
            
            <TouchableRipple style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, position: 'absolute', top: 5, right: 5,}} rippleColor="#303030" borderless={true}>
              <Chip>      
                <>
                {dados.tipo == "Ambos" && 
                <Valor style={{fontSize: 18,}}>R$ {dados.valor_mensal} / R$ {dados.valor_unico}</Valor> }
                {dados.tipo != "Ambos" && 
                <Valor style={{fontSize: 18,}}>R$ {dados.valor_mensal}{dados.valor_unico}</Valor> }
                </>
              </Chip>
            </TouchableRipple>
     
          <Description>
            <Title>{dados.nome}</Title>
            <Address>{dados.rua}, {dados.numero} - {dados.bairro}</Address>
          </Description> 
          </View>
            <View style={{alignSelf: 'center', marginTop: -10, marginBottom: 10,}}>
              <Svg width={44} height={20}>
                <ImageSvg style={{borderTopRightRadius: 12,}} width={'100%'} height={'100%'} preserveAspectRatio="xMidYMid slice" href={require('../../assets/indicator.png')}/>
              </Svg>
            </View>
        
      </Callout>
      
          
        </Marker>
        <Circle center={{
          latitude: latitude,
          longitude: longitude,
        }} radius={25} 
        
        fillColor="#5B72F220" 
        strokeColor={color.primary}
        strokeWidth={5}
        />
      
      </MapView>


      </View>

    
  </Wrapper>

      <Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "transparent",}} handlePosition="inside">
        <Modal>
          <ModalImg source={{uri: image}}/>
          <ModalText>
            <Title>{titulo}</Title>
            <Label>{descricao}</Label>
          </ModalText>
        </Modal>


        <MotiView
       from={{
          opacity: 0,
          transform: [{translateY: 20,}]}} 
              
      animate={{
          opacity: 1,
          transform: [{translateY: 0,}]}}>

        <Button color="#5B72F2"  onPress={() => navigation.navigate('Finalizar', {residencia: dados, dados: imobil})}>
        <>
        <ButtonLabel>Alugar agora</ButtonLabel>
        <ButtonIcon/>
        <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>

      </MotiView>
      
      
      
      
      </Modalize>


      <Back onPress={() => navigation.goBack()}>
        <MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-left" size={42} color="#fff" />
      </Back>


      <Quick onPress={onOpen}>
         <MaterialCommunityIcons name="map-marker-radius-outline"  style={{ textAlign: 'center'}}  size={36} color="#FFF" />
      </Quick>
  </Main>
  )
}