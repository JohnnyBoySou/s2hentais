
import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, BackHandler, FlatList, Linking } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import Noti from '../../components/notify/index'

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { Skeleton } from '@motify/skeleton'

import { 
  Wrapper, 
  Container, 
  Title, 
  SubTitle,
  Label,
  Icones,
  IconeLabel,
  IconeLabel2,
  Main,
  Title2, 
  SubTitle2,
  Label2,
  Button, 
  ButtonLabel,

  MainTitle,
  MainLabel,

  Select,
  SelectLabel,
} from './styles';


import Header from '../../components/header';

import Axios from 'axios';

import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'


import Carousel, { Pagination }  from 'react-native-snap-carousel';

export default function Planos({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)

  const largura = 0.86 * width;
  const altura = 0.6 * height;
  const modalizeRef = useRef(null);
  const modalizeVersao = useRef(null);

  const onOpenVersao = () => {modalizeVersao.current?.open();};
  const onOpen = () => {modalizeRef.current?.open();};
  const onClose = () => {modalizeRef.current?.close();};

  const [atualizacao, setAtualizacao] = useState("Procurando Atualizações...")
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()


  const dados = [
    {
      title: 'Básico',
      preco_mensal: 'R$ 49,99',
      preco_anual: 'R$ 499,99',
      descricao: "Para empresas de pequeno porte, que desejam investir pouco em divulgação.",
      item1: '1 conta',
      item2: '5 residências',
      item3: 'Relatório mensal',
      item4: 'Suporte 24/7',
    }, 
     {
      title: 'Profissional',
      preco_mensal: 'R$ 99,99',
      preco_anual: "R$ 999,99",
      descricao: "Para empresas de médio porte, que buscam resultados relevantes. ",
      item1: '5 contas',
      item2: '10 residências',
      item3: 'Relatório quinzenal',
      item4: 'Suporte 24/7',
    }, 
     {
      title: 'Empresarial',
      preco_mensal: 'R$ 299,99',
      preco_anual: 'R$ 3199,99',
      descricao: "Para empresas de grande porte, e que desejam um plano robusto.",
      item1: '+15 contas',
      item2: '+20 residências',
      item3: 'Relatório semanal',
      item4: 'Suporte 24/7',
    }, 
  ]
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef(null);

  const link = () => {
    Linking.openURL('https://maisconectados.com/planos')
  }


  const [anual, setAnual] = useState(false)
  const [mensal, setMensal] = useState(true)


  const renderItem = useCallback(({ item, index }) => (

    <>
    {item.title != "Profissional" && <View style={{borderRadius: 12, paddingHorizontal: 32, paddingVertical: 32, borderColor: "#E7E7E7", borderWidth: 1, }}>
      <Title>{item.title}</Title>
      <SubTitle>{item.preco_mensal}</SubTitle>
      <Label>{item.descricao}</Label>
      <View style={{marginTop: 20,}}>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item1}</IconeLabel>
        </Icones>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item2}</IconeLabel>
        </Icones>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item3}</IconeLabel>
        </Icones>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item4}</IconeLabel>
        </Icones>
      </View>
      <Button color="#F1F3FF" onPress={link}>
        <ButtonLabel color="#5B72F2">Escolher</ButtonLabel>
      </Button>
    </View>
    }



    {item.title == "Profissional" && <>
      <View style={{borderRadius: 12, paddingHorizontal: 32, paddingVertical: 32, borderColor: "#5B72F2", backgroundColor: "#5B72F2", borderWidth: 0, }}>
          <Title2>{item.title}</Title2>
          <SubTitle2>{item.preco_mensal}</SubTitle2>
          <Label2>{item.descricao}</Label2>
          <View style={{marginTop: 20,}}>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item1}</IconeLabel2>
            </Icones>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item2}</IconeLabel2>
            </Icones>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item3}</IconeLabel2>
            </Icones>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item4}</IconeLabel2>
            </Icones>
          </View>
          <Button color="#FFF" onPress={link}>
            <ButtonLabel color="#5B72F2">Entrar em contato</ButtonLabel>
          </Button>
      </View>
      </>
      }
    </>
  ), []);

const renderItemAnual = useCallback(({ item, index }) => (
    <>
    {item.title != "Profissional" && <View style={{borderRadius: 12, paddingHorizontal: 32, paddingVertical: 32, borderColor: "#E7E7E7", borderWidth: 1, }}>
      <Title>{item.title}</Title>
      <SubTitle>{item.preco_anual}</SubTitle>
      <Label>{item.descricao}</Label>
      <View style={{marginTop: 20,}}>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item1}</IconeLabel>
        </Icones>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item2}</IconeLabel>
        </Icones>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item3}</IconeLabel>
        </Icones>
        <Icones>
          <Ionicons name="checkmark-circle" size={32} color="#5B72F2" />
          <IconeLabel>{item.item4}</IconeLabel>
        </Icones>
      </View>
      <Button color="#F1F3FF" onPress={link}>
        <ButtonLabel color="#5B72F2">Escolher</ButtonLabel>
      </Button>
    </View>
    }



    {item.title == "Profissional" && <>
      <View style={{borderRadius: 12, paddingHorizontal: 32, paddingVertical: 32, borderColor: "#5B72F2", backgroundColor: "#5B72F2", borderWidth: 0, }}>
          <Title2>{item.title}</Title2>
          <SubTitle2>{item.preco_anual}</SubTitle2>
          <Label2>{item.descricao}</Label2>
          <View style={{marginTop: 20,}}>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item1}</IconeLabel2>
            </Icones>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item2}</IconeLabel2>
            </Icones>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item3}</IconeLabel2>
            </Icones>
            <Icones>
              <Ionicons name="checkmark-circle" size={32} color="#FFF" />
              <IconeLabel2>{item.item4}</IconeLabel2>
            </Icones>
          </View>
          <Button color="#FFF" onPress={link}>
            <ButtonLabel color="#5B72F2">Entrar em contato</ButtonLabel>
          </Button>
      </View>
      </>
      }


    </>

  ), []);


















  function trocar(){
    if(mensal){
      setAnual(true)
      setMensal(false)
    }
    if(anual){
      setMensal(true)
      setAnual(false)
    }
  }

 
return (
  <Main>
  <Header title="Planos"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    <ScrollView style={{flex: 1, }}>
      <View style={{marginHorizontal: 32, marginBottom: 34, marginTop: 0,}}>

        <Select activity={false}  style={{width: 200, borderRadius: 6, marginBottom: 4,}}>
            <SelectLabel activity={false}>Para Imobiliárias</SelectLabel>
          </Select>
        <MainTitle>
        Preço simples e transparente
        </MainTitle>
        <MainLabel>Sem contratos, sem surpresas.</MainLabel>

        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: -10,}}>

          <Select activity={mensal} onPress={trocar}>
            <SelectLabel activity={mensal}>Mensal</SelectLabel>
          </Select>

          <Select activity={anual} onPress={trocar}>
            <SelectLabel activity={anual}>Anual</SelectLabel>
          </Select>
        </View>
      </View>

       {mensal && <AnimatePresence>
      <MotiView from={{opacity: 0,}} animate={{opacity: 1,}}>
      <Carousel 
          layout="default"
          ref={isCarousel}
          data={dados}
          sliderWidth={width}
          itemWidth={largura}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          autoplay={false}
          autoplayInterval={6000}
          autoplayDelay={2000}
          activeAnimationType="timing"
        /></MotiView></AnimatePresence>}


        {anual && <AnimatePresence>
      <MotiView from={{opacity: 0,}} animate={{opacity: 1,}}><Carousel 
          layout="default"
          ref={isCarousel}
          data={dados}
          sliderWidth={width}
          itemWidth={largura}
          renderItem={renderItemAnual}
          onSnapToItem={(index) => setActiveIndex(index)}
          autoplay={false}
          autoplayInterval={6000}
          autoplayDelay={2000}
          activeAnimationType="timing"
        /></MotiView></AnimatePresence>}

      <Pagination
        dotsLength={dados.length}
        activeDotIndex={activeIndex}
        carouselRef={isCarousel}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 100,
          backgroundColor: color.primary,
        
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,

          borderRadius: 100,
          marginHorizontal: 0,
          backgroundColor: "#333",

        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </ScrollView>

  </Wrapper>
  </Main>
  )
}