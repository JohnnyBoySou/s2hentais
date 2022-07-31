
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, BackHandler, Linking, FlatList, ImageBackground } from 'react-native';


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



  Header,
  HeaderLabel,
  HeaderTitle,
  HeaderbButton,
  HeaderProfile,



  Map,


  Cards,
  Card,

} from './styles';








import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar, ActivityIndicator } from 'react-native-paper';

export default function DraftMap({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


  const modalizeRef = useRef(null);
  const modalizeVersao = useRef(null);


   const a = false

  const [loading, setLoading] = useState(true)

  const cardwidth = width


return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    <Map style={{height: height}}></Map>

    <Cards horizontal pagingEnabled >


    <Card  width={cardwidth}>
      <View style={{height: 150, backgroundColor: color.light, borderRadius: 8,}}/>
      <View style={{height: 35, backgroundColor: color.light, borderRadius:4, marginTop: 10}}/>
      <View style={{height: 26, backgroundColor: color.light, borderRadius:4, marginTop: 10,  alignSelf: 'center', width: 130,}}/>
    </Card>
    
    
    <Card width={cardwidth}>
      <View style={{backgroundColor: "#fff", padding: 12, borderRadius: 8,}}>
        <View style={{height: 150, backgroundColor: color.light, borderRadius: 8,}}/>
        <View style={{height: 35, backgroundColor: color.light, borderRadius:4, marginTop: 10}}/>
        <View style={{height: 26, backgroundColor: color.light, borderRadius:4, marginTop: 10,  alignSelf: 'center', width: 130,}}/>
      </View>
    </Card>

    
    <Card  width={cardwidth}>
      <View style={{height: 150, backgroundColor: color.light, borderRadius: 8,}}/>
      <View style={{height: 35, backgroundColor: color.light, borderRadius:4, marginTop: 10}}/>
      <View style={{height: 26, backgroundColor: color.light, borderRadius:4, marginTop: 10,  alignSelf: 'center', width: 130,}}/>
    </Card>
    
    </Cards>







  
  </Wrapper>



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