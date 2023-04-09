
import React , { useState, useContext } from 'react';
import {
Img,
Card,
View,
Column,
ColumnLabel,

QuickBt, 

 } from './styles'

 import { ThemeContext } from 'styled-components';
import { BsPen , BsTrash, BsBarChartLine, BsShare, BsCheck } from 'react-icons/bs'
import { FiEdit, FiExternalLink, FiBarChart2}  from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { requestDeleteImovel } from '../../../api/request';


import Modal from 'react-modal';
import { ButtonBR, ButtonPR } from '../../../theme/global';

export default function ListH7( props ){

  const { color, font } = useContext(ThemeContext)
  const item = props.data
  const dashboard = props.route
  const token = props.token

  const [imgUrl, setImgUrl] = useState(item?.imagem1)
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate()

  const getDetails = ( params ) => {
    console.log(params)
    if(params){
      navigate(`/dashboard/details/${item.ID}`)
    }
    else{
      navigate(`/details/${item.ID}`)
    }}

    const [confirm, setConfirm] = useState(false);
    const handleDelete = () => { 
      console.log(token)
      setConfirm(!confirm)
       requestDeleteImovel(item.ID, token).then(response => {
      })
    }

  
  return(
<>
  <Card >
     <View style={{flexDirection: 'row', display: 'flex', }}>
        <Column style={{padding: 0,}}><Img onClick={() => getDetails(dashboard)} src={imgUrl} /></Column>
        <Column style={{width: 70,}}><ColumnLabel>#{item?.ID}</ColumnLabel></Column>
        <Column style={{width: 100,}}><ColumnLabel>{item?.categoria}</ColumnLabel></Column>
        <Column style={{width: 70,}}><ColumnLabel>R$ {item?.valor_mensal}{item?.valor_unico}</ColumnLabel></Column>
        <Column style={{width: 100,}}><ColumnLabel>{item?.qtd1} {item?.item1}</ColumnLabel></Column>
        <Column style={{width: 100,}}><ColumnLabel>{item?.qtd2} {item?.item2}</ColumnLabel></Column>
        
        <Column style={{width: 80,}}><ColumnLabel>{item?.area}m² </ColumnLabel></Column>
        
        <Column style={{width: 60,}}><ColumnLabel>{item?.views}</ColumnLabel></Column>
        <Column style={{width: 60,}}><ColumnLabel>{item?.like}</ColumnLabel></Column>
        <Column style={{flexDirection: 'row', display: 'flex', width: 70}}>
          <QuickBt><BsPen/></QuickBt>
          <QuickBt onClick={() => setModalOpen(!modalOpen)}>
            {!confirm && <BsTrash/>}
            {confirm && <BsCheck size={24} style={{marginTop: 2, marginLeft: -2,}}/>}
          </QuickBt>
        </Column>
        
      </View>
    
    </Card>
    
    <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={{
          content: {
            width: 480,   
            height: 586,
            margin: 'auto',
            borderRadius: 12,},
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}>
          <View className='column' >
            <ButtonPR onClick={handleDelete} style={{background: color.red, color: color.light}}>CONFIRMAR EXCLUSÃO</ButtonPR>
        </View>
      </Modal>
      </>
  )
}




