
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
     <View style={{flexDirection: 'row', display: 'flex', }}>
        <Column style={{padding: 0,}}><Img onClick={() => getDetails(dashboard)} src={imgUrl} /></Column>
        <Column style={{width: 50,}}><ColumnLabel>#{item?.ID}</ColumnLabel></Column>
        <Column style={{width: 100,}}><ColumnLabel>{item?.categoria}</ColumnLabel></Column>
        <Column style={{width: 70,}}><ColumnLabel>R$ {item?.valor_mensal}{item?.valor_unico}</ColumnLabel></Column>
        <Column style={{width: 100,}}><ColumnLabel>{item?.qtd1} {item?.item1}</ColumnLabel></Column>
        <Column style={{width: 100,}}><ColumnLabel>{item?.qtd2} {item?.item2}</ColumnLabel></Column>
        
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




