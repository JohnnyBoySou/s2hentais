import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
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

  Main, 
  Column,

  Premium,
  Profile,
  ProfileImg,

  BtSettings,
  Input,
  Spacing,
  Add,
  Banner,
  Title,
  Img,
} from './styles';

import { ButtonOffColor, Back, ButtonBR, ButtonPR, ButtonLight } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { AiOutlineEdit , AiOutlineSetting, AiOutlineUsergroupAdd} from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi' 

import Switch from 'react-switch';
import newImovel from '../../../assets/imgs/new_imovel.png'

import Character1 from '../../../assets/imgs/character1.png'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Suff from '../../../assets/imgs/suff.png'
import Stats from '../stats';
import Box from '../box'
import { linkClasses } from '@mui/material';
import { Label } from '../styles';

const Dashboard = ( props ) => {

  const { color, font } = useContext(ThemeContext)

  const navigate = useNavigate()

  const click = props.click
  const user = props.user
  const views = props.views
  const likes = props.likes
  const popular = props.popular
  const interaction = props.interaction

  const [visibility, setVisibility] = useState(true)

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  
  const a = false;

  const [theme, setTheme] = useState()
  
  const [dark, setDark] = useState(false)
  const [light, setLight] = useState(true)


  const handleTheme = () => {
    if(light === true){
      setLight(false)
      setDark(true)
    } 
    if(dark === true){
      setLight(true)
      setDark(false)
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: 450,
      bottom: 'auto',
      border: '2px solid #00000010',
      borderRadius: '22px',
      marginRight: '-50%',
      padding: 0,
      transform: 'translate(-50%, -50%)',
      transition: 'linear .2s',
    },
  };


  const [imovelNome, setNomeImovel] = useState('meunovoimovel')
  const [next, setNext] = useState(false)

  React.useEffect(() => {
    if(imovelNome === "meunovoimovel"){
      setNext(true)
    }else{return}
    
  }, [imovelNome])
  
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if(imovelNome === "meunovoimovel"){
        click()
      }else{return}
      
    }
  }

  return (
      <Main className='fadeUp'>
        <Column>
        <Banner>
          <View style={{flexDirection: 'row', display: 'flex',
        justifyContent: 'flex-start'}}>
            <Title style={{marginTop: 80, marginLeft: 40, textAlign: 'left', color: color.light, fontSize: 32, }}>Confira suas estatísticas</Title>
            <Img src={Character1} style={{marginRight: 50,}}/>
          </View>
          <View style={{flexDirection: 'row', marginTop: 40,  display: 'flex', marginBottom: 40,}}>

            <Box item={popular}/>
            <Spacing />
            <Box item={views}/>
            <Spacing/>
            <Spacing/>
          </View>
          
        </Banner>
      
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,  display: 'flex'}}>
          <Box item={views}/>
          <Spacing/>
          <Box item={interaction}/>
          <Spacing/>
          <Box item={likes}/>
          <Spacing/>
          <Box item={views}/>
          {a && <Add style={{backgroundImage: `url(${Suff})`}}>
            <CardTitle style={{fontSize: 24, fontFamily: font.medium, color: color.light, textAlign: 'center',}}>Adicionar</CardTitle>
            <ButtonBR style={{background: color.light, marginTop: 10, border: 'none', color: color.light, borderRadius: 100, color: color.primary, }}>Novo Imóvel</ButtonBR>
          </Add>}
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,  display: 'flex'}}>
        

        <Banner style={{width: 300, height: 300, background: color.secundary, padding: 20,}} >
            <View className='column'>

              <Title style={{marginTop: 0, textAlign: 'left', color: color.light, fontSize: 28, marginBottom: -10,  }}>Acompanhe nossas dicas!</Title>
              <Label style={{color: color.light + 90, fontSize: 18, fontFamily: font.book, }}>Prepare-se para mostrar seu imóvel para o Brasil inteiro.</Label>
              <ButtonLight style={{marginTop: 20,}}>VER BLOG</ButtonLight>
            </View>
        </Banner>

        <Card>

            <CardImg src={newImovel}/>
 
            <View style={{marginTop: 20, marginBottom: 10,}}>
              <View className='column'>
                <CardTitle style={{fontSize: 19,}}>Adicione seu primero imóvel!</CardTitle>
                <CardLabel style={{fontSize: 16,}}>Prepare-se para mostrar seu imóvel para o Brasil inteiro.</CardLabel>
              </View>

            </View>
  
            <Line style={{marginBottom: 20,}}/>
            <ButtonPR onClick={() => setIsOpen(true)}>Adicionar Imóvel</ButtonPR>
       
        </Card>

      </View>

        

        <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            
          <View className='column' >
           {a && <CardImg src={newImovel}/>}
 
            <View className="column" style={{padding: 20,}}>
            <CardTitle style={{textAlign: 'center', fontSize: 24,}}>Adicionar novo imóvel</CardTitle>
            <CardLabel style={{textAlign: 'center', fontSize:18,}}>Ao adicionar, seu imóvel aparecerá na plataforma e pessoas irão vê-lo!
            </CardLabel>
            </View>

            <Line/>


            <View className="column" style={{padding: 20,}}>
              <CardTitle style={{fontSize: 18,}}>Colaboradores</CardTitle>
              <CardLabel style={{fontSize:14,}}>Adicione colaboraderes ao seu imóvel, eles poderão editar e modificar. <Premium>Premium</Premium>
              </CardLabel>
            </View>  

            <Profile>
              <ProfileImg src={Suff}/>
              <View className='column' style={{marginLeft: -30,}}>
              <CardTitle style={{fontSize: 18, marginTop: 10,}}>{user.name}</CardTitle>
              <CardLabel style={{fontSize:14,}}>Criador, edita, modifica e pública.</CardLabel>
              </View>
              <BtSettings><AiOutlineSetting/></BtSettings>
            </Profile>

          {a && <ButtonBR style={{margin: 20,}}><AiOutlineUsergroupAdd/></ButtonBR>}
            <Line/>

            <View className="column" style={{padding: 20,}}>
              <CardTitle style={{fontSize: 18,}}>Você é um robo?</CardTitle>
              <CardLabel style={{fontSize:14,}}>Esperamos que não, digite abaixo <CardLabel style={{fontFamily: font.bold, color: color.primary,}}>meunovoimovel</CardLabel>, para confirmar.</CardLabel>
              <Input onKeyDown={handleKeyDown} value={imovelNome} style={{marginBottom: 20,}} onChange={e => setNomeImovel(e.target.value)}  placeholder="Digite o que está escrito acima" type="text"/>

              <ButtonPR off={!next} disabled={!next} onClick={click}>PRÓXIMO</ButtonPR>
            </View>  
            
          
          </View>

            </Modal>






        <Modal isOpen={modalIsOpen2} onRequestClose={() => setIsOpen2(false)} style={customStyles}>
            
          <View className='column' >
           
 
            <View className="column" style={{padding: 20,}}>
              <CardImg src={Suff}/>
            <CardTitle style={{textAlign: 'center', fontSize: 24,}}>Adicionar novo imóvel</CardTitle>
            <CardLabel style={{textAlign: 'center', fontSize:18,}}>Ao adicionar, seu imóvel aparecerá na plataforma e pessoas irão vê-lo!
            </CardLabel>
            </View>

            <Line/>
           
              <View style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', margin: 20,}}>
                <ButtonBR style={{width:'100%'}} onClick={click}>ANTERIOR</ButtonBR>
                <Spacing/>
                <Spacing/>
                <ButtonPR style={{width:'100%'}} onClick={click}>PRÓXIMO</ButtonPR>
              </View>
              </View>  
            
            </Modal>

        </Column>
        </Main>

  );
};

export default Dashboard;