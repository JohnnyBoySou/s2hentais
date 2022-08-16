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


const AddImobiil = () => {

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

        Add imobil
    
    </Container>
  );
};

export default AddImobiil;