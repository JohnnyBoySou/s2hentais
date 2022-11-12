
import React , { useState } from 'react';

import {
Img,
BtValue,
BtLocation,
Card,
Line,
Title,
Gradient,
Subtitle,
 } from './styles'


 import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function ListH5( props ){

  const item = props.data
  const tilt = `${item?.categoria} com ${item?.qtd1} ${item?.item1}s, ${item?.qtd2} ${item?.item2} e ${item?.area}m² no bairro ${item?.bairro}`

  const dashboard = props.route

  const [imgUrl, setImgUrl] = useState(item?.imagem1)

  


  const navigate = useNavigate()

  const getDetails = () => {
    if(dashboard){
      navigate(`/dashboard/details/${item.ID}`)
    }else{
    navigate(`/details/${item.ID}`)
    }
  }


  


  
  return(

  <Card style={{backgroundImage: `url(${imgUrl})`, }}>
    <div style={{width: 100, height: 210, }}/>
    <Title>{item.tipo}</Title>
    <Subtitle>R$ {item?.valor_mensal}</Subtitle>    
    <Gradient/> 
    </Card>
  )
}




