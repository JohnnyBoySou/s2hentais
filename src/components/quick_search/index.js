import React, { useContext , useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Line,
  Hr,
  AnyButton,
  AnyLabel,
  AnyTitle,
  AnyColumn,
  AnyIcon,
} from './styles';
import { ButtonPR } from '../../theme/global';
import './animation.css'

import { FaMapMarkerAlt , FaSearch } from 'react-icons/fa'
import {BsCashCoin} from 'react-icons/bs'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import { BiSearch} from 'react-icons/bi'

const QuickSearch = ( props ) => {

    const { color } = useContext(ThemeContext)
    const [item, setItem] =  useState()
    const [load, setLoad] =  useState()

    function get(){
      setLoad(true)
      try {
        const JSONstring =  JSON.parse(localStorage.getItem('@preferences'))
        setItem(JSONstring)
        setLoad(false)
      } catch (e) {
        console.log(e)
      }
    }

    const valor_max = Number

  const valor = (Number(item?.valor_max)).toFixed(2).replace(".",",").replace(/\d(?=(\d{3})+\,)/g, '$&.')



    
  //const preferences = {'name': name, 'valor_max': valor_max, 'item1': item1, 'itemview': itemView, 'alugar': aluguel, 'comprar': comprar,}

  useEffect(() => {
    get()
  }, [])
  


  return (
    
    <Container> 
        <Line>
          <AnyButton>
            <AnyIcon><FaMapMarkerAlt/></AnyIcon>
            <AnyColumn>
              <AnyLabel>Localização</AnyLabel>
              <AnyTitle>{item?.location}</AnyTitle>
            </AnyColumn>
          </AnyButton>

        <Hr/>
          
          <AnyButton>
            <AnyIcon><BsCashCoin/></AnyIcon>
            <AnyColumn>
              <AnyLabel>Valor máximo</AnyLabel>
              <AnyTitle>R$ {valor}</AnyTitle>
            </AnyColumn>
          </AnyButton>  

          
        <Hr/>
          
          <AnyButton>
            <AnyIcon><TbAdjustmentsHorizontal/></AnyIcon>
            <AnyColumn>
              <AnyLabel>Tipo</AnyLabel>
              <AnyTitle>{item?.itemview}</AnyTitle>
            </AnyColumn>
          </AnyButton>  






            <ButtonPR className='br' style={{borderRadius:54, 
              borderWidth: 10,
              fontSize: 34,
              marginLeft: 30,
              marginRight: 30,
              width: 92, }}><BiSearch style={{marginTop: 10,}}/></ButtonPR>
        </Line>

       



    </Container>
  );
};

export default QuickSearch;