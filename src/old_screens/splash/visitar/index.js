
import React, { useState, useContext, useEffect } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image, Pressable, StatusBar, TextInput, ScrollView } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import Counter from '../../../components/counter/index';
import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  Button,
  ButtonIcon,
  ButtonLabel,
  AreaValor,
  LabelValor,
  SplashImg,


  Select,
  SelectLabel,
  Spacing,
  Spacing1,

  Div,
  Subheadline
} from './styles';


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { LinearGradient } from 'expo-linear-gradient';


import RangeSlider, { Slider } from 'react-native-range-slider-expo';

export default function Visitar({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)

  const data = route.params?.data

  const [segunda, setSegunda] = useState(false)
  const [terca, setTerca] = useState(false)
  const [quarta, setQuarta] = useState(false)
  const [quinta, setQuinta] = useState(false)
  const [sexta, setSexta] = useState(false)
  const [final, setFinal] = useState(false)

  function handleSegunda(){
    setSegunda(!segunda)
    setFinal(false)
    setOpc(opc + 1)
  }
  
  function handleTerca(){
    setTerca(!terca)
    setOpc(opc + 1)
    setFinal(false)
  }
  
  function handleQuarta(){
    setQuarta(!quarta)
    setOpc(opc + 1)
    setFinal(false)
  }
  
  function handleQuinta(){
    setQuinta(!quinta)
    setOpc(opc + 1)
    setFinal(false)
  }
  
  function handleSexta(){
    setSexta(!sexta)
    setOpc(opc + 1)
    setFinal(false)
  }

  
  function handleFinal(){
    setFinal(!final)
    setOpc(opc + 1)
    setSexta(false)
    setQuinta(false)
    setQuarta(false)
    setTerca(false)
    setSegunda(false)
  }

  const dias = [{
    segunda: segunda,
    terca: terca,
    quarta: quarta,
    quinta: quinta,
    sexta: sexta,
    final: final,
  }]




  const largura = 0.7 * width;
  const altura = 0.6 * height;


  const [valor , onValor] = useState();

  const [toggleIsOpen, setToggleIsOpen] = useState(false)

  function handleOpenToggle(){
    setToggleIsOpen(!toggleIsOpen)
  }



  const [bt, setBt] = useState(true)
  const [opc, setOpc] = useState(0)


  useEffect(() => {
    refresh()
  }, [opc])


  function refresh(){ 

    if(opc >= 1){
      setBt(false)
    }
    else if(opc < 1){
      setBt(true)
    }
  }


  const toggleAnimationState = useAnimationState({
    closed: {
      backgroundColor: "red"
    },
    open: {
      backgroundColor: "#000"
    }
  })

  const data2 = {
    alugar: data.alugar,
    comprar: data.comprar,
    cidade: data.cidade,
    item1: data.item1,
    dias: dias,
  }



  const voltar = route.params?.voltar

  const newData = {
    alugar: data.alugar,
    comprar: data.comprar,
    valor_max: data.valor_max,
    cidade: data.cidade,
    item1: data.item1,
    dias: dias,
  }
  
  async function proximo(){
    navigation.navigate('Valor', {data: data2})
    if(voltar == true){
      console.log('se voltar')
      const jsonValue = JSON.stringify(newData)
      await AsyncStorage.setItem('@preferences', jsonValue)
      navigation.navigate('TabNavigator', {params: {reload: Math.floor(Math.random() * 10) + 1}, screen: "Home"})
    }else{
      navigation.navigate('Valor', {data: data2})
    }
  }

  const a = false;

return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
        {a && <View style={{height: 40, width: 10}} />}
        {a && <Counter value={3} />}
        <ScrollView style={{paddingVertical: 40, paddingHorizontal: 24, flex: 1, justifyContent: 'center',}}>

          <MotiView from={{opacity: 0,
                    transform: [
                        {
                          scale: 0,
                        },]
                  
                    }} animate={{opacity: 1, 
                    transform: [
                        {
                          scale: 1.1,
                        },] }} transition={{type: "spring",duration: 1000,}}>
                    <SplashImg>
                      <Image source={require('../../../assets/calendar.png')} style={{width: 64, height: 64, alignSelf: 'center'}}/>
                    </SplashImg>
                </MotiView>

          <Title>Quais dias você pode fazer a visitação?</Title>

        <Spacing/>
        <Div/>
        <View style={{ marginTop: 20, marginBottom: 10,}}>

          <Select style={{flexGrow: 1,}} activity={segunda} onPress={handleSegunda}>
            <SelectLabel activity={segunda}>Segunda-feira</SelectLabel>
          </Select>

          <Spacing1/>
          <Select  style={{flexGrow: 1,}} activity={terca} onPress={handleTerca}>
            <SelectLabel activity={terca}>Terça-feira</SelectLabel>
          </Select>

          <Spacing1/>
          <Select  style={{flexGrow: 1,}} activity={quarta} onPress={handleQuarta}>
            <SelectLabel activity={quarta}>Quarta-feira</SelectLabel>
          </Select>
          
          <Spacing1/>
          <Select style={{flexGrow: 1,}} activity={quinta} onPress={handleQuinta}>
            <SelectLabel activity={quinta}>Quinta-feira</SelectLabel>
          </Select>

          <Spacing1/>
          <Select style={{flexGrow: 1,}} activity={sexta} onPress={handleSexta}>
            <SelectLabel activity={sexta}>Sexta-feira</SelectLabel>
          </Select>
          
          <Spacing1/>
          <Select style={{flexGrow: 1,}} activity={final} onPress={handleFinal}>
            <SelectLabel activity={final}>Apenas final de semana</SelectLabel>
          </Select>

          <Spacing1/>
        </View>
        <Div/>


      { opc >= 1 && 
      <AnimatePresence>
        <MotiView state={toggleAnimationState}
        from={{
          opacity: 0,
          transform: [
            {
              translateY: -20,
            },
          ],
        }}

      animate={{
        opacity: 1,
        transform: [
          {
            translateY: 0,
          },
        ]}}>
        <Button color="#5B72F2" disabled={bt} onPress={proximo} off={bt}>
          <>
            <ButtonLabel off={bt}>Próximo</ButtonLabel>
            <ButtonIcon off={bt}/>
            <MotiView 
              from={{
                opacity: 0,
                transform: [{translateX: -20,}]}} 
              animate={{
                opacity: 1,
                transform: [{translateX: 0,}]}}>

              <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
            </MotiView>
          </>
        </Button>
        </MotiView>
      </AnimatePresence>
      }






      { opc < 1 && 
      <AnimatePresence>
        <MotiView from={{
        opacity: 0.6,
        transform: [
          {
            translateY: 20,
          },
        ],
      }}

      animate={{
        opacity: 1,
        transform: [
          {
            translateY: 0,
          },
        ]}}>
        <Button color="#5B72F2" disabled={bt} off={bt}>
          <>
            <ButtonLabel off={bt}>Selecione as opções</ButtonLabel>
            <ButtonIcon off={bt}/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowup" size={28} color="#FFF" />
          </>
        </Button>
        </MotiView>
      </AnimatePresence>
      }
      </ScrollView>

    
  </Wrapper>
  </Main>
  )
}