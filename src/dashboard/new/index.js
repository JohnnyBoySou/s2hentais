import React, { useContext , useState, useEffect, useRef} from 'react';


import Select from 'react-select' 

import { AiOutlineSetting } from 'react-icons/ai';
import { FiSearch, FiHelpCircle, FiBell , FiSettings} from 'react-icons/fi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { RiQuestionMark } from 'react-icons/ri'
import { BsHouseDoor , BsCreditCard , BsLightbulb, BsLightbulbOff} from 'react-icons/bs'
import { ImStatsDots } from 'react-icons/im'
import { IoIosHelpCircleOutline} from 'react-icons/io'
import { TfiStatsUp } from 'react-icons/tfi'


import Drawer from '@mui/material/Drawer';
import Settings from './settings';

import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Title,
  Label,

  Input,
  Spacing,
  Checkbox,
  Left, 
  Right,
  SelectTitle,
  CheckBt,
  CheckTitle,
  CircleCheck,
  CheckImg,
  CheckLabel,
  Side,

  Login,
  Register,

  Route,
  Routes,

  Image,
  GreenAcess,
  RedAcess,
  Logo,
  FinishImg,



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

  SideBar, 
  ActionButtons,
  BtAction,
  MarkerRead,
  SubTitle,

  ProfileContainer,
  ProfileImg,
  BtSettings,
  CardLabel,
  CardTitle,

  Notification,
  NotificationLabel,
  NotificationTitle,

  ImoveisContainer,
} from './styles';

import { ButtonPR, Back } from '../../theme/global'


import { useNavigate, useParams } from 'react-router-dom';
 
import logo from '../../assets/imgs/logo_h_light.png'
import Details from './details/index';

import imovel from '../../api/imovel.json'
import '../animation.css'
import Plans from './plans/index'
import Stats from './stats/index'
import Box from './box/index'
import Inovice from './inovice'

import Suff from '../../assets/imgs/suff.png'

import Loader from  '../../components/loader'
import { requestLogin, requestRegister } from '../../api/request/auth_requests';

import Dashboard from './dashboard/index'
import AddImobil from '../add_imobil/index'
import Appearance from'./appearance/index'
import Profile from './profile/index'
import ListH7 from '../../structure/cards/list_h_7';
import DocumentMeta from 'react-document-meta'
import { requestNotifications, requestUserImoveis } from '../../api/request';

const Auth = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const [data, setData] = useState([])
  
  const navigate = useNavigate()

  const [imobil, setImobil] = useState(true)
  const [userData, setUserData] = useState([])
  const [notifications, setNotifications] = useState([])

    
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


  const List = ( ) => (
    <SideBar>
      <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
        <SubTitle style={{marginLeft: 24, }}>Notificações</SubTitle>
        <MarkerRead>Marcar como lida</MarkerRead>
      </View>
      <ActionButtons style={{marginTop: 10, borderBottom: '2px solid #00000020', justifyContent: 'flex-start'}}>
        <BtAction style={{marginLeft: 24, paddingRight: 10, paddingLeft: 10, fontSize: 18}}  select={true}>Geral</BtAction>
        <BtAction style={{fontSize: 18, paddingRight: 10, paddingLeft: 10,}}  select={false}>Imóveis</BtAction>
     </ActionButtons>

     {notifications.map((notification) => 
      <Notification>
      <NotificationTitle>{notification.titulo}</NotificationTitle>
      <NotificationLabel>{notification.descricao}</NotificationLabel>
      </Notification>

    )}
    
    </SideBar>
  )

    const views = {
      name: 'Views',
      value1: '12.323',
      value2: '8.214',
    }

    const likes = {
      name: 'Curtidas',
      value1: '4.885',
      value2: '2.664',
    }



    const [page, setPage] = useState({
      name: 'Dashboard',
      desc: "SEO Overview"
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
          desc: 'SEO Overview'
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

  const handleClick = () => {
    setAddImovel(true)
    setDashboard(false)
  }

  async function getUserData () {
    try{
      const user = JSON.parse(localStorage.getItem('@user'))
      setUserData(user)
      requestUserImoveis(user.id).then(
        function(response, error) {
          if(response){
            console.log(response)
            setUserImoveis(response)
            return
          }else if(
            console.log(error)
          )
          return
          })
      return    
    }
    catch(e){
      console.log(e)
    }
  }


  function getNotifications (){
    requestNotifications().then(
      function(response, error) {
        if(response){
          setNotifications(response)
          return
        }else if(
          console.log(error)
        )
        return
        })
  }

  useEffect(() => {
    getUserData()
    getNotifications()

  }, [])

  const [userImoveis, setUserImoveis] = useState([])
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
                <LineSpan>Imoveis</LineSpan>
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
                <LineSpan>Configurações</LineSpan>
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
            <ProfileImg src={Suff}/>
            <View className='column' style={{}}>
            <CardTitle style={{fontSize: 18, marginTop:10,}}>{userData?.name}</CardTitle>
            <CardLabel style={{fontSize:14,}}>Gerenciar perfil</CardLabel>
            </View>
          </ProfileContainer>

          </View>
        </Head>
        
        {dashboard && <View><Dashboard user={userData} click={handleClick} className="fadeUp" views={views}/> </View> }
        {addimovel && <AddImobil userData={userData} />}
      
       {imoveis &&  <ImoveisContainer>
        {userImoveis.map((userImovei) =>  <ListH7 data={userImovei} />)}
        </ImoveisContainer>}
       
        
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
          <Plans/>
          <Plans/>
          <Plans/>
        </View>
        }

      </Right>

      
      <Drawer
            anchor="right"
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <List/>
          </Drawer>

          <Drawer
            anchor="right"
            open={state2['right']}
            onClose={toggleDrawer2('right', false)}
          >
            <Inovice item={imovel}/>
          </Drawer>

          <Drawer
            anchor="right"
            open={profileState['right']}
            onClose={toggleProfile('right', false)}
          >
            <Profile user={userData}/>
          </Drawer>

    </Container>
  );
};

export default Auth;