
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, BackHandler, Linking } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  SplashImg,

  Select,
  SelectLabel,
  Spacing,
  Spacing1,

  Div,
  Subheadline,
  SubConfig,
  SubConfigLabel,
  Modal,
  Spacing2,


  SelectTitle,
  DayOff,
  DayOn,
  Calendar,
  DayOnLabel,
  DayOffLabel,
  Day,

  Item,
  ItemImg,
  ItemLabel,
  ItemTitle,

  Lista,
  ListaLabel,
  Ball,

  Infra,
  InfraLabel,
  Edit,
  EditLabel,

  Button,
  ButtonLabel,
  ButtonIcon,

  ModalDois,
  ButtonSocial,
  SocialLabel,
  SubSocialLabel,


  Square,
  ImgSquare,
  TitleSquare,


  ModalTitle,
  ModalLabel,
  Circle
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/header';

import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar, TouchableRipple } from 'react-native-paper';

export default function Acessibilidade({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)

  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const [load, setLoad] = useState(true)



  const onOpen = () => {
    modalizeRef.current?.open();
  }



  const modalizeRef = useRef()

  const atualizaca = false

return (
  <Main>
  <Header title="Acessibilidade"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    <ScrollView style={{paddingVertical: 0, paddingHorizontal: 24, flex: 1, }}>
    <MotiView delay={300} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>

        <TouchableRipple style={{borderRadius: 8, flexGrow: 1}} onPress={() => {}} borderless={true}>
          <View style={{flexDirection: 'row', backgroundColor: "#F1F3FF", padding: 14, borderRadius: 6,}}>
            <ButtonSocial color={color.primary}>
              <MaterialIcons name="alternate-email" size={24} color={color.off} style={{textAlign: 'center',}} /></ButtonSocial>
            <View style={{marginLeft: 12,}}>
              <SocialLabel>Tamanho dos Textos</SocialLabel>
              <SubSocialLabel>Pequeno</SubSocialLabel>
            </View>
          </View>
        </TouchableRipple>

        <Spacing/>
        <Div/>
        <Spacing/>

        <TouchableRipple style={{borderRadius: 8,}} onPress={() => {}} borderless={true}>
          <View style={{flexDirection: 'row', backgroundColor: "#F1F3FF", padding: 14, borderRadius: 6,}}>
            <ButtonSocial color={color.primary}>
              <MaterialIcons name="alternate-email" size={24} color={color.off} style={{textAlign: 'center',}} /></ButtonSocial>
            <View style={{marginLeft: 12,}}>
              <SocialLabel>Tema do Aplicativo</SocialLabel>
              <SubSocialLabel>Claro</SubSocialLabel>
            </View>
          </View>
        </TouchableRipple>

        <Spacing/>


        <TouchableRipple style={{borderRadius: 8,}} onPress={() => {}} borderless={true}>
          <View style={{flexDirection: 'row', backgroundColor: "#F1F3FF", padding: 14, borderRadius: 6,}}>
            <ButtonSocial color={color.primary}>
              <MaterialIcons name="alternate-email" size={24} color={color.off} style={{textAlign: 'center',}} /></ButtonSocial>
            <View style={{marginLeft: 12,}}>
              <SocialLabel>Outras Opçôes</SocialLabel>
              <SubSocialLabel>Acessibilidade avançada</SubSocialLabel>
            </View>
          </View>
        </TouchableRipple>

        <Spacing/>




        </MotiView>
      </ScrollView>

    
  </Wrapper>

  
  </Main>
  )
}