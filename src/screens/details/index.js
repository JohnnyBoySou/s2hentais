import React, { useContext , useState, useEffect, useRef} from 'react';

import Modal from 'react-modal';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Title,
  Row,
  Like,
  BtAction,
  Spacing,
  ImgLarge, 
  ImgSmall,
  Nav,
  Gallery,
  CardInfo,

  Column,
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
  ShowImgs,

  ItemBt,
  Alert,
  BtBuy, 
  LineV,
  CardInfoT,
  ContactBt,
} from './styles';
import vid from '../../assets/imgs/loader.gif'

import { ButtonBR, ButtonPR, Ripple, Back } from '../../theme/global'

import { useParams, useNavigate } from 'react-router-dom';
 

import { requestSearch } from '../../api/request/index'

import stylesModal from './stylesModal.js'


import { 
  FiHeart, 
  FiMoreHorizontal, 
  FiShare,
  FiArrowRight
} from "react-icons/fi";

import QuickMap from '../../components/quick_map';

import { FaMapMarkerAlt } from "react-icons/fa"
import { FiAlertCircle } from "react-icons/fi"
import { MdKeyboardArrowRight } from 'react-icons/md'

import RowListH from '../../structure/rows/list_h';

const Details = ( ) => {

  const navigate = useNavigate()

  const { color, font } = useContext(ThemeContext)
  const { id } = useParams();
  const [item, setItem] = useState([])
  const [load, setLoad] = useState(false)
  const [like, setLike] = useState(false)
  const [firstStep, setFS] = useState(true)
  const [secondStep, setSS] = useState(false)
  
  const [modalImages, setModalImages] = useState(false);
  const [modalShare, setModalShare] = useState(false);

  function get(){
    setLoad(true)
    requestSearch(id).then(
      function(item) {
        setItem(item)
        setLoad(false)
      })
  }



  function next(){
    setFS(false)
    setSS(true)

  }

  const vidRef = useRef(null)
  const handlePlayVideo = () => {
    vidRef.current?.play();
  }

  useEffect(() => {
    get()
    handlePlayVideo()
   }, [])

   const a = false;
   const location = {lat: item?.latitude, long: item?.longitude}

   const tax = item?.taxas
   const value = 43

  return (
    <div>
    <Container>

      <Nav>
        <Back onClick={() => navigate(-1)}>VOLTAR</Back>

        <div style={{display: 'flex', }}>


          <Routes>
          <Route>Início</Route>
          <MdKeyboardArrowRight/>
          <Route>Imóveis</Route>
          <MdKeyboardArrowRight/>
          <Route style={{textDecoration: 'underline', color: color.title,}}>Detalhes</Route>
          </Routes>


          <Like activity={like}><FiHeart size={18}/></Like>
          
          <Spacing/>
          
          <BtAction><FiMoreHorizontal size={18}/></BtAction>
          
          <Spacing/>
          
          <BtAction><FiShare size={18}/></BtAction>
        
        </div>
      </Nav>

      {load && <div style={{ width: 400, height: 400 , alignSelf: 'center',}}>
        <img src={vid} style={{ width: 400, height: 300 , alignSelf: 'center',}}/>
      </div>}

     {!load && <Section>
      <Left>
        <Gallery>

          
          <div style={{width: "75%", }}>
            <ImgLarge src={ item?.imagem1 } onClick={() => setModalImages(true)}/>
            <ShowImgs>VER FOTOS</ShowImgs>
          </div>
          
          
          <div style={{width: "25%",  marginLeft: 20,}} >
         
            <ImgSmall src={ item?.imagem2 } />
            <Spacing/>
            <ImgSmall src={ item?.imagem3 }/>
            <Spacing/>
            <ImgSmall src={ item?.imagem4 }/>
          </div>

        </Gallery>
        </Left>

        <Right style={{marginRight: 25,}}>
          {firstStep &&
        <CardInfo>
          <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', }}>
            {item?.tipo == "Por mês" && <Title style={{margin: 0, marginLeft: 10, fontSize: 28, }}>{item?.categoria}, Aluguel</Title>}
            {item?.tipo == "Valor Único" && <Title style={{margin: 0, marginLeft: 10, fontSize: 28, }}>{item?.categoria}, Comprar</Title> }
            
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
            <ProfileImg/>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10,}}>
              <ProfileTitle>Arthur Muller</ProfileTitle>
              <ProfileAddress >Rua Gov Jorge Lacerda</ProfileAddress>
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
        <Title style={{marginLeft:0, fontSize: 32, marginBottom: 10,}}> {item?.categoria} com {item?.qtd1} {item?.item1}s, {item?.qtd2} {item?.item2} e {item?.area} m2</Title>
        <Address><FaMapMarkerAlt size={20} color={color.primary}/> {item?.bairro}, Rua {item?.rua}</Address>
        <Description>{item?.descricao}</Description>
        <Hr style={{marginTop: 30, marginLeft: 0, marginRight: 10, marginBottom:30,}}/>
      
        
        <QuickMap location={location}/>

        <Hr style={{marginTop: 30, marginLeft: 0, marginRight: 10, marginBottom:30,}}/>
      
      </Left>
      <Right style={{width: "34%"}}>
        <Profile>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProfileImg/>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10,}}>
              <ProfileTitle>Arthur Muller</ProfileTitle>
              <ProfileAddress>Rua Gov Jorge Lacerda</ProfileAddress>
            </div>
            </div>
          <ProfileDescription>Com mais de 12 anos no mercado imóbiliario Arthur Muller conta com mais de 10 mil imóveis vendidos.</ProfileDescription>
          
        <ButtonPR>VER MAIS</ButtonPR>

        </Profile>
      </Right>
    </InfoSection>   }




    </Container>


















    

    <Modal isOpen={modalImages} closeTimeoutMS={300}
        onRequestClose={() => setModalImages(false)}
        style={stylesModal}>

        <Title>Galeria de imagens</Title>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <ImgLarge src={ item?.imagem1}/>
          <Spacing/>
          <ImgLarge src={ item?.imagem2}/>
          <Spacing/>
          <ImgLarge src={ item?.imagem3} style={{marginTop: 20,}}/>
          <Spacing/>
          <ImgLarge src={ item?.imagem4} style={{marginTop: 20,}}/>
        </div>
      </Modal>


    </div>
  );
};

export default Details;