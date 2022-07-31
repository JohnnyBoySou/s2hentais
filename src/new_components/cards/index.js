
import React, { useState, useRef, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, Text, Dimensions, ImageBackground  } from 'react-native';

import Carousel, { Pagination }  from 'react-native-snap-carousel';
import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { Chip, Description, Title, Address, Valor, OfertaBlock, Ofertas, ID, IDLabel } from './styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Cards({ route, ...props }){

  const data = props?.data

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)
  const ofertas = data?.length  
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef(null);

  const largura = 0.7 * width;
  const altura = 0.6 * height;
  const altura2 = 0.48 * height;

  
  const pegarPost = (item) => {
      navigation.navigate('DetailsDois', { dados: item, });};


  const renderItem = useCallback(({ item, index }) => (
    <View onPress={() => pegarPost(item)}
      style={{
        borderRadius: 12,
        height: altura,
        marginLeft: 5,
        marginRight: 5,
      }}>
      <>

    <TouchableRipple onPress={() => pegarPost(item)} style={{flex: 1,borderRadius: 12, }} rippleColor="#FFF" borderless={true}>
      <ImageBackground source={{uri: item.imagem1}} resizeMode="cover" style={{flex: 1,}}
      imageStyle={{borderRadius: 12,}}>
      <Chip>      
        <>
         {item.tipo == "Ambos" && 
        <Valor>R$ {item.valor_mensal} / R$ {item.valor_unico}</Valor> }
        {item.tipo != "Ambos" && 
        <Valor>R$ {item.valor_mensal}{item.valor_unico}</Valor> }
        
        </>
      </Chip>
      </ImageBackground>
      </TouchableRipple>
      
      <Description>
      <ID><IDLabel>{item.post_id}</IDLabel></ID>
        <Title>{item.nome}</Title>
        <Address>{item.rua}, {item.numero} - {item.bairro}</Address>
      </Description>      
    </>
  </View>
  ), []);
 
  
  return(
    <View>


    
  <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginBottom: 20,}}>
    { loading && <Skeleton show={loading} radius={8} height={48} width={230} colorMode="light"/>}
    { loading == false && <>
    {ofertas > 0 && <><Ofertas>Melhores Ofertas</Ofertas>
      <AnimatePresence>
      <MotiView
      
      from={{
        scale: 0,
        opacity: 0,
      }}

      animate={{
        opacity: 1,
        scale: [
          {value: 1, type: 'timing'},
          {value: 1.1, type: 'spring'},
          {value: 1, type: 'timing'}
      ]}}>

          <OfertaBlock>{ofertas}</OfertaBlock>
        </MotiView>
        
      </AnimatePresence>
      </>
    }
      </>}
  </View>

      
     <Carousel 
          layout="default"
          ref={isCarousel}
          data={data}
          sliderWidth={width}
          itemWidth={largura}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          autoplay={false}
          autoplayInterval={6000}
          autoplayDelay={2000}
          activeAnimationType="timing"
        /> 

     <Pagination
        dotsLength={ofertas}
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
    </View>

  )
}




