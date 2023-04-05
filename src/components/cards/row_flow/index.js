
import React, {  useContext, useRef  }  from 'react';
import { ThemeContext } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import regua from '../../../assets/imgs/regua.png'
import bed from '../../../assets/imgs/bed.png'
import bath from '../../../assets/imgs/bath.png'

import SwipeableViews from 'react-swipeable-views';


import { 
Description, 
Address, 
Img,
Toast,
ToastLabel,
Spacing,
InputLabel,
InputTitle,
Icon,
 } from './styles'

import { FiMapPin} from 'react-icons/fi'
import { Column, Row, TouchableOpacity, View } from '../../../theme/global'
import Like from '../../like'; 


export default function RowFlow({ route, ...props }){

  const item = props?.data
  const disabled = props?.disabled

  const { color } = useContext(ThemeContext)
  const navigation = useNavigate();
   
  const handleClick = ( value ) => { 
    if(disabled){
      return
    }else{
      navigation.push('Details', { dados: item, })
    }
   }

  return(
 
   <View style={{borderWidth: 2, width: 324, borderColor:"#000", borderRadius: 6, backgroundColor: color.light }}>
     
    <View  style={{borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between', }} rippleColor="#FFF" borderless={true}>
   <Column >
     
    <View>


      <TouchableOpacity style={{position: 'relative',}} onClick={handleClick}>
      <View style={{zIndex: 999, position: 'absolute', top: 10, left: 20,}}><Like  codigo={item.ID} type/></View>
      <SwipeableViews style={{width: 324,}} enableMouseEvents>
      {item?.imagem1 !== undefined && <Img src={ item?.imagem1} /> }
      {item?.imagem2 !== undefined && <Img src={ item?.imagem2} /> }
      {item?.imagem3 !== undefined && <Img src={ item?.imagem3} /> }
      </SwipeableViews>


      </TouchableOpacity>

        </View> 
        <Description>
        <Row style={{justifyContent: 'space-between'}}>
          <Column>
              <Column>
                <InputLabel>Por mês</InputLabel>
                <InputTitle>R$ {item.valor_mensal}{item.valor_unico}</InputTitle>
              </Column>     
          <Row>
            <FiMapPin style={{marginTop: 5, marginRight: 8,}}/>
            <Address>{item.bairro}</Address>
          </Row>
          
          </Column>

        

        <Column>
          <Row style={{ marginTop: 10,}}>

            <Toast>
              <Column>
                <Icon src={bed} />
                <ToastLabel>{item.qtd1}</ToastLabel>
              </Column>
            </Toast>

            
            <Toast>
              <Column>
                <Icon src={bath} />
                <ToastLabel>{item.qtd2}</ToastLabel>
              </Column>
            </Toast>

            <Toast>
              <Column>
                <Icon style={{width: 26.4,}} src={regua} />
                <ToastLabel>{item.area}m²</ToastLabel>
              </Column>
            </Toast>

          </Row>
        </Column>

      </Row>
        
      </Description>    

      </Column>
    </View>
  </View>
  )
}




