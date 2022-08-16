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
  Headere,
  LineV,

  ActionButtons,

  Lenght,

  Image,
  Spacing2,
  
} from './styles';

import { styleModal } from './styleModal'

import { ButtonBR, ButtonPR, Ripple } from '../../theme/global'

import RowListH from '../../structure/rows/list_h';


import ListH from '../../structure/cards/list_h';
import Bairro from '../../new_components/bairro';
import DreamsScreen from '../../new_components/dreams';
import Headline from '../../new_components/headline';
import { Link } from 'react-router-dom';
import ListV from '../../structure/cards/list_v';
import ListH2 from '../../structure/cards/list_h_2';
import ListH4 from '../../structure/cards/list_h_4';

import BannerPhone from '../../new_components/banner_phone';

import Character1 from '../../assets/imgs/character1.png'
import {Sk} from '../../structure/skeleton';
import Header from '../../components/header';

import Location from '../../components/location';
import QuickSearch from '../../components/quick_search'

const headers = {'Accept': "application/json"}



const HomeScreen = () => {

  const { color } = useContext(ThemeContext)

  const [prefe, setPrefe] = useState([])
  const [loadGet, setLoadGet] = useState(false)
  const [data, setData] = useState([])

  
  
  const getPreferences = () => {
    setLoadGet(true)
    try{
      const JSONA = localStorage.getItem('@preferences')
      const JsonString = JSON.parse(JSONA)
      if(JsonString != undefined){
        setPrefe(JsonString)
        setTimeout(() => {
          
        }, 1000);} 
      getData(JsonString)
      }
    catch(e){console.log(e)}
  }

  function getData( params ){

    const valor = params
    const max = 'valor_max=' + valor.valor_max
    const item =  valor.item1 

    if(valor.alugar){
      Axios.get(`${API_URL}/feed/alugar?${item}${max}`, {headers: headers}).then(function (response) {
        setData(response.data)
        setLoadGet(false)

    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      Axios.get(`${API_URL}/feed/comprar?${item}${max}`, {
        headers: headers
    }).then(function (response) {
        setData(response.data)
        setLoadGet(false)
    }).catch(error => { 
        console.log(error)
    })
    }
  }





    


    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {setIsOpen(true)}
    const closeModal = () => {setIsOpen(false)}
    const a = false



   

    const nextEnter = ( event ) => {if(event.key === 'Enter'){}}

    useEffect(() => {
      getPreferences()
    }, [])
    



return (
  <Main>
  <Header />
    

    <Container>

      


    <Headere style={{}}>
      <div>
      <Title style={{fontSize: 64, lineHeight: '62px', color: color.light, marginBottom: 20,}}>
        O que encontramos <br/>para você! </Title>
      <Sublabel style={{fontSize: 24,  color: color.light,}}>Com base em suas <Link style={{color: color.light}} to="../preferences">Preferências.</Link></Sublabel>
      </div>
      <Image src={Character1}/>
   
    </Headere>



    <ActionButtons>
      <ButtonPR style={{borderRadius: 50, width: 160,}}>POPULAR</ButtonPR>
      <LineV/>
      <ButtonBR>RECENTES</ButtonBR>
      <Spacing2/>
      <ButtonBR>PARA PETS 🐶</ButtonBR>


    </ActionButtons>

    </Container>





    { loadGet && <div style={{padding: 65, paddingTop: 0, 
        display: 'flex',
        flexWrap: 'wrap', 
        flexDirection: 'row',  
      }}>
      <Sk/>
      <Sk/>
      <Sk/>
      <Sk/>
      <Sk/>
      <Sk/>
    </div>}




  {!loadGet && <div style={{padding: 65, paddingTop: 0, 
    display: 'flex',
    flexWrap: 'wrap', 
    flexDirection: 'row',  
  }}>
      
    {data.map((data) => <ListH4 key={data.ID} data={data}/> )}
  </div>}


<DreamsScreen/>


<BannerPhone/>












<Modal isOpen={modalIsOpen}
        closeTimeoutMS={300}
        onRequestClose={() => setIsOpen(false)}
        style={styleModal}>

<img src={Busca} style={{width: '100%', marginBottom: 20,}}/>


            <Main>

<Title style={{textAlign: 'center'}}>O que você está buscando?</Title>
      <div>
        </div>



</Main>
</Modal>
</Main>
  );
};

export default HomeScreen;