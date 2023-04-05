
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';


import {  Fontisto , Feather, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { TouchableRipple, TextInput   } from 'react-native-paper';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,
  SplashImg,
  Input,
  Button,
  Filter,
  Modal,
  Select,
  SelectLabel,
  Selects,
  Spacing1,
  Div,
  Spacing,
  SubTitle,
  SubLabel,
  Valor,
  B,


  Clean,
  CleanLabel,
} from './styles';

import Header from '../../components/header';


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'


import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import { Modalize } from 'react-native-modalize';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Search({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)

  const [fromValue, setFromValue] = useState(3000);
  const [toValue, setToValue] = useState(7000);
  const [value, setValue] = useState(0);

  const a = false;
  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const [data, setData] = useState()


  async function getDados(){
    const headers = {
      'Accept': "application/json"
    }
    await Axios.get(`https://maisconectados.com/wp-json/pesquisar/all?${item}${text}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        setToggleIsOpen(false)
        navigation.navigate('Result', {data: response.data})
    }).catch(error => {
        console.log(error)
    })

  }


  const [max, setMax] = useState(10000)
  const [min, setMin] = useState(100)
  const [valorInicial, setValorInicial] = useState(0)
  const [step, setStep] = useState(100)

  const [text, onText] = useState('');


  const [search, setSearch] = useState(false)



  const toggleAnimationState = useAnimationState({
    closed: {
      rotate: '180deg',
      opacity: 0,
    },
    open: {
      rotate: '0deg',
      opacity: 1,
    }
  })

  const [toggleIsOpen, setToggleIsOpen] = useState(false)

  function handleOpenToggle(){
    if(text.length > 1){
      getDados()
    }
    if(toggleIsOpen == false){
      toggleAnimationState.transitionTo('open')
      setToggleIsOpen(true)
    }else if(toggleIsOpen == true){
       toggleAnimationState.transitionTo('closed')
      setToggleIsOpen(false)
    }
    
  }

  

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  



  const [item, setItem] = useState('residencia=')

  const [residencia, setResidencia] = useState(true)
  const [codigo, setCodigo] = useState(false)
  const [imobil, setImobil] = useState(false)
  const [endereco, setEndereco] = useState(false)
  const [bairro, setBairro] = useState(false)
  
  const [simples, setSimples] = useState(false)

  const [place, setPlace] = useState("Ex: Residência Maxwel")

  
  const [opc, setOpc] = useState(0)

  function handleResidencia(){
    if(residencia == true){
      setResidencia(false)
      setItem('')
      setPlace('Ex: 123456')
      setCodigo(true)
    }else if(residencia == false){
      setItem('residencia=')
      setPlace('Ex: Residência Maxwel')
      setResidencia(true)
      setCodigo(false)
      setEndereco(false)
      setImobil(false)
    }
  }
  function handleCodigo(){
    if(codigo == true){
      setCodigo(false)
      setItem('')
      setOpc(opc - 1)
      setEndereco(true)
      setPlace('Ex: Centro')
    }else if(codigo == false){
      setItem('codigo=')
      
      setPlace('Ex: 123456')
      setCodigo(true)
      
      setResidencia(false)
      setEndereco(false)
      setImobil(false)
      setOpc(opc + 1)
    }
  }

  function handleImobil(){
    if(imobil == true){
      setImobil(false)
      setItem('')
      setOpc(opc - 1)
    }else if(imobil == false){
      setItem('item4=Apartamento&')
      setImobil(true)
      setOpc(opc + 1)
      
      setResidencia(false)
      setCodigo(false)
      setEndereco(false)
    }
  }
  
  function handleEndereco(){
    if(endereco == true){
      setEndereco(false)
      
      setItem('')
      setResidencia(true)
      setOpc(opc - 1)
      setPlace('Ex: Residência Maxwel')
    }else if(endereco == false){
      setItem('bairro=')
      setEndereco(true)
      setOpc(opc + 1)
      setPlace('Ex: Centro')
      setResidencia(false)
      setCodigo(false)
      setImobil(false)
    }
  }

  
  const [foco, setFocus]  = useState()

  function onblur(){
    setFocus(false)
    if(text.length > 0){
      getDados()
      setToggleIsOpen(true)
      setFocus(false)
    }
  }


  const atualizacao = false;

return (
  <Main>
  <Header title="Pesquisar"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
      <ScrollView style={{paddingVertical: 10, paddingHorizontal: 0,  paddingTop: 0,}}>

        <MotiView style={{flexDirection: 'row', marginHorizontal: 24,}} >

          <Input
           onChangeText={onText}
           value={text}
           placeholder={place}
           placeholderTextColor={color.label} 

           activity={foco}
           onSubmitEditing={onblur}
           onBlur={() => setFocus(false)}
           onFocus={() => setFocus(true)}
          />
          
          <Button onPress={handleOpenToggle}>

          { toggleIsOpen ? 
            <ActivityIndicator size={24} color="#FFF" />
          : 
        <AnimatePresence>
          <MotiView

           from={{
             rotate: '90deg',
             opacity: 0,
           }}
          transition={{type: 'timing', duration: 1000,}}
           animate={{
             rotate: '0deg',
             opacity: 1,
           }}>

              <Feather style={{textAlign: 'center'}} name="search" size={24} color="#fff" />
            </MotiView>
          </AnimatePresence>
          }
          </Button>
        
        </MotiView>


        {text.length > 0 && 
        
        <AnimatePresence>
        <MotiView from={{opacity: 0,
          transform: [
              {
                translateY: -10,
              },]
        
          }} animate={{opacity: 1, 
          transform: [
              {
                translateY: 5,
              },] }} transition={{type: "spring",duration: 500,}}>
        <Clean onPress={() => onText('')}>
          <CleanLabel>Limpar</CleanLabel>
        </Clean>
        
        </MotiView>
        </AnimatePresence>
        }


        <Selects>
            <Select activity={residencia} onPress={handleResidencia}>
              <SelectLabel activity={residencia}>Nome</SelectLabel>
            </Select>
            <Spacing1/>


            <Select activity={codigo} onPress={handleCodigo}>
              <SelectLabel activity={codigo}>Código</SelectLabel>
            </Select>
            <Spacing1/>

            <Select activity={endereco} onPress={handleEndereco}>
              <SelectLabel activity={endereco}>Endereço</SelectLabel>
            </Select>
          
        </Selects>

          {a && <View style={{marginHorizontal: 24, marginTop: 8,}}>
        
          <TouchableRipple onPress={() => navigation.navigate('Destaques')} borderless={true} style={{borderRadius: 8}} rippleColor="#FFF">
          <ImageBackground source={require('../../assets/destaques_call.png')} resizeMode="cover" style={{flex: 1,
    justifyContent: "center", padding: 20, paddingTop: 20, paddingBottom: 20}} imageStyle={{borderRadius: 8,}}>
            <View style={{width: 44, height: 44, backgroundColor: "#F1F3FF", borderRadius: 4, justifyContent: 'center', marginBottom: 10,}}>
              <AntDesign name="star" size={24} color="#5B72F2" style={{ textAlign: 'center'}} /> 
            </View>

           
            <Title>Destaques para você!</Title>
            <Label>Conheça os imóveis escolhidos a dedo por nossa equipe!</Label>
          </ImageBackground>
         
          </TouchableRipple>
        </View>
          }



        <SplashImg>
          <Image source={require('../../assets/search.png')}  style={{width: 300, height: 300, alignSelf: 'center'}}/>
        </SplashImg>



        

      </ScrollView>
  </Wrapper>

    <Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000020",}} handlePosition="inside">
      <Modal>
        <SubTitle>Endereço</SubTitle>
        
        <SubLabel>Selecione o bairro que deseja pesquisar</SubLabel>
        
        <Spacing/>
        <Div/>
        <Spacing/>

        <TextInput style={{width: "100%"}} label="Bairro" value={text} onChangeText={text => onText(text)} mode="outlined"
            theme={{colors: { primary: '#5B72F2', underlineColor:'transparent', placeholder: '#00000060', background: "#fff"}, fonts:{ regular : { fontFamily: font.book }}}}/>
        <Spacing/>
        <Div/>













        {a && <>
        <SubTitle>Valor</SubTitle>
        <Valor><B>R$ {fromValue}</B> até <B>R$ {toValue}</B></Valor>

        <RangeSlider  
            min={100} max={10000} step={step}
            fromValueOnChange={value => setFromValue(value)}
            toValueOnChange={value => setToValue(value)}

            initialFromValue={3000}
            initialToValue={6900}

            fromKnobColor={color.primary}
            toKnobColor={color.primary}

            valueLabelsBackgroundColor='black'
            inRangeBarColor='#98A8FF'
            outOfRangeBarColor="#F1F3FF"
            styleSize="small"
          />

          <Div/>
          <Spacing/>

        </>}

        
        
        
        
        </Modal>
      
      
      </Modalize>
  </Main>
  )
}