
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

export default function ListV( props ){

  const item = props.data

  const tilt = `${item?.categoria} com ${item?.qtd1} ${item?.item1}s, ${item?.qtd2} ${item?.item2} e ${item?.area} m2`


  return(

  <Card to={{pathname: `/details/${item.ID}`}}>
     
      <Img src={item.imagem1} />
        <Input>
          <InputTitle>R$ {item.valor_mensal}{item.valor_unico}</InputTitle>
        </Input>
      
      <Description>
        <Title>{tilt}</Title>
        <div style={{flexDirection: 'row', marginTop: 6, display: 'flex'}}>
          <FaMapMarkerAlt size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 5, display: 'flex'}}/>
          <Address>{item.bairro}, {item.rua}</Address>
        </div>



      </Description>    
  </Card>
  )
}




