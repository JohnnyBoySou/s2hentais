
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, ImageBackground} from 'react-native';


import { Ionicons, Feather, AntDesign  } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TextInput } from 'react-native-paper';


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

  Spacing,
  Number,


  Div,
} from './styles';


import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import Header from '../../components/header/index';
import { ThemeContext } from 'styled-components/native';

export default function Perfil({ navigation, route }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)

  const [loading, setLoading] = useState(33)
  const [nome, setNome] = useState('')
  const [erroNome, setErroNome] = useState()
  
  const [telefone, setTelefone] = useState('')
  const [erroTelefone, setErroTelefone] = useState()
  
  const [email, setEmail] = useState('')
  const [erroEmail, setErroEmail] = useState()



  const validate = (email) => {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {return}else {setEmail(email)}}


  const dados = {email: email, nome: nome, telefone: telefone,}

  async function proximo(){  



    if(email.length > 0 && nome.length > 0 && telefone.length > 0){
      const jsonValue = JSON.stringify(dados)
      await AsyncStorage.setItem('@perfil', jsonValue)
      navigation.navigate('DadosImovel')
    }
    if(email.length == 0 ){
      setErroEmail(true)
    }
    if(nome.length == 0){
      setErroNome(true)
    }
    else{
      return
    }
  }




return (
  <Main>
  <Header title="Perfil"/>
  <Wrapper>

  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24, alignContent: 'center'}}>

  <View>
    <Subtitle>Seu</Subtitle>
    <Title>Perfil</Title>
  </View>

    <AnimatedCircularProgress
            size={65}
            width={8}
            fill={loading}
            tintColor={color.primary}
            rotation={0}
            lineCap="round"
            duration={1000}
            children={() => 
            <View style={{backgroundColor: color.off, borderRadius: 100, width: 100, height: 100, justifyContent: 'center', alignContent: 'center'}}>
              <Number>1</Number>
            </View>
            }/>


    </View>
    
    <View style={{marginHorizontal: 24,  marginBottom: 20,}}>
    
      <Label>Queremos saber mais um pouco sobre você!</Label>
      <Div/>
      <Spacing/>

      <TextInput
           
            error={erroNome}
            label="Nome Completo"
            value={nome}
            onChangeText={nome => setNome(nome)}
            mode="outlined"
            theme={{ 
              colors: { primary: '#5B72F2', underlineColor:'transparent', placeholder: '#00000060', background: "#fff"}, 
              fonts:{ regular : { fontFamily: font.book }}}}
          />

          <Spacing/>

        <TextInput
           
            error={erroTelefone}
            label="Telefone para contato"
            value={telefone}
            onChangeText={telefone => setTelefone(telefone)}
            mode="outlined"

            keyboardType="phone-pad"
            autoComplete="tel-device"

            theme={{ 
              colors: { primary: '#5B72F2', underlineColor:'transparent', placeholder: '#00000060', background: "#fff"}, 
              fonts:{ regular : { fontFamily: font.book }}}}
          />
          <Spacing/>

        <TextInput
           
            error={erroEmail}
            label="E-mail"
            value={email}
            onChangeText={email => validate(email)}
            mode="outlined"

            keyboardType="email-address"
            autoComplete="email"
            theme={{ 
              colors: { primary: '#5B72F2', underlineColor:'transparent', placeholder: '#00000060', background: "#fff"}, 
              fonts:{ regular : { fontFamily: font.book }}}}
          />

          <Spacing/>


      <Div/>
    </View>
  

    <Button color="#5B72F2" onPress={proximo}>
        <>
          <ButtonLabel>Continuar</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>


      

  </Wrapper>
  </Main>
  )
}