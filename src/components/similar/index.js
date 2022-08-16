import React, { useContext , useState, useEffect} from 'react';
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

import ListH2 from '../../structure/cards/list_h_2';
import { requestPreferences } from '../../api/request/index'
import { useNavigate } from 'react-router-dom';

const Similar = ( props ) => {
    const item = props?.data
    const { color } = useContext(ThemeContext)
    const quickItem = [item[1] , item[2] , item[3]]


  return (
    
    <Container>    
      <Line>
        <Title>Imóveis relacionados</Title>
      </Line> 
      <div style={{flexDirection: 'row', display: 'flex'}}>
      {quickItem?.map((quickItem) => 
      <ListH2 
      key={quickItem?.ID} data={quickItem}/> )}
      </div>
    </Container>
  );
};

export default Similar;