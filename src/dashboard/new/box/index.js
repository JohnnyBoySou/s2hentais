import React, { useContext, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
  Card,
  CardTitle,
  CardLabel,
  CardValue,
  
  Chip,
} from './styles';
import { TfiStatsUp } from 'react-icons/tfi'
import { FormattedNumber } from './../../../utils/formated';
 

const Box = ( props ) => {
  const { font } = useContext(ThemeContext)
  const item = props?.item
  const value = props?.item.value1
  const last_value = props?.item.value2
  const percentage = parseFloat((value - last_value) / last_value * 100).toFixed(0)

  return (
  
        <Card className='fadeUp'>
          <CardTitle>
                {item.name}
            </CardTitle>
            <View className='row'>
             <CardValue><FormattedNumber number={item.value1} /></CardValue><Chip> <TfiStatsUp style={{paddingRight: 5, paddingTop: 2,}}/> {percentage}%</Chip>
             </View>
             <View className='row'> 
              <CardLabel>Último mês:<CardLabel style={{fontSize: 18, marginLeft: 6, fontFamily: font.medium, }}> <FormattedNumber  number={item.value2} /></CardLabel></CardLabel>
              </View>
        </Card>

  );
};

export default Box;