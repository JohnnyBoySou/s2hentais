import React, { useContext , useState, useEffect} from 'react';



import { FiSearch, FiHelpCircle, FiBell , FiSettings} from 'react-icons/fi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { BsHouseDoor , BsCreditCard } from 'react-icons/bs'
import { TfiStatsUp } from 'react-icons/tfi'


import Drawer from '@mui/material/Drawer';
  
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
import Inovice from './inovice'

import Suff from '../../assets/imgs/suff.png'

import Settings from './settings';
import Notify from './notifications';
import Dashboard from './dashboard/index'
import AddImobil from '../add_imobil/index'
import Profile from './profile/index'
import DocumentMeta from 'react-document-meta'
import ImoveisList from './imoveislist';  

import { requestUserEndpoint, revalidateToken, requestFeed , requestID} from '../../api/request/index'
import { Sk3 } from '../../structure/skeleton';
import { requestLikesForUser, requestViewsForUser, requestMostPopular} from '../../api/request/stats';
import Team from './team';
import Search from './search';

const DashMain = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const navigate = useNavigate()
  const [userData, setUserData] = useState([])
  const [avatar, setAvatar] = useState(Suff);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();
  const [feed, setFeed] = useState([]);
  const [profile, setProfile] = useState();
  const [notify, setNotify] = useState();
  
  const [vllike, setVllike] = useState();
  const [vlview, setVlview] = useState();
  const [mostView, setMostView] = useState();
  const [mostLike, setMostLike] = useState();



  const [state, setState] = React.useState({top: false, left: false, bottom: false, right: false,});

  const toggleDrawer = (anchor, open, path) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {return;}
      setState({ ...state, [anchor]: open });
      if(path === "notify"){setNotify(true);setProfile(false);
      }else if(path === "profile"){setNotify(false);setProfile(true);}
};



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
    const [team, setTeam] = useState(false)
    const [search, setSearch] = useState(false)
    const [addimovel, setAddImovel] = useState(false)

    const pages = {
      dashboard: {
        name: 'Dashboard',
        desc: 'Visão geral de seus imóveis'
      },
      plans: {
        name: 'Planos',
        desc: 'Escolha um plano e tenha vários beneficios.'
      },
      statistics: {
        name: 'Estatísticas',
        desc: 'Veja suas estatísticas e tenha insights.'
      },
      settings: {
        name: 'Configurações',
        desc: 'Ajuste a plataforma a suas preferências.'
      },
      imoveis: {
        name: 'Imóveis',
        desc: 'Seus imóveis estão por aqui.'
      },
      team: {
        name: 'Equipe',
        desc: 'Sua equipe e colaboradores.'
      },
      search: {
        name: 'Pesquisar',
        desc: 'Encontre seus imóveis mais facilmente'
      }
    };
    
    const handleScreen = (course) => {
      const page = pages[course];
      if (!page) {
        return;
      }
      const { name, desc } = page;
      setDashboard(course === 'dashboard');
      setPlans(course === 'plans');
      setStatistics(course === 'statistics');
      setImoveis(course === 'imoveis');
      setSettings(course === 'settings');
      setTeam(course === 'team');
      setSearch(course === 'search')
      setSupport(false);
      setAddImovel(false);
      setPage({ name, desc });
    }


  const handleClick = () => {
    setAddImovel(true)
    setDashboard(false)
  }

  async function getUserData () {
    try{
      const user = JSON.parse(localStorage.getItem('@user'))
      if(user.id) {
          requestLikesForUser(user.id).then(
            response => {setVllike(response?.total_likes);}
          )
          requestViewsForUser(user.id).then(
            response => {setVlview(response?.total_views);}
          ) 
          requestMostPopular(user.id).then(
            response => {
              requestID(response.most_viewed_id).then(item => setMostView(item[0]))
              requestID(response.most_liked_id).then(item => setMostLike(item[0]))
            }
          )

          requestUserEndpoint(user.id).then(response => {
          setUserData(response)
          setAvatar(response?.avatar)
          setLoading(false)
      })}return    
    }
    catch(e){console.log(e)}
  }


  useEffect(() => {
    revalidateToken().then(token => {setToken(token)})
    requestFeed().then(response => {
      setFeed(response)
    })
    getUserData()
    
  }, [])


  const [usersEmails, setUsersEmails] = useState([]);

  function handleUsersEmails(usersEmails) {
    console.log(usersEmails)
    setUsersEmails(usersEmails);
  }


  return (
  
    <Container> 
      <DocumentMeta title="Painel" />
      <Left>
        <Bar>
            <Img src={logo}/>
            <SpanSeparetator>Geral</SpanSeparetator>
           
            <LineBar checked={dashboard} disabled={dashboard} onClick={ () => handleScreen('dashboard')}>
                <MdOutlineSpaceDashboard style={{marginBottom: -4,}}/>
                <LineSpan>Dashboard</LineSpan>
            </LineBar>


            <LineBar checked={imoveis} disabled={imoveis} onClick={ () => handleScreen('imoveis')}>
                <BsHouseDoor style={{marginBottom: -4,}}/>
                <LineSpan>Imóveis</LineSpan>
            </LineBar>

          <LineBar checked={statistics} disabled={statistics} onClick={ () => handleScreen('statistics')}>
                <TfiStatsUp style={{marginBottom: -4,}}/>
                <LineSpan>Estatísticas</LineSpan>
            </LineBar>

            <LineBar checked={team} disabled={team}  onClick={ () => handleScreen('team')}>
                <FiSettings style={{marginBottom: -4,}}/>
                <LineSpan>Equipe</LineSpan>
            </LineBar>

            <LineBar checked={plans} disabled={plans} onClick={ () => handleScreen('plans')}>
                <BsCreditCard style={{marginBottom: -4,}}/>
                <LineSpan>Planos</LineSpan>
            </LineBar>

            <Line/>

            <SpanSeparetator style={{marginTop: 20,}}>Outros</SpanSeparetator>
            
            <LineBar checked={support} disabled={support} onClick={ () => handleScreen('support')}>
                <FiHelpCircle style={{marginBottom: -4,}}/>
                <LineSpan>Suporte</LineSpan>
            </LineBar>

            <LineBar checked={settings} disabled={settings} >
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
          <IconBt onClick={ () => handleScreen('search')}>
            <FiSearch/>
          </IconBt>

          <IconBt onClick={toggleDrawer('right', true, 'notify')}>
            <FiBell/>
          </IconBt>

          <ProfileContainer onClick={toggleDrawer('right', true, 'profile')}>
            <ProfileImg src={avatar}/>
            <View className='column' style={{}}>
            <CardTitle style={{fontSize: 18, marginTop:10,}}>{userData?.display_name}</CardTitle>
            <CardLabel style={{fontSize:14,}}>Gerenciar perfil</CardLabel>
            </View>
          </ProfileContainer>

        </View>
        </Head>
      <View>

        {loading && <Sk3/>}
        
        {dashboard && <Dashboard user={userData} item={feed} onUsersEmails={handleUsersEmails} click={handleClick} className="fadeUp" vllike={vllike} vlview={vlview} mostView={mostView} mostLike={mostLike} /> }
        {addimovel && <AddImobil user={userData} authores={usersEmails}  token={token}/>}
    
        {imoveis &&  <ImoveisList userID={userData} user={userData} token={token}/> }
       
        {settings && <Settings userData={userData}/>}

        {statistics && <View></View>}
        {plans && <Plans />}
        {search && <Search/> }
        
        {team && <Team token={token} />}

        </View>
      </Right>

      
      <Drawer disableEnforceFocus anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
        {notify && <Notify/>}
        {profile && <Profile user={userData} token={token}/>}
      </Drawer>
     
    </Container>
  );
};

export default DashMain