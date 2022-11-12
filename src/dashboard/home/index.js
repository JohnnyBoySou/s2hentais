import React, { useContext , useState, } from 'react';
import { Link } from 'react-router-dom';
import Ripples from 'react-ripples'

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Line,
  Title,
  Label,
  Hr,
  Left,
  SideRight,
  Profile,  
  ImgProfile,

  Username,
  Company,
  Exit,
  ActionButtons,
  BtAction,

  Middle,
  YourBalance,
  SubTitle,
  Row,
  BtSettings,
  Nav,
  SearchInput,
  BtNotifications,
  SideBar,
  View,
  MarkerRead,

  Route,
  Routes,
  Details,
  Feed,
  Imoveis,
  Stats,
  StsCard,
  StsLabel,
  StsTitle,
  IndicatorSts,
  IndicatorLabel,
  Img,
  Highlight,
  HighlightImg,
  AddImovel,
  DivAddImovel,
} from './styles';
import { ButtonPR, Ripple } from '../../theme/global';

import UserData from '../../api/profile.json'
import dataImoveis from '../../api/imoveis.json'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoExitOutline } from 'react-icons/io5'
import { FiArrowUpRight, FiTrash2, FiEdit, FiSettings, FiBell, FiShare, FiSearch, FiPlus } from 'react-icons/fi'

import Drawer from '@mui/material/Drawer';
import ListH4 from '../../structure/cards/list_h_6';
import ListH5 from '../../structure/cards/list_h_5';
import ListH7 from '../../structure/cards/list_h_7';
import ListH8 from '../../structure/cards/list_h_8';
import ListH9 from '../../structure/cards/list_h_9';

import { useParams, useNavigate } from 'react-router-dom';
 
import highlightImage from '../../assets/imgs/highlightImage.png'

import Chart1 from '../../dashboard/components/charts/grid_1'
import Chart2 from '../../dashboard/components/charts/grid_2'
import Chart3 from '../../dashboard/components/charts/grid_3'
import { Subtitle } from '../../screens/home/styles';
import StatsUp from '../../assets/imgs/stats_up.png'


const DashboardHome = ( ) => {
    const { id } = useParams();

    const { path } = useParams()


    const navigate = useNavigate()
    const [showPanel, setPanel] = useState(true)
    const [showDetails, setDetails] = useState(false)
    const [showImoveis, setImoveis] = useState(false)
    const [showStats, setStats] = useState(false)
  
    const [ profile ] = UserData;
    const imv1 = dataImoveis[0]
    const imv2 = dataImoveis[1]
    const imv3 = dataImoveis[2]
    const imv4 = dataImoveis[3]
    const imoveis  =  [ {'a' : imv1} , {'a': imv2} , {'a' : imv3} ] 
    const { color, font } = useContext(ThemeContext)

    const [search, setSearh] = useState()

    const [imvSelect, setImvSelect] = useState()

    
    const [state, setState] = React.useState({top: false, left: false, bottom: false, right: false,});

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {return;}
    setState({ ...state, [anchor]: open });};


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
      </SideBar>
    )
    
    React.useEffect(() => {
      console.log(path)
      if(id !== undefined){
        setDetails(true)
        setPanel(false)
        setImoveis(false)
        setStats(false)
      }else if(path === "panel"){
        setPanel(true)
        setDetails(false)
        setImoveis(false)
        setStats(false)
      }
      else if(path === "imoveis"){
        setPanel(false)
        setDetails(false)
        setImoveis(true)
        setStats(false)
      }else if(path === "stats"){
        setPanel(false)
        setDetails(false)
        setImoveis(false)
        setStats(true)
      }

    }, [path])


    const handleScren = ( screen ) => {
      if(screen === 'panel'){
        setPanel(true)
        setDetails(false)
        setImoveis(false)
        setStats(false)
        navigate(`/dashboard/panel`)
      }else if(screen === 'imoveis'){
        setPanel(false)
        setDetails(false)
        setImoveis(true)
        setStats(false)
        navigate(`/dashboard/imoveis`)
      }else if(screen === 'stats'){
        setPanel(false)
        setDetails(false)
        setImoveis(false)
        setStats(true)
        navigate(`/dashboard/stats`)
      }else if(screen === 'details'){
        setPanel(false)
        setDetails(true)
        setImoveis(false)
        setStats(true) }
    }


    const addImovel = () => {
      navigate('/dashboard/add-imovel')
    }
    const a = false;

    const statsData = [
      {
      'name': 'Visitantes',
      'number': 14202,
      'up': true
    },{
      'name': 'Acessos',
      'number': 7702,
      'up': false
    },
    {
      'name': 'Curtidas',
      'number': 312,
      'up': true
    },
  ]

  return (
    
    <Container> 
        <Left>

          
        </Left>
        <Middle>
      
      { a &&
          <Nav>
          <SearchInput value={search} placeholder="Pesquisar..."/>
          <BtNotifications><FiSearch/></BtNotifications>
          <BtNotifications onClick={toggleDrawer('right', true)} ><FiBell/></BtNotifications>
          </Nav>
      }

      <ActionButtons style={{borderBottom: '2px solid #00000020', justifyContent: 'flex-start'}}>
          <BtAction onClick={() => handleScren('panel')} select={showPanel}>Painel</BtAction>
          <BtAction onClick={() => handleScren('imoveis')} select={showImoveis}>Imóveis</BtAction>
          <BtAction onClick={() => handleScren('stats')} select={showStats}>Estatísticas</BtAction>
          <View style={{width: "60%", justifyContent: 'flex-end', display: 'flex'}}>
          
          <BtNotifications ><FiSearch/></BtNotifications>
          <BtNotifications onClick={toggleDrawer('right', true)} ><FiBell/></BtNotifications>
       
          </View>
       
       </ActionButtons>
      

       { showPanel &&
       <Feed>

        <Highlight>
          <View style={{flexDirection: 'column', display: 'flex',}}>
          <Title style={{ fontFamily: font.book,}}>Veja como seus imóveis <br/>estão evoluindo!</Title>
          <ButtonPR style={{borderRadius: 100, width: 250, marginTop: 25,}}>VER ESTATÍSTICAS</ButtonPR>

          </View>

          <HighlightImg src={highlightImage}/>
        </Highlight>




        <View style={{marginLeft: 0, marginRight: 0, marginTop: 10,}}>
         <SubTitle>Seus imóveis</SubTitle>
         {imoveis.length > 0 && <View style={{flexWrap: 'wrap', display: 'flex', flexDirection: 'row'}}>
        {imoveis?.map((imoveis) => <ListH9 route={true} key={imoveis.a.ID} data={imoveis.a}/> )}</View>}

        </View>
        </Feed>
        }

      {showImoveis && 
      <Imoveis>
        <View >
          <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
            <SubTitle style={{marginTop: 20,}}>Todos</SubTitle>

            <AddImovel onClick={addImovel} style={{marginTop: 10, marginBottom: 20,}}>
              Novo Imóvel 
              <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20,}}>
                <DivAddImovel/>
                <FiPlus size={24} style={{marginTop: 0, marginBottom: 0, marginRight: -10, marginLeft: 10,}}/>
              </View>
            </AddImovel>
        
          
          </View>
          {imoveis.length > 0 && <View style={{ display: 'flex', marginTop: 10, flexDirection: 'column', borderRadius: 4, border: '2px solid #00000020', borderBottomWidth: 0,}}>
          {imoveis?.map((imoveis) => <ListH7 route={true} key={imoveis.a.ID} data={imoveis.a}/> )}
          </View>}
        </View>

      </Imoveis>
      }

      {showStats && 
      <Stats>

        <View>
          <SubTitle>Visão Geral</SubTitle>
        </View>

        <View style={{flexDirection: 'row', display: 'flex', marginTop: 20,}}>
          
          {statsData.map((stats) => <StsCard>
            <StsLabel>{stats?.name}</StsLabel>
            <StsTitle>{stats?.number}</StsTitle>
            <View style={{flexDirection: 'row', display: 'flex'}}>
              <IndicatorSts up={stats?.up}><FiArrowUpRight style={{marginTop: 4,}}/></IndicatorSts>            
              <IndicatorLabel>12%</IndicatorLabel>
             </View>
          </StsCard>)}

        </View>

        <Chart2 data={imoveis}/>
        
      </Stats>}


        
      { showDetails && <Details>

        
      { a &&  <Routes>
          <Link to="/dashboard" style={{textDecoration: 'none'}}><Route>Painel</Route></Link>
          <MdKeyboardArrowRight/>
          <Route>Detalhes</Route>
          <MdKeyboardArrowRight/>
          <Route style={{textDecoration: 'underline', color: color.title,}}>#{id}</Route>
          </Routes>
      }

          
      <View style={{marginLeft: 20, marginRight: 20, marginTop: 20,}}>
        
        <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
          <SubTitle>Detalhes</SubTitle>
          
          <View>
            <BtNotifications><FiEdit /></BtNotifications>
            
            <BtNotifications style={{background: color.red, color:color.light}}><FiTrash2 /></BtNotifications>
            <BtNotifications><FiShare /></BtNotifications>
          </View>
        </View>


        <ListH8  data={dataImoveis[0]} />
        <View style={{marginTop: 30,}}>
          <SubTitle>Estatísticas</SubTitle>
          <Chart1 data={imoveis}/>
        </View>

      </View> </Details>}



        </Middle>

        
        <SideRight>
          <Row>
            <SubTitle>Seu balanço</SubTitle>
            <div style={{borderRadius: 30, overflow: 'hidden', marginTop: -8,}}>
              <Ripples color="rgba(0, 0, 0, .3)">
                <BtSettings><FiSettings color={color.title} size={24}/></BtSettings>
              </Ripples>
            </div>
          </Row>

          <YourBalance>
            <Chart3 data={imoveis}/>
          </YourBalance>
        </SideRight>


        
          
        <Drawer
            anchor="right"
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <List/>
          </Drawer>
    
    </Container>
  );
};

export default DashboardHome;