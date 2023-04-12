import React, { useContext , useState, useEffect, useRef} from 'react';

import Modal from 'react-modal';

import DocumentMeta from 'react-document-meta'
import './animation.css'
import AdPoster from '../../components/adposter';
import Similar from '../../components/similar'

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
  IconBt,
} from './styles';
import vid from '../../assets/imgs/loader.gif'


import GalleryFull from '../gallery';
import { ButtonPR,  Back, ButtonBR } from '../../theme/global'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { useParams, useNavigate } from 'react-router-dom';
 
import { requestID, requestImobil , requestLike, requestPreferences, requestUserEndpoint} from '../../api/request/index'

import stylesModal from './stylesModal.js'
import share from '../../assets/imgs/share.png'

import { 
  FiHeart, FiExternalLink,
  FiShare,
  FiArrowRight,
  FiX,
  FiCheck,
  FiAlertCircle
} from "react-icons/fi";

import { AiFillHeart , AiOutlineHeart, AiOutlineEye} from 'react-icons/ai'

import QuickMap from '../../components/quick_map';

import { FaMapMarkerAlt } from "react-icons/fa"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Row, Column} from '../../theme/global';
import { IoIosImages } from 'react-icons/io';
import Header from '../../components/header';
import infraestrutura from './../../api/infraestrutura';

const Details = ( ) => {

  const navigate = useNavigate()

  const { color, font } = useContext(ThemeContext)
  const { id } = useParams();
  const [item, setItem] = useState([])
  const [author, setAuthor] = useState([])
  const [load, setLoad] = useState(true)
  const [loadImobil, setLoadImobil] = useState(true)
  const [loadSimiliar, setLoadSimiliar] = useState(true);
  const [like, setLike] = useState(false)
  const [firstStep, setFS] = useState(true)
  const [secondStep, setSS] = useState(false)
  
  const [modalImages, setModalImages] = useState(false);
  const [modalShare, setModalShare] = useState(false);

  function getData(){
    setLoad(true)
    requestID(id).then(item => {
        if(item){
          setItem(item[0])
          getAuthor(item[0].post_author)
          setLoad(false)
      }
      })
  }


    const [itemSimilar, setItemSimilar] = useState([])
    const quickItem = [item[1] , item[2] , item[3]]



  
  function getAuthor( id ){
    setLoadImobil(true)
    requestUserEndpoint(id).then(item => {
        setAuthor(item)
        console.log(item)
        //getSimiliar()
        setLoadImobil(false)
      })
  }


  function getSimiliar(){
    setLoadSimiliar(true)
    requestPreferences().then(item => {
      if(item){
        setItemSimilar(item)
        setLoadSimiliar(false)
  }})}


  const [likeLoad, setlikeLoad] = useState(false);
  const [likeClick, setLikeClick] = useState(false);
  const handleLike = () => { 
    setlikeLoad(true)
    setLikeClick(true)
    requestLike(item.ID).then(response => {
      if(response){
        console.log(response)
      setlikeLoad(true)
      setLikeClick(true)
      }else{
      setlikeLoad(false)
      setLikeClick(false)
      }
    })
  }



  function next(){
    setFS(false)
    setSS(true)

  }

  useEffect(() => {
    getData()
   }, [])

   const a = false;
   const location = {lat: item?.latitude, long: item?.longitude}

   const tax = item?.taxas
   const infra = item?.infraestrutura

  
  const modalGalleryStyles = {
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
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      margin: 'auto',
      border: '2px solid #00000020',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '0px',
      outline: 'none',
      transition: 'linear .2s',
      padding: 10,
      paddingTop: 20,
      zIndex: 999,
    }
  }


      
  const [popupview, setPopupView] = useState(false)
  const imagesFull = [ item?.imagem1, item?.imagem2, item?.imagem3,item?.imagem4, item?.imagem5, item?.imagem6, item?.imagem7, item?.imagem8, item?.imagem9, item?.imagem10, item?.imagem11, item?.imagem12, item?.imagem13, item?.imagem14, item?.imagem15, ]

  const headerTitle = `Imóvel ${item?.ID} | Detalhes`
  return (
    <div>
      
      <DocumentMeta title={headerTitle} />
    <Header />
    <Container>

        <Row style={{justifyContent: 'space-between', padding: "20px 0px",}}>
        
        <Back style={{borderRadius: 100, width: 120, height: 46, }} onClick={() => navigate(-1)}>VOLTAR</Back>
        


       {a && <PopularBt className='br'>
          <BsFillLightningChargeFill size={12} color={color.secundary} 
          style={{background: "#fff", padding: 4, marginBottom: -3, marginRight: 8, borderRadius: 12,}}/>
          POPULAR</PopularBt>}


          <Routes style={{marginTop: -20,}}>
            <Route>Início</Route>
            <MdKeyboardArrowRight/>

            
            <Route>Jaraguá do Sul</Route>
            
            <MdKeyboardArrowRight/>
            <Route>Imóveis</Route>
            <MdKeyboardArrowRight/>
            <Route style={{textDecoration: 'underline', color: color.title,}}>Detalhes</Route>
          </Routes>

        <Row>
            <Column>
              <BtAction><AiOutlineEye style={{color: color.primary}} size={18}/></BtAction>
              <Route style={{margin: 'auto', marginTop: 6, }}>{item?.views}</Route>
            </Column>

            <Spacing/>
            <Column>
              <Like disabled={likeLoad} onClick={handleLike} activity={like}>
              {likeClick && <AiFillHeart size={18} style={{color: 'red'}}/>}
              {!likeClick && <AiOutlineHeart size={18} style={{color: "#00000090"}}/>}
            
              </Like>
              <Route style={{margin: 'auto', marginTop: 6, }}>{item?.like}</Route>
            </Column>
          
            <Spacing/>
          
            <Column> 
              <BtAction><FiShare size={18}/></BtAction>
            </Column>

          </Row>
          </Row>

      {load && <div style={{ width: 400, height: 400 , alignSelf: 'center',}}>
        <img src={vid} alt="loading imovel" style={{ width: 400, height: 300 , alignSelf: 'center',}}/>
      </div>}

     {!load && <Section>
      <Left>
        <Gallery>

          
          <div style={{width: "75%", }}>
            <ImgLarge src={ item?.imagem1 } onClick={() => setModalImages(true)}/>
        
          </div>
          
          
          <div style={{width: "25%",  marginLeft: 20,}} >
         
            <ImgSmall src={ item?.imagem2 } />
            <Spacing/>
            <ImgSmall src={ item?.imagem3 }/>
            <Spacing/>
            <BtSmall onClick={() => setModalImages(!modalImages)}>
              <IoIosImages size={52}/><br/>
              Ver fotos</BtSmall>
          </div>

        </Gallery>
        </Left>

        <Right >
          {firstStep &&
        <CardInfo>
          <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', }}>
            {item?.tipo === "Por mês" && <Title style={{margin: 0, marginLeft: 10, fontSize: 28, }}>{item?.categoria}, Aluguel</Title>}
            {item?.tipo === "Valor Único" && <Title style={{margin: 0, marginLeft: 10, fontSize: 28, }}>{item?.categoria}, Comprar</Title> }
            
            <Code>#{item?.ID}</Code>
          </div>
          <Hr/>
          <div style={{marginTop: 20, marginBottom: 10, marginLeft: 10, marginRight: 6,}}>
            <ItemBt style={{width: '47%', marginRight: 10,}}>{item?.qtd1} {item?.item1}s</ItemBt>
            
            <ItemBt style={{width: '47%'}}>{item?.qtd2} {item?.item2}</ItemBt>
          </div>
          
          <ItemBt style={{width:'93%', marginBottom: 20, marginLeft: 10, marginRight: 10,}}>{item?.area} metros quadrados</ItemBt>
          <Hr/>
          <div style={{display: 'flex', flexDirection: 'column', padding: 12,}}>
            <ValueLabel>{item?.tipo}</ValueLabel>
            <ValueTitle>R$ {item?.valor_mensal}</ValueTitle>
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

            <BtBuy onClick={next}>
              <div style={{width: "79%"}}>Alugar agora</div>
              <LineV/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>


          </div>
        </CardInfo>
}
        {secondStep &&
        <CardInfoT>

<div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', }}>
            <Title style={{margin: 0, marginBottom: 10, marginLeft: 10, fontSize: 26, color: color.light, }}>Este imóvel é ofertado por:</Title>
            
          </div>
          <Hr style={{backgroundColor: "#ffffff40"}}/>
             
          <Profile style={{border: 'none', marginLeft: 10, marginRight: 10, marginTop: 20, backgroundColor: color.light,}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProfileImg src={ author?.avatar }/>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10,}}>
              <ProfileTitle>{author?.display_name}</ProfileTitle>
              <ProfileAddress >{author?.cep}</ProfileAddress>
            </div>
            </div>
        
        </Profile>
          
          
        <Hr style={{backgroundColor: "#ffffff40", marginTop: 30,}}/>
        
          
          <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 20,}}>
          <Title style={{color: color.light, margin: 0,}}>Como você deseja entrar em contato?</Title>

          <BtBuy style={{backgroundColor: "#fff", color: color.primary,}} onClick={next}>
              <div style={{width: "79%"}}>WhatsApp</div>
              <LineV style={{backgroundColor: color.primary, width: 3,}}/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>



            <BtBuy style={{backgroundColor: "#fff", color: color.primary,}} onClick={next}>
              <div style={{width: "79%"}}>E-mail</div>
              <LineV style={{backgroundColor: color.primary, width:3,}}/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>




            <BtBuy style={{backgroundColor: "#fff", color: color.primary,}} onClick={next}>
              <div style={{width: "79%"}}>Telefone</div>
              <LineV style={{backgroundColor: color.primary, width:3,}}/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>





          </div>
          

        </CardInfoT>
        }




        </Right>

      </Section> }
      {!load && <InfoSection>
      <Left>
        <Title style={{marginLeft:0, fontSize: 32, marginBottom: 10,}}> {item?.categoria} com {item?.qtd1} {item?.item1}s, {item?.qtd2} {item?.item2} e {item?.area}m&#178;</Title>
        <Address><FaMapMarkerAlt size={20} color={color.primary}/> {item?.bairro}, Rua {item?.rua}</Address>
        
        <Description>{item?.descricao}</Description>
        <div style={{flexDirection: 'row', justifyContent: 'space-between', display: 'flex'}}>
        <Infra>
              <TaxLabel style={{fontSize: 28, color: color.title}}>Infraestrutura</TaxLabel>
             <div style={{marginLeft: 10, marginTop: 20,}}>
              {infra?.map((infra) => 
              <Lista>
                <InfraBall><FiCheck style={{textAlign: 'center', marginTop: 4,}} /></InfraBall>
                <InfraLabel>{infra}</InfraLabel>
              </Lista> )}
              </div>
      </Infra>

      </div>

        <Hr style={{marginTop: 50, marginLeft: 0, marginRight: 10, marginBottom:30,}}/>
      
        {a && <QuickMap item={item}/> }

      </Left>

      <Right style={{width: "31%"}}>
        <Profile>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProfileImg src={author?.avatar}/>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10,}}>

              <ProfileTitle>{author?.nome} {author?.sobrenome}</ProfileTitle>
              <ProfileAddress>{author?.user_email}</ProfileAddress>
            </div>
            </div>
            <Row style={{justifyContent: 'space-between', marginTop: 20, marginBottom: 20,}}>
              <IconBt>
                <AiOutlineInstagram/>
              </IconBt>
              
              <IconBt>
                <AiOutlinePhone/>
              </IconBt>
              
              <IconBt>
                <AiOutlineWhatsApp/>
              </IconBt>

              <IconBt>
                <AiOutlineMail/>
              </IconBt> 

              <IconBt>
                <FiExternalLink/>
              </IconBt> 
            
            </Row>
            <ProfileDescription>{author?.descricao}</ProfileDescription>
        <ButtonPR>VER PERFIL</ButtonPR>

        </Profile>
        

      </Right>


      
    </InfoSection>   }

    


    {!load && <AdPoster/>}
    
    {!load &&  <Hr style={{marginTop: 50, marginLeft: 0, marginRight: 10, marginBottom:20,}}/>}
    {!load && <Similar data={itemSimilar}/>}
    
    {popupview && <QuickPoup className='fade'> 
        
        <div style={{display: 'flex', flexDirection: 'column', padding: 12,}}>
            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{flexDirection: 'column', display: 'flex'}}>
              <ValueLabel style={{fontSize: 18,}}>{item?.tipo}</ValueLabel>
              <ValueTitle style={{fontSize: 28,}}>R$ {item?.valor_mensal}</ValueTitle>
            </div>


            

            </div>

            <div>
            <Tax className='left' style={{paddingLeft: 5}}>
              <TaxLabel style={{fontSize: 18}}>Taxas adicionais</TaxLabel>
              <ul>

              {tax?.map((tax) => <TaxLi style={{fontSize: 14, marginLeft: -5,}} key={tax}>{tax}</TaxLi> )}
              
              </ul>
            </Tax>

            


            <BtBuy  onClick={next} style={{
              fontSize: 18, width: '100%'}}>
              <div style={{width: "79%"}}>Alugar agora</div>
              <LineV style={{height: 46,}}/>
              <div style={{width: "20%", marginTop: 6,}}><FiArrowRight size={32}/></div>
            </BtBuy>
          </div></div>
        </QuickPoup>}

        <QuickNext onClick={() => setPopupView(!popupview)}>
          {!popupview && <FiCheck style={{alignSelf: 'center'}}/>}
          {popupview && <FiX style={{alignSelf: 'center'}}/>}

        </QuickNext>

        {a && <QuickTour src={item.imagem2}/>}


    </Container>



















    

    <Modal isOpen={modalImages} closeTimeoutMS={300}
        onRequestClose={() => setModalImages(false)}
        style={modalGalleryStyles}>
          <GalleryFull imgs={imagesFull}/>
          <ButtonPR onClick={() => setModalImages(false)} style={{position: 'absolute', top: 20, left: 20, background: "#000"}}>FECHAR</ButtonPR>

      </Modal>


    </div>
  );
};

export default Details;