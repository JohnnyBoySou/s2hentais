
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, BackHandler, FlatList } from 'react-native';


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


  Card,
  CardRow,
  CardLabel,
  CardTitle,
  Icon,

} from './styles';


import Header from '../../components/header';

import Axios from 'axios';

import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar } from 'react-native-paper';

export default function Notify({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)

  const largura = 0.86 * width;
  const altura = 0.6 * height;

  const modalizeRef = useRef(null);
  const modalizeVersao = useRef(null);
  const onOpenVersao = () => {
    modalizeVersao.current?.open();
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const [atualizacao, setAtualizacao] = useState("Procurando Atualizações...")
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    getDados()
  }, [])
  async function getDados(){
     const headers = {
      'Accept': "application/json"
    }
    
      await Axios.get(`https://maisconectados.com/wp-json/notificacoes/all`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        setLoading(false)
    }).catch(error => {
        console.log(error)
    })
  }
return (
  <Main>
  <Header title="Notificações"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    <ScrollView style={{paddingVertical: 0, paddingHorizontal: 24,  }}>
    
      {loading && <><Skeleton show={loading} radius={8} height={84} width={largura} colorMode="light"/><Spacing2/></>}
      {loading && <><Skeleton show={loading} radius={8} height={84} width={largura} colorMode="light"/><Spacing2/></>}
      {loading && <><Skeleton show={loading} radius={8} height={84} width={largura} colorMode="light"/><Spacing2/></>}
      {loading && <><Skeleton show={loading} radius={8} height={84} width={largura} colorMode="light"/><Spacing2/></>}
      {loading && <><Skeleton show={loading} radius={8} height={84} width={largura} colorMode="light"/><Spacing2/></>}
      <FlatList data={data} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} renderItem={({item}) => <Noti item={item} /> }>
      </FlatList>
    </ScrollView>

  </Wrapper>
  </Main>
  )
}