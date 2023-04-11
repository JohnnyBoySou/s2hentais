
import React , { useState, useContext } from 'react';
import {
Img,
Card,
View,
Column,
ColumnLabel,
Title,
QuickBt,
Label,
Circle, 
Spacing
 } from './styles'

 import { ThemeContext } from 'styled-components';
import { BsPen , BsTrash3, BsTrash, BsBarChartLine, BsShare, BsCheck } from 'react-icons/bs'
import { AiOutlineEdit }  from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { requestDeleteImovel } from '../../../api/request';

import Loader from '../../../components/loader';

import Modal from 'react-modal';
import { ButtonBR, ButtonPR, Row } from '../../../theme/global';
import EditImobil from '../../../dashboard/edit_imobil';
import ListH2 from '../list_h_2';
import ListH3 from './../list_h_3/index';

export default function ListH7( props ){

  const { color, font } = useContext(ThemeContext)
  const item = props.data
  const dashboard = props.route
  const token = props.token
  const user = props.user
  const a = false

  const [imgUrl, setImgUrl] = useState(item?.imagem1)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const navigate = useNavigate()

  const getDetails = ( params ) => {
    console.log(params)
    if(params){
      navigate(`/dashboard/details/${item.ID}`)
    }
    else{
      navigate(`/details/${item.ID}`)
    }}
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const handleDelete = () => { 
      setConfirm(!confirm)  
      setLoading(true)
       requestDeleteImovel(item.ID, token).then(response => {
        if(response === "trash"){
          setLoading(false)
          setModalOpen(!modalOpen)
        }
        else{
          setLoading(false)
        }
      })
    }

  
  return(
<>
  <Card >
     <View style={{flexDirection: 'row', display: 'flex', }}>
        <Column style={{padding: 0,}}><Img onClick={() => getDetails(dashboard)} src={imgUrl} /></Column>
        <Column style={{width: 70,}}><ColumnLabel>#{item?.ID}</ColumnLabel></Column>
        <Column style={{width: 100,}}><ColumnLabel>{item?.categoria}</ColumnLabel></Column>
        <Column style={{width: 80,}}><ColumnLabel>R$ {item?.valor_mensal}{item?.valor_unico}</ColumnLabel></Column>
        <Column style={{width: 80,}}><ColumnLabel>{item?.qtd1} QTR</ColumnLabel></Column>
        <Column style={{width: 80,}}><ColumnLabel>{item?.qtd2} BNH</ColumnLabel></Column>
        <Column style={{width: 90,}}><ColumnLabel>{item?.area}m² </ColumnLabel></Column>
        <Column style={{width: 60,}}><ColumnLabel>{item?.views} - {item?.like}</ColumnLabel></Column>
        <Column style={{flexDirection: 'row', display: 'flex', width: 70}}>
          <QuickBt onClick={() => setModalEdit(!modalEdit)}><BsPen/></QuickBt>
          <QuickBt onClick={() => setModalOpen(!modalOpen)}>
            {!confirm && <BsTrash/>}
            {confirm && <BsCheck size={24} style={{marginTop: 2, marginLeft: -2,}}/>}
          </QuickBt>
        </Column>
        
      </View>
    
    </Card>
    
    <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={{
          content: {
            width: 380,  
            padding: 20,
            height: 380,
            margin: 'auto',
            borderRadius: 12,},
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}>
          <View className='column' >
            <Circle><BsTrash3 style={{margin: 'auto'}}/></Circle>
            <Title>Tem certeza que deseja excluir o imóvel #{item?.ID}?</Title>
            <Label>Seu imóvel vai ser enviado para a lixeira e será automaticamente removido após 30 dias.<br/><br/>Certifique-se de restaurar o imóvel antes desse prazo caso queira mantê-lo. Caso contrário, ele será permanentemente excluído.</Label>
           <Row>
            <ButtonPR onClick={handleDelete} style={{background: color.red, flexGrow: 1, color: color.light}}>
             {loading ? <Loader className='fadeUp' type="spin" size={18} color={color.light}/> : <span>EXCLUIR</span>}</ButtonPR>
            <Spacing/>
            <ButtonPR onClick={() => setModalOpen(false)} style={{background: color.green, flexGrow: 1, color: color.light}}>MANTER</ButtonPR>
            </Row>
        </View>
      </Modal>


      <Modal isOpen={modalEdit} onRequestClose={() => setModalEdit(false)} style={{
          content: {
            width: 900,  
            padding: 20,
            margin: 'auto',
            borderRadius: 12,},
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}>
          <Row style={{ width: '100%', marginBottom: 10,}}>
            <Column style={{background: color.primary, borderRadius: 12, flexGrow: 1,}}>
              <ListH3 data={item} />
            </Column>
            <Spacing/>
{a &&
            <Column style={{background: color.green+20, width: 400, borderRadius: 12, flexGrow: 1,}}>
              <Circle style={{background: color.green+40, color: color.green, width: 74, height: 74, fontSize: 32, marginBottom: -30, marginTop: 0,}}><AiOutlineEdit style={{margin: 'auto'}}/></Circle>
              
              <Column>
               <Label style={{textAlign: 'left', }}>
                <br></br>Lembre-se de revisar cuidadosamente todas as informações antes de salvar as alterações. 
                <br/><br/>Qualquer informação incorreta ou desatualizada pode prejudicar a venda ou locação do imóvel. Quando terminar de editar, clique em 'Salvar' para atualizar as informações do imóvel.
                </Label>
              </Column>
            </Column>
}
            </Row>
        <EditImobil data={item} user={user}/>
      </Modal>
      </>
  )
}




