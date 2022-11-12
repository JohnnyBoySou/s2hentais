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
  Collections,

  BtAction,
  
} from './styles';

import { styleModal } from './styleModal'

import { ButtonBR, ButtonPR, Ripple } from '../../theme/global'

import RowListH from '../../structure/rows/list_h';

import Select from 'react-select' 

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


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ForYou from '../../assets/imgs/for_you.png'

const headers = {'Accept': "application/json"}



const HomeScreen = () => {

  const { color, font } = useContext(ThemeContext)

  const [prefe, setPrefe] = useState([])
  const [loadGet, setLoadGet] = useState(false)
  const [data, setData] = useState([])
  const [dataPopular, setDataPopular] = useState([])
  const [dataForYou, setDataForYou] = useState([])


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
      getDataPopular(JsonString)
      }
    catch(e){console.log(e)}
  }

  function getData( params ){

    const valor = params
    const max = 'valor_max=' + valor.valor_max
    const item =  valor.item1 

    if(valor.alugar){
      Axios.get(`${API_URL}/feed/alugar?${item}${max}`, {headers: headers}).then(function (response) {
        setDataForYou(response.data)
        setData(response.data)
        setLoadGet(false)

    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      Axios.get(`${API_URL}/feed/comprar?${item}${max}`, {
        headers: headers
    }).then(function (response) {
        setDataForYou(response.data)
        setData(response.data)
        setLoadGet(false)
    }).catch(error => { 
        console.log(error)
    })
    }
  }

  
  function getDataPopular( params ){
    setLoadGet(true)
    const valor = params
    const max = 'valor_max=' + valor.valor_max
    const item =  valor.item1 

    if(dataPopular.length > 1){
      setLoadGet(false)
      return
    }else{
      

    if(valor.alugar){
      Axios.get(`${API_URL}/feed/popular/alugar?${item}${max}`, {headers: headers}).then(function (response) {
        setDataPopular(response.data)
        setLoadGet(false)
        setData(dataPopular)
    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      Axios.get(`${API_URL}/feed/popular/comprar?${item}${max}`, {
        headers: headers
    }).then(function (response) {
        setDataPopular(response.data)
        setLoadGet(false)
        setData(dataPopular)
    }).catch(error => { 
        console.log(error)
    })
    }
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


    const [forYou, setForYou] = useState(true)
    const [popular, setPopular] = useState(false)


    const handleForYou = ( ) => {
      setData(dataForYou)
      setPopular(false)
      setForYou(true)
    }

    const handlePopular = ( ) => {
      setData(dataPopular) 
      setPopular(true)
      setForYou(false)
    }

    
    const options = [
      { value: 'Popular', label: 'Popular' },
      { value: 'Recentes', label: 'Recentes' },
      { value: 'Aleatorio', label: 'Aleatório' }
    ]

    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? color.light : color.title,
       fontFamily: font.medium,
      }),
      control: () => ({
        border: '1px solid #00000020',
        display: 'flex',
        borderRadius: 5,  
        fontFamily: font.medium,
        fontSize: 18,
        flexDirection: 'row'
      }),
      indicatorSeparator: () => ({
        width: 0,
        display: 'none'
      }),

      dropdownIndicator : () => ({
        color: "#000",
        fontSize: 28,
        marginRight: 5,
        marginLeft: -5,
      })
    }
    



return (
  <Main>
  <Header />
    

    <Container>

    <Carousel showThumbs={false} className='caroussel'  style={{height: 440, borderRadius: 24,}} showArrows={true} showStatus={false} showIndicators={false}>
      <Headere style={{height: 440}}>
        <div>
        <Title style={{fontSize: 64, lineHeight: '62px', color: color.light, marginBottom: 20, marginTop: 30,  textAlign: 'left'}}>
          O que encontramos <br/>para você! </Title>
        <Sublabel style={{fontSize: 24,  color: color.light, textAlign: 'left', marginLeft: -230}}>Com base em suas <Link style={{color: color.light}} to="../preferences">Preferências.</Link></Sublabel>
        </div>
        <Image style={{width: 350,}} src={Character1}/>
      </Headere>

      <Collections style={{height: 440}}>
        <div>
        <Title style={{fontSize: 64, textAlign: 'left', lineHeight: '62px', color: color.light, marginBottom: 20,}}>
          Escolhidos especialmentes para você! </Title>
        <Sublabel style={{fontSize: 24,  textAlign: 'left', marginLeft: -160,  color: color.light,}}>
          Confira na opção <Link style={{color: color.light,}} to="../app/for_you">Para você.</Link></Sublabel>
        </div>
        <Image  src={ForYou} style={{width: 550, marginTop: -30, height: 280}}/>
      </Collections>

    </Carousel>





    <ActionButtons>
      <div style={{flexDirection: 'row', display: 'flex'}}>
     {forYou && <ButtonPR onClick={handleForYou} style={{borderRadius: 50, width: 160,  background: color.primary,}}>PARA VOCÊ</ButtonPR>}
     {popular &&  <ButtonPR onClick={handlePopular} style={{borderRadius: 50, width: 160, background: color.primary,}}>POPULAR</ButtonPR>}
     
      <LineV/>
      {!forYou && <ButtonPR onClick={handleForYou} style={{borderRadius: 50, width: 160, background: color.secundary,}}>PARA VOCÊ</ButtonPR>}
      {!popular &&  <ButtonPR onClick={handlePopular} style={{borderRadius: 50, width: 160, background: color.secundary,}}>POPULAR</ButtonPR>}
      <Spacing2/>
      
      </div>
      <div>
      <div style={{fontFamily: font.book, display: 'flex', marginTop: 6,}}>
          <span style={{marginTop: 6, marginRight: 10, fontSize: 18}}>Ordernar por</span> 
          <Select styles={customStyles} options={options} defaultValue={options[0]} />
        </div>
      </div>

    </ActionButtons>

    <ActionButtons style={{borderBottom: '2px solid #00000020', justifyContent: 'flex-start'}}>
      <BtAction onClick={handlePopular} select={popular}>Popular</BtAction>
      <BtAction onClick={handleForYou} select={forYou}>Para você</BtAction>

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
      
    {data.map((data) => <ListH4 className="fadeIn" key={data.ID} data={data}/> )}
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