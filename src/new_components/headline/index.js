import React, { useContext , useState, useEffect} from 'react';


import { API_URL } from "../../api/index"
import Axios from 'axios';
import { ThemeContext } from 'styled-components';
import { 

  Title,
  Main,

  Subtitle,
  Spacing,

  Left,
  Right,
  Image,
  Rectangle,

  Items,
  Item,
} from './styles';

import ListV from '../../structure/cards/list_v';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ButtonBR,   ButtonPR } from '../../theme/global'

const headers = {'Accept': "application/json"}

const HeadlineScreen = ( props ) => {
  const item = props?.data
  const { color } = useContext(ThemeContext)


 

return (
  <Main>
    <Left>
        <Title style={{fontSize: 42, margin: 0, }}>Apenas</Title>
        <Subtitle style={{fontSize: 72, color: color.primary }}>R$ 1.300,00</Subtitle>
        <Title style={{fontSize: 42, margin: 0, marginBottom: 40,}}>Por mês</Title>
        <Items>

          <Item>{item?.qtd1} {item?.item1}</Item>
          <Item>{item?.qtd2} {item?.item2}</Item>
        </Items>
        <ButtonPR style={{borderRadius: 100, width:200,}}>VER MAIS</ButtonPR>
       
    
    </Left>
    <Right>
      <Image src={item?.imagem1} />
      <Rectangle/>
    </Right>
</Main>
  );
};

export default HeadlineScreen;