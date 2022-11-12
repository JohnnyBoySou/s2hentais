import React, { useContext , useState, useEffect, } from 'react';



import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiQuestionMark } from 'react-icons/ri'


import { ThemeContext } from 'styled-components';
import {
  View, 
  Container,
  YourPlan,
  Title, 
  Line,
  ValueLabel,
  MiddleValueLabel,
  Input,
  Label,
  Card,
} from './styles';

import { ButtonPR, Back } from '../../theme/global'

import { useNavigate, useParams } from 'react-router-dom';

import './animation.css'
import Location from '../../components/location/index'


import DocumentMeta from 'react-document-meta'

const Components = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const navigate = useNavigate()


  const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? color.off : color.title,
       fontFamily: font.medium,
       fontSize: 18,
      }),
      control: () => ({
        border: '2px solid #00000020',
        display: 'flex',
        borderRadius: 5,  
        fontFamily: font.medium,
        flexDirection: 'row',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
      }),
      indicatorSeparator: () => ({
        width: 0,
        display: 'none'
      }),

      dropdownIndicator : () => ({
        color: "#000",
        fontSize: 28,
        marginRight: 5,
        marginLeft: -5,
      })
    }


  const a = false;

  return (
  
    <Container> 
      <DocumentMeta title="Components" />
      <View
        style={{justifyContent: 'space-between', paddingTop: 40, width: '60%',  margin: 'auto', display: 'flex', flexDirection: 'row'}}
      >

      <YourPlan>
        <View>
          <Title>Seu plano</Title>  
        </View>
        <Line/>
        <Title style={{fontSize: 20}}>Premium</Title>

        <View style={{flexDirection: 'row', display: 'flex'}}>
          <MiddleValueLabel>
            R$
          </MiddleValueLabel>
          <ValueLabel>
            19,99
          </ValueLabel>
        <MiddleValueLabel style={{marginTop: 20, marginLeft: 5,}}>/mês</MiddleValueLabel>
        </View>
        <Line/>

        <Card>
          <Title style={{fontSize: 20, textAlign: 'left',marginTop: 10, marginBottom: 10,}}>Cartão de Credito</Title>
          <Label>Número do Cartão</Label>
          <Input placeholder='Ex: 0000 0000 0000 0000'/>
          <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'column', display: 'flex'}}>
              <Label>MM/AA</Label>
              <Input style={{width: 80,}} placeholder='Ex: 01/10'/>
            </View>           
            
            <View style={{flexDirection: 'column', marginLeft: 10, display: 'flex'}}>
              <Label>CVV</Label>
              <Input style={{width: 80,}} placeholder='Ex: 105' />
            </View>           
          </View>
          <Label>Código Postal (CEP)</Label>
          <Input placeholder='Ex: 00000-000'/>
          <ButtonPR style={{width: '100%'}}>Atualizar</ButtonPR>
        </Card>

      </YourPlan>


      <Location/>

      </View>


    </Container>
  );
};

export default Components;