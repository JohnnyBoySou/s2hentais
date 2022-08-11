import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';

import {  
  Button,
  Image, 
  Label,
  ImobilImage,
  Background,
  Title,
  Direct,
  Open,
  OpenLabel,

  HeadLine,
  SubHeadLine,
  Mark,
} from './styles';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { Ionicons,  Feather } from '@expo/vector-icons';

export default function ModalImobil({navigation, route, ...props  }){

  const title = props?.title
  const imobilimg = props?.imobilimg
  const endereco = props?.endereco
  const imobil = props?.imobil
  const a = false

  return(
    <View style={{marginBottom: 20,}}>

      <View style={{marginHorizontal: 24, paddingTop: 20,}}>

        <View >
          <ImobilImage source={{uri: imobilimg}}/>

          <View style={{justifyContent: 'center' , marginLeft: 0,}}>
            <Title>{title}</Title>
            <Label>{endereco}</Label>
            <View style={{flexDirection: 'row', marginTop: 15,}}>
              <Open onPress={() => navigation.navigate('Imobil', {dados: imobil})}><OpenLabel>VER PERFIL</OpenLabel></Open>
              {a && <Direct><Feather style={{textAlign: 'center'}} name="message-circle" size={24} color="#5B72F2" /></Direct>}
            </View>

            
          </View>

          



        </View>
      </View>


        {a && <View style={{backgroundColor: "#E1E4F960", justifyContent: 'space-between', padding: 20, marginTop: 20, borderRadius: 12, flexDirection: 'row', marginHorizontal: 24,}}>
          <View style={{justifyContent: 'center', flexGrow: 1,}}>
            <HeadLine>12K</HeadLine>
            <SubHeadLine>Visitas</SubHeadLine>
          </View>

          <Mark/>

          <View style={{justifyContent: 'center' , flexGrow: 1,}}>
              <HeadLine>32</HeadLine>
              <SubHeadLine>Imóveis</SubHeadLine>
            </View>
          </View>
        }




      
    </View>
  )
}