
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, ImageBackground, ScrollView} from 'react-native';


import { Ionicons, MaterialIcons, AntDesign  } from '@expo/vector-icons';
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
  Input,
  TextInput,

  Div,
  Modal,

  Select, SelectLabel,
  Spacing,

  Head,
  Headlabel,
  Headline,
  Circle,
  Square,
  Back,
  Body,
  Line,
  Bodytitle,
} from './styles';


import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import Header from '../../components/header/index';
import { ThemeContext } from 'styled-components/native';
import { Modalize } from 'react-native-modalize';

export default function Financiar({ navigation, route }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  
  const [ativo, setAtivo] = useState()
  const [renda, setRenda] = useState('Selecione sua renda mensal')

  const [a1, setA1] = useState()
  const [a2, setA2] = useState()
  const [a3, setA3] = useState()
  const [a4, setA4] = useState()
  const [a5, setA5] = useState()
  const [a6, setA6] = useState()
  const [a7, setA7] = useState()
  const [a8, setA8] = useState()


  
  const modalizeCheck = useRef(null);

  const onOpen = () => {
    modalizeCheck.current?.open();
  };
   const onClose = () => {
    modalizeCheck.current?.close();
  };

  function ha1(){
    
      setA1(true)
      setRenda('Até R$ 1.500,00')
      setA2(false)
      setA3(false)
      setA4(false)
      setA5(false)
      setA6(false)
      setA7(false)
      onClose()
    
  }

  function ha2(){
      setA2(true)
      setRenda('De R$ 1.500,01 a R$ 2.000,00')
      setA1(false)
      setA3(false)
      setA4(false)
      setA5(false)
      setA6(false)
      setA7(false)
      onClose()
  }


  function ha3(){
      setA3(true)
      setRenda('De R$ 2.000,01 a R$ 3.000,00')
      setA1(false)
      setA2(false)
      setA4(false)
      setA5(false)
      setA6(false)
      setA7(false)
      onClose()
  }

   function ha4(){
      setA4(true)
      setRenda('De R$ 3.000,01 a R$ 4.000,00')
      setA1(false)
      setA2(false)
      setA3(false)
      setA5(false)
      setA6(false)
      setA7(false)
      onClose()
  }

  function ha5(){
      setA5(true)
      setRenda('De R$ 4.000,01 a R$ 5.000,00')
      setA1(false)
      setA2(false)
      setA4(false)
      setA3(false)
      setA6(false)
      setA7(false)
      onClose()
  }

  function ha6(){
      setA6(true)
      setRenda('De R$ 5.000,01 a R$ 7.000,00')
      setA1(false)
      setA2(false)
      setA4(false)
      setA5(false)
      setA3(false)
      setA7(false)
      onClose()
  }

  function ha7(){
      setA7(true)
      setRenda('Acima de R$ 10.000,00')
      setA1(false)
      setA2(false)
      setA4(false)
      setA5(false)
      setA6(false)
      setA3(false)
      onClose()
  }

return (
  <Main>
  <Wrapper>


  <ScrollView style={{paddingVertical: 0, flex: 1, }}>

  <MotiView delay={300} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>

    <Head>
      <ImageBackground source={require('../../assets/storys_banner.png')} resizeMode="cover" style={{flex: 1, justifyContent: 'center',   padding: 24, }}>

      <Back onPress={() => navigation.goBack()}>
      <MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-left" size={32} color="#fff" /></Back>

      <Spacing/>
      <Headline>Financiamos</Headline>
      <Headlabel>Te ajudamos a encontrar a melhor instituição para financiamentos perto de você!</Headlabel>

      <Subtitle>Qual sua renda familiar?</Subtitle>
      <Input onPress={onOpen}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 18, paddingRight: 18,}}>
          <TextInput>{renda}</TextInput>
          <MaterialIcons name="keyboard-arrow-down" size={42} color={color.primary} />
        </View>
      </Input>
      <Spacing/>







      </ImageBackground>

    </Head>

    <Body>
  
      <Bodytitle>Sugestão</Bodytitle>
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


  <Modalize ref={modalizeCheck} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <Modal>
      <Select disabled={a1} style={{flexGrow: 1,}} activity={a1} onPress={ha1}>
        <SelectLabel activity={a1}>Até R$ 1.500,00</SelectLabel>
      </Select>

      <Select disabled={a2} style={{flexGrow: 1,}} activity={a2} onPress={ha2}>
        <SelectLabel activity={a2}>De R$ 1.500,01 a R$ 2.000,00</SelectLabel>
      </Select>

      <Select disabled={a3} style={{flexGrow: 1,}} activity={a3} onPress={ha3}>
        <SelectLabel activity={a3}>De R$ 2.000,01 a R$ 3.000,00</SelectLabel>
      </Select>
      
      <Select disabled={a4} style={{flexGrow: 1,}} activity={a4} onPress={ha4}>
        <SelectLabel activity={a4}>De R$ 3.000,01 a R$ 4.000,00</SelectLabel>
      </Select>
      
      <Select disabled={a5} style={{flexGrow: 1,}} activity={a5} onPress={ha5}>
        <SelectLabel activity={a5}>De R$ 4.000,01 a R$ 5.000,00</SelectLabel>
      </Select>
      
      <Select disabled={a6} style={{flexGrow: 1,}} activity={a6} onPress={ha6}>
        <SelectLabel activity={a6}>De R$ 5.000,01 a R$ 7.000,00</SelectLabel>
      </Select>

      <Select disabled={a7} style={{flexGrow: 1,}} activity={a7} onPress={ha7}>
        <SelectLabel activity={a7}>Acima de R$ 10.000,00</SelectLabel>
      </Select>
      

    </Modal>
  </Modalize>
  </Main>
  )
}