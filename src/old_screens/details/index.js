import React, { useEffect, useState, useRef, useCallback, useContext , useReducer} from 'react';
import { View, TouchableOpacity,  Animated, Image, Text, ScrollView, StatusBar, RefreshControl, BackHandler, Dimensions, StyleSheet, Clipboard  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const largura = 0.7 * width;
const altura = 0.6 * height;

import { Ionicons, Fontisto , MaterialIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { TouchableRipple, Surface, Button , Snackbar  } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import MapView, { Marker } from 'react-native-maps';

import Like from '../../components/like/index';


import Header from '../../components/header/index';

import { Wrapper, Container, Title, 
Dual,
Options,
Images,
Option,
OptionLabel,
Descricao,
Preco,
Tempo,
Valor,
Alugar,
AlugarLabel,
AlugarIcon,
LerMais,
Main,
More,
Img,
Spacing,
Icone,
Modal,

Mapa,
Sublabel,
Quick,

Client,
ClientImg,
ClientTitle,
ClientLabel,
Verify,

Imobil,
ImobilImg,
ImobilLabel,
ImobilTitle,
MapButton,


Taxas,
TaxasLabel,
ModalDois,

Lista,
Ball,
ListaLabel,
Div,

Infra,
InfraLabel,

Local,
LocalLabel,
Press,
Codigo,
CodigoLabel,

} from './styles';

import { ThemeContext } from 'styled-components/native';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import { Modalize } from 'react-native-modalize';

import { Skeleton } from '@motify/skeleton'
import CustomStyle from '../../api/customStyle'

import Axios from 'axios';
import Conservacao from '../../components/details/conservacao';


export default function Details({ navigation, route, ...props }) {

  const item = route.params?.dados
  const taxa1 = route.params?.dados.taxas[0]
  const taxa2 = route.params?.dados.taxas[1]
  const taxa3 = route.params?.dados.taxas[2]
  const taxa4 = route.params?.dados.taxas[3]
  const taxa5 = route.params?.dados.taxas[4]

  useEffect(() => {
    getAutor()
  },[])

  const autor_id = route.params?.dados.post_author

  const item1tipo = route.params?.dados.item1
  const item1qtd = route.params?.dados.qtd1

  const item2tipo = route.params?.dados.item2
  const item2qtd = route.params?.dados.qtd2

  const item3tipo = route.params?.dados.item3
  const item3qtd = route.params?.dados.qtd3

  


  const latitude = route.params?.dados.latitude
  const longitude = route.params?.dados.longitude

  const imobiliaria_descricao = route.params?.dados.imobiliaria_descricao;

  const infra1 = route.params?.dados.infraestrutura[0]
  const infra2 = route.params?.dados.infraestrutura[1]
  const infra3 = route.params?.dados.infraestrutura[2]
  const infra4 = route.params?.dados.infraestrutura[3]
  const infra5 = route.params?.dados.infraestrutura[4]
  const infra6 = route.params?.dados.infraestrutura[5]
  const infra7 = route.params?.dados.infraestrutura[6]
  const infra8 = route.params?.dados.infraestrutura[7]
  const infra9 = route.params?.dados.infraestrutura[8]
  const infra10 = route.params?.dados.infraestrutura[9]
  
  
  const { color } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const styles = StyleSheet.create({
    title: {
      color: color.primary,
      fontSize: 18,
      fontFamily: font.book,
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 25,
      marginTop: 5,
    },
    block: {
      alignSelf: 'center',
      width: 56,
      height: 56,
      justifyContent: 'center',
    },
    card: {
      marginLeft: -25,
      width: 40,
      borderRadius: 12,
    },
  });


  const toggleAnimationState = useAnimationState({
    closed: {
      width: 40,
    },
    open: {
      width: 300,
    }
  })

  const [toggleIsOpen, setToggleIsOpen] = useState(false)

  function handleOpenToggle(){
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

  const onClose = () => {
    modalizeRef.current?.close();
  };



  const codigo = item.codigo;
  const [visible, setVisible] = React.useState(false);

  function copiar(){
    Clipboard.setString(`${codigo}`)
    setVisible(true)
  } 
  
  const a = false

  const [imobil, setImobil] = useState()

  const [title, setDescricao] = useState()
  const [loading, setLoading] = useState(false)

  const [semImobil, setSemImobil] = useState(false)

  async function getAutor(){
    
    setLoading(true)
    const headers = {
      'Accept': "application/json"
    }
    await Axios.get(`https://maisconectados.com/wp-json/autor/all?id=${autor_id}`, {
        headers: headers
    }).then(function (response) {
        setImobil(response.data[0])
        setDescricao(response.data[0].descricao)
        const resposta = response.data[0]
        setLoading(false)
        if(resposta.length == 0){ 
          setSemImobil(true)
        }
    }).catch(error => {
        console.log(error)
    })
  }


  function filterTitle(title){

    if(title != undefined){
      if(title.length < 100){
        return title;
      }
      return `${title.substring(0, 100)}...`;
    }}


return (
  <>

 
<Main>


  <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={2000} theme={{ colors: { primary: '#5B72F2', onSurface: "#5B72F2", surface: "#FFF", accent: "#FFF"} }}>
    Código copiado!
  </Snackbar>
  <Header title={item.nome} subtitle={item.categoria} />
  <Wrapper>


  <MotiView from={{opacity: 0, transform: [{scale: 0.8,},]}} animate={{opacity: 1, transform: [{scale: 1},]}} transition={{type: "spring", duration: 2000,}} delay={200}>
    <Dual 
      scrollEventThrottle={160}
      onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollY }},}],{ useNativeDriver: false })} showsHorizontalScrollIndicator={false}>

    <Options>
      
      {item1tipo == 'Quarto' &&
        <Animated.Image source={require('../../assets/bed.png')} 
          style={[styles.block, {
          width: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          height: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[10, 40, 80],
            outputRange:[1, 0.5, 0],
            extrapolate: 'clamp'
          }),
        }]}/>
      }

        <Animated.Text style={[
          styles.title,{
          fontSize: scrollY.interpolate({
            inputRange:[10, 70, 140],
            outputRange:[18, 12, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[1, 20, 170],
            outputRange: [1, 0.5,0],
            extrapolate: 'clamp'
          })}]}>{item1qtd} {item1tipo}s</Animated.Text>

      {item2tipo == 'Banheiro' &&
        <Animated.Image source={require('../../assets/bath.png')} 
          style={[styles.block, {
          width: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          height: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[10, 40, 80],
            outputRange:[1, 0.5, 0],
            extrapolate: 'clamp'
          }),
        }]}/>
      }


      {item2tipo == 'Cozinha' &&
        <Animated.Image source={require('../../assets/kitchen.png')} 
          style={[styles.block, {
          width: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          height: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[10, 40, 80],
            outputRange:[1, 0.5, 0],
            extrapolate: 'clamp'
          }),
        }]}/>
      }

      {item2tipo == 'Sala' &&
        <Animated.Image source={require('../../assets/sala_de_estar.png')} 
          style={[styles.block, {
          width: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          height: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[10, 40, 80],
            outputRange:[1, 0.5, 0],
            extrapolate: 'clamp'
          }),
        }]}/>
      }


      {item2tipo == 'Garagem' &&
        <Animated.Image source={require('../../assets/garagem.png')} 
          style={[styles.block, {
          width: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          height: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[10, 40, 80],
            outputRange:[1, 0.5, 0],
            extrapolate: 'clamp'
          }),
        }]}/>
      }


        <Animated.Text style={[
          styles.title,
          {
            fontSize: scrollY.interpolate({
            inputRange:[10, 70, 140],
            outputRange:[18, 12, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[1, 80, 170],
            outputRange: [1, 0.5,0],
            extrapolate: 'clamp'
          })}]}>{item2qtd} {item2tipo}</Animated.Text>

          <Animated.Image source={require('../../assets/regua.png')} 
          style={[styles.block, {
          width: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          height: scrollY.interpolate({
            inputRange:[10, 60, 140],
            outputRange:[56, 35, 20],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[10, 40, 80],
            outputRange:[1, 0.5, 0],
            extrapolate: 'clamp'
          }),
        }]}/>


        <Animated.Text style={[
          styles.title,
          {
            fontSize: scrollY.interpolate({
            inputRange:[10, 70, 140],
            outputRange:[18, 12, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[1, 80, 170],
            outputRange: [1, 0.5,0],
            extrapolate: 'clamp'
          })}]}>{item?.area}m²</Animated.Text>

      </Options>

      

  { a && 
    <MotiView style={styles.card} state={toggleAnimationState} transition={{type: 'timing', duration: 500,}}>
        <More activity={toggleIsOpen} onPress={handleOpenToggle} >
          <>
         { 
           toggleIsOpen ?
           <AnimatePresence>
           <MotiView from={{
             rotate: '0deg',
             opacity: 0,
           }}
           animate={{
             rotate: '90deg',
             opacity: 1,
           }}>
            <MaterialIcons style={{textAlign: 'center'}} name="close" size={32} color="#fff" />
           </MotiView>

           </AnimatePresence>
           :
          <MotiView 
          from={{
            rotate: '90deg',
            opacity: 0,
          }}

          animate={{
            opacity: 1,
            rotate: '0deg',
           }}>
           <MaterialIcons style={{textAlign: 'center'}} name="arrow-forward-ios" size={26} color="#00000030" />
           </MotiView>
         }

        </>
        </More>

        
        <View style={{marginLeft: 30,  position: 'absolute', marginTop: 17, flexDirection: 'row'}}>
          <Options>
            <Animated.Image source={require('../../assets/sala_de_estar.png')} style={styles.block}/>
            <Animated.Text style={styles.title}></Animated.Text>

            <Animated.Image source={require('../../assets/garagem.png')} style={styles.block}/>
            <Animated.Text style={styles.title}></Animated.Text>

            <Animated.Image source={require('../../assets/kitchen.png')} style={styles.block}/>
            <Animated.Text style={styles.title}></Animated.Text>
          </Options>

          <Options>
            <Animated.Image source={require('../../assets/bed.png')} style={styles.block}/>
            <Animated.Text style={styles.title}>6 Quartos</Animated.Text>

            <Animated.Image source={require('../../assets/bed.png')} style={styles.block}/>
            <Animated.Text style={styles.title}>6 Quartos</Animated.Text>

            <Animated.Image source={require('../../assets/bed.png')} style={styles.block}/>
            <Animated.Text style={styles.title}>6 Quartos</Animated.Text>
          </Options>


        </View>

      </MotiView>
  }

      <Images onPress={() => navigation.navigate('ImageZoom', {item: item})}>
        <>
        { item.imagem1?.length > 0 && <><Img source={{uri: item.imagem1}} /><Spacing/></> }
        { item.imagem2?.length > 0 && <><Img source={{uri: item.imagem2}} /><Spacing/></> }
        { item.imagem3?.length > 0 && <><Img source={{uri: item.imagem3}} /><Spacing/></> }
        { item.imagem4?.length > 0 && <><Img source={{uri: item.imagem4}} /><Spacing/></> }
        { item.imagem5?.length > 0 && <><Img source={{uri: item.imagem5}} /><Spacing/></> }
        { item.imagem6?.length > 0 && <><Img source={{uri: item.imagem6}} /><Spacing/></> }
        { item.imagem7?.length > 0 && <><Img source={{uri: item.imagem7}} /><Spacing/></> }
        { item.imagem8?.length > 0 && <><Img source={{uri: item.imagem8}} /><Spacing/></> }
        { item.imagem9?.length > 0 && <><Img source={{uri: item.imagem9}} /><Spacing/></> }
        { item.imagem10?.length > 0 && <><Img source={{uri: item.imagem10}} /><Spacing/></> }
        </>
      </Images>
      <Client>


      {semImobil && <>
        <ClientTitle>Não encontramos o dono desse imóvel!</ClientTitle>
        <ClientLabel>Aparentemente esse imóvel não tem nenhum dono cadastrado em nosso sistema. Desculpe-nos pelo incoveniente.</ClientLabel>
       </>}

      {semImobil == false && <>
       
        {loading && <>
        <Skeleton show={true} radius={12} height={150} width={260} colorMode="light"/>
        <View style={{marginTop: 18,}}/>
        <Skeleton show={true} radius={6} height={35} width={230} colorMode="light"/>
        <View style={{marginTop: 16,}}/>
        <Skeleton show={true} radius={2} height={16} width={250} colorMode="light"/>
        <View style={{marginTop: 8,}}/>
        <Skeleton show={true} radius={2} height={16} width={220} colorMode="light"/>
        <View style={{marginTop: 12,}}/>
        <Skeleton show={true} radius={5} height={32} width={160} colorMode="light"/>

        </>}

         {loading == false && <><ClientImg source={{uri: imobil?.foto}}/>

        <View style={{flexDirection: 'row',}}>
          <ClientTitle>{imobil?.nome}</ClientTitle>
          {imobil?.verificado == "Verificado" && <Verify><Feather style={{textAlign: 'center'}} name="check" size={12} color="#fff" /></Verify>}
        </View>
        <ClientLabel>{filterTitle(title)}</ClientLabel>
        <TouchableRipple disabled={loading} borderless style={{flexDirection: 'row', marginTop: 4, paddingVertical: 8, paddingBottom: 10, borderRadius: 4, width: 120, paddingHorizontal: 20, backgroundColor: "#5B72F220",}}  
        onPress={() => navigation.navigate('Imobil', {dados: imobil})}>
          <>
            <LerMais>Ler mais</LerMais>
            <AntDesign style={{marginTop: 2,}} name="arrowright" size={16} color="#5B72F2" />
          </>
        </TouchableRipple>
        </>}

      </>}
      </Client>
    </Dual>
    
    <Local disabled={loading} onPress={() => navigation.navigate('VerMapa', {dados: item, imobil: imobil})}>
      <>
        <Fontisto name="map-marker-alt" size={20} color="#5B72F2" style={{marginTop: 0, marginRight: 10,}} />
        <LocalLabel>{item.endereco}</LocalLabel>
      </>
    </Local>

    <Codigo onPress={copiar}>
      <CodigoLabel>Código: #{item.codigo}   -   {item.categoria}</CodigoLabel>
    </Codigo>
    

    <View style={{paddingHorizontal: 24,paddingTop: 24,}}>
      <Descricao>{item.descricao}</Descricao>
      <Taxas onPress={onOpen}>
        <View style={{flexDirection: 'row',}}>
          <TaxasLabel>Ver características</TaxasLabel>
          <AntDesign style={{marginLeft: 6, marginTop: 2,}} name="arrowright" size={16} color="#5B72F2" />
        </View>
      </Taxas>

    <Modal>
    
    
      <View style={{flexDirection: 'row'}}>
        <Preco>
          <Tempo>{item.tipo}</Tempo>
          {item.tipo == "Ambos" && 
          <Valor>R$ {item.valor_mensal} / R$ {item.valor_unico}</Valor>
          }
          {item.tipo != "Ambos" && 
          <>
           <Valor>R$ {item.valor_mensal}{item.valor_unico}</Valor>
          </>
          }

        </Preco>
        {item.tipo != "Ambos" && <>
        {a && <Like codigo={item.codigo}/>}
        <MapButton onPress={() => navigation.navigate('VerMapa', {dados: item, imobil: imobil})}>
          <Image source={require('../../assets/quick_map.png')} style={{width: 56, height: 56}}/>
        </MapButton></>}

      </View>

      
        <Alugar disabled={loading} color="#5B72F2" onPress={() => navigation.navigate('Finalizar', {dados: imobil, residencia: item})}>
            <>
            <>
            {item.tipo == "Valor Único" &&
              <AlugarLabel>Comprar agora</AlugarLabel>}
            {item.tipo == "Por mês" &&
              <AlugarLabel>Alugar agora</AlugarLabel>}
            </>
            <AlugarIcon/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
            </>
          </Alugar>
      </Modal>


          
    </View>
    </MotiView>
  </Wrapper>

  <Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
  <ModalDois>

  
  <Title style={{marginBottom: 15,}}>Imobiliária</Title>
  <Imobil onPress={() => navigation.navigate('Imobil', {dados: imobil})}>
      <>
      <ImobilImg source={{uri: imobil?.foto}}/>
      <View style={{justifyContent: 'center', marginLeft: 12, }}>
        <ImobilTitle>{imobil?.nome}</ImobilTitle>
        <ImobilLabel>{imobil?.endereco}</ImobilLabel>
      </View>
      </>
    </Imobil>

    
    <Div/>
    

    <Conservacao nivel={item.conservacao} />
    <Div/>
    
  <Title>Taxas adicionais</Title>
  
  <View style={{paddingTop: 15,}}>
  { taxa1?.length > 0 && 
    <Lista>
      <Ball/>
      <ListaLabel>{taxa1}</ListaLabel>
    </Lista>
    }
    { taxa2?.length > 0 && 
    <Lista>
      <Ball/>
      <ListaLabel>{taxa2}</ListaLabel>
    </Lista>
    }
    { taxa3?.length > 0 && 
    <Lista>
      <Ball/>
      <ListaLabel>{taxa3}</ListaLabel>
    </Lista>
    }

    { taxa4?.length > 0 && 
    <Lista>
      <Ball/>
      <ListaLabel>{taxa4}</ListaLabel>
    </Lista>
    }



    { taxa5?.length > 0 && 
    <Lista>
      <Ball/>
      <ListaLabel>{taxa5}</ListaLabel>
    </Lista>
    }

    
  </View>
  
  <Div/>
    
  <Title>Infraestrutura</Title>
  <View style={{paddingVertical: 12,}}>
  { infra1?.length > 0 && 
    <Lista>
      <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra1}</InfraLabel>
    </Lista>
  }

    { infra2?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra2}</InfraLabel>
    </Lista>}

    { infra3?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra3}</InfraLabel>
    </Lista>}

    { infra4?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra4}</InfraLabel>
    </Lista>}

    { infra5?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra5}</InfraLabel>
    </Lista>}

    { infra6?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra6}</InfraLabel>
    </Lista>}

    { infra7?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra7}</InfraLabel>
    </Lista>}

    { infra8?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra8}</InfraLabel>
    </Lista>}

    { infra9?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra9}</InfraLabel>
    </Lista>}

    { infra10?.length > 0 && <Lista>
    <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infra10}</InfraLabel>
    </Lista>}
<Div/>

  </View>
    <Alugar color="#5B72F2" onPress={onClose} style={{marginTop: -5,}}>
            <>
            <AlugarLabel>Fechar</AlugarLabel>
            <AlugarIcon/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowdown" size={28} color="#FFF" />
            </>
          </Alugar>

        
  </ModalDois>

  
  </Modalize>

  </Main>
  </>
  )
}