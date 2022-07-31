
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


} from './styles';








import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar, ActivityIndicator } from 'react-native-paper';

export default function Explorar({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


  const modalizeRef = useRef(null);
  const modalizeVersao = useRef(null);


   const a = false

  const [loading, setLoading] = useState(true)



return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
    <ScrollView stickyHeaderIndices={[0]} style={{paddingVertical: 0, paddingHorizontal: 0,}}>

      <Header>

      <ImageBackground style={{width: "100%", borderBottomLeftRadius: 12, borderBottomRightRadius: 12,}} source={require('../../assets/explorar.png')} >

        <HeaderProfile>
          <MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-left" size={42} color={color.light} />
          </HeaderProfile>

        <View>
          <HeaderTitle>Fazendo {"\n"}✨ Mágica ✨ </HeaderTitle>
          <View style={{padding: 12, flexDirection: 'row', borderRadius: 8, backgroundColor: "#ffffff20", marginTop: 20, alignSelf: 'center', justifyContent: 'center', alignContent: 'center' , marginBottom: 100,}}>
            <ActivityIndicator animating={true} color={color.light} />
            <HeaderLabel>Carregando...</HeaderLabel>
          </View>
        </View>

      </ImageBackground>


      
      
      </Header>

      <View style={{width:250, height: 400, marginTop: -80, zIndex: 99, borderRadius: 12, alignSelf: 'center' , backgroundColor: "#f7f7f7" }}>
      
      
      </View>


  </ScrollView>

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