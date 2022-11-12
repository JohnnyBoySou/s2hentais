import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Card,
  CardTitle,
  CardLabel,
  CardValue,
  List,
  Item,
  Icon,
  ItemLabel,

  CardImg,
  Chip,
  Line,
  Header,
} from './styles';

import { ButtonOffColor, Back, ButtonBR, ButtonPR } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi' 

import Switch from 'react-switch';


const Inovice = ( props ) => {

  const { color, font } = useContext(ThemeContext)
  const item = props.item[0]
  const navigate = useNavigate()

  const [visibility, setVisibility] = useState(true)

  const data = {
    name: "",
    desc: "", 
    value: "",
    list: "",

  }

  const infra = item.infraestrutura

  const a = false;

    const items = [
        {name: "Unlimited views"},
        {name: "Show destaques"},
        {name: "Special stats"},
        {name: "Contact profile"},
        {name: "Unlimited likes"},
    ]

  return (
  
        <Card>

          <Header>
            <CardTitle>Detalhes</CardTitle>
            <BsPatchCheck style={{fontSize: 24, paddingTop: 0,  color: color.primary, }}/>
         
          </Header>
          <Line style={{marginTop: 10,}}/>
            <CardImg src={item.imagem1}/>
            <View style={{flexDirection: 'row', marginTop: 20,  display: 'flex', justifyContent: 'space-between'}}>
            <CardTitle>
                {item.nome}
            </CardTitle>
            <Chip>R$ {item.valor_mensal}</Chip>
            </View>
            <CardLabel>
                {item.descricao}
            </CardLabel>
            <CardLabel style={{fontSize: 20, fontFamily: font.medium,}}>{item.qtd1} {item.item1}s, {item.qtd2} {item.item2}s e {item.area}m² </CardLabel>

            <Line/>

            <View style={{justifyContent: 'space-between', marginTop: 16, marginBottom: 10, flexDirection: 'row', display: 'flex',}}>
             
              <View className='column'>
                <CardTitle>Visibilidade</CardTitle>
                <CardLabel style={{fontSize: 14,}}>Ao desmarcar essa opção seu imóvel não aparecera mais na plataforma.</CardLabel>
              </View>
              <Switch 
                onChange={() => setVisibility(!visibility)}
                checked={visibility} checkedIcon={false} uncheckedIcon={false}
                height={14} width={30} handleDiameter={20}
                offColor="#D1D1D1" onColor="#8D9FFF"
                onHandleColor={color.primary} offHandleColor="#9C9C9C" 
               />
    
            </View>
            <Line/>
            <ButtonOffColor style={{marginBottom: 20, marginTop: 20,}}>
              <AiOutlineEdit style={{marginRight: 5, marginBottom: -2,}}/>
              Editar</ButtonOffColor>

        </Card>

  );
};

export default Inovice;