
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, ImageBackground } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
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



  Headline,
  Button,
  ButtonLabel,

  Head,
  Body,

  Line,
  Square,
  Circle, 
  Subtitle,
  Back,

} from './styles';


import Header from '../../components/header';



import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar } from 'react-native-paper';

export default function Storys({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const voltar = route.params?.voltar
  const data = route.params?.data



  const largura = 0.7 * width;
  const altura = 0.6 * height;


  const modalizeRef = useRef(null);
  const modalizeVersao = useRef(null);

  const onOpenVersao = () => {
    modalizeVersao.current?.open();
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };


  const versao = 3.0

  const [atualizacao, setAtualizacao] = useState("Procurando Atualizações...")
  const [load, setLoad] = useState(true)

  function abrir(){
    onOpen()
    setTimeout(function atualizacoes(){
      setAtualizacao("Seu App está atualizado!")
      setLoad(false)
    }, 3000)
  }
  


return (
  <Main>
  <Wrapper>

  
  <ScrollView style={{paddingVertical: 0, flex: 1, }}>

  <MotiView delay={300} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>

    <Head>
      <ImageBackground source={require('../../assets/storys_banner.png')} resizeMode="cover" style={{flex: 1, justifyContent: 'center',   padding: 24, }}>

      <Back onPress={() => {}}><MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-left" size={32} color="#fff" /></Back>

      <Spacing/>
      <Headline>Os Storys {"\n"}que estão {"\n"}bombando!</Headline>

      <Button onPress={() => {}}>
        <ButtonLabel>Seguir</ButtonLabel>
      </Button>
      <Spacing/>
      </ImageBackground>

    </Head>
  

    <Body>
    
      <Subtitle>Para você</Subtitle>
      <Line>
        <Spacing/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
      </Line>


      <Spacing/>
      <Subtitle>Recentes</Subtitle>
      <Line>
        <Spacing/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </Line>
    
    </Body>
    
    
       
  </MotiView>
  </ScrollView>
  </Wrapper>
  </Main>
  )
}