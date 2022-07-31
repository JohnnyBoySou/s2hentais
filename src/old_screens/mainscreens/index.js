
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image, Pressable, StatusBar, TextInput , ScrollView} from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';


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


  Select,
  SelectLabel,
  Spacing,
  Spacing1,

  Div,
  Subheadline
} from './styles';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { LinearGradient } from 'expo-linear-gradient';

export default function MainScreens({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)

  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const [bt, setBt] = useState(true)

  const scroll = useRef()

  function scrolle(){
     scroll.current?.scrollTo({
      y: 200,
      animated: true,
    })
  }



return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
        <ScrollView ref={scroll} style={{paddingBottom: 40, }}>



          <Title>Telas do Aplicativo</Title>

          <Subheadline>Selecione entre as opções abaixo</Subheadline>

          


        <View style={{marginTop: 20, marginBottom: 0, paddingHorizontal: 24,}}>

        <Div/>
        <Spacing/>
        <Spacing/>
        
        
        
          <Select style={{flexGrow: 1,}} onPress={() => navigation.navigate('TabNavigator')}>
            <SelectLabel>Home</SelectLabel>
          </Select>
        
          <Select style={{flexGrow: 1,}} onPress={() => navigation.navigate('Splash')}>
            <SelectLabel>Splash</SelectLabel>
          </Select>

          <Select style={{flexGrow: 1,}} onPress={() => navigation.navigate('Error')}>
            <SelectLabel>Error</SelectLabel>
          </Select>

          <Select style={{flexGrow: 1,}}  onPress={() => navigation.navigate('Notify')}>
            <SelectLabel>Notify</SelectLabel>
          </Select>

          <Select style={{flexGrow: 1,}} onPress={() => navigation.navigate('Match')}>
            <SelectLabel>Match</SelectLabel>
          </Select>
       
        <Spacing/>
        <Div/>
        </View>
        


      </ScrollView>

    
  </Wrapper>
  </Main>
  )
}