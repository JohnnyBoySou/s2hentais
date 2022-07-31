
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, ImageBackground, TouchableOpacity} from 'react-native';


import { Ionicons, MaterialIcons, AntDesign  } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  Subtitle,




  Modal,

  Imagem,
  Spacing,
} from './styles';


import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import Header from '../../components/header/index';
import { ThemeContext } from 'styled-components/native';
import { Modalize } from 'react-native-modalize';

export default function Gallery({ navigation, route }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  
 
  const item = route.params?.item
  
  const modalizeCheck = useRef(null);

  const onOpen = () => {
    modalizeCheck.current?.open();
  };
   const onClose = () => {
    modalizeCheck.current?.close();
  };


return (
  <Main>
  <Header title="Galeria" subtitle=""/>
  <Wrapper>

  <View style={{marginHorizontal: 12, marginBottom: 12,}}>    
    { item.imagem1?.length > 0 && 
    <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem1}}/></TouchableOpacity> }
    <Spacing/>
    { item.imagem2?.length > 0 && 
    <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem2}}/></TouchableOpacity> }  
  </View>



    <View style={{marginHorizontal: 12, marginBottom: 12,}}>
      { item.imagem3?.length > 0 && <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem3}}/></TouchableOpacity> } 
      <Spacing/>
      { item.imagem4?.length > 0 && <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem4}}/></TouchableOpacity> }

    </View>
    <View style={{marginHorizontal: 12, marginBottom: 12,}}>
    
      { item.imagem5?.length > 0 && <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem5}}/></TouchableOpacity> } 
      <Spacing/>
      { item.imagem6?.length > 0 && <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem6}}/></TouchableOpacity> }
        
    </View>
    <View style={{marginHorizontal: 12, marginBottom: 12,}}>
    
      { item.imagem7?.length > 0 &&  <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem7}}/></TouchableOpacity> } 
      <Spacing/>
      { item.imagem8?.length > 0 &&  <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem8}}/></TouchableOpacity> }

    </View>
    <View style={{marginHorizontal: 12, marginBottom: 0,}}>
    
      { item.imagem9?.length > 0 &&  <TouchableOpacity onPress={() => navigation.navigate('ImageZoom', {item: item})} style={{width: "100%"}}><Imagem source={{uri: item.imagem9}}/></TouchableOpacity> }
    

    </View>


  </Wrapper>


  <Modalize ref={modalizeCheck} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000000",}} tapGestureEnabled={false} handlePosition="inside">
    <Modal>
 
      

    </Modal>
  </Modalize>
  </Main>
  )
}