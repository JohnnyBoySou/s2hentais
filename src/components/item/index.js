import React from 'react';

import {  
  Button,
  Image, 
  Label,
  View,
} from './styles';


import Banheiro from '../../assets/bath.png'
import Quarto from '../../assets/bed.png'
import Cozinha from '../../assets/kitchen.png'
import SalaDeEstar from '../../assets/sala_de_estar.png'
import Garagem from '../../assets/garagem.png'
import Area from '../../assets/regua.png'

export default function Item({...props }){

  const type = props?.type
  const amount = props?.amount

  return(
    <Button>
      <View style={{flexDirection: 'row', display: 'flex', alignContent: 'center'}}>
          <View>
            {type === 'Quarto' && <Image src={Quarto}/>}
            {type === 'Banheiro' &&  <Image src={Banheiro} />}      
            {type === 'Cozinha' && <Image src={Cozinha} />}
            {type === 'Sala' && <Image src={SalaDeEstar} />}
            {type === 'Garagem' && <Image src={Garagem} />}
          </View>
      
      { type !== "Area" && <View style={{justifyContent: 'center'}}>
        {amount > 1 && <Label>{amount} {type}s</Label>}
        {amount <= 1 && <Label>{amount} {type}</Label>}
        
      </View>
      }
      {type === 'Area' &&
        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center'}}>
          <Image src={Area} />
          <Label style={{alignSelf: 'center'}}>{amount} m²</Label>
        </View>
        }
  
      </View>
    </Button>
  )
}