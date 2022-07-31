import React, { useState } from 'react';
import { View } from 'react-native';

import {  
  Button,
  Image, 
  Label,
} from './styles';


export default function Item({...props }){

  const type = props?.type
  const amount = props?.amount

  return(
    <Button>
      <View style={{}}>
          <View>
            {type == 'Quarto' && <Image source={require('../../assets/bed.png')}/>}
            {type == 'Banheiro' &&  <Image source={require('../../assets/bath.png')} />}      
            {type == 'Cozinha' && <Image source={require('../../assets/kitchen.png')} />}
            {type == 'Sala' && <Image source={require('../../assets/sala_de_estar.png')} />}
            {type == 'Garagem' && <Image source={require('../../assets/garagem.png')} />}
          </View>
      
      { type != "Area" && <View style={{}}>
        {amount > 1 && <Label>{type}s</Label>}
        {amount > 1 && <Label>{amount}</Label>}
        {amount <= 1 && <Label>{type}</Label>}
        {amount <= 1 && <Label>{amount}</Label>}
        
      </View>
      }
      {type == 'Area' &&
        <View style={{justifyContent: 'center', flexDirection: 'row', alignContent: 'center'}}>
          <Image source={require('../../assets/regua.png')} />
          <Label style={{alignSelf: 'center'}}>{amount} m²</Label>
        </View>
        }
  
      </View>
    </Button>
  )
}