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

  Chip,
} from './styles';
import { TfiStatsUp } from 'react-icons/tfi'
import { ButtonOffColor, Back, ButtonBR } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';
 

const Box = ( props ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()


  const item = props?.item
  const value = props?.item.value1
  const last_value = props?.item.value2


  const percentage = parseFloat((value - last_value) / last_value * 100).toFixed(0)



  const data = {
    name: "",
    value1: "", 
    value_lasted: "",
    list: "",

  }


  const a = false;

    const items = [
        {name: "Unlimited views"},
        {name: "Show destaques"},
        {name: "Special stats"},
        {name: "Contact profile"},
        {name: "Unlimited likes"},
    ]

  return (
  
        <Card className='fadeUp'>
          <CardTitle>
                {item.name}
            </CardTitle>
            <View className='row'>
             <CardValue>{item.value1}</CardValue><Chip> <TfiStatsUp style={{paddingRight: 5, paddingTop: 2,}}/> {percentage}%</Chip>
             </View>
             <View className='row'>
              <CardLabel>Último mês:<CardLabel style={{fontSize: 18, marginLeft: 6, fontFamily: font.medium, }}>{item.value2}</CardLabel></CardLabel>
              </View>
        </Card>

  );
};

export default Box;