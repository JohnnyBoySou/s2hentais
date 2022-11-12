import React, { useContext , useState, useEffect, useRef} from 'react';


import Select from 'react-select' 

import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiQuestionMark } from 'react-icons/ri'


import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Title,
  Label,

  Input,
  Spacing,
  Left, 
  Right,

  Location,
  ActionButtons,
  BtAction,
} from './styles';

import { ButtonPR, Back } from '../../../theme/global'

import { useNavigate, useParams } from 'react-router-dom';
 
import '../animation.css'

const Profile = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const [data, setData] = useState([])
  const [loadGet, setLoadGet] = useState(true)

  const [item, setItem] =  useState()
  


  const navigate = useNavigate()
 
  const [like, setLike] = useState(true)
  const [Interaction, setInteractions] = useState(false)
  const [email, setEmail] = useState('joaodesousa101@gmail.com')
  const [name, setName] = useState('João de Sousa')
  const location = "Centro - Rua Gov. Jorge Lacer, 433"
  function handleLoginSystem (){
  
  }
 
  const handleInteractions = () => {
    setInteractions(true)
    setLike(false)
  }
  
  const handleLike = () => {
    setInteractions(false)
    setLike(true)
  }
  const handleHome = () => {
    navigate(`/app`)
  }

  return (
  
    <Container> 
      <Left>

        <View style={{justifyContent: 'space-between', marginBottom: 40, display: 'flex', flexDirection: 'row'}}>
           <Back style={{width: 52, height: 52, padding: 0, fontSize: 24, borderRadius: 100, marginBottom: 20,}}><RiQuestionMark style={{marginTop: 6,}}/></Back>
        </View>
        
        <Title>{name}</Title>
        <Label>{email}</Label>
        <Location>{location}</Location>



        <ActionButtons style={{borderBottom: '2px solid #00000020', justifyContent: 'flex-start'}}>
      <BtAction onClick={handleLike} select={like}>Curtidas</BtAction>
      <BtAction onClick={handleInteractions} select={Interaction}>Interações</BtAction>

    </ActionButtons>



      </Left>
      <Right>
      </Right>


    </Container>
  );
};

export default Profile;