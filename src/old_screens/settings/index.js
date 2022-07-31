
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, BackHandler, Linking, FlatList } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import AsyncStorage from '@react-native-async-storage/async-storage';

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
  Tag,


  Profile,
  ProfileImg,
  ProfileUsername,
  QRCode
} from './styles';







import Header from '../../components/header';


import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar } from 'react-native-paper';

export default function Settings({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)

  const largura = 0.7 * width;
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


  const versao = 4.5

  const [atualizacao, setAtualizacao] = useState("Procurando Atualizações...")
  const [load, setLoad] = useState(true)

  function abrir(){
    onOpen()
    setTimeout(function atualizacoes(){
      setAtualizacao("Seu App está atualizado!")
      setLoad(false)
    }, 3000)
  }
  
  function avaliar(){
    Linking.openURL('https://play.google.com/store/apps/details?id=com.maisconectados.meunovoimovel')
  }

   const a = false






  const geral = [
    {title: 'Meu Feed', route: 'Mapa', icon: 'list-outline'},
    {title: 'Notificações', route: 'Notify', icon: 'notifications-outline'},
    {title: 'Salvos', route: 'Save', icon: 'heart-outline', tag: '+9',},
    {title: 'Financiar', route: 'Financiar', icon: 'calculator-outline'},
    {title: 'Planos', route: 'Planos', icon: 'cube-outline'},
  ]




     
  const renderItem = ({ item }) => (

     <SubConfig onPress={() => navigation.navigate(item.route)}>
      <View style={{flexDirection: 'row', alignContent: 'center',  }}>
        <Ionicons name={item.icon} size={22} style={{textAlign: 'center', alignSelf: 'center', marginRight: 16,}} color={color.title} />
        <SubConfigLabel>{item.title}</SubConfigLabel>
        {item?.tag != undefined && <Tag>{item.tag}</Tag>}
      </View>

    </SubConfig>
  ) 



return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper stickyHeaderIndices={[0]}>
    <Profile>
       <ProfileImg source={require('../../assets/explorar.png')}/>
        <ProfileUsername>João Victor</ProfileUsername>
        <QRCode>
          <AntDesign name="qrcode" size={18} color="#FFF"  style={{textAlign: 'center'}}/>
        </QRCode>
    </Profile>

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
            translateY: 10,
          },
        ]}}>
          </MotiView>


        <View style={{marginTop: 0, marginBottom: 10,}}>
          <Select>
            <SelectLabel>GERAL</SelectLabel>
          </Select>

          <FlatList
            data={geral}
            
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />









          
          <Select>
            <SelectLabel>PREFERÊNCIAS</SelectLabel>
          </Select>
          
          <SubConfig>
            <SubConfigLabel>Modo Escuro [Em breve]</SubConfigLabel>
          </SubConfig>

          

          <Select>
            <SelectLabel>OUTROS</SelectLabel>
          </Select>

          <SubConfig onPress={onOpenVersao}>
            <SubConfigLabel>Versão</SubConfigLabel>
          </SubConfig>
          <Div/>

          
          
          <SubConfig onPress={abrir}>
            <SubConfigLabel>Atualizações</SubConfigLabel>
          </SubConfig>
          <Div/>

          
          
          <SubConfig onPress={avaliar} >
            <SubConfigLabel>Avaliar</SubConfigLabel>
          </SubConfig>
          <Div/>

          
          
          <SubConfig onPress={() => BackHandler.exitApp()}>
            <SubConfigLabel>Sair</SubConfigLabel>
          </SubConfig>
          <Div/>

        </View>


  </Wrapper>

  <Modalize  ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <Modal>
      <Title>{atualizacao}</Title>
      {load &&<Spacing2/>}
      {load && <ProgressBar indeterminate color={color.primary} />}
    </Modal>
  
  
  </Modalize>

   <Modalize  ref={modalizeVersao} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <Modal>
      <Title>A versão deste aplicativo é: {versao}</Title>
    </Modal>
  
  
  </Modalize>
  </Main>
  )
}