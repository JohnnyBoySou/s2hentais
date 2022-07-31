import React, { useContext , useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Spacing,
  Title,
  Label,

  Right,
  Left,
  Hr,
  Tag,
  Cords,
  ZoomIn,
  ZoomOut,
} from './styles';
import { Ripple } from '../../theme/global';

const QuickMap = ( props ) => {
    const location = props.location;
    const { color, title } = useContext(ThemeContext)
    const lat = location?.lat
    const long = location?.long
  

  return (
    
    <Container> 
        <Left>
        <div style={{padding: 32, }}>
            <Label>Este imóvel é</Label>
            <Title>Bem Localizado!</Title>
        </div>
        <Hr/>
             <div style={{padding:12, paddingTop: 12, display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
            <Tag>Escola</Tag>
        </div>

        </Left>
        <Spacing/>
        <Right>
            <div style={{justifyContent: 'space-between', paddingRight: 20, display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 20,}}>
                <Cords>Abrir Mapa &#127758;</Cords>
                
                <div>
                    <ZoomIn>+</ZoomIn>
                    <ZoomOut>-</ZoomOut>
                </div>
            </div>
        </Right>
    </Container>
  );
};

export default QuickMap;