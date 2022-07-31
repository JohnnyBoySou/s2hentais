
import React, { useEffect, useState, useRef, useContext , } from 'react';
import { View,  Animated,  ScrollView, StatusBar, RefreshControl,  Dimensions, SafeAreaView, FlatList, useWindowDimensions   } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const largura = 0.7 * width;
const altura = 0.6 * height;

import { Ionicons, Fontisto , MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';


import { Wrapper, Container, Title, Main,
Label, SubLabel,
TabBarTitle,
TabBarA,
TabBarButton,
TabBarLabel,

} from './styles';

import { ThemeContext } from 'styled-components/native';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Skeleton } from '@motify/skeleton'
import Axios from 'axios';
import Header from '../../components/header/index';

import { API_URL } from '../../api/index';
import RowLarge from '../../new_components/lists/row_large/index'
import RowLargeLoading from '../../new_components/loading/rowlarge_vertical'


export default function Bairro({ navigation, route, }) {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'popular', title: 'Popular' },
    { key: 'recentes', title: 'Recentes' },
  ]);

  const info = {nome: 'Centro'}



  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [dataRecentes, setDataRecentes] = useState()



  useEffect(() => {
    getDados(info?.nome)
    getDadosRecentes(info?.nome)
  }, [])


  async function getDados(valor){
   
     const headers = {
      'Accept': "application/json"
    }
    
    setLoading(true)
      await Axios.get(`${API_URL}/popular/bairro?bairro=${valor}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        setLoading(false)
        console.log(response.data)

    }).catch(error => {
        console.log(error)
    })
  }


  async function getDadosRecentes(valor){   
     const headers = {
      'Accept': "application/json"
    }
    
    setLoading(true)
      await Axios.get(`${API_URL}/recentes/bairro?bairro=${valor}`, {
        headers: headers
    }).then(function (response) {
        setDataRecentes(response.data)
        setLoading(false)
        console.log(response.data)

    }).catch(error => {
        console.log(error)
    })
  }
  
  const { color, opacity } = useContext(ThemeContext)

  const renderTabBar = props => (
    <TabBar {...props} renderLabel={({ route, focused, color }) => ( <TabBarTitle focus={focused} style={{margin: 8,}}>{route.title}</TabBarTitle>)}
      indicatorStyle={{ backgroundColor: color.primary, height: 4, borderRadius: 10, }}
      style={{ backgroundColor: color.background,  }}
    />
  );


    
  const renderItem = ({ item }) => (
    <RowLarge data={item} direction="vertical"/> 
  )




  const PopularRoute = ()  => (
    <View style={{padding: 12, flex: 1,}} >
        <Label style={{textAlign: 'left', fontFamily: 'Font_Book'}}>Encontramos <Label style={{fontFamily: 'Font_Bold'}}>{data?.length}</Label> imóveis</Label>
      
      <SafeAreaView style={{ marginTop: 16,}}>
        {loading && <RowLargeLoading/> }
          <FlatList
                data={data}
                ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
        </SafeAreaView>
      </View>
    );

  const RecentesRoute = ()  => (
    <View style={{padding: 12, flex: 1,}} >
        <Label style={{textAlign: 'left', fontFamily: 'Font_Book'}}>Encontramos <Label style={{fontFamily: 'Font_Bold'}}>{dataRecentes?.length}</Label> imóveis</Label>
      
      <SafeAreaView style={{ marginTop: 16,}}>
        {loading && <RowLargeLoading/>}
          <FlatList
                data={dataRecentes}
                ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
        </SafeAreaView>
      </View>
    );


  const a = false;


  const scroll = useRef()

  
  const [exp, setExp] = useState(true)
  const [gal, setGal] = useState(false)

  function mudar(){
    if(exp){
      
      scroll.current.scrollTo({ x: width, y: 0, animated: true });
      
      setExp(false)
      setGal(true)
    }
    if(gal){
      scroll.current.scrollTo({ x: 0, y: 0, animated: true });
      setGal(false)
      setExp(true)
    }
  }

  useEffect(() => {
    console.log(scrollX)
  })

  
  const [scrollX, setScrollX] = useState(new Animated.Value(0));

  function verify(){
    console.log(scrollX)
    if(scrollX > 0){
      setExp(true)
      setGal(false)
    }
    else if(scrollX == 0){
      setGal(true)
      setExp(false)
    }
  }



  const [atl, setAtl] = useState(false)
  

return (
  <>

<Main>
<Header title="Por bairro" />
  <Wrapper stickyHeaderIndices={[1]}
    onScroll={Animated.event([{nativeEvent: {contentOffset: { y: scrollY }},}],{ useNativeDriver: false })}>

    <Animated.View
        style={{
          borderRadius: 12,
          marginLeft: 0,
          marginRight: 0,

          opacity: scrollY.interpolate({
            inputRange:[1, 50, 100],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp'
          }),

          transform: [{ scale: scrollY.interpolate({
            inputRange:[1, 50, 100],
            outputRange: [1, 0.8, 0],
            extrapolate: 'clamp'
          }), },
          ]


        }}

        
        >

        <Title>{info?.nome}</Title>
        <Label>{info?.extensao} km de extensão</Label>


       {a && <View style={{flexDirection: 'row', marginTop: 20, paddingLeft: 10, paddingRight: 10, paddingBottom: 16, borderBottomColor: color.off, borderBottomWidth: 2,}}>
          <MaterialCommunityIcons name="home-city-outline" size={24} color={color.primary} style={{padding: 12, marginRight: 6,}} />
          <SubLabel>{info?.descricao}</SubLabel>
        </View>}

    


    </Animated.View>
      
    <TabBarA>
      <TabBarButton  disabled={exp} onPress={() => mudar()} focus={exp}><TabBarTitle focus={exp}>Popular </TabBarTitle></TabBarButton>
      <TabBarButton disabled={gal} onPress={() => mudar()} focus={gal}><TabBarTitle focus={gal}>Recentes </TabBarTitle></TabBarButton>
    </TabBarA>

   <ScrollView ref={scroll} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true} 
    scrollEventThrottle={64} onMomentumScrollEnd={() => console.log('a')}
    onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollX }},}],{ useNativeDriver: false })}>
    <PopularRoute/>
    <RecentesRoute/>
   
   </ScrollView>


  
    




  
  </Wrapper>

  </Main>
  </>
  )
}