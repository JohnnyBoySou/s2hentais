
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
Spc,

 } from './styles'


 import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Item from '../../../components/item';


export default function ListH8( props ){

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
      
      <View style={{paddingTop: 4, paddingLeft: 15,}}>
        <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
        <Title style={{color: color.primary, fontSize: 14, letterSpacing: 0.5, marginBottom: -5, textTransform: 'uppercase', fontFamily: font.medium, }}>
          {item?.categoria} | #{item?.ID}</Title>
        </View>
      
        
      <Title>Residência {item?.nome}</Title>


      <View style={{flexDirection: 'row', display: 'flex'}}>
        <Location><FaMapMarkerAlt size={16} style={{marginRight:6}}/>Bairro {item?.bairro}, Rua {item?.rua}</Location>
      </View>

      <View style={{display: 'flex', marginLeft: 10, marginTop: 15, flexDirection: 'row'}}>
         
         <Item type={item?.item1} amount={item?.qtd1} />
         <Spc/>
         <Item type={item?.item2} amount={item?.qtd2} />
         <Spc/>
         <Item type='Area' amount={item?.area} />
      </View>
      
      </View> 

    </Card>
  )
}




