
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

export default function Finalizar({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const voltar = route.params?.voltar
  const data = route.params?.data

  const [preferences, setPreferences] = useState()


  const [dia1, setDia1] = useState('')
  const [dia2, setDia2] = useState('')
  const [dia3, setDia3] = useState('')
  const [dia4, setDia4] = useState('')
  const [dia5, setDia5] = useState('')



  function handleDias(valor){
    const preferences = valor
    if(preferences?.dias[0].segunda){
      setDia1('Segunda-feira')
    }
    if(preferences?.dias[0].terca){
      setDia2('Terça-feira')
    }
    if(preferences?.dias[0].quarta){
      setDia3('Quarta-feira')
    }
    if(preferences?.dias[0].quinta){
      setDia4('Quinta-feira')
    }
    if(preferences?.dias[0].sexta){
      setDia5('Sexta-feira')
    }
    if(preferences?.dias[0].final ){
      setDia1('Apenas final de semana')
    }
  }


  async function getPreferences(){
    try {
      const jsonValue = await AsyncStorage.getItem('@preferences')
      if(jsonValue != null) {
        const valor = JSON.parse(jsonValue)
        setPreferences(valor)
        handleDias(valor)
        defvalor()
      }
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getPreferences()
  },[])

  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const [load, setLoad] = useState(true)


  const item = route.params?.dados
  const residencia = route.params?.residencia
  
  const image = route.params?.dados.imagem
  const titulo = route.params?.residencia.nome
  const nomePessoa = route.params?.dados.nome
  const id = route.params?.residencia.codigo
  const tipo = route.params?.residencia.tipo
  const valor_mensal = route.params?.residencia.valor_mensal
  const valor_unico = route.params?.residencia.valor_unico
  
  const whatsapp = route.params?.dados.whatsapp
  const email = route.params?.dados.email
  const tel = route.params?.dados.telefone_comercial

  
  const taxa1 = route.params?.residencia.taxas[0]
  const taxa2 = route.params?.residencia.taxas[1]
  const taxa3 = route.params?.residencia.taxas[2]
  const taxa4 = route.params?.residencia.taxas[3]
  const taxa5 = route.params?.residencia.taxas[4]
  const taxa6 = route.params?.residencia.taxas[5]
  const taxa7 = route.params?.residencia.taxas[6]
  const taxa8 = route.params?.residencia.taxas[7]
  const taxa9 = route.params?.residencia.taxas[8]
  const taxa10 = route.params?.residencia.taxas[9]

  const [preco, setPreco] = useState()
  function defvalor(){
    if(tipo == "Valor Único"){
      setPreco(valor_unico)
    }else{
      setPreco(valor_mensal)
    }
  }
  const mensagem = `Olá, estou interessado em: *${titulo}* - Código: *${id}* - Valor: R$ *${preco}*. Posso visitar o imóvel: ${dia1} ${dia2} ${dia3} ${dia4} ${dia5} `
  
  function handleWhatsApp(){  
    Linking.openURL(`whatsapp://send?text=${mensagem}&phone=55${whatsapp}`); 
  }

  function handleEmail(){
    Linking.openURL(`mailto:${email}`)
  }

  function handleTel(){
    Linking.openURL(`tel:${tel}`)
  }


  const onOpen = () => {
    modalizeRef.current?.open();
  }



  const modalizeRef = useRef()

  const imobiliaria = route.params?.dados.imobiliaria
  const atualizaca = false

return (
  <Main>
  <Header title="Finalizar"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    <ScrollView style={{paddingVertical: 0, paddingHorizontal: 24, flex: 1, }}>



    <MotiView delay={200} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
     <>
        <Item onPress={() => navigation.goBack()}>
          <>
          <ItemImg source={{uri: residencia.imagem1}}/>
          <View style={{justifyContent: 'center', }}>
            <ItemTitle>{residencia.nome}</ItemTitle>
            <ItemLabel>{residencia.rua}, {residencia.numero} - {residencia.bairro}</ItemLabel>
          </View>
          </>
        </Item>
      </>
      </MotiView>


   
      <View style={{marginTop: 0, marginBottom: 10, paddingBottom: 10, borderWidth: 0, borderColor: "#5B72F210", marginHorizontal: 0, borderRadius: 12, }}>

       <MotiView delay={300} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>

            <Select>
            <SelectLabel>{tipo}</SelectLabel>
            <SelectTitle>R$ {valor_mensal}{valor_unico}</SelectTitle>


            { taxa1?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa1}</InfraLabel>
            </Lista>
            }
            
            { taxa2?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa2}</InfraLabel>
            </Lista>}

            { taxa3?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa3}</InfraLabel>
            </Lista>}

            { taxa4?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa4}</InfraLabel>
            </Lista>}

            { taxa5?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa5}</InfraLabel>
            </Lista>}

            { taxa6?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa6}</InfraLabel>
            </Lista>}

            { taxa7?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa7}</InfraLabel>
            </Lista>}

            { taxa8?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa8}</InfraLabel>
            </Lista>}

            { taxa9?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa9}</InfraLabel>
            </Lista>}
            
            { taxa10?.length > 0 && 
            <Lista>
              <Infra><Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
              <InfraLabel>{taxa10}</InfraLabel>
            </Lista>}

          </Select>
          </MotiView>

          <Spacing1/>
          <Spacing1/>
          <Div/>
          <Spacing1/>



       <MotiView delay={400} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', paddingBottom: 10, paddingTop: 10,}}>
            <Title>Visitação</Title>
            <Edit onPress={() => navigation.navigate('Visitar', {voltar: true, data: preferences, })}><EditLabel>Editar</EditLabel></Edit>
          </View>
          <Label>Qual o melhor dia para você visitar o imóvel?</Label>

          <Calendar>
            <Day> 
              {preferences?.dias[0].final && <><DayOn/><DayOnLabel>D</DayOnLabel></>}
              {preferences?.dias[0].final == false && <><DayOff/><DayOffLabel>D</DayOffLabel></>}
            </Day>
            
            <Day> 
              {preferences?.dias[0].segunda && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
               {preferences?.dias[0].segunda == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].terca && <><DayOn/><DayOnLabel>T</DayOnLabel></>}
               {preferences?.dias[0].terca == false && <><DayOff/><DayOffLabel>T</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].quarta && <><DayOn/><DayOnLabel>Q</DayOnLabel></>}
               {preferences?.dias[0].quarta == false && <><DayOff/><DayOffLabel>Q</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].quinta && <><DayOn/><DayOnLabel>Q</DayOnLabel></>}
               {preferences?.dias[0].quinta == false && <><DayOff/><DayOffLabel>Q</DayOffLabel></>}
            </Day>

            <Day> 
              {preferences?.dias[0].sexta && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
               {preferences?.dias[0].sexta == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].final && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
              {preferences?.dias[0].final == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
          </Calendar>

          </MotiView>


      
        
        <Div/>
        <Spacing1/>
         <MotiView delay={500} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
        <Title>Imobiliária</Title>
        <Spacing/>
        <Item style={{marginTop: -10,}} onPress={() => navigation.navigate('Imobil',  {dados: item})}>
          <>
          <ItemImg source={{uri: item.foto}}/>
          <View style={{justifyContent: 'center', }}>
            <ItemTitle>{item.nome}</ItemTitle>
            <ItemLabel>{item.endereco}</ItemLabel>
          </View>
          </>
        </Item>
        <Div/>

      <MotiView delay={600} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
        <Button color="#25D366" onPress={onOpen}>
          <>
          <ButtonLabel>Contatar</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
          </>
        </Button>
        </MotiView>

        </MotiView>


        </View>

      </ScrollView>

    
  </Wrapper>

  <Modalize ref={modalizeRef} modalStyle={{ backgroundColor: color.primary, orderTopLeftRadius: 18, borderTopRightRadius: 18,}} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#FFFFFF30",}} handlePosition="inside">
    <View style={{paddingTop: 20, backgroundColor: color.primary, paddingBottom: 20, borderTopLeftRadius: 16, borderTopRightRadius: 16,}}> 

    <MotiView delay={200} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
      <Circle style={{alignSelf: 'center',}}><Ionicons name="checkmark" style={{textAlign: 'center'}} size={102} color="#fff" /></Circle>
    </MotiView>

     <MotiView delay={200} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
     <ModalTitle>Estamos quase lá!</ModalTitle></MotiView>
     <MotiView delay={250} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
      <ModalLabel>Escolha a forma de contato para prosseguir.</ModalLabel>
     </MotiView>
    <ModalDois>

  <View style={{zIndex: 99}}>    
     <MotiView delay={200} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
      <View style={{marginBottom: -20, alignSelf: 'flex-end', padding: 6, backgroundColor: "#FFF", zIndex: 99, borderRadius: 4, paddingHorizontal:10, marginRight: 20,}}>
        <Label style={{color: color.primary, fontSize: 12, letterSpacing: 1, fontFamily: font.medium,}}>MELHOR OPÇÃO</Label>
      </View>
    </MotiView>
  </View>

    
  <MotiView delay={400} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
    <TouchableRipple style={{flexGrow: 1,borderRadius: 8,}} onPress={handleWhatsApp} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
    <>

      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6,}}>
        <ButtonSocial color="#FFF"><Ionicons name="logo-whatsapp" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12, }}>
          <SocialLabel>WhatsApp</SocialLabel>
          <SubSocialLabel>Envie uma mensagem </SubSocialLabel>
        </View>
      </View>
      </>
    </TouchableRipple>
  </MotiView>

    <Spacing/>
    
  <MotiView delay={500} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
    <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} onPress={handleTel} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6, }}>
        <ButtonSocial color="#FFF"><AntDesign name="phone" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12,}}>
          <SocialLabel>Telefone</SocialLabel>
          <SubSocialLabel>Faça uma ligação</SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>
  </MotiView>
    
    <Spacing/>


  <MotiView delay={600} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
    <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} onPress={handleEmail} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6,}}>
        <ButtonSocial color="#FFF"><MaterialIcons name="alternate-email" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12,}}>
          <SocialLabel>E-mail</SocialLabel>
          <SubSocialLabel>Mande um e-mail</SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>
  </MotiView>

    </ModalDois>
    </View>

  </Modalize>
  
  </Main>
  )
}