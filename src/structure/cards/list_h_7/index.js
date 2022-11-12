
import React , { useState } from 'react';
import {
Img,
Card,
View,
Column,
ColumnLabel,

QuickBt, 

 } from './styles'

import { FiEdit, FiExternalLink, FiBarChart2}  from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';



export default function ListH7( props ){

  const item = props.data
  const dashboard = props.route

  const [imgUrl, setImgUrl] = useState(item?.imagem1)

  const navigate = useNavigate()

  const getDetails = ( params ) => {
    console.log(params)
    if(params){
      navigate(`/dashboard/details/${item.ID}`)
    }
    else{
      navigate(`/details/${item.ID}`)
    }}


  
  return(

  <Card >
     
      <Img onClick={() => getDetails(dashboard)} src={imgUrl} />
      <View style={{flexDirection: 'row', display: 'flex', }}>
        <Column style={{width: 50,}}><ColumnLabel>#{item?.ID}</ColumnLabel></Column>
        <Column style={{width: 80,}}><ColumnLabel>{item?.categoria}</ColumnLabel></Column>
        <Column style={{width: 70,}}><ColumnLabel>R$ {item?.valor_mensal}</ColumnLabel></Column>
        <Column style={{width: 20,}}><ColumnLabel>{item?.qtd1}</ColumnLabel></Column>
        <Column style={{width: 80,}}><ColumnLabel>{item?.area} m² </ColumnLabel></Column>
        <Column style={{flexDirection: 'row', display: 'flex'}}>
          <QuickBt><FiEdit/></QuickBt>
          <QuickBt onClick={() => getDetails(true)}><FiBarChart2/></QuickBt>
          <QuickBt onClick={() => getDetails(false)}><FiExternalLink/></QuickBt>
        </Column>
        
      </View>
    
    </Card>
  )
}




