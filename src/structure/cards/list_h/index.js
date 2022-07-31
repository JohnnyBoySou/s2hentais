
import React from 'react';

import { Description, Title, Address, 


Img,
Toast,
ToastLabel,
Spacing,

Input,
InputLabel,
InputTitle,

Card
 } from './styles'


 import { FaMapMarkerAlt } from "react-icons/fa";

export default function ListH( props ){

  const item = props.data


  return(

  <Card to={{pathname: `/details/${item.ID}`}}>
     
      <Img src={item.imagem1} />
      
      <Description>
        <Title>#{item.ID}</Title>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          <FaMapMarkerAlt size={14} color="#5B72F2" style={{marginTop: 5, marginRight: 5, display: 'flex'}}/>
          <Address>{item.bairro}</Address>
        </div>

        <div style={{flexDirection: 'row', display: 'flex', marginTop: 10,}}>
          <Toast>
            <ToastLabel>{item.qtd1} {item.item1}s</ToastLabel>
          </Toast> 
          <Spacing/>
          <Toast>
            <ToastLabel>{item.area} m&#xB2;</ToastLabel>
          </Toast>
        </div>

        <Input>
          <div style={{display: 'flex', flexDirection: 'column', }}>
            <InputLabel>Por mês</InputLabel>
            <InputTitle>R$ {item.valor_mensal}{item.valor_unico}</InputTitle>
          </div>
        </Input>

      </Description>    
  </Card>
  )
}




