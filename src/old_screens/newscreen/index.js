
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, ImageBackground} from 'react-native';


import { Ionicons, Feather, AntDesign  } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  Subtitle,

  ImgSubtitle,
  ImgTitle,
  Lista,
  Infra,
  InfraLabel,


  Button,
  ButtonIcon,
  ButtonLabel,

  SubHeadline,

} from './styles';


import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import Header from '../../components/header/index';
import { ThemeContext } from 'styled-components/native';

export default function NewScreen({ navigation, route }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  

return (
  <Main>
  <Header title="Anunciar"/>
  <Wrapper>

    <ImageBackground source={require('../../assets/blur.png')} style={{flex: 1, marginHorizontal: 24, paddingVertical: 34, paddingHorizontal: 24, marginBottom: 20,}}  imageStyle={{borderRadius:12,}}>
      <ImgSubtitle>Encontramos</ImgSubtitle>
      <ImgTitle>A imobiliária certa para você</ImgTitle>
    
    </ImageBackground>

    <View style={{marginHorizontal: 24,  marginBottom: 20,}}>
    
      <Label>Preencha seu perfil que buscaremos as imobiliárias que se encaixam com você.</Label>


      <Label>Nosso sistema irá priorizar pelas imobiliárias mais bem avaliadas da plataforma.</Label>


      <SubHeadline>Vantagens</SubHeadline>
      <Lista>
        <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
        <InfraLabel>Acelere o contato com o cliente</InfraLabel>
      </Lista>


      <Lista>
        <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
        <InfraLabel>Anuncie diretamente no App</InfraLabel>
      </Lista>


      <Lista>
        <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
        <InfraLabel>Venda ou alugue mais rápido</InfraLabel>
      </Lista>



      <SubHeadline style={{marginTop: 20, marginBottom: 0,}}>Atenção</SubHeadline>
      <Label style={{marginBottom: 0,}}>Não salvamos nenhum de seus dados em nosso sistema.</Label>


    </View>

    <Button color="#5B72F2" onPress={() => navigation.navigate('Perfil')}>
        <>
          <ButtonLabel>Começar</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>


      

  </Wrapper>
  </Main>
  )
}