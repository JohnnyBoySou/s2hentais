import React, { useContext , useState, useEffect} from 'react';


import Modal from 'react-modal';
import { TextField } from '@mui/material';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Spacing,

  Sublabel,

  Title,
  Local,

  Preferences,
  Type,
  Amount,
  About,

  Input,

  Collections,
  CollectionsRow,
  CollectionsTitle,
  CollectionsCard,
  CollSpacing,
  
} from './styles';

import { ButtonBR, ButtonPR, Ripple } from '../../theme/global'
import banner from '../../assets/imgs/banner.png'
import line from '../../assets/imgs/line.png'



import { API_URL } from '../../api/index';

import Axios from 'axios';

const CollectionsDetails = () => {

  const { color } = useContext(ThemeContext)
  
  const [data, setData] = useState()
  const [perfil, setPerfil] = useState()
  const [preferences, setPreferences] = useState()
  const [loading, setLoading] = useState(true)
  const [loadingPrice, setLoadingPrice] = useState(true)
  const [loadingTudo, setLoadingTudo] = useState(true)

  
  const prefe = {'name': 'joao', 'valor_max': 2000, 'item1': 'Casa', 'alugar': true, 'comprar': false,}


  useEffect(() => {
    getDados(prefe)
  }, [])

  
  function getDados(valor){
      const headers = {
      'Accept': "application/json"
    }
    const max = 'valor_max=' + valor.valor_max
    const item = 'item1='+ valor.item1 
    setLoading(true)
    if(valor.alugar){
      Axios.get(`${API_URL}/feed/alugar?${item}&${max}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        console.log(response.data)
        setLoading(false)

    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      Axios.get(`${API_URL}/feed/comprar?${valor.item1}?${max}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        setLoading(false)
    }).catch(error => { 
        console.log(error)
    })
    }
  }

  


  function getPreferences(){
    try {
      const jsonValue =  localStorage.getItem('@preferences')
      if(jsonValue != null) {
        const valor = JSON.parse(jsonValue)
        setPreferences(valor)
        getDados(valor)
      }
    } catch(e) {
      console.log(e)
    }
  }







  return (
    <div>

<Collections>

<Title style={{marginLeft:0, fontSize: 32,}}>Coleções Populares</Title>
<CollectionsRow>


    <Ripple color="#fff">
    <CollectionsCard color={color.primary}>
        <CollectionsTitle>Para toda a familía</CollectionsTitle>
        <CollSpacing/>
    </CollectionsCard>
    </Ripple>

    <Ripple color="#fff">
    <CollectionsCard color="#37CB84">
        <CollectionsTitle>Ideal para seu pet</CollectionsTitle>
        <CollSpacing/>
    </CollectionsCard>
    </Ripple>

    
    <Ripple color="#fff">
    <CollectionsCard color="#FCA079">
        <CollectionsTitle>Perto de escola</CollectionsTitle>
        <CollSpacing/>
    </CollectionsCard>
    </Ripple>

    
    <Ripple color="#fff">
    <CollectionsCard color="#FF6161">
        <CollectionsTitle>Super mercado próximo</CollectionsTitle>
        <CollSpacing/>
    </CollectionsCard>
    </Ripple>



</CollectionsRow>


</Collections>
</div>
  );
};

export default CollectionsDetails;