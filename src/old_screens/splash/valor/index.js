
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, TextInput,  StyleSheet,} from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';


import { Modalize } from 'react-native-modalize';

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

  CheckLabel,
  Bt,
  Div,

  ButtonValue,
  ButtonValueLabel,
  ValueLabel,

  Buttons,
  Bta,
  BtaLabel,
  Btd,
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { LinearGradient } from 'expo-linear-gradient';

import Counter from '../../../components/counter/index';

import RangeSlider, { Slider } from 'react-native-range-slider-expo';

export default function Valor({ navigation, route, ...props }) {


  const { color , font, opacity } = useContext(ThemeContext)

  

  const data = route.params?.data

  const [escolha, setEscolha] = useState()

  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [valorInicial, setValorInicial] = useState(1000)
  const [valorFinal, setValorFinal] = useState(0)
  const [step, setStep] = useState(0)



  function definir(){
    if(data.alugar == true){
      setMin(100)
      setMax(15000)
      setValorInicial(500)
      setValorFinal(7000)
      setStep(100)
    }else if(data.alugar == false){
      setMin(10000)
      setMax(1000000)
      setValorInicial(300000)
      setValorFinal(700000)
      setStep(1000)
    }
  }

  const largura = 0.7 * width;
  const altura = 0.6 * height;


  const [valor , onValor] = useState();

  const [toggleIsOpen, setToggleIsOpen] = useState(false)

  function handleOpenToggle(){
   setToggleIsOpen(!toggleIsOpen) 
  }

  const [fromValue, setFromValue] = useState(1000);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  const [text, onChangeText] = React.useState("Useless Text");


  useEffect(() => {
    definir();
  }, [])

  useEffect(() => {
    regra();
  })


  const newData = {
    alugar: data.alugar,
    comprar: data.comprar,
    valor_max: fromValue,
    cidade: data.cidade,
    item1: data.item1,
    dias: data.dias,
  }

  const [loading,setLoading] = useState(false)

  async function salvar(){
    setLoading(true)
    try {
      const jsonValue = JSON.stringify(newData)
      await AsyncStorage.setItem('@preferences', jsonValue)
      navigation.navigate('Load')
      //navigation.navigate('TabNavigator',  { params: {data: newData}, screen: 'Home'} )
    }
    catch (e) {
      console.log(e)
    }
    
  }

  const [isChecked, setChecked] = useState(false);

  function aumentar(){
    setFromValue(Number(fromValue) + step)
  }
  function diminuir(){
    if(fromValue > 0){
      setFromValue(Number(fromValue) - step)
    }
  }

  function regra(){
    if(fromValue < 0){
      setFromValue(0)
    }
  }

  const voltar = route.params?.voltar
  
  async function proximo(){
    if(voltar == true){
      const jsonValue = JSON.stringify(newData)
      await AsyncStorage.setItem('@preferences', jsonValue)
      navigation.navigate('TabNavigator', {params: {reload: Math.floor(Math.random() * 10) + 1}, screen: "Home"})
    }else{
      setLoading(true)
      try {
        const jsonValue = JSON.stringify(newData)
        await AsyncStorage.setItem('@preferences', jsonValue)
        navigation.navigate('Load')
      }
      catch (e) {
        console.log(e)
      }
    }
  }
  const a = false;




  const modalizeConvert = useRef();


  const [beforeConvert, setBeforeConvert] = useState(1000)
  const afterConvert =  Number(beforeConvert * 4.98) 


  function converter(){
    setFromValue(afterConvert)
    modalizeConvert.current?.close()
  }




return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
        <View style={{paddingVertical: 40, paddingHorizontal: 24, backgroundColor: "#FFF", }}>
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
            <Image source={require('../../../assets/money_2.png')}  style={{width: 86, height: 86, alignSelf: 'center'}}/>
          </SplashImg>
      </MotiView>

          <Title>Qual seu orçamento?</Title>
          <Label>Buscaremos imóveis até esse valor</Label>
          <View style={{marginBottom: 20,}} />
          <Div/> 


    {a && <MotiView
      from={{
        opacity: 0,
        transform: [
          {
            translateY: -50,
          },
        ],
      }}

      animate={{
        opacity: 1,
        transform: [
          {
            translateY: 0,
          },
        ],

        }}>
        <View style={{flexDirection: 'row',}}>
          <Bt color="#000" onPress={diminuir}>
            <Ionicons style={{textAlign: 'center',}} name="remove-outline" size={24} color="#fff" />
          </Bt>
          <AreaValor>

            <LabelValor 
            keyboardType="numeric" 
            maxLength={8}
            defaultValue="1000"
            onChangeText={fromValue => setFromValue(fromValue)} 
            value={fromValue} 
        />
          </AreaValor>  
          <Bt color={color.primary} onPress={aumentar}>
            <Ionicons style={{textAlign: 'center', fontWeight: 700,}} name="add" size={24} color="#FFF" />
          </Bt>
        </View>
      </MotiView> }


      <ValueLabel style={{paddingTop: 20}}>
        <Text style={{fontFamily: font.bold,}}>(R$)</Text> Real Brasileiro
      </ValueLabel>


       <View style={{flexDirection: 'row', marginBottom: 20,}}>
          
            <ButtonValue onPress={() => modalizeConvert.current?.open()}>
              <ButtonValueLabel>R$</ButtonValueLabel>
            </ButtonValue>

            <LabelValor 
            keyboardType="numeric" 
            maxLength={8}
            defaultValue="1000"
            onChangeText={fromValue => setFromValue(fromValue)} 
            value={fromValue} 
        />
        </View>

        <Buttons>
          <Btd onPress={() => setFromValue(fromValue - 100)}><BtaLabel>Diminuir (-100)</BtaLabel></Btd>
          <View style={{width: 10, height: 10,}}/>
          <Bta onPress={() => setFromValue(fromValue + 100)}><BtaLabel>Adicionar (+100)</BtaLabel></Bta>
        </Buttons>

        <View style={{backgroundColor: "#70779C20", padding: 10, borderRadius: 8, flexDirection: 'row', justifyContent: 'center'}}>
          <Ionicons name="alert-circle-outline" size={28} color="#70779C" style={{textAlign: 'center'}} />
          <Text style={{fontFamily: font.medium, color: color.label, marginLeft: 10, fontSize: 14,}}>Clique no (R$) para fazer a conversão de valores se necessário. </Text>
        
        </View>


      

        {a &&  <Slider 
            min={min} max={max} step={step}
            valueOnChange={value => setFromValue(value)}

            initialValue={valorInicial}

            knobColor="#4E63DA"
            showRangeLabel={false}
            

            valueLabelsBackgroundColor='black'
            inRangeBarColor='#F1F3FF'
            outOfRangeBarColor="#5B72F2"
            styleSize="medium"
          /> }


      <Div/>


      <Button color="#37CB84" onPress={proximo}>
        <>
          <ButtonLabel>Próximo</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>
      </View>

    
  </Wrapper>

     
    <Modalize ref={modalizeConvert} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">        
     <View style={{paddingHorizontal: 20}}>
     <Title style={{textAlign: 'left', fontSize: 28, marginTop: 20, }}>Converter Moeda</Title>

      <ValueLabel style={{paddingTop: 20}}>
        <Text style={{fontFamily: font.bold,}}>(USD)</Text> Dólar Americano
      </ValueLabel>


       <View style={{flexDirection: 'row', marginBottom: 20,}}>
          
            <ButtonValue onPress={() => {}}>
              <ButtonValueLabel>USD</ButtonValueLabel>
            </ButtonValue>

            <LabelValor 
            keyboardType="numeric" 
            maxLength={8}
            defaultValue="1000"
            onChangeText={beforeConvert => setBeforeConvert(beforeConvert)} 
            value={beforeConvert} 
        />
        </View>


        
      <ValueLabel style={{paddingTop: 20}}>
        <Text style={{fontFamily: font.bold,}}>(R$)</Text> Real Brasileiro
      </ValueLabel>


       <View style={{flexDirection: 'row', marginBottom: 20,}}>
          
            <ButtonValue onPress={() => {}}>
              <ButtonValueLabel>R$</ButtonValueLabel>
            </ButtonValue>

            <LabelValor 
            keyboardType="numeric" 
            maxLength={8}
            defaultValue="1000"
            value={afterConvert} 
            editable={false}
        />
        </View>

        <Bta style={{padding: 8, marginBottom: 20}} onPress={converter}><BtaLabel style={{fontSize: 18,}}>Salvar</BtaLabel></Bta>

      </View>
    </Modalize>


  </Main>
  )
}