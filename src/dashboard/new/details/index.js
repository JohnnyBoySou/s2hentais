import React, { useContext , useState, useEffect, useRef} from 'react';

import Modal from 'react-modal';
import '../../../theme/animation.css'

import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Title,
  Like,
  BtAction,
  Spacing,
  ImgLarge, 
  ImgSmall,
  Nav,
  Gallery,
  CardInfo,

  Section,
  Code,
  Hr,
  Value,
  ValueLabel,
  ValueTitle,
  Tax,
  TaxLabel,
  TaxLi,

  Address,
  Description,

  InfoSection,
  Left,
  Right,
  Routes,
  Route,

  Profile,
  ProfileImg,
  ProfileTitle,
  ProfileAddress,
  ProfileDescription,
  ItemBt,
  Alert,
  BtBuy, 
  LineV,
  CardInfoT,
  BtSmall,
  InfraLabel, 
  InfraLi,
  Infra,

  QuickPoup,
  QuickNext,
  QuickTour,

  PopularBt,
  Conservation,
  BarOn,
  BarOff,
  AnyTitle,

  Lista,
  InfraBall,
  View,
  Spacing2,
} from './styles';

import { ButtonPR,  Back, ButtonBR } from '../../../theme/global'

import { BsFillLightningChargeFill } from 'react-icons/bs'
import { useParams, useNavigate } from 'react-router-dom';
 
import { maskValueBR } from '../../../utils/masks'
import { requestSearch, requestImobil , requestPreferences} from '../../../api/request/index'

import { 
  FiHeart, 
  FiShare,
  FiArrowRight,
  FiX,
  FiCheck,
  FiAlertCircle
} from "react-icons/fi";


import QuickMap from '../../../components/quick_map';

import { FaMapMarkerAlt } from "react-icons/fa"
import { MdKeyboardArrowRight } from 'react-icons/md'

import { IoIosImages } from 'react-icons/io';
import Item from '../../../components/item';

const Details = ( props ) => {

  const navigate = useNavigate()

  const { color, font } = useContext(ThemeContext)
  const { id } = useParams();
  const [item, setItem] = useState(props.imovel[0])
 
  const valor_mensal = item.valor_mensal + 0 + 0
  const valor = maskValueBR(valor_mensal)
  const [imobil, setImobil] = useState([])
  const [load, setLoad] = useState(false)
  const [loadImobil, setLoadImobil] = useState(false)
  const [like, setLike] = useState(false)
  const [firstStep, setFS] = useState(true)
  const [secondStep, setSS] = useState(false)
  
  const [modalImages, setModalImages] = useState(false);
  const [modalShare, setModalShare] = useState(false);

  function get(){
    setLoad(true)
    requestSearch(id).then(
      function(item) {
        setItem(item[0])
        console.log(item)
        setLoad(false)
      })
  }


    const [itemSimilar, setItemSimilar] = useState([])

    

 

   const a = false;
   const location = {lat: item?.latitude, long: item?.longitude}

   const tax = item?.taxas
   const infra = item?.infraestrutura

   const openGallery = () => {
    setModalImages(!modalImages)
   }

  const modalShareStyles = {
    overlay: {
      position: 'fixed',
      top: 10,
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
      transition: 'linear .2s',
      padding: 0,
      zIndex: 999,
    }
  }

  

  const [offset, setOffset] = useState(0);

  const [index, setIndex] = useState(true);

  const onScroll = () => setOffset(window.pageYOffset);
     
  useEffect(() => {
  
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
     }, []);


     useEffect(() => {
        if(offset > 200){
          setIndex(false)
}})


  const [taxView, setTaxView] = useState(false)
  const [canView, setCanView] = useState(false)
  const handleTax = () => {
    setCanView(!canView)
    setTimeout(() => {
      setTaxView(!taxView)
    
    }, 300);
    }
      
  const [popupview, setPopupView] = useState(false)
  const imagesFull = [ item?.imagem1, item?.imagem2, item?.imagem3,item?.imagem4, item?.imagem5, item?.imagem6, item?.imagem7, item?.imagem8, item?.imagem9, item?.imagem10, item?.imagem11, item?.imagem12, item?.imagem13, item?.imagem14, item?.imagem15, ]

  return (
    <Container>

      <Nav>
         
          <Routes>
          <Route>Dashboard</Route>
          <MdKeyboardArrowRight/>
          <Route>Imóveis</Route>
          <MdKeyboardArrowRight/>
          <Route style={{textDecoration: 'underline', color: color.title,}}>Detalhes</Route>
          </Routes>


        <View className='row'>
          <Like activity={like}><FiHeart size={18}/></Like>
          <Spacing/>  
          <BtAction><FiShare size={18}/></BtAction>
        </View>
      </Nav>

    <Section>
      <Left>
        <Gallery>
          <ImgLarge src={ item?.imagem1 } onClick={() => setModalImages(true)}/>
      
          <View className='row' style={{marginTop: 20,}}>   
            <ImgSmall src={ item?.imagem2 } />
            <Spacing/>
            <ImgSmall src={ item?.imagem3 }/>
            <Spacing/> 
            <ImgSmall src={ item?.imagem4 }/>
            <Spacing/>
            <BtSmall onClick={openGallery}>
              <IoIosImages size={52}/><br/>
              Ver fotos</BtSmall>
          </View>

        </Gallery>
        </Left>

        <Right>
          
          <CardInfo>
          <View className='row' style={{justifyContent: 'space-between',marginTop: 6, }}>
            {item?.tipo === "Por mês" && <Title style={{margin: 0, marginLeft: 10,  fontSize: 24, }}>{item?.categoria}, Aluguel</Title>}
            {item?.tipo === "Valor Único" && <Title style={{margin: 0, marginLeft: 10, fontSize: 24, }}>{item?.categoria}, Comprar</Title> }
            
            <Code>#{item?.ID}</Code>
          </View>
          <Hr/>
          <View className='row' style={{marginTop: 20, marginLeft: 10, marginRight: 10, justifyContent: 'space-between',}}>
           <ItemBt style={{width: '100%'}}>{item?.qtd1} {item?.item1}s</ItemBt>
           <Spacing2/>
           <ItemBt style={{width: '100%'}}>{item?.qtd2} {item?.item2}s</ItemBt>
          </View>
          <View style={{width: '100%', textAlign: 'center', marginTop: 10, marginBottom: 20,}}>
            <ItemBt style={{width: '94%', marginLeft: 10, marginRight: 10,}}>{item?.area} metros quadrados</ItemBt>
         </View>
      
          <Hr/>
          <div style={{display: 'flex', flexDirection: 'column', padding: 12,}}>
            <ValueLabel>{item?.tipo}</ValueLabel>
            <ValueTitle>R$ {valor}</ValueTitle>
            <Tax>
              <TaxLabel>Taxas adicionais</TaxLabel>
              <ul>

              {tax?.map((tax) => <TaxLi key={tax}>{tax}</TaxLi> )}
              
              </ul>
            </Tax>


            <div style={{display: 'flex', flexDirection: 'row', marginTop: 20,}}>
              <FiAlertCircle style={{marginRight: 10,}} size={32} color="#00000080"/>
              <Alert>Esses valores podem estar sujeitos a mudanças.</Alert>
            </div>

            <BtBuy >
              <div style={{width: "79%"}}>Alugar agora</div>
              <LineV/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>


          </div>
        </CardInfo>
        {secondStep &&
        <CardInfoT>

<div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', }}>
            <Title style={{margin: 0, marginBottom: 10, marginLeft: 10, fontSize: 26, color: color.light, }}>Este imóvel é ofertado por:</Title>
            
          </div>
          <Hr style={{backgroundColor: "#ffffff40"}}/>
             
          <Profile style={{border: 'none', marginLeft: 10, marginRight: 10, marginTop: 20, backgroundColor: color.light,}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProfileImg src={ imobil?.foto }/>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10,}}>
              <ProfileTitle>{imobil?.nome}</ProfileTitle>
              <ProfileAddress >{imobil?.endereco}</ProfileAddress>
            </div>
            </div>
        
        </Profile>
          
          
        <Hr style={{backgroundColor: "#ffffff40", marginTop: 30,}}/>
        
          
          <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 20,}}>
          <Title style={{color: color.light, margin: 0,}}>Como você deseja entrar em contato?</Title>

          <BtBuy style={{backgroundColor: "#fff", color: color.primary,}} >
              <div style={{width: "79%"}}>WhatsApp</div>
              <LineV style={{backgroundColor: color.primary, width: 3,}}/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>



            <BtBuy style={{backgroundColor: "#fff", color: color.primary,}} >
              <div style={{width: "79%"}}>E-mail</div>
              <LineV style={{backgroundColor: color.primary, width:3,}}/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>




            <BtBuy style={{backgroundColor: "#fff", color: color.primary,}} >
              <div style={{width: "79%"}}>Telefone</div>
              <LineV style={{backgroundColor: color.primary, width:3,}}/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>


          </div>
          

        </CardInfoT>
        }




        </Right>

      </Section> 



    </Container>
  );
};

export default Details;