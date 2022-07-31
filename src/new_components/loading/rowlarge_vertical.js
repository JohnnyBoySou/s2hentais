import React from 'react'

import { Skeleton } from '@motify/skeleton'

import { View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RowLargeLoading (){
  return (
    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center',  textAlign: 'center', paddingHorizontal: 20,}}>
      <Skeleton radius={12} height={180} width={280} colorMode="light" />
      <View style={{width: 10, height: 20,}}/>
      <Skeleton radius={12} height={180} width={280} colorMode="light" />
      <View style={{width: 10, height: 20,}}/>
      <Skeleton radius={12} height={180} width={280} colorMode="light" />
      <View style={{width: 10, height: 20,}}/>
      <Skeleton radius={12} height={180} width={280} colorMode="light" />
    </View>
  )
}

