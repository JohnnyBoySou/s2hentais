
import React, { useState, useContext, useEffect } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image,  StatusBar, ScrollView, Animated } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';


import { 
  Wrapper, 
  Container, 
  Main,
  Img,
  Title,
  Bt,
} from './styles';

import { ThemeContext } from 'styled-components/native';


import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../components/header/index'


import {PinchGestureHandler} from "react-native-gesture-handler"

export default function Images({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const item = route.params?.item

  const image1 = route.params?.item.imagem1
  const image2 = route.params?.item.imagem2
  const image3 = route.params?.item.imagem3
  const image4 = route.params?.item.imagem4
  const image5 = route.params?.item.imagem5
  const image6 = route.params?.item.imagem6
  const image7 = route.params?.item.imagem7
  const image8 = route.params?.item.imagem8
  const image9 = route.params?.item.imagem9
  const image10 = route.params?.item.imagem10

return (
  <Main>
  <Header title="Imagem"/>
  <Wrapper>
    <StatusBar translucent={true} transparent={true}/>
    
    
      <View style={{flex: 1, justifyContent: 'center', marginTop: -50,}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled>

        { image1?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image1}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

        { image2?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image2}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

        { image3?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image3}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}


        { image4?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image4}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

        { image5?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image5}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

        { image6?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image6}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

        { image7?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image7}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

        { image8?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image8}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}
        

        { image9?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image9}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

        { image10?.length >= 0 && <ReactNativeZoomableView zoomEnabled={true} 
          maxZoom={2.5} minZoom={1} zoomStep={0.5} initialZoom={1} bindToBorders={true} doubleTapZoomToCenter={true} onZoomAfter={this.logOutZoomState}>
          <Image source={{uri: image10}} style={{width: width, height: height * 0.5}}/>
        </ReactNativeZoomableView>}

      </ScrollView>
      </View>
    
  </Wrapper>
  </Main>
  )
}