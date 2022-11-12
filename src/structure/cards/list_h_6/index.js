
import React , { useState } from 'react';

import { ThemeContext } from 'styled-components';
import {
Img,
BtValue,
BtLocation,
Card,
Line,
Title,
View,
Location,

 } from './styles'


 import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';


export default function ListH6( props ){

  const item = props.data
  const dashboard = props.route
  const tilt = `${item?.qtd1} ${item?.item1}s, ${item?.qtd2} ${item?.item2} e ${item?.area}m²`

  const [imgUrl, setImgUrl] = useState(item?.imagem1)

  const { color, font } = useContext(ThemeContext)



  const navigate = useNavigate()

  const getDetails = () => {
    if(dashboard){
      navigate(`/details/details/${item.ID}`)
   
    }
    navigate(`/details/${item.ID}`)
  }


  
  return(

  <Card >
     
      <Img onClick={getDetails} src={imgUrl} />
     <View style={{paddingTop: 4,}}>
      <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
        <Title style={{color: color.primary, fontSize: 14, letterSpacing: 0.5, marginBottom: -5, textTransform: 'uppercase', fontFamily: font.medium, }}>
          {item?.categoria} | R$ {item?.valor_mensal} | #{item?.ID}</Title>

      </View>
      
      
      <Title>{tilt}</Title>
      <View style={{flexDirection: 'row', display: 'flex'}}>
        <Location><FaMapMarkerAlt size={14}/> {item?.bairro}</Location>
      </View>
      </View> 
    </Card>
  )
}




