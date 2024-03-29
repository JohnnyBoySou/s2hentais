import React, { useContext , useState, useEffect, useRef} from 'react';


import Select from 'react-select' 

import { FiCheck, FiTarget } from 'react-icons/fi'
import { BsPeople } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsArrowRight, BsGlobe } from 'react-icons/bs'
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
  Footer,
  Link,
  TitleLink,
  Tips,
  TipsImg,

  Planos,
} from './styles';

import { ButtonPR, Back, ButtonBR, Row, Column } from '../../theme/global'

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom';
 
import logo from '../../assets/imgs/logo_h_light.png'
import Bairros from '../../api/bairros'
import Plans from '../../dashboard/new/plans';
import './animation.css'

import IconPerson from "../../assets/imgs/icon_person.png"
import IconImobil from "../../assets/imgs/icon_imobil.png"

import Suff from '../../assets/imgs/suff.png'

import Loader from  '../../components/loader'
import registerFinishImage from '../../assets/imgs/registerFinishImage.png'
import { requestLogin, requestRegister } from '../../api/request/auth_requests';

import {API_URL} from '../../api/index'

import DocumentMeta from 'react-document-meta'
import back_starter from '../../assets/imgs/back_starter2.png'

import logox1 from '../../assets/imgs/logo_blue.png'
import Phone2 from '../../assets/imgs/phone2.png'

const Starter = ( ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()

  const a = false;
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? color.light : color.title,
     fontFamily: font.medium,
    }),
    control: () => ({
      border: '1px solid #00000020',
     display: 'flex',
     borderRadius: 5,  
     fontFamily: font.medium,
      flexDirection: 'row'
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

  const language = [
    { value: 'portugues', label: 'Português BR' },
    { value: 'english', label: 'English' },
  ]

  function scrollToElement(element, behavior = 'smooth') {
    element.scrollIntoView({ behavior });
  }
  
  return (
  
    <Container> 
      <DocumentMeta title="Starter" />
     
      <Nav className='fadeUp'>
        <Column style={{background: 'none', justifyContent: 'center', marginLeft: -100, marginRight: 100,}} >
          <LogoX1 src={logox1}/>
        </Column>
        <Row style={{justifyContent: 'center', background: 'none', marginLeft: 50, marginRight: 50,}}>
          <a href="#planos" onClick={() => scrollToElement(document.getElementById('visao'))}><NavBt>Visão Geral</NavBt></a>
          <a href="#planos" onClick={() => scrollToElement(document.getElementById('recursos'))}><NavBt>Recursos</NavBt></a>
          <a href="#planos" onClick={() => scrollToElement(document.getElementById('planos'))}> <NavBt>Planos</NavBt></a>
        </Row>
        
        <Row style={{background: 'none', marginRight: -200,}}>
          <NavBt onClick={() => navigate('/auth/login')} style={{border: '1.4px solid #00000020', background: color.light, paddingTop: 6, paddingBottom: 6, paddingLeft: 25, paddingRight: 25, borderRadius: 5,}}>Entrar</NavBt>
         <NavBt onClick={() => navigate('/auth/register')} style={{color: color.primary, }}>Começar de graça </NavBt>
          <BsArrowRight style={{marginTop: 20, marginLeft: -20, fontSize: 22, color: color.primary,}}/>
        </Row>
      
      </Nav>






      <Section className='fadeUp'>
        <HeadTitle>
        A nova maneira de negociar imóveis
        </HeadTitle>
        <HeadLabel>
Simples. Prático. Confiavél. Deixa que a parte complicada a gente cuida, divulgue seu imóvel na nossa plataforma e veja seus clientes aumentando. Comece hoje mesmo de graça!
        </HeadLabel>

        <BtStart onClick={() => navigate('/auth/register')}  style={{width: 220, margin:'auto'}}>Começar de graça</BtStart>
        <BigImg src={back_starter}/>
     
      </Section>


      <Resources>
        <ResourceBt>

          <FiTarget style={{fontSize: 182, marginTop: -30, marginLeft: -20, marginRight: 20, color: color.primary}}/>
          <View className='column'>
            <ResourceTitle>Público Alvo</ResourceTitle>
            <Label>Direcionamos os seus imóveis para o público que está buscando por ele, seja por preço, caracteristicas, local, entre outros.</Label>
          </View>
        </ResourceBt>
        <Line/>
        <ResourceBt>
          <BsPeople style={{fontSize: 182, marginTop: -30, marginLeft: 20, marginRight: 20, color: color.primary}}/>
          <View className='column'>
            <ResourceTitle>Público Alvo</ResourceTitle>
            <Label>Direcionamos os seus imóveis para o público que está buscando por ele, seja por preço, caracteristicas, local, entre outros.</Label>
          </View>
        </ResourceBt>


      </Resources>

      <Tips>
      <View style={{width: "35%",}}>
      <TipsImg src={Phone2}/>
      </View>
      <View className='column' style={{width: "55%", marginTop: 180,}}>
      <NavBt style={{color: color.primary, marginLeft: 0, fontFamily: font.medium, borderRadius: 8, width: 150, background: color.primary + 20,}}>MOBILE</NavBt>
         
        <ResourceTitle style={{fontSize: 32,}}>
          Baixe o app agora mesmo!
        </ResourceTitle>
        <Label style={{width: 400,}}>
          Encontre seu novo imóvel em tempo recorde, baixe o app, ajuste suas preferências como desejar e em questão de minutos encontre o que busca!
        </Label>
      </View>


      </Tips>

      <Banner>


      </Banner>

      <Title id="planos" style={{color: color.title, fontSize: 28, marginBottom: 10,}}>Escolha um de nossos Planos disponíveis!</Title>
      <Label style={{textAlign: 'center', width: 700, margin: 'auto'}}>Decida o que melhor se encaixa com sua perspectiva de negócio, faça um <i>"upgrade"</i> de plano a qualquer momento.</Label>
      <Planos>
          <Plans />
        </Planos>

        <ButtonPR style={{width: 300, margin: 'auto', marginBottom: 40, }}>ENTRAR EM CONTATO</ButtonPR>


      <Footer>
        <View className='row' style={{justifyContent: 'space-between'}}>
          <LogoX1 src={logox1} />
          <View className='row'>
            <BsGlobe style={{fontSize: 20, color: color.label, paddingTop: 7, paddingRight: 10,}}/>
            <Select styles={customStyles} options={language} defaultValue={language[0]} />
          </View>   

        </View>

        <View className='row' style={{justifyContent: 'space-between', marginTop: 50,}}>
        <View className='column'>
          <TitleLink>Links Diretos</TitleLink>
          <Link>Início</Link>
        
          <Link>Visão Geral</Link>
          <Link>Recursos</Link>
          <Link>Planos</Link>
        
          <Link>Download App</Link>
        </View>
        
        
        
        <View className='column'>
          <TitleLink>Suporte</TitleLink>
          <Link>FAQs</Link>
          <Link>Centro de ajuda</Link>
          <Link>Blog</Link>
          <Link>Novidades</Link>



        </View>
        
        <View className='column'>
          
          <TitleLink>Para Desenvolvedores</TitleLink>
          <Link>Documentação</Link>
          <Link>Style Guide</Link>
          <Link>Parcerias</Link>
          <Link>Guia de API</Link>

        </View>
        
        <View className='column'>
       
       <TitleLink>Empresa</TitleLink>
          <Link>Sobre nós</Link>
          <Link>Carreiras</Link>
          <Link>Equipe</Link>
          <Link>Apoios</Link>

        </View>

        <View className='column'>
       
       <TitleLink>Redes sociais</TitleLink>
       <Link>Instagram</Link>
       <Link>Facebook</Link>
       <Link>WhatsApp</Link>
       <Link>Twitter</Link>

     </View>
        </View>

        <View className='row' style={{justifyContent: 'space-between', marginTop: 50,}}>
        <Label>
          &copy; 2020 todos os direitos reservados.
        </Label>
        <Label>
         Termos de Uso / Politica de Privacidade
        </Label>
        </View>

      </Footer>



    </Container>
  );
};

export default Starter;