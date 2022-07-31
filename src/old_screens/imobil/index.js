
import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import { View,  Text, Dimensions, Image, Linking, ImageBackground, FlatList} from 'react-native';


import { MaterialCommunityIcons, Ionicons, Fontisto , MaterialIcons, AntDesign, Feather, Entypo } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { TouchableRipple } from 'react-native-paper';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  Modal,
  ModalImg,
  ModalText,

  Button, 
  ButtonIcon, 
  ButtonLabel,
  Quick,
  Back,
  Div,

  Spacing,

  Item,
  ItemLabel,
  ItemTitle,
  ItemImg,
  
  Bold,
  Verify,
  Local,
  LocalLabel,
  VerifyImg,
  LabelCenter,
  TitleCenter,
  ButtonGreat,

  ModalFundo,

  TitleAd, 
  Description, 
  Address,
  Valor,
  Chip,
  Subtitle,
  Ball,
  Identificacao,

  Circle,
  ModalTitle,
  ModalDois,
  ModalLabel,

  ButtonSocial,
  SocialLabel,
  SubSocialLabel,


  Fixed,
  FixedLabel,
  FixedTitle,
  FixedIcon,
  FixedArrow,

  Tag,
} from './styles';

import MapView, { Marker } from 'react-native-maps';


import Header from '../../components/header';

import { Modalize } from 'react-native-modalize';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import { ThemeContext } from 'styled-components/native';

//import Carousel, { Pagination }  from 'react-native-snap-carousel';
import RowLarge from '../../new_components/lists/row_large/index'


import Axios from 'axios';
import { Skeleton } from '@motify/skeleton'

import { StatusBar } from 'expo-status-bar';

import {API_URL} from '../../api/index'

export default function Imobil({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  const itemAd = route.params?.dados
  const image = route.params?.dados.foto
  const titulo = route.params?.dados.nome
  const identificacao = item?.ID
  const verificado = false;

  const descricao = route.params?.dados.descricao


  //const relacionados = https://maisconectados.com/wp-json/relacionados/all?id=1


  const [perfil, setPerfil] = useState()

  const modalizeRef = useRef(null);
  const modalizeCheck = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
   const onOpenCheck = () => {
    modalizeCheck.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };


  
  const nomePessoa = route.params?.dados.nome
  
  useEffect(() => {
    getDados()
  }, [])

  
  const latitude = parseFloat(itemAd.latitude)
  const longitude = parseFloat(itemAd.longitude)
  const whatsapp = route.params?.dados.whatsapp
  const email = route.params?.dados.email
  const tel = route.params?.dados.telefone_comercial
  
  const mensagem = `Olá, estou interessado em seus imovéis.`
  
  function handleWhatsApp(){  
    Linking.openURL(`whatsapp://send?text=${mensagem}&phone=55${whatsapp}`); 
  }

  function handleEmail(){
    Linking.openURL(`mailto:${email}`)
  }

  function handleTel(){
    Linking.openURL(`tel:${tel}`)
  }



  const largura = 0.7 * width;
  const altura = 0.4 * height;

  const a = false;


  const pegarPost = (item) => {
      navigation.navigate('DetailsDois', { dados: item, });};


  const [item, setItem] = useState()
  const [loading, setLoading] = useState()

  async function getDados(){
    const headers = {'Accept': "application/json"}
    setLoading(true)
    await Axios.get(`${API_URL}/relacionados/all?id=${identificacao}`, {
        headers: headers
    }).then(function (response) {
        setItem(response.data)
        console.log(response.data)
        setLoading(false)
    }).catch(error => { 
        console.log(error)
    }) 
  }

  
  const ofertas = item?.length
  
  const renderItem2 = ({ item }) => (
    <RowLarge data={item} />
  ) 



return (
  <>
  <Main>


  <StatusBar translucent={true} style="light"/>

  <Header title="Imobiliária"/>
  
  
  <Wrapper>
  
    <View style={{marginHorizontal: 24,}}>
    
    <MotiView delay={100} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}><ModalImg source={{uri: image}}/></MotiView>


    <Spacing/>
    <View>
      
      <MotiView delay={200} from={{translateY: 20, opacity: 0}} animate={{ translateY: 0, opacity: 1,}} transition={{type: 'timing'}}><Tag>IMOBILIÁRIA</Tag></MotiView>
      
      <MotiView delay={300} from={{translateY: 20, opacity: 0}} animate={{ translateY: 0, opacity: 1,}} transition={{type: 'timing'}}><Title>{titulo}</Title></MotiView>
      
      
      {verificado == "Verificado" &&<Verify onPress={onOpen}><Feather style={{textAlign: 'center'}} name="check" size={32} color="#fff" /></Verify>}
    </View>


    
    
      <Local onPress={() => navigation.navigate('VerMapa', {dados: itemAd, imobil: item})}>
      <>
        <Fontisto name="map-marker-alt" size={20} color="#5B72F2" style={{marginTop: 0, marginRight: 10,}} />
        <LocalLabel>{itemAd.endereco}</LocalLabel>
      </>
      </Local>


    <MotiView delay={600} from={{translateY: 20, opacity: 0}} animate={{ translateY: 0, opacity: 1,}} transition={{type: 'timing'}}>
      <Label>{descricao}</Label>
    </MotiView>
    
    <Spacing/>
    <Div/>
  {a && <View style={{marginBottom: 0,}}>
  
    <Button onPress={onOpenCheck}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ButtonIcon><Feather style={{textAlign: 'center', alignSelf: 'center'}} name="home" size={32} color={color.primary} /></ButtonIcon>
        <ButtonLabel>{ofertas} imóveis no App</ButtonLabel>
        <ButtonIcon><MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-right" size={42} color={color.primary} /></ButtonIcon>
      </View>
    </Button>
  </View>
  }

    </View>
    <Title style={{marginLeft: 20, fontSize: 24, marginBottom: 10, fontFamily: font.medium,}}>Imóveis</Title>

{!loading && 
      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={item}
            ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
          />}



  <View style={{height: 100, widt: 50}}/>

  </Wrapper>


    <Fixed onPress={onOpenCheck}>
      <Ionicons name="chatbubbles-outline" size={32} style={{textAlign: 'center'}} color="#fff" />
    </Fixed>
  


  
<Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <Modal>

      <VerifyImg><Feather style={{textAlign: 'center'}} name="check" size={84} color="#fff" /></VerifyImg>
      <TitleCenter>Perfil Verificado!</TitleCenter>
      <LabelCenter>Este perfil foi verificado por uma equipe especializada.</LabelCenter>
      <ButtonGreat color={color.green} onPress={onClose}>
        <ButtonLabel>Ótimo!</ButtonLabel>
      </ButtonGreat>
    
    </Modal>
  </Modalize>



   <Modalize ref={modalizeCheck} modalStyle={{ backgroundColor: color.primary, orderTopLeftRadius: 18, borderTopRightRadius: 18,}} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <View style={{paddingTop: 20, backgroundColor: color.primary, paddingBottom: 20, borderTopLeftRadius: 16, borderTopRightRadius: 16,}}> 

    <Circle style={{alignSelf: 'center',}}><Ionicons name="checkmark" style={{textAlign: 'center'}} size={102} color="#fff" /></Circle>

    <ModalTitle>Estamos quase lá!</ModalTitle>
    <ModalLabel>Escolha a forma de contato para prosseguir.</ModalLabel>
    <ModalDois>

    <View style={{marginBottom: -20, alignSelf: 'flex-end', padding: 6, backgroundColor: "#FFF", zIndex: 99, borderRadius: 4, paddingHorizontal:10, marginRight: 20,}}>
      <Label style={{color: color.primary, fontSize: 12, letterSpacing: 1, fontFamily: font.medium, marginTop: 0,}}>MELHOR OPÇÃO</Label>
    </View>
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

    <Spacing/>

     <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} onPress={handleTel} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6, }}>
        <ButtonSocial color="#FFF"><AntDesign name="phone" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12,}}>
          <SocialLabel>Telefone</SocialLabel>
          <SubSocialLabel>Faça uma ligação</SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>
    
    <Spacing/>

    <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} onPress={handleEmail} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6,}}>
        <ButtonSocial color="#FFF"><MaterialIcons name="alternate-email" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12,}}>
          <SocialLabel>E-mail</SocialLabel>
          <SubSocialLabel>Mande um e-mail</SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>

    </ModalDois>
    </View>

  </Modalize>
  

    
  </Main>
  
  </>
  )
}