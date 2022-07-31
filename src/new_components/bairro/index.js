
import React, { useState,  useContext,useEffect }  from 'react';
import { ThemeContext } from 'styled-components';
import { 
Title,
Img,
Label,
 } from './styles'

import Axios from 'axios';

import { API_URL } from '../../api/index';

import { FaMapMarkerAlt } from "react-icons/fa";


export default function Bairro({ route, ...props }){

  //const data = props?.data


  useEffect(() => {
    defalut()
  }, [])

  const open = props?.open
  const defalut = () => {
    if(open){
      setData(extradata)
    }
  }

  const [lengthCentro, setLengthCentro] = useState()
  const [lengthAmizade, setLengthAmizade] = useState()
  const [lengthLalau, setLengthLalau] = useState()


  async function getDados(valor){
   
     const headers = {
      'Accept': "application/json"
    }
    
    setLoading(true)
      await Axios.get(`${API_URL}/length/bairro?bairro=${valor}`, {
        headers: headers
    }).then(function (response) {
        
        setLoading(false)
        console.log(response.data.length)
        handleQtd(valor, response.data.length)

    }).catch(error => {
        console.log(error)
    })
  }


  function handleQtd (bairro, value) {
    if(bairro == "Centro"){
      setLengthCentro(value)
    }
  }



  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  
  const [data, setData] = useState([
    {nome: 'Centro', extensao: 13, imoveis: lengthCentro}, 
    {nome: 'Água Verde', extensao: 18, imoveis: lengthAmizade}, 
    {nome: 'Águas Claras', extensao: 22, imoveis:lengthLalau},
    {nome: 'Barra do Rio Cerro', extensao: 10, },
    
  ])

  const extradata = [ 
    {nome: 'Centro', extensao: 13, imoveis: lengthCentro}, 
    {nome: 'Água Verde', extensao: 18, imoveis: lengthAmizade}, 
    {nome: 'Águas Claras', extensao: 22, imoveis:lengthLalau},
    {nome: 'Barra do Rio Cerro', extensao: 10, },
    {nome: 'Barra do Rio Molha', extensao: 10, },
    {nome: 'Boa Vista', extensao: 10, },
    {nome: 'Braço do Ribeirão Cavalo', extensao: 10, },
    {nome: 'Centenário', extensao: 10, },
    {nome: 'Chico de Paulo', extensao: 10, },
    {nome: 'Czerniewicz', extensao: 10, },
    {nome: 'Estrada Nova', extensao: 10, },
    {nome: 'Ilha da Figueira', extensao: 10, },
    {nome: 'Jaraguá 84', extensao: 10, },
    {nome: 'Jaraguá 99', extensao: 10, },
    {nome: 'Jaraguá Esquerdo', extensao: 10, },
    {nome: 'João Pessoa', extensao: 10, },
    {nome: 'Nova Brasília', extensao: 10, },
    {nome: 'Nereu Ramos', extensao: 10, },
    {nome: 'Parque Malwee', extensao: 10, },
    {nome: 'Rau', extensao: 10, },
    {nome: 'Ribeirão Cavalo', extensao: 10, },
    {nome: 'Rio Cerro I', extensao: 10, },
    {nome: 'Rio Cerro II', extensao: 10, },
    {nome: 'Rio da Luz', extensao: 10, },
    {nome: 'Rio Molha', extensao: 10, },
    {nome: 'Santa Luzia', extensao: 10, },
    {nome: 'Santo Antônio', extensao: 10, },
    {nome: 'São Luís', extensao: 10, },
    {nome: 'Tifa Martins', extensao: 10, },
    {nome: 'Tifa Monos', extensao: 10, },
    {nome: 'Três Rios do Norte', extensao: 10, },
    {nome: 'Três Rios do Sul', extensao: 10, },
    {nome: 'Vieira', extensao: 10, },
    {nome: 'Vila Baependi', extensao: 10, },
    {nome: 'Vila Lalau', extensao: 10, },
    {nome: 'Vila Lenzi', extensao: 10, },
    {nome: 'Vila Nova', extensao: 10, },
  ]
      
  const RenderItem = ({ item }) => (
    <button style={{marginBottom: 16, background: color.background, borderRadius: 8, width: 300, border: '2px solid #00000020', display: 'flex', flexDirection: 'row'}}>
    <div style={{flexDirection: 'row', justifyContent: 'space-between',}}>

      <div style={{flexDirection: 'row', display: 'flex'}}>
        <Img><FaMapMarkerAlt size={28} color="#FFF" style={{textAlign: 'center', marginTop: -4,}}/></Img>
        <div style={{justifyContent: 'center', marginLeft: 16, alignContent: 'center'}}>
          <Title>{item.nome}</Title>
          <Label>{item.extensao} km de extensão</Label>
        </div>
      </div>
     
    </div>
  </button>
  ) 
  
  const [active, setActive] = useState(false)
  const more = () => {
    setActive(!active)
    const data = [
        {nome: 'Centro', extensao: 13, imoveis: 98}, 
        {nome: 'Amizade', extensao: 18, imoveis: 75}, 
        {nome: 'Vila Lalau', extensao: 22, imoveis: 49} 
      ]
    if(active){
      setData(data)
    }else{setData(extradata) }

  }


  
  const a = false;

  
  return(
    
    <div>{data.map((data) => <RenderItem item={data}/> )}
</div>
    
  )
}




