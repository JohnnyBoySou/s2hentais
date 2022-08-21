import React, { useContext , useState, useEffect, useRef} from 'react';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Title,
  Row,
  Like,
  BtAction,
  Spacing,
  ImgLarge, 
  ImgSmall,
  Nav,
  Gallery,
  CardInfo,

  Column,
  Section,
  Code,
  Hr,
  Value,
  ValueLabel,
  ValueTitle,
  Tax,
  TaxLabel,
  TaxLi,

  Address,
  Description,
  Right,
  Left,
  Line,
  Badget,
  Sublabel,
  
  Input,
  Rs,
} from './styles';
import vid from '../../assets/imgs/loader.gif'

import { ButtonBR, ButtonPR, Ripple, Back, Label } from '../../theme/global'

import { useParams } from 'react-router-dom';
 

import { IoBedOutline } from 'react-icons/io5'
import { BiBath } from 'react-icons/bi'

import { requestSearch } from '../../api/request/index'


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import ListH2 from '../../structure/cards/list_h_2';

import {Sk} from '../../structure/skeleton';
import Header from '../../components/header';
import QuickSearch from '../../components/quick_search';



const headers = {
  'Accept': "application/json"
}


const Search = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const [data, setData] = useState([])
  const [loadGet, setLoadGet] = useState(true)
  const [like, setLike] = useState(false)
  
  const { qr } = useParams();

  const lengthData = data?.length


  function get(){
    setLoadGet(true)
    requestSearch(qr).then(
      function(item) {
        console.log(item)
        console.log(data.length)
        setData(item)
        setLoadGet(false)
      })
  }

  useEffect(() => {
    get()
  }, [qr])

  const lt = 22
  
  const [valor_max, setValorMax] = useState(500)
  


  const handleValorMax = (event) => {
    setValorMax(event.target.value);
  };

  
  const handleBath = (e) => {
    setBath(e.target.value);
  };


  const handleRoom = (e) => {
    setRoom(e.target.value);
  };

  
  const handleSize = (e) => {
    setSize(e.target.value);
  };


  const [bath, setBath] = useState(2)
  const [room, setRoom] = useState(3)
  const [size, setSize] = useState(120)


  return (
    <div>
    <Header />
    <Container>

      <QuickSearch/>
      
  <div style={{flexDirection: 'row', display: 'flex'}}>

    <Left>
      <div style={{display: 'flex', paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between',}}>
        <Title style={{fontSize: 24, marginLeft: 8, }}>Filtros</Title>
        <Badget style={{marginBottom: 20,}}>5 aplicados</Badget>
      </div>
      <Line/>
      <div style={{padding: 20,}}>

        <Sublabel>Valor</Sublabel>
        <div style={{flexDirection: 'row', display: 'flex'}}>
            <Rs>R$</Rs>
          <Input type="number" style={{marginLeft: 6, marginBottom: 25, paddingBottom: 0, fontSize: 36, }} value={valor_max} onChange={handleValorMax} placeholder="1200"/>
        </div>

        <Sublabel>Quartos</Sublabel>

        <div style={{flexDirection: 'row', display: 'flex'}}>
          <div style={{flexDirection: 'row', display: 'flex'}}>
              <Rs><IoBedOutline style={{marginTop: 5,}}/></Rs>
            <Input type="number" style={{marginLeft: 6,  marginBottom: 25, paddingBottom: 0, fontSize: 36, }} value={room} onChange={handleRoom} placeholder="1200"/>
          </div>

          <Spacing style={{width: 60,}}/>

          <div style={{flexDirection: 'row', display: 'flex'}}>
              <Rs><BiBath style={{marginTop: 5,}}/></Rs>
            <Input type="number" style={{marginLeft: 6,  marginBottom: 25, paddingBottom: 0, fontSize: 36, }} value={bath} onChange={handleBath} placeholder="1200"/>
          </div>
        </div>

        <div style={{flexDirection: 'row', display: 'flex', marginTop: -10,}}>
              <Rs><BiBath style={{marginTop: 5,}}/></Rs>
            <Input type="number" style={{marginLeft: 6,  marginBottom: 25, paddingBottom: 0, fontSize: 36, }} value={size} onChange={handleSize} placeholder="2"/>
          </div>

        <ButtonPR style={{width: "100%"}}>PESQUISAR</ButtonPR>
      </div>




    </Left>
    <Right>
      <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row'  }}>
        <Label style={{color: color.title, fontSize: 24,}}>Encontramos <span style={{fontFamily: font.bold,}}>{lengthData}</span> imóveis.</Label>
        <Label style={{color: color.title, fontSize: 18, marginTop: 8}}>Mostrando  <span style={{fontFamily: font.bold,}}>10</span> de <span style={{fontFamily: font.bold,}}>{lengthData}</span></Label>
      </div>


      {!loadGet && <div>{data.map((data) => <ListH2 key={data.ID} data={data}/> )}</div>}

      {loadGet && <div style={{ paddingTop: 20, 
        marginLeft: -10,
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

      <ButtonPR style={{ display: 'flex', margin: 'auto', borderRadius: 100,}}>Ver mais</ButtonPR>
    </Right>
    
    </div>




















  <div style={{padding: 65, paddingTop: 0, 
    display: 'flex',
    flexWrap: 'wrap', 
    flexDirection: 'row',  
  }}>
      </div>



    </Container>
    </div>
  );
};

export default Search;