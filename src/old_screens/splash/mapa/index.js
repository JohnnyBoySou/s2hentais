
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image, Pressable, StatusBar, TextInput , ScrollView} from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


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


import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { LinearGradient } from 'expo-linear-gradient';

export default function Mapa({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const voltar = route.params?.voltar
  const data = route.params?.data
  const a = false;


  const largura = 0.7 * width;
  const altura = 0.6 * height;


  const [jaragua, setJaragua] = useState(false)
  const [floripa, setFloripa] = useState(false)
  const [joinville, setJoinville] = useState(false)
  
  const [schroeder, setSchroeder] = useState(false)
  const [massaranduba, setMassaranduba] = useState(false)
  const [corupa, setCorupa] = useState(false)  
  const [guaramirim, setGuaramirim] = useState(false)
  

  const [bt, setBt] = useState(true)

  const [cidade, setCidade] = useState('')

  function handleJaragua(){
    
    if(jaragua == true){
      setJaragua(false)
      setBt(true)
      setCidade('')
    }
    else if(jaragua == false){
      setJaragua(true)
      setCidade('Jaraguá do Sul')
      setFloripa(false)
      setJoinville(false)
      setSchroeder(false)
      setMassaranduba(false)
      setCorupa(false)
      setGuaramirim(false)
      setBt(false)
    }
  }

  
  function handleJoinville(){
    
    if(joinville == true){
      setJoinville(false)
      setBt(true)
      setCidade('')
    }
    else if(joinville == false){
      setJoinville(true)
      setCidade('Joinville')
      setFloripa(false)
      setJaragua(false)
      setSchroeder(false)
      setMassaranduba(false)
      setCorupa(false)
      setGuaramirim(false)
      setBt(false)
    }
  }

  function handleMassaranduba(){

    if(massaranduba == true){
      setMassaranduba(false)
      setBt(true)
      setCidade('')
    }
    else if(massaranduba == false){
      setMassaranduba(true)
      setCidade('Massaranduba')
      setJaragua(false)
      setJoinville(false)
      setSchroeder(false)
      setGuaramirim(false)
      setCorupa(false)
      setBt(false)
    }

  }

  function handleSchroeder(){

    if(schroeder == true){
      setSchroeder(false)
      setBt(true)
      setCidade('')
    }
    else if(schroeder == false){
      setSchroeder(true)
      setCidade('Jaraguá do Sul')
      setJaragua(false)
      setJoinville(false)
      setMassaranduba(false)
      setCorupa(false)
      setGuaramirim(false)
      setBt(false)
    }

  }


  function handleGuaramirim(){

    if(guaramirim == true){
      setGuaramirim(false)
      setBt(true)
      setCidade('')
    }
    else if(guaramirim == false){
      setGuaramirim(true)
      setCidade('Jaraguá do Sul')
      setJaragua(false)
      setJoinville(false)
      setMassaranduba(false)
      setSchroeder(false)
      setCorupa(false)
      setBt(false)
    }

  }




  function handleCorupa(){

    if(corupa == true){
      setCorupa(false)
      setBt(true)
      setCidade('')
    }
    else if(corupa == false){
      setCorupa(true)
      setCidade('Corupá')
      setJaragua(false)
      setJoinville(false)
      setMassaranduba(false)
      setSchroeder(false)
      setGuaramirim(false)
      setBt(false)
    }

  }

    const novaData = {
        alugar: data?.alugar,
        comprar: data?.comprar,
        valor_max: data?.valor_max,
        cidade: cidade,
        item1: data?.item1,
        dias: data?.dias,
      }
  




  async function proximo(){
    if(voltar == true){
      const jsonValue = JSON.stringify(novaData)
      await AsyncStorage.setItem('@preferences', jsonValue)
      navigation.navigate('TabNavigator', {params: {reload: true}, screen: "Home"})
    }else{
      navigation.navigate('Busca', {cidade: cidade})}
  }


  const scroll = useRef()

  function scrolle(){
     scroll.current?.scrollTo({
      y: 200,
      animated: true,
    })
  }



return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
        <ScrollView ref={scroll} style={{paddingBottom: 40, }}>
        { a && <View style={{height: 50, width: 2,}} />}
        { a && <Counter value={1}/>}

        <LinearGradient colors={['#fff', 'rgba(255,255,255,0.1)']} style={{height: 100, width: width, marginBottom: -100, zIndex: 3, }}/>

        <Image source={require('../../../assets/map_view.png')} style={{width: width, height: 100, opacity: 0.7, }} />
        
        <LinearGradient colors={['rgba(255,255,255,0.1)', '#FFF']} style={{height: 100, width: width, marginTop: -100,}}/>
      

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
              <Image source={require('../../../assets/globe.png')}  style={{width: 86, height: 86, alignSelf: 'center'}}/>
            </SplashImg>
          </MotiView>

          


          <Title>Qual sua localização?</Title>

          <Subheadline>Selecione entre as opções abaixo</Subheadline>

          


        <View style={{marginTop: 20, marginBottom: 0, paddingHorizontal: 24,}}>

        <Div/>
        <Spacing/>
        <Spacing/>
        
        
        
          <Select style={{flexGrow: 1,}} activity={jaragua} onPress={handleJaragua}>
            <SelectLabel activity={jaragua}>Jaraguá do Sul</SelectLabel>
          </Select>
        
         {a && <Select style={{flexGrow: 1,}} activity={joinville} onPress={handleJoinville}>
            <SelectLabel activity={joinville}>Joinville</SelectLabel>
          </Select> }

         {a && <Select style={{flexGrow: 1,}} activity={corupa} onPress={handleCorupa}>
            <SelectLabel activity={corupa}>Corupá</SelectLabel>
          </Select> }

          {a && <Select style={{flexGrow: 1,}} activity={guaramirim} onPress={handleGuaramirim}>
            <SelectLabel activity={guaramirim}>Guaramirim</SelectLabel>
          </Select>}

          {a && <Select style={{flexGrow: 1,}} activity={massaranduba} onPress={handleMassaranduba}>
            <SelectLabel activity={massaranduba}>Massaranduba</SelectLabel>
          </Select>}
       
        <Spacing/>
        <Div/>
        </View>
         



      { cidade.length > 0 && 
      <AnimatePresence>
        <MotiView 
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






      { cidade.length == 0  && 
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
            <MotiView 
              from={{
                opacity: 0,
                transform: [{translateY: 20,}]}} 
              animate={{
                opacity: 1,
                transform: [{translateY: 0,}]}}>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowup" size={28} color="#FFF" />
            </MotiView>
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