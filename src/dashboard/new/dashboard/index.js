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
  Banner,
  Title,
  Img,
  Row,
  ItemImg,
  ItemCard,
  ItemTitle,
  B,
  ViewCard,
  Chip,
  ItemCard2,
  SpecialView,
  SpecialTitle,
  onda1,
  onda2,
  Onda1,
  Onda2,
  ItemCard3,
  NewImovel,
  Background,
  Ripple,
  LiquidEffect,
} from './styles';



import Carousel from 'react-grid-carousel'
import { ButtonBR, ButtonPR, ButtonLight } from '../../../theme/global'
import { AiOutlineSetting, AiOutlineUsergroupAdd} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { BsHouseAdd } from 'react-icons/bs'
import { TfiStatsUp } from 'react-icons/tfi'
import { TbHandClick } from 'react-icons/tb'

import Select from 'react-select' 
import newImovel from '../../../assets/imgs/new_imovel.png'
import Modal from 'react-modal';

import vid from '../../../assets/imgs/loader.gif'
import Suff from '../../../assets/imgs/suff.png'
import Box from '../box'
import RowFlow from './../../../components/cards/row_flow/index';
import { customStyles } from '../../../api/customStyles';
import { requestFeed, requestID, } from '../../../api/request';
import { Column } from './../../../theme/global';
import { requestViewsForUser , requestLikesForUser, requestMostPopular } from '../../../api/request/stats'
import ListH6 from '../../../structure/cards/list_h_6';
import { FiEye, FiHeart } from 'react-icons/fi';
import { style } from '@mui/system';

const Dashboard = ( props ) => {

  const { color, font } = useContext(ThemeContext)

  const [item, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);
  const navigate = useNavigate()

  const [vllike, setVllike] = useState();
  const [vlview, setVlview] = useState();
  const [mostView, setMostView] = useState();
  const [mostLike, setMostLike] = useState();
  const click = props.click
  const user = props.user


  const handleStats = ( ) => { 
    setLoadingStats(true)
    if(user.ID){
    requestLikesForUser(user.ID).then(
      response => {setVllike(response?.total_likes);setLoadingStats(false)}
    )
    requestViewsForUser(user.ID).then(
      response => {setVlview(response?.total_views);setLoadingStats(false)}
    ) 
    requestMostPopular(user.ID).then(
      response => {
        console.log(response)
        requestID(response.most_viewed_id).then(item => setMostView(item[0]))
        requestID(response.most_liked_id).then(item => setMostLike(item[0]))
      }
    )

    setLoadingStats(false)}}


  const views = {
    name: 'Visualizações',
    value1: vlview,
    value2: '24',
  }
  const likes = {
    name: 'Curtidas',
    value1: vllike,
    value2: '10',
  }
  const interaction = {
    name: 'Interações',
    value1: Number(vlview + vllike),
    value2: '34',
  }

  


  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);


  const handleFeed = () => { 
    setLoading(true)
    requestFeed().then(response => {
      setFeed(response)
      setLoading(false)
    })
   }
  
  const a = false;

  const [imovelNome, setNomeImovel] = useState('meunovoimovel')
  const [next, setNext] = useState(false)
  useEffect(() => {
    handleFeed()
    handleStats()
    if(imovelNome === "meunovoimovel"){setNext(true)}}, 
  [])

  const handleKeyDown = (event) => {if (event.key === 'Enter') {if(imovelNome === "meunovoimovel"){click()}else{return}}}
  
  const Imoveis = () => {
    return (
      <Carousel showDots cols={3} rows={1} gap={20} loop>
        {item.map((item, i) => 
          <Carousel.Item key={i}>
            <RowFlow data={item}/>   
          </Carousel.Item>
          )}
        </Carousel>
      )
  }


  
  const options = [
    { value: 'Popular', label: 'Popular' },
    { value: 'Recentes', label: 'Recentes' },
    { value: 'Aleatorio', label: 'Aleatório' }
  ]

  const ItemMostView = ({ item }) => { 
    const item1 = Number(vlview);
    const item2 = Number(item?.views); 
  
    const proporcao = item2 / item1;
    const percentage = Number(proporcao * 100).toFixed(0);
    const interactions = Number(item?.views) + Number(item?.like)
    const FormtTitle = () => (<ItemTitle style={{fontFamily: font.book, fontSize: 20}}><B>{item?.categoria}</B> com <B>{item?.qtd1} {item?.item1}s, {item?.qtd2} {item?.item2}s</B> e <B>{item?.area}m&#178;</B>, localizada no bairro <B>{item?.bairro}</B> na <B>{item?.rua}</B> no número <B>{item?.numero}</B>, por <B>R$ {item?.valor_mensal},00</B> ao mês. </ItemTitle>)
    return(
      <Row>
      <ItemCard>
        <Column>
          <Row style={{justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20,}}>
            <ItemTitle style={{color: color.label, fontSize: 22,}}>Mais Visualizado</ItemTitle>
          
            <Row>
              <Chip style={{background: color.primary, borderRadius: 6, color: color.light, cursor: "pointer",paddingRight: 15, paddingLeft: 15, marginBottom: 8, marginTop: 0,  }}  onClick={() => navigate(`../../details/${item?.ID}`, )} >Ver detalhes</Chip>
              <Chip style={{paddingRight: 15, paddingLeft: 15, marginBottom: 8, marginTop: 0,}}>Código #{item?.ID}</Chip>
           </Row>
          </Row>

          <Line />
          <Row style={{marginTop: 15, marginLeft: 20, marginRight: 20, alignSelf: 'center'}}>
            <Row style={{ alignItems: 'center', display: 'flex'}}>
              <ItemImg style={{zIndex: 4, border: '3px solid #37CB84'}} src={item?.imagem1} />
              <ItemImg style={{zIndex: 3, border: '3px solid #5B72F2', marginLeft: -30, width: 100, height: 170,}} src={item?.imagem2} />
              <ItemImg style={{zIndex: 2, border: '3px solid #FE7359', marginLeft: -30, width: 80, height: 130,}} src={item?.imagem3} />
            </Row>

            <Column style={{marginLeft: 20, paddingBottom: 10,}}>
              <FormtTitle/>
              <Row style={{justifyContent: 'space-between', marginTop: 15,}}>
                <ViewCard>
                  <View style={{margin: 'auto', width: 52, height: 52, borderRadius: 100, background: color.primary+20, color: color.primary, textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                    <FiEye style={{ margin: 'auto'}} size={24} />
                  </View>
                  <ItemTitle style={{color: color.medium, fontSize: 24, marginBottom: 0,}}>{item?.views} </ItemTitle>
                </ViewCard>
                <Spacing />
                <ViewCard>
                  <View style={{margin: 'auto', width: 52, height: 52, borderRadius: 100, background: color.primary+20, color: color.primary, textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                    <FiHeart style={{ margin: 'auto'}} size={24} />
                  </View>
                  <ItemTitle style={{color: color.medium, fontSize: 24, marginBottom: 0,}}>{item?.like} </ItemTitle>
                </ViewCard>
                <Spacing />
                <ViewCard>
                  <View style={{margin: 'auto', width: 52, height: 52, borderRadius: 100, background: color.primary+20, color: color.primary, textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                    <TbHandClick style={{ margin: 'auto'}} size={24} />
                  </View>
                  <ItemTitle style={{color: color.medium, fontSize: 24, marginBottom: 0,}}>{interactions} </ItemTitle>
                </ViewCard>
                <Spacing />
               </Row>
            </Column>

            
          </Row>
        </Column>
      </ItemCard>

      <ItemCard2>
      <Column style={{textAlign: 'center',}}>
        <View style={{background: "#ffffff30", alignSelf: 'center', borderRadius: 80, width: 80, height: 80,flexDirection: 'column', display: 'flex', justifyContent: 'center'}}>
          <TfiStatsUp style={{color: "#fff", margin: 'auto', paddingTop: -10,}} size={32}/>
        </View>
            
        <ItemTitle style={{color: color.light, marginTop: 10, fontFamily: font.book}}>Este imóvel representa </ItemTitle> 
         <ItemTitle style={{fontSize: 42, marginBottom: -10, marginTop: -10, color: '#fff', fontFamily: font.bold}}>{percentage}%</ItemTitle>
         <ItemTitle style={{color: color.light, fontFamily: font.book}}>das suas Visualizações!</ItemTitle> 
        
              </Column>
      </ItemCard2>
      </Row>
    )
   }

   
  const ItemMostLike = ({ item }) => { 
    const item1 = Number(vllike);
    const item2 = Number(item?.like); 
  
    const proporcao = item2 / item1;
    const percentage = Number(proporcao * 100).toFixed(0);
    const interactions = Number(item?.views) + Number(item?.like)
    const FormtTitle = () => (<ItemTitle style={{fontFamily: font.book, fontSize: 20}}><B>{item?.categoria}</B> com <B>{item?.qtd1} {item?.item1}s, {item?.qtd2} {item?.item2}s</B> e <B>{item?.area}m&#178;</B>, localizada no bairro <B>{item?.bairro}</B> na <B>{item?.rua}</B> no número <B>{item?.numero}</B>, por <B>R$ {item?.valor_mensal},00</B> ao mês. </ItemTitle>)
    return(
      <Row>
      <ItemCard>
        <Column>
          <Row style={{justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20,}}>
            <ItemTitle style={{color: color.label, fontSize: 22,}}>Mais Curtido</ItemTitle>
          
            <Row>
              <Chip style={{background: color.primary, borderRadius: 6, color: color.light, cursor: "pointer",paddingRight: 15, paddingLeft: 15, marginBottom: 8, marginTop: 0,  }}  onClick={() => navigate(`../../details/${item?.ID}`, )} >Ver detalhes</Chip>
              <Chip style={{paddingRight: 15, paddingLeft: 15, marginBottom: 8, marginTop: 0,}}>Código #{item?.ID}</Chip>
           </Row>
          </Row>

          <Line />
          <Row style={{marginTop: 15, marginLeft: 20, marginRight: 20, alignSelf: 'center'}}>
            <Row style={{ alignItems: 'center', display: 'flex'}}>
              <ItemImg style={{zIndex: 4, border: '3px solid #37CB84'}} src={item?.imagem1} />
              <ItemImg style={{zIndex: 3, border: '3px solid #5B72F2', marginLeft: -30, width: 100, height: 170,}} src={item?.imagem2} />
              <ItemImg style={{zIndex: 2, border: '3px solid #FE7359', marginLeft: -30, width: 80, height: 130,}} src={item?.imagem3} />
            </Row>

            <Column style={{marginLeft: 20, paddingBottom: 10,}}>
              <FormtTitle/>
              <Row style={{justifyContent: 'space-between', marginTop: 15,}}>
                <ViewCard>
                  <View style={{margin: 'auto', width: 52, height: 52, borderRadius: 100, background: color.primary+20, color: color.primary, textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                    <FiHeart style={{ margin: 'auto'}} size={24} />
                  </View>
                  <ItemTitle style={{color: color.medium, fontSize: 24, marginBottom: 0,}}>{item?.like} </ItemTitle>
                </ViewCard>
                <Spacing />
                <ViewCard>
                  <View style={{margin: 'auto', width: 52, height: 52, borderRadius: 100, background: color.primary+20, color: color.primary, textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                    <FiEye style={{ margin: 'auto'}} size={24} />
                  </View>
                  <ItemTitle style={{color: color.medium, fontSize: 24, marginBottom: 0,}}>{item?.views} </ItemTitle>
                </ViewCard>
                <Spacing />
                <ViewCard>
                  <View style={{margin: 'auto', width: 52, height: 52, borderRadius: 100, background: color.primary+20, color: color.primary, textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                    <TbHandClick style={{ margin: 'auto'}} size={24} />
                  </View>
                  <ItemTitle style={{color: color.medium, fontSize: 24, marginBottom: 0,}}>{interactions} </ItemTitle>
                </ViewCard>
                <Spacing />
               </Row>
            </Column>

            
          </Row>
        </Column>
      </ItemCard>

      <ItemCard3>
      <Column style={{textAlign: 'center',}}>
        <View style={{background: "#ffffff30", alignSelf: 'center', borderRadius: 80, width: 80, height: 80,flexDirection: 'column', display: 'flex', justifyContent: 'center'}}>
          <TfiStatsUp style={{color: "#fff", margin: 'auto', paddingTop: -10,}} size={32}/>
        </View>
            
        <ItemTitle style={{color: color.light, marginTop: 10, fontFamily: font.book}}>Este imóvel representa </ItemTitle> 
         <ItemTitle style={{fontSize: 42, marginBottom: -10, marginTop: -10, color: '#fff', fontFamily: font.bold}}>{percentage}%</ItemTitle>
         <ItemTitle style={{color: color.light, fontFamily: font.book}}>das suas Curtidas!</ItemTitle> 
        
              </Column>
      </ItemCard3>
      </Row>
    )
   }

  return (
      <Main className='fadeUp'>
        <Column>
      {!loading &&
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
          </Row>}

          {loading && <img alt='loader novo imovel' src={vid} style={{ width: 400, height: 300, alignSelf: 'center', }} />}


        <Column style={{ marginBottom: 20, marginTop: 20, }}>
        {mostLike && <ItemMostLike item={mostLike} />}
        <Spacing/><Spacing/>
        {mostView && <ItemMostView item={mostView} />}
        
        {a && <>
          <Row style={{justifyContent: 'space-between'}}>
            <Title>Meus imóveis</Title>

            <Select styles={customStyles} options={options} defaultValue={options[0]} />
          </Row>

        <View style={{width: 1100, marginLeft: -20,}}><Imoveis/></View>
        </>}

      </Column>

      
        <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{
          content: {
            width: 480,   
            height: 586,
            margin: 'auto',
            borderRadius: 12,
          },
        }}>
            
          <View className='column' >
           <CardImg src={newImovel}/>
 
            <View className="column" style={{padding: 20,}}>
            <CardTitle style={{textAlign: 'center', fontSize: 24,}}>Adicionar novo imóvel</CardTitle>
            <CardLabel style={{textAlign: 'center', fontSize:18,}}>Ao adicionar, seu imóvel aparecerá na plataforma e pessoas irão vê-lo!
            </CardLabel>
            </View>

            <Line/>


          {a &&
            <View className="column" style={{padding: 20,}}>
              <CardTitle style={{fontSize: 18,}}>Colaboradores</CardTitle>
              <CardLabel style={{fontSize:14,}}>Adicione colaboraderes ao seu imóvel, eles poderão editar e modificar. <Premium>Premium</Premium>
              </CardLabel>
            </View>  }

         
         {a &&
            <Profile>
              <ProfileImg src={Suff}/>
              <View className='column' style={{marginLeft: -30,}}>
              <CardTitle style={{fontSize: 18, marginTop: 10,}}>{user.name}</CardTitle>
              <CardLabel style={{fontSize:14,}}>Criador, edita, modifica e pública.</CardLabel>
              </View>
              <BtSettings><AiOutlineSetting/></BtSettings>
            </Profile>}

          {a && <ButtonBR style={{margin: 20,}}><AiOutlineUsergroupAdd/></ButtonBR>}
          

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