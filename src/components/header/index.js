import React, { useContext , useState, useEffect} from 'react';
import Switch from 'react-switch';

import { TbAdjustmentsHorizontal } from "react-icons/tb";

import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Button,    
  ButtonLabel,
  Buttons,
  Spacing,

  TitleModal,
  Title,

  BtPrefe,
  Main,
  BtLabel,
  BtTitle,
  DarkMode,
  BtDelete,
  BtPolitica,
  BtLocation,
} from './styles';
import Ripples from 'react-ripples'
import Blur from "react-blur";
import LogoH from '../../assets/imgs/logo_h.png'
import Languague from '../../assets/imgs/languague.png'
import Language from '../../assets/imgs/language.png'
import Search from '../../components/search'
import { Ripple } from '../../theme/global';

import Preferencias from '../../assets/imgs/busca.png'

import CircularProgress from '@mui/material/CircularProgress';

import { MdKeyboardArrowDown } from 'react-icons/md'


const Header = ({ toggleTheme }) => {

  const { color, title } = useContext(ThemeContext)

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenPreferences, setIsOpenPreferences] = useState(false);

  const  openModal = () => {setIsOpen(true)}
  
  const  openModalPreferences = () => {setIsOpenPreferences(true)}
  const  closeModalPreferences = () => {setIsOpenPreferences(false)}
 
  const  closeModal = () => {setIsOpen(false)}  

  const [prefe, setPrefe] = useState([])

  const [loadDelete, setLoadDelete] = useState(false)
  const [del, setDel] = useState(false)
  
  const [loadGet, setLoadGet] = useState(false)

  
  const getData = () => {
    const JSONA = localStorage.getItem('@preferences')
    const JsonString = JSON.parse(JSONA)
    if(JsonString == null){
      setDel(true)
    }
    setPrefe(JsonString)
  }

  const deleteData = () => {
    setLoadDelete(true)
    try {
      localStorage.removeItem('@preferences')
      setTimeout(() => {
        setLoadDelete(false)  
        setDel(true)
      }, 2000);
      } catch (error) {
      setLoadDelete(false)
      console.log(error)
    }
  }

  
  useEffect(() => {
    getData()
  }, [])
  

  

  const a = false;
  
  const styleModal = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        margin: 'auto',
        width: '500px',
        border: '2px solid #00000020',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
       
        borderRadius: '12px',
        outline: 'none',
        padding: '0px 0px 0px 0px',
        zIndex: 999,
      }
}



  

  return (
    
    <Container>
    <div style={{flexDirection: 'row', display: 'flex',}}>
      <Link to={'../'}>
        <div>
          <img src={LogoH} style={{width: 160,}} />
        </div>
      </Link>

      <div style={{width: 2, marginLeft: 20, marginRight: 10, marginTop: 12, height: 40, background: "#00000020"}}/>
        
      <BtLocation>
        Jaraguá do Sul

        <MdKeyboardArrowDown size={22} style={{marginLeft: 4, marginBottom: -5,}}/>
      </BtLocation>
    </div>
      
      <Search/>

    <Buttons>
      {a &&
      <Ripples>  
        <Button type="button"><ButtonLabel>Real Brasileiro (R$)</ButtonLabel></Button>
      </Ripples>}

      <Spacing/>
      
      <Ripples>
        <Button type="button"  onClick={openModal}>
          <img src={Languague} style={{width: 24, height: 24, marginBottom: -5, marginRight: 8, borderRadius: 100}} />  
          <ButtonLabel>PT-BR</ButtonLabel>
        </Button>
      </Ripples>

      <Spacing/>

      <Ripples>
        <Button type="button" style={{backgroundColor: color.primary}}  onClick={openModalPreferences}>
        <TbAdjustmentsHorizontal size={24} color="#fff"/>
        </Button>
      </Ripples>
      


      <Spacing/>
      

      
    </Buttons>
    


    <Modal
        isOpen={modalIsOpen}
        closeTimeoutMS={300}
        onRequestClose={closeModal}
        style={styleModal}
        contentLabel="Example Modal"
      >
        <img src={Language} style={{width: 500,}} />
        <Title>Altere sua linguagem abaixo</Title>
      </Modal>

      
    <Modal
        isOpen={modalIsOpenPreferences}
        closeTimeoutMS={300}
        onRequestClose={() => setIsOpenPreferences(false)}
        style={styleModal}
        contentLabel="Example Modal"
      >
        <Main>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <TitleModal>Preferências</TitleModal>
        
        
        <DarkMode><span style={{marginRight: 16, marginTop: -10,}}>Tema Escuro</span>
          <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={18}
        width={40}
        handleDiameter={20}
        offColor="#D1D1D1"
        onColor="#8D9FFF"
        onHandleColor={color.primary}
        offHandleColor="#9C9C9C"
      /></DarkMode>

</div>

      {!del && <div style={{}}>

      <BtPrefe>
        <BtLabel>Seu nome</BtLabel>
        <BtTitle>{prefe?.name}</BtTitle>
      </BtPrefe>  

      
      <BtPrefe>
        <BtLabel>Valor</BtLabel>
        <BtTitle>R$ {prefe?.valor_max}</BtTitle>
      </BtPrefe>  

      
      <BtPrefe>
        <BtLabel>Tipo</BtLabel>
        {prefe.alugar && <BtTitle>Aluguel, {prefe.itemview}</BtTitle>}
        {prefe.comprar && <BtTitle>Comprar, {prefe.itemview}</BtTitle>}
      
      </BtPrefe>  
      
        
        </div>}

        {del && 
        <div style={{justifyContent: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}>
          <img src={Preferencias} style={{width: 250, borderRadius: 12, alignSelf: 'center', marginTop: 20, marginBottom: 20,}} />
          <Title>Você ainda não definiu suas preferências! Defina as agora em <Link to="/preferences">Preferências</Link>.</Title>

        </div>
        }


        <Buttons style={{justifyContent: 'space-between'}}>
          <BtPolitica>Política de Privacidade</BtPolitica>
          <BtDelete disabled={del} activity={del} onClick={deleteData}>Excluir Dados 
          {loadDelete && <CircularProgress size={20} style={{color: color.light, marginLeft: 10}}/>}</BtDelete>

        </Buttons>
        </Main>
      </Modal>











    </Container>
  );
};

export default Header;