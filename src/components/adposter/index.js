import React, { useContext , useState, } from 'react';
import { Link } from 'react-router-dom';


import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Line,
  Title,
  Label,
  Hr,


} from './styles';
import { ButtonPR, Ripple } from '../../theme/global';

import adimg from '../../assets/imgs/anunciar.png'

const AdPoster = ( props ) => {

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
      <div style={{width: "40%", justifyContent: 'center', display: 'flex'}}>
        <Line>
            <Title>Anuncie seu imóvel com a gente!</Title>
            <Label>Entre em contato com uma das imóbiliarias parceiras e anuncie seu imóvel para milhares de pessoas.</Label>
            <ButtonPR style={{borderRadius: 24, width: 300,
              fontSize: 18, marginTop:6,}}>CONHECER IMÓBILIARIAS</ButtonPR>
        </Line>
        </div>
        <div style={{width: "60%"}}>
          <img src={adimg}/>
        </div>
    </Container>
  );
};

export default AdPoster;