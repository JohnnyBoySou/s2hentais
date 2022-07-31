import React from 'react'



import { Skeleton } from '@motify/skeleton'

import { View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function SkeletonLoading (){

  const largura = 0.7 * width;
  const altura = 0.6 * height;
  const altura2 = 0.48 * height;

  return (
    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center',  textAlign: 'center'}}>
      <Skeleton radius={12} height={altura2} width={largura} colorMode="light" />
      <View style={{marginTop: 20,}} />
      <Skeleton radius={8} height={42} width={220} colorMode="light"  />
      <View style={{marginTop: 15,}} />
      <Skeleton radius={4} height={28} width={250} colorMode="light"  />
      <View style={{marginTop: 15,}} />
      <Skeleton radius={4} height={28} width={150} colorMode="light"  />
    </View>

  )
}


