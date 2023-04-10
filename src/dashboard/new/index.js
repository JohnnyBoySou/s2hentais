import React, { useContext , useState, useEffect} from 'react';



import { FiSearch, FiHelpCircle, FiBell , FiSettings} from 'react-icons/fi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { BsHouseDoor , BsCreditCard , BsLightbulb, BsLightbulbOff} from 'react-icons/bs'
import { TfiStatsUp } from 'react-icons/tfi'


import Drawer from '@mui/material/Drawer';
import Settings from './settings';
  
import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  
  Left, 
  Right,
  
  
  
  


  Bar,
  LineBar,
  LineSpan,

  Img,
  SpanSeparetator,
  Line,
  Head,
  HeadTitle,
  HeadLabel,

  IconBt,

  
  ProfileContainer,
  ProfileImg,
  CardLabel,
  CardTitle,
} from './styles';



import { useNavigate } from 'react-router-dom';
 
import logo from '../../assets/imgs/logo_h_light.png'

import imovel from '../../api/imovel.json'
import '../animation.css'
import Plans from './plans/index'
import Stats from './stats/index'
import Box from './box/index'
import Inovice from './inovice'

import Suff from '../../assets/imgs/suff.png'

import Notify from './notifications';
import Dashboard from './dashboard/index'
import AddImobil from '../add_imobil/index'
import Profile from './profile/index'
import DocumentMeta from 'react-document-meta'
import ImoveisList from './imoveislist';  

import { requestUserEndpoint, revalidateToken } from '../../api/request/index'

const Auth = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const navigate = useNavigate()
  const [userData, setUserData] = useState([])
  
    
  const [state, setState] = React.useState({top: false, left: false, bottom: false, right: false,});

  const [state2, setState2] = React.useState({top: false, left: false, bottom: false, right: false,});

  const [profileState, setProfileState] = React.useState({top: false, left: false, bottom: false, right: false,});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {return;}
  setState({ ...state, [anchor]: open });};


  const toggleDrawer2 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {return;}
  setState2({ ...state2, [anchor]: open });};


  const toggleProfile = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {return;}
  setProfileState({ ...profileState, [anchor]: open });};



    const views = {
      name: 'Visualizações',
      value1: '12.323',
      value2: '8.214',
    }

    const likes = {
      name: 'Curtidas',
      value1: '4.885',
      value2: '2.664',
    }

    const interaction = {
      name: 'Interações',
      value1: '8.989',
      value2: '6.332',
    }

    const popular = {
      name: 'Popularidade',
      value1: '22.332',
      value2: '9.877',
    }



    const [page, setPage] = useState({
      name: 'Dashboard',
      desc: "Visão geral de seus imóveis"
    })
    const [dashboard, setDashboard] = useState(true)
    const [plans, setPlans] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [imoveis, setImoveis] = useState(false)
    const [settings, setSettings] = useState(false)
    const [support, setSupport] = useState(false)
    const [addimovel, setAddImovel] = useState(false)

    const handleScreen = ( course ) => {
      if(course === undefined){
        return
      }
      if(course === "dashboard"){
        setDashboard(true)
        setPlans(false)
        setStatistics(false)
        setImoveis(false)
        setSettings(false)
        setSupport(false)
        setAddImovel(false)
        setPage({
          name: 'Dashboard',
          desc: 'Visão geral de seus imóveis'
        })
      }
      else if(course === "plans"){
        setDashboard(false)
        setPlans(true)
        setStatistics(false)
        setImoveis(false)
        setSettings(false)
        setAddImovel(false)
        setSupport(false)
        setPage({
          name: 'Planos',
          desc: 'Escolha um plano e tenha vários beneficios.'
        })
      }
      else if(course === "statistics"){
        setDashboard(false)
        setPlans(false)
        setStatistics(true)
        setImoveis(false)
        setAddImovel(false)
        setSettings(false)
        setSupport(false)
        setPage({
          name: 'Estatísticas',
          desc: 'Veja suas estatísticas e tenha insights.'
        })
      }

      else if(course === "settings"){
        setDashboard(false)
        setPlans(false)
        setStatistics(false)
        setImoveis(false)
        setAddImovel(false)
        setSettings(true)
        setSupport(false)
        setPage({
          name: 'Configurações',
          desc: 'Ajuste a plataforma a suas preferências.'
        })
      }

      else if(course === "imoveis"){
        setDashboard(false)
        setPlans(false)
        setStatistics(false)
        setAddImovel(false)
        setImoveis(true)
        setSettings(false)
        setSupport(false)
        setPage({
          name: 'Imóveis',
          desc: 'Seus imóveis estão por aqui.'
        })
      }
    }



  const a = false;

  const [avatar, setAvatar] = useState(Suff);
  const handleClick = () => {
    setAddImovel(true)
    setDashboard(false)
  }

  async function getUserData () {
    try{
      const user = JSON.parse(localStorage.getItem('@user'))
     if(user.id) {
        requestUserEndpoint(user.id).then(response => {
          setUserData(response)
          setAvatar(response?.avatar)
          console.log(response)
      })
    }
      return    
    }
    catch(e){
      console.log(e)
    }
  }


  const [token, setToken] = useState();
  useEffect(() => {
    getUserData()
    revalidateToken().then(token => {setToken(token)})
  }, [])

  const [dark, setDark] = useState(false)
  const [light, setLight] = useState(true) 

  const handleTheme = () => {
    if(light){
      setDark(true)
      setLight(false)
    }else{
      setLight(true)
      setDark(false)
    }
  }
    


  return (
  
    <Container> 
      <DocumentMeta title="Painel" />
      <Left>
        <Bar>
            <Img src={logo}/>
            <SpanSeparetator>Geral</SpanSeparetator>
           
            <LineBar onClick={ () => handleScreen('dashboard')}>
                <MdOutlineSpaceDashboard style={{marginBottom: -4,}}/>
                <LineSpan>Dashboard</LineSpan>
            </LineBar>


            <LineBar onClick={ () => handleScreen('imoveis')}>
                <BsHouseDoor style={{marginBottom: -4,}}/>
                <LineSpan>Imóveis</LineSpan>
            </LineBar>

            <LineBar onClick={ () => handleScreen('statistics')}>
                <TfiStatsUp style={{marginBottom: -4,}}/>
                <LineSpan>Estatísticas</LineSpan>
            </LineBar>


            <LineBar onClick={ () => handleScreen('plans')}>
                <BsCreditCard style={{marginBottom: -4,}}/>
                <LineSpan>Planos</LineSpan>
            </LineBar>

            <Line/>

            <SpanSeparetator style={{marginTop: 20,}}>Outros</SpanSeparetator>
            
            <LineBar onClick={ () => handleScreen('support')}>
                <FiHelpCircle style={{marginBottom: -4,}}/>
                <LineSpan>Suporte</LineSpan>
            </LineBar>

            <LineBar onClick={ () => handleScreen('settings')}>
                <FiSettings style={{marginBottom: -4,}}/>
                <LineSpan>Ajustes</LineSpan>
            </LineBar>

        </Bar>
    
      </Left>
      <Right>

        <Head>
          <View className='column'>
            <HeadTitle>{page.name}</HeadTitle>
            <HeadLabel>{page.desc}</HeadLabel>
          </View>

    



        <View className='row'>
          <IconBt>
            <FiSearch/>
          </IconBt>

          <IconBt  onClick={handleTheme}>
           {light && < BsLightbulb className='fadeUp'/> }
           {dark && <BsLightbulbOff className='fadeUp'/> }
          </IconBt>

          <IconBt onClick={toggleDrawer('right', true)}>
            <FiBell/>
          </IconBt>

          <ProfileContainer onClick={toggleProfile('right', true)}>
            <ProfileImg src={avatar}/>
            <View className='column' style={{}}>
            <CardTitle style={{fontSize: 18, marginTop:10,}}>{userData?.display_name}</CardTitle>
            <CardLabel style={{fontSize:14,}}>Gerenciar perfil</CardLabel>
            </View>
          </ProfileContainer>

          </View>
        </Head>
        
        {dashboard && <View>


          {userData.ID && <Dashboard user={userData} click={handleClick} className="fadeUp" 
            views={views} 
            popular={popular}
            interaction={interaction} 
            likes={likes}/> }
        </View> }
        {addimovel && <AddImobil user={userData} />}
      



       {imoveis &&  <View>

        <ImoveisList userID={userData} user={userData} token={token}/>

        
        </View>}
       


       {settings && <Settings userData={userData}/>}

       {statistics &&
       <View>
        <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between', display: 'flex'}}>
          <Stats item={views}/>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between', display: 'flex'}}>
          <Box item={views}/>
          <Box item={likes}/>
          <Box item={imoveis}/>
        </View></View>}


      {plans &&
        <View style={{flexDirection: 'row', justifyContent: 'space-between', display: 'flex'}}>
          <Plans type="normal"/>
          <Plans type="premium"/>
          <Plans type="imobil"/>
        </View>
        }

      </Right>

      
      <Drawer
      disableEnforceFocus 
            anchor="right"
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <Notify/>
          </Drawer>

          <Drawer
          disableEnforceFocus 
            anchor="right"
            open={state2['right']}
            onClose={toggleDrawer2('right', false)}
          >
            <Inovice item={imovel}/>
          </Drawer>

          <Drawer
            anchor="right" variant="temporary"
            open={profileState['right']}
            onClose={toggleProfile('right', false)}
          >
            <Profile user={userData}/>
          </Drawer>

    </Container>
  );
};

export default Auth;