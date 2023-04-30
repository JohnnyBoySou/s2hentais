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
} from './styles';

import { ButtonOffColor, Back, ButtonBR } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck, BsBuilding, BsBriefcase } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';
 

const Plans = ( props ) => {

  const { color, font } = useContext(ThemeContext)

  const type = props.type
  
  const navigate = useNavigate()

  const data = {
    name: "",
    desc: "", 
    value: "",
    list: "",

  }


  const a = false;

    const normal = [
        {name: "1 imóvel"},
        {name: "Estatísticas"},
        {name: "Suporte básico"},
    ]

    
    const premium = [
      {name: "5 imóveis"},
      {name: "Incluso nos Destaques"},
      {name: "Estatísticas especiais"},
      {name: "Suporte 24/7"},
      {name: "Acesso a Storys"},
      {name: "Página de Reviews"}
  ]

  
  const imobil = [
    {name: "+15 imóveis"},
    {name: "Incluso nos Destaques"},
    {name: "Estatísticas avançadas"},
    {name: "Suporte 24/7"},
    {name: "Acesso a Storys"},
    {name: "Página de Reviews"},
    {name: "Acesso a novas funções de teste"},
    {name: "Parceria com Fotógrafos"},
]

  return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', display: 'flex'}}>
          <Card className='fadeUp'>
            <BsPatchCheck style={{fontSize: 32, color:  color.primary, marginBottom: 20,}}/>
            <CardTitle>
                Inicial
            </CardTitle>
            <CardLabel>
                Funções básicas para você começar a vender
            </CardLabel>
            <CardValue>R$ 0,00</CardValue>
            <CardLabel style={{fontSize: 20, fontFamily: font.medium,}}>/ ∞</CardLabel>
    
            <ButtonOffColor style={{marginBottom: 20,}}>COMEÇAR DE GRAÇA</ButtonOffColor>
            <List>
               {normal.map(items => <Item> 
                    <Icon><BiCheck/></Icon>    
                    <ItemLabel>{items.name}</ItemLabel>
                </Item>)}
            </List>
          </Card>
          

          <Card className='fadeUp'>
            <BsBriefcase style={{fontSize: 32, color:  color.primary, marginBottom: 20,}}/>
            <CardTitle>
                Premium
            </CardTitle>
            <CardLabel>
                Funções avançadas para você alavancar suas conversões
            </CardLabel>
            <CardValue>R$ 49,99</CardValue>
            <CardLabel style={{fontSize: 20, fontFamily: font.medium,}}>/ por mês</CardLabel>
            
            <ButtonOffColor style={{marginBottom: 20,}}>Escolher plano</ButtonOffColor>

            <List>
               {premium.map(items => <Item> 
                    <Icon><BiCheck/></Icon>    
                    <ItemLabel>{items.name}</ItemLabel>
                </Item>)}
            </List>
          </Card>
          
            <Card className='fadeUp'>
            <BsBuilding style={{fontSize: 32, color:  color.primary, marginBottom: 20,}}/>
            <CardTitle>
                Imobiliárias
            </CardTitle>
            <CardLabel>
                Funções avançadas para seu negócio crescer
            </CardLabel>
            <CardValue>R$ 199,99</CardValue>
            <CardLabel style={{fontSize: 20, fontFamily: font.medium,}}>/ por mês</CardLabel>
            
            <ButtonOffColor style={{marginBottom: 20,}}>Entrar em contato</ButtonOffColor>

            <List>
               {imobil.map(items => <Item> 
                    <Icon><BiCheck/></Icon>    
                    <ItemLabel>{items.name}</ItemLabel>
                </Item>)}
            </List>
          </Card>
      
        </View>

  );
};

export default Plans;