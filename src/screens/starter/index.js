import React, { useContext , useState, useEffect, useRef} from 'react';


import Select from 'react-select' 

import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'

import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Title,
  Label,
  

  LogoX1,
  NavBt,
  Nav,
  HeadTitle,
  Section,
  HeadLabel,
  BtStart,
  BigImg,
  Resources,
  ResourceBt,
  Line,
  ResourceTitle,

  Banner,
} from './styles';

import { ButtonPR, Back } from '../../theme/global'

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom';
 
import logo from '../../assets/imgs/logo_h_light.png'
import Bairros from '../../api/bairros'

import './animation.css'

import IconPerson from "../../assets/imgs/icon_person.png"
import IconImobil from "../../assets/imgs/icon_imobil.png"

import Suff from '../../assets/imgs/suff.png'

import Loader from  '../../components/loader'
import registerFinishImage from '../../assets/imgs/registerFinishImage.png'
import { requestLogin, requestRegister } from '../../api/request/auth_requests';

import {API_URL} from '../../api/index'

import DocumentMeta from 'react-document-meta'

import logox1 from '../../assets/imgs/logo_blue.png'

const Starter = ( ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()

  const a = false;

  return (
  
    <Container> 
      <DocumentMeta title="Starter" />
     
      <Nav className='fadeUp'>
        <LogoX1 src={logox1}/>
        <View className='row ' style={{marginLeft: 120, marginRight: -100,}}>
          <NavBt>Visão Geral</NavBt>
          <NavBt>Recursos</NavBt>
          <NavBt>Planos</NavBt>
        </View>
        <View className='row'>
          <NavBt onClick={() => navigate('/auth')} style={{border: '1.4px solid #00000020', paddingTop: 6, paddingBottom: 6, paddingLeft: 25, paddingRight: 25, borderRadius: 5,}}>Entrar</NavBt>
          <NavBt style={{color: color.primary,}}>Começar de graça </NavBt>
          <BsArrowRight style={{marginTop: 20, marginLeft: -20, fontSize: 22, color: color.primary,}}/>
        </View>
      </Nav>

      <Section className='fadeUp'>
        <HeadTitle>
        A nova maneira de negociar imóveis
        </HeadTitle>
        <HeadLabel>
Simples. Prático. Confiavél. Deixa que a parte complicada a gente cuida, divulgue seu imóvel na nossa plataforma e veja seus clientes aumentando. Comece hoje mesmo de graça!
        </HeadLabel>

        <BtStart style={{width: 220, margin:'auto'}}>Começar de graça</BtStart>
        <BigImg/>
     
      </Section>


      <Resources>
        <ResourceBt>
          <View className='column'>
            <ResourceTitle>Público Alvo</ResourceTitle>
            <Label>Direcionamos os seus imóveis para o público que está buscando por ele, seja por preço, caracteristicas, local, entre outros.</Label>
          </View>
        </ResourceBt>
        <Line/>
        <ResourceBt>
          <View className='column'>
            <ResourceTitle>Público Alvo</ResourceTitle>
            <Label>Direcionamos os seus imóveis para o público que está buscando por ele, seja por preço, caracteristicas, local, entre outros.</Label>
          </View>
        </ResourceBt>


      </Resources>



      <Banner>


      </Banner>



    </Container>
  );
};

export default Starter;