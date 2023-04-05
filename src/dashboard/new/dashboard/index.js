import React, { useContext , useState, } from 'react';
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
} from './styles';

import Carousel from 'react-grid-carousel'
import { ButtonBR, ButtonPR, ButtonLight } from '../../../theme/global'
import { AiOutlineSetting, AiOutlineUsergroupAdd} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


import Select from 'react-select' 


import newImovel from '../../../assets/imgs/new_imovel.png'

import Character1 from '../../../assets/imgs/character1.png'

import Modal from 'react-modal';

import Suff from '../../../assets/imgs/suff.png'
import Box from '../box'
import { Label } from '../styles';
import RowFlow from './../../../components/cards/row_flow/index';
import { customStyles } from '../../../api/customStyles';
import { requestFeed } from '../../../api/request';
import { Column } from './../../../theme/global';

const Dashboard = ( props ) => {

  const { color, font } = useContext(ThemeContext)
  const [item, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const click = props.click
  const user = props.user
  const views = props.views
  const likes = props.likes
  const popular = props.popular
  const interaction = props.interaction
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

  React.useEffect(() => {
    handleFeed()
    if(imovelNome === "meunovoimovel"){
      setNext(true)
    }else{return}
    
  }, [imovelNome])
  
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if(imovelNome === "meunovoimovel"){
        click()
      }else{return}
      
    }
  }



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



  return (
      <Main className='fadeUp'>
        <Column>
        <Banner>
          <View style={{flexDirection: 'row', display: 'flex',
        justifyContent: 'flex-start'}}>
            <Title style={{marginTop: 80, marginLeft: 40, textAlign: 'left', color: color.light, fontSize: 42, }}>Confira suas estatísticas</Title>
            <Img src={Character1} style={{marginRight: 50, marginLeft: -80, }}/>
          </View>

          <Column style={{marginTop: 40, marginBottom: 40, marginLeft: -40, marginRight: 30,}}>

            <Row>
              <Box item={popular}/>
              <Spacing />
              <Box item={views}/>
            </Row>
            
            <Spacing/>

            <Row>
              <Box item={interaction}/>
              <Spacing />
              <Box style={{flexGrow: 1,}} item={likes}/>
            </Row>

            <Spacing/>
            <Spacing/>
          </Column>
          
        </Banner>

        <Column style={{ marginBottom: 20, }}>
        

        <Row style={{justifyContent: 'space-between'}}>
          <Title>Meus imóveis</Title>

          <Select styles={customStyles} options={options} defaultValue={options[0]} />
        </Row>

        {!loading && <View style={{width: 1100, marginLeft: -20,}}><Imoveis/></View>}


     
        {a &&  <Banner style={{width: 300, height: 300, background: color.secundary, padding: 20,}} >
            <View className='column'>

              <Title style={{marginTop: 0, textAlign: 'left', color: color.light, fontSize: 28, marginBottom: -10,  }}>Acompanhe nossas dicas!</Title>
              <Label style={{color: color.light + 90, fontSize: 18, fontFamily: font.book, }}>Prepare-se para mostrar seu imóvel para o Brasil inteiro.</Label>
              <ButtonLight style={{marginTop: 20,}}>VER BLOG</ButtonLight>
            </View>
        </Banner>}








      {a && <Card>

            <CardImg src={newImovel}/>
 
            <View style={{marginTop: 20, marginBottom: 10,}}>
              <View className='column'>
                <CardTitle style={{fontSize: 19,}}>Adicione seu primero imóvel!</CardTitle>
                <CardLabel style={{fontSize: 16,}}>Prepare-se para mostrar seu imóvel para o Brasil inteiro.</CardLabel>
              </View>

            </View>
  
            <Line style={{marginBottom: 20,}}/>
            <ButtonPR onClick={() => setIsOpen(true)}>Adicionar Imóvel</ButtonPR>
       
        </Card>}





        

      </Column>

        

        <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            
          <View className='column' >
           {a && <CardImg src={newImovel}/>}
 
            <View className="column" style={{padding: 20,}}>
            <CardTitle style={{textAlign: 'center', fontSize: 24,}}>Adicionar novo imóvel</CardTitle>
            <CardLabel style={{textAlign: 'center', fontSize:18,}}>Ao adicionar, seu imóvel aparecerá na plataforma e pessoas irão vê-lo!
            </CardLabel>
            </View>

            <Line/>


            <View className="column" style={{padding: 20,}}>
              <CardTitle style={{fontSize: 18,}}>Colaboradores</CardTitle>
              <CardLabel style={{fontSize:14,}}>Adicione colaboraderes ao seu imóvel, eles poderão editar e modificar. <Premium>Premium</Premium>
              </CardLabel>
            </View>  

            <Profile>
              <ProfileImg src={Suff}/>
              <View className='column' style={{marginLeft: -30,}}>
              <CardTitle style={{fontSize: 18, marginTop: 10,}}>{user.name}</CardTitle>
              <CardLabel style={{fontSize:14,}}>Criador, edita, modifica e pública.</CardLabel>
              </View>
              <BtSettings><AiOutlineSetting/></BtSettings>
            </Profile>

          {a && <ButtonBR style={{margin: 20,}}><AiOutlineUsergroupAdd/></ButtonBR>}
            <Line/>

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