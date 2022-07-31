import React, { useContext , useState, useEffect} from 'react';


import { API_URL } from "../../api/index"
import Axios from 'axios';
import Modal from 'react-modal';
import Busca from '../../assets/imgs/busca.png'

import { ThemeContext } from 'styled-components';
import { 
  Container, 

  Sublabel,

  Title,
  Local,

  Preferences,
  Type,
  Amount,
  About,
  Input,

  Select,
  SelectLabel,
  Spacing,
  Spacing1,
  Subheadline,

  
  Line,
  Main,
  Finish,
  Tag,

  Subtitle,
  
} from './styles';

import { styleModal } from './styleModal'

import { ButtonBR, ButtonPR, Ripple } from '../../theme/global'

import RowListH from '../../structure/rows/list_h';

import ListH from '../../structure/cards/list_h';
import Bairro from '../../new_components/bairro';
import DreamsScreen from '../../new_components/dreams';
import Headline from '../../new_components/headline';


const headers = {'Accept': "application/json"}
const SplashScreen = () => {

  const { color } = useContext(ThemeContext)

  const [prefe, setPrefe] = useState([])
  const [loadGet, setLoadGet] = useState(false)
  const [data, setData] = useState([])

  
  
  const getPreferences = () => {
    console.log('getpreferences')
    setLoadGet(true)
    try{
      const JSONA = localStorage.getItem('@preferences')
      const JsonString = JSON.parse(JSONA)
      if(JsonString != undefined){
        setPrefe(JsonString)
        setTimeout(() => {
          setLoadGet(false)
          
        }, 1000);} 
      getData(JsonString)
      }
    catch(e){console.log(e)}
  }

  function getData( params ){
    console.log('getData')
    const valor = params
    const max = 'valor_max=' + valor.valor_max
    const item =  valor.item1 

    if(valor.alugar){
      Axios.get(`${API_URL}/feed/alugar?${item}${max}`, {headers: headers}).then(function (response) {
        setData(response.data)
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      Axios.get(`${API_URL}/feed/comprar?${item}${max}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)

    }).catch(error => { 
        console.log(error)
    })
    }
  }





    


    const [modalIsOpen, setIsOpen] = useState(false);
    const  openModal = () => {setIsOpen(true)}
    const  closeModal = () => {setIsOpen(false)}
    const a = false



   

    const nextEnter = ( event ) => {if(event.key === 'Enter'){}}

    useEffect(() => {
      getPreferences()
    }, [])
    



return (
  <Main>

  
    <Container>

    <div style={{maxWidth: 500,}}>
      <Title style={{fontSize: 36, lineHeight: '38px'}}>O que encontramos <br/>para você!</Title>
      <Sublabel style={{fontSize: 18,}}>Com base em suas preferências</Sublabel>
    </div>

    </Container>




<div style={{padding: 60, paddingTop: 0, paddingRight: 40, flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
    
</div>






</Main>
  );
};

export default SplashScreen;