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
 

const Stats = ( props ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()


  const item = props?.item

  const a = false;


  return (
  
        <Card>
          <View className='row' style={{justifyContent: 'space-between'}}>
          <View className='column'>
            <CardTitle>Overview</CardTitle>
            <CardLabel>Statistics</CardLabel>
          </View>
          <Chip>Filters</Chip>

          </View>
            
            <View className='row'>
             <CardValue>{item.value1}</CardValue><Chip> <TfiStatsUp/> 12%</Chip>
             </View>
             <View className='row'>
              <CardLabel>Last month:<CardLabel style={{fontSize: 18, marginLeft: 6, fontFamily: font.medium, }}>{item.value2}</CardLabel></CardLabel>
              </View>
        </Card>

  );
};

export default Stats;