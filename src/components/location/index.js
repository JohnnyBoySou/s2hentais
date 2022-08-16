import React, { useContext , useState, } from 'react';
import { Link } from 'react-router-dom';


import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Line,
  Title,
  Hr,
  City,
  CityLabel,
  CityTitle,
  CityImoveis,

} from './styles';
import { ButtonPR, Ripple } from '../../theme/global';

const Location = ( props ) => {

    const { color } = useContext(ThemeContext)

    const citys = [
        {
        id: 1, 
        name: 'Jaraguá do Sul',
        population: '232 mil',
        imobil: 42, 
        imoveis: 320,
        },
        {
        id: 2, 
        name: 'Joinville',
        population: '1.4 mi',
        imobil: 78, 
        imoveis: 892,
        },
        {
        id: 3, 
        name: 'Florianópolis',
        population: '610 mil',
        imobil: 58, 
        imoveis: 546,
        },
]

  return (
    
    <Container> 

        <Line>
            <Title>Localização</Title>
            <ButtonPR style={{borderRadius: 24, fontSize: 14}}>Localização atual</ButtonPR>
        </Line>
        <Hr/>

        {citys.map((citys)  => 
        <City key={citys.id}>
            <div style={{flexDirection: 'column', display: 'flex'}}>
            <CityTitle>{citys.name}</CityTitle>
            <CityLabel>{citys.population} habitantes •  {citys.imobil} imóbiliarias</CityLabel>
            </div>
            <CityImoveis>{citys.imoveis}</CityImoveis>
        </City>)}



    </Container>
  );
};

export default Location;