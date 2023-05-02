import React, { useContext , useState, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
  Card,
  CardTitle,
  CardLabel,
  
  CardImg,
  Line,

  Main, 

  Premium,
  Profile,
  ProfileImg,

  BtSettings,
  Input,
  Spacing,
  Title,
  Row,
  ItemImg,
  ItemCard,
  ItemTitle,
  B,
  ViewCard,
  Chip,
  ItemCard2,
  ItemCard3,
  NewImovel,
  BtAdd,
  Route,
  Routes,
  BtIcon,
  SpacingX1,
  InputSearch,
  Image,
  ImgWrapper,
  ImgBt,
} from './styles';



import Carousel from 'react-grid-carousel'
import { ButtonBR, ButtonPR,  } from '../../../theme/global'
import { CiGrid2H, CiGrid41 } from 'react-icons/ci'
import { AiOutlineCrown, AiOutlineUsergroupAdd, AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { BsHouseAdd, BsSearch } from 'react-icons/bs'
import { TfiStatsUp } from 'react-icons/tfi'
import { TbHandClick } from 'react-icons/tb'
import { GrClose } from 'react-icons/gr'
import Select from 'react-select' 
import { MdKeyboardArrowRight } from 'react-icons/md'
import Modal from 'react-modal';

import Suff from '../../../assets/imgs/suff.png'
import Box from '../box'
import RowFlow from './../../../components/cards/row_flow/index';
import { customStyles } from '../../../api/customStyles';
import { requestMediaForAuthor, requestUserEmail, } from '../../../api/request';
import { Column } from './../../../theme/global';
import { FiEye, FiHeart } from 'react-icons/fi';
import Loader from '../../../components/loader';
import ImageWithBorder from './../../components/itemMedia';


const Dashboard = ( props ) => {
  const { color, font } = useContext(ThemeContext)
  const click = props.click
  const user = props.user

  const views = {
    name: 'Visualizações',
    value1: '302',
    value2: '24',
  }
  const likes = {
    name: 'Curtidas',
    value1: '60',
    value2: '10',
  }
  const interaction = {
    name: 'Interações',
    value1: Number(60 + 302),
    value2: '34',
  }

  const [modalIsOpen, setIsOpen] = useState(false);
  
  const a = false;

  const [imovelNome, setNomeImovel] = useState('meunovoimovel')
  const [next, setNext] = useState(false)
  
  useEffect(() => {
    if(imovelNome === "meunovoimovel"){setNext(true)
    }}, 
  [])

  const handleKeyDown = (event) => {if (event.key === 'Enter') {if(imovelNome === "meunovoimovel"){click()}else{return}}}
   const Insights = () => (
      <Row>
        <Box item={views}/>
        <Spacing/>   
        <Box style={{flexGrow: 1,}} item={likes}/>
        <Spacing/>
        <Box item={interaction}/>
        <Spacing />

        <Card style={{justifyContent: 'center'}}>
          <NewImovel onClick={() => setIsOpen(true)}> 
          <BsHouseAdd style={{color: "#fff", margin: 'auto'}} size={32}/></NewImovel>
        </Card>
      </Row>
  )
    


      return (

      <Main className='fadeUp'>
        <Column>
        <Insights/>
        <Column style={{ marginBottom: 20, marginTop: 20, }}>
      </Column>

      
        <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{
          content: {
            width: 480,   
            height: 586,
            margin: 'auto',
            borderRadius: 12,
            background: color.background,
            border: 'none',
          },overlay: {
            backgroundColor: color.off+70,
          }
        }}>
            
          <View className='column'  >
 
            <Row style={{paddingLeft: 20, paddingBottom: 10,}}>
              <BtSettings><BsHouseAdd/></BtSettings>
              <Column style={{flexGrow: 1, marginLeft: 10,}}>
                <CardTitle style={{fontSize: 20, marginBottom: -5, marginTop: 4,}}>Adicionar novo imóvel</CardTitle>
                <CardLabel>Crie seu imóvel na nossa plataforma.</CardLabel>
              </Column>
            </Row>

            <Line/>

            <View className="column" style={{padding: 20, paddingBottom: 0,}}>
              <CardTitle style={{fontSize: 18,}}>Trabalho em equipe</CardTitle>
              <CardLabel style={{fontSize:14,}}>Adicione colaboradores ao seu imóvel para que possam editar e modificar informações. <Premium>Premium</Premium>
              </CardLabel>
            </View>  

         
            <CardTitle style={{fontSize: 18, marginLeft: 20, marginBottom: 10,}}>Autor</CardTitle>
         
            <Profile>
              <ProfileImg src={user?.avatar}/>
              <View className='column' style={{marginLeft: -30,}}>
              <CardTitle style={{fontSize: 18, marginTop: 10,}}>{user.display_name}</CardTitle>
              <CardLabel style={{fontSize:14,}}>Criador, edita, modifica e pública.</CardLabel>
              </View>
              <BtSettings><AiOutlineCrown/></BtSettings>
            </Profile>
            <Line/>
            
            <CardTitle style={{fontSize: 18, marginLeft: 20, marginBottom: 0, marginTop: 15,}}>Colaboradores</CardTitle>


            <View className="column" style={{padding: '10px 20px',}}>
              <CardTitle style={{fontSize: 18,}}>Você é um robo?</CardTitle>
              <CardLabel style={{fontSize:14,}}>Esperamos que não, digite abaixo <CardLabel style={{fontFamily: font.bold, color: color.primary,}}>meunovoimovel</CardLabel>, para confirmar.</CardLabel>
              <Input onKeyDown={handleKeyDown} value={imovelNome} style={{marginBottom: 20,}} onChange={e => setNomeImovel(e.target.value)}  placeholder="Digite o que está escrito acima" type="text"/>

              <ButtonPR onClick={click}  off={!next} disabled={!next}>PRÓXIMO</ButtonPR>
            </View>  
            
          </View>
        </Modal>


        </Column>
        </Main>

  );
};

export default Dashboard;