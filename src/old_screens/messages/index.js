
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, BackHandler, Linking, FlatList } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign , Feather} from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';


import { 
  Wrapper, 
  Title, 
  Main,
  Label,

  Spacing,

  Div,
  Modal,



  HeaderMsg,
  HeaderMsgLabel,
  HeaderMsgTitle,
  HeaderMsgbButton,
  HeaderMsgProfile,


  MsgContainer,
  Msg,
  Rsp,
  MsgLabel,

  Question,
  QuestionButton,
  QuestionLabel,
} from './styles';







import Header from '../../components/header';


import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar } from 'react-native-paper';

export default function Messages({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


  const modalizeRef = useRef(null);
  const modalizeVersao = useRef(null);


   const a = false





return (
  <Main>
  <Header title="Mensagens"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
    <ScrollView stickyHeaderIndices={[0]} style={{paddingVertical: 0, paddingHorizontal: 0,}}>

      <HeaderMsg>

        <HeaderMsgProfile/>

        <View>
          <HeaderMsgTitle>Arthur Muller</HeaderMsgTitle>
          <HeaderMsgLabel>Centro, R. Gov. Jorge Lacerda, 433</HeaderMsgLabel>
        </View>

        <HeaderMsgbButton>
        <Feather name="phone" style={{textAlign: 'center'}} size={24} color="#fff" /></HeaderMsgbButton>
      
      
      
      
      
      </HeaderMsg>



<MsgContainer>


        <Msg>
          <MsgLabel>Olá, somos a imóbiliaria Arthur Muller!</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>O que deseja saber?</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>
        
        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>
        
        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>
        
        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>


        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Rsp>
          <MsgLabel>AAAA</MsgLabel>
        </Rsp>
    
        <Msg>
          <MsgLabel>AAAA</MsgLabel>
        </Msg>

        <Rsp>
          <MsgLabel>AAAA</MsgLabel>
        </Rsp>

        </MsgContainer>

  </ScrollView>

  </Wrapper>



    <Question>
      <View style={{width: 80, height: 8, borderRadius: 10, backgroundColor: "#ffffff20", alignSelf: 'center', marginBottom: 12,}}/>

      <QuestionButton><QuestionLabel>Onde fica?</QuestionLabel></QuestionButton>
      <QuestionButton><QuestionLabel>Que horas abre?</QuestionLabel></QuestionButton>
      <QuestionButton><QuestionLabel>Quais documentos?</QuestionLabel></QuestionButton>
    </Question>


  <Modalize  ref={modalizeRef} adjustToContentHeight={true} overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <Modal>
    </Modal>
  
  
  </Modalize>

   <Modalize ref={modalizeVersao} adjustToContentHeight={true} overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <Modal>
      
    </Modal>
  
  
  </Modalize>
  </Main>
  )
}