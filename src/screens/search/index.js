import React, { useContext , useState, useEffect, useRef} from 'react';


import Select from 'react-select' 

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Title,
  Hr,
  Right,
  Left,
  Line,
  Badget,
  Sublabel,
  
  Input,
  Rs,
  AnyButton,
  AnyColumn, 
  AnyIcon,
  AnyLabel,
  AnyTitle,

  Spacing,
  InputValue,

} from './styles';

import { ButtonBR, ButtonPR, Ripple, Back, Label } from '../../theme/global'

import { useParams } from 'react-router-dom';
 
import './animation.css'

import { IoBedOutline } from 'react-icons/io5'
import { BiBath } from 'react-icons/bi'

import { requestSearch } from '../../api/request/index'


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import ListH2 from '../../structure/cards/list_h_2';

import {Sk} from '../../structure/skeleton';
import Header from '../../components/header';
import QuickSearch from '../../components/quick_search';

import { FaMapMarkerAlt , FaSearch } from 'react-icons/fa'
import {BsCashCoin} from 'react-icons/bs'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import { BiSearch} from 'react-icons/bi'

import {MdBed} from 'react-icons/md'


const headers = {
  'Accept': "application/json"
}


const Search = ( ) => {



  const { color, font } = useContext(ThemeContext)
  const [data, setData] = useState([])
  const [loadGet, setLoadGet] = useState(true)
  const [like, setLike] = useState(false)
  
  const [item, setItem] =  useState()
  
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
    console.log(qr)
    if(qr === 'undefined'){
      return
    }else{get()}
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

  const a = false

  
  const valor = (Number(item?.valor_max)).toFixed(2).replace(".",",").replace(/\d(?=(\d{3})+\,)/g, '$&.')

  const [bairro, setBairro] = useState('Todos')

  
  const options = [
    { value: 'Casa', label: 'Casa' },
    { value: 'Apartamento', label: 'Apartamento' },
    { value: 'Sítio', label: 'Sítio' }
  ]

  const quartos = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: '+5' },
  ]

  
  const bairros = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Centro', label: 'Centro' },
    { value: 'Vila Lalau', label: 'Vila Lalau' },
    ]

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? color.light : color.title,
     fontFamily: font.medium,
    }),
    control: () => ({
      border: '0px solid #00000020',
     display: 'flex',
     borderRadius: 5,  
     fontFamily: font.medium,
     fontSize: 22,
      flexDirection: 'row',
      marginLeft: -6,
      marginTop: -6,
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
    <div>
    <Header />
    <Container> 

      <Line>
          <AnyButton>
            <AnyIcon><FaMapMarkerAlt/></AnyIcon>
            <AnyColumn>
              <AnyLabel>Bairro</AnyLabel>
              <Select styles={customStyles} options={bairros} defaultValue={bairros[0]} />
    
            </AnyColumn>
          </AnyButton>

        <Hr/>
          
          <AnyButton>
            <AnyIcon><BsCashCoin/></AnyIcon>
            <AnyColumn>
              <AnyLabel>Valor máximo</AnyLabel>
              <div style={{flexDirection: 'row', display: 'flex'}}>
                <AnyTitle style={{color: color.primary}}>R$</AnyTitle><InputValue/>
              </div>
            </AnyColumn>
          </AnyButton>  

          
        <Hr/>
          
          <AnyButton>
            <AnyIcon><TbAdjustmentsHorizontal/></AnyIcon>
            <AnyColumn>
              <AnyLabel>Tipo</AnyLabel>

              <Select styles={customStyles} options={options} defaultValue={options[0]} />
      
            </AnyColumn>
          </AnyButton>  

          
        <Hr/>


          <AnyButton>
            <AnyIcon><MdBed/></AnyIcon>
            <AnyColumn>
              <AnyLabel>Quartos</AnyLabel>
              
              <Select styles={customStyles} options={quartos} defaultValue={quartos[2]} />
      
            </AnyColumn>
          </AnyButton>  






            <ButtonPR className='br' style={{borderRadius:54, 
              borderWidth: 10,
              fontSize: 34,
              marginLeft: 30,
              marginRight: 30,
              width: 92, }}><BiSearch style={{marginTop: 10,}}/></ButtonPR>
        </Line>

       

      

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