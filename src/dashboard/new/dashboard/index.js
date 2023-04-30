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
  const [loading, setLoading] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);

  const navigate = useNavigate()
  const vllike = props.vllike
  const vlview  = props.vlview
  const mostView = props.mostView
  const mostLike = props.mostLike
  const click = props.click
  const user = props.user
  const item = props.item
  const [modalGallery, setModalGallery] = useState(false);


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
  
  const a = false;

  const [imovelNome, setNomeImovel] = useState('meunovoimovel')
  const [next, setNext] = useState(false)
  
  useEffect(() => {
    if(imovelNome === "meunovoimovel"){setNext(true)
    }}, 
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
      <Row style={{marginTop: 20,}}>
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
    

  const [colaborador1, setColaborador1] = useState('dev.joaosousa@gmail.com');
  const [colaborador2, setColaborador2] = useState();
  const [colaborador3, setColaborador3] = useState();
  const [dataCol1, setdataCol1] = useState();
  const [dataCol2, setdataCol2] = useState();
  const [dataCol3, setdataCol3] = useState();
  const [loadingColaborador, setLoadingColaborador] = useState(false);

  const handleColaborador = (index,  param ) => { 
      if(param === "add"){
        setLoadingColaborador(true)
        if(index===1){if(colaborador1){requestUserEmail(colaborador1).then(user => {setdataCol1(user);setLoadingColaborador(false)})}}
        else if(index===2){if(colaborador2){ requestUserEmail(colaborador2).then(user => {setdataCol2(user); setLoadingColaborador(false)})}}
        else if(index===3){if(colaborador3){requestUserEmail(colaborador3).then(user => {setdataCol3(user); setLoadingColaborador(false)})}}
      }else if(param === "remove"){
        if(index===1){setColaborador1();setdataCol1()}
        else if(index===2){setColaborador2();setdataCol2()}
        else if(index===3){setColaborador3();setdataCol3()}}}
  const usersEmails = [user?.ID, dataCol1?.ID, dataCol2?.ID, dataCol3?.ID];
  function handleUsersEmails( emails ) {const param = emails?.filter(Boolean);props.onUsersEmails(param);}
      
  const handleClick = () => {handleUsersEmails(usersEmails);click()}

  
  const [media, setMedia] = useState([]);
  const handleMedia = () => { 
    requestMediaForAuthor(6).then(response => {
      setMedia(response)
    })
   }

  useEffect(() => {
    handleMedia()
  }, [])
  const [selectedImages, setSelectedImages] = useState([]);
  const handleSelectImage = (imageUrl) => {
    const isImageSelected = selectedImages.includes(imageUrl);
    if (!isImageSelected && selectedImages.length < 8) {
      setSelectedImages([...selectedImages, imageUrl]);
    } else if (isImageSelected) {
      setSelectedImages(selectedImages.filter((url) => url !== imageUrl));
    }
  };

  const [search, setSearch] = useState();
      return (

      <Main className='fadeUp'>
        <Column>
        {mostLike && <Insights/>}
        <Column style={{ marginBottom: 20, marginTop: 20, }}>
        {mostLike && <ItemMostLike item={mostLike} />}
        {mostView && <ItemMostView item={mostView} />}
        
        {a && <>
          <Row style={{justifyContent: 'space-between'}}>
            <Title>Meus imóveis</Title>

            <Select styles={customStyles} options={options} defaultValue={options[0]} />
          </Row>

        <View style={{width: 1100, marginLeft: -20,}}><Imoveis/></View>
        </>}

      </Column>


      
      <Modal isOpen={modalGallery} onRequestClose={() => setModalGallery(false)} style={{
          content: {
            width: 810,   
            height: 586,
            margin: 'auto',
            padding: "10px 20px",
            zIndex: 99,
            borderRadius: 12,
          },
        }}>

          <Row>
            <Column style={{width: "100%", }}>
              <Title style={{marginLeft: 10, fontSize: 24,}}>Minha Galeria</Title>
            
              <Row style={{justifyContent: 'space-between', marginLeft: 10, marginTop: 10, marginBottom: 10,}}>
                <Row>
                  <InputSearch value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquise o termo " type="text"/>
                  <SpacingX1/>
                  <BtIcon onClick={handleMedia}><BsSearch/></BtIcon>
                </Row>

                <Row>
                  <BtIcon><CiGrid2H/></BtIcon>
                  <SpacingX1/>
                  <BtIcon><CiGrid41/></BtIcon>
                  <SpacingX1/>
                  <ButtonPR style={{height: 38, paddingTop: 6,}}>SALVAR</ButtonPR>
                </Row>
              </Row>
              <View style={{background: "#00000020", marginLeft: 10, marginRight: 10, width: "98%", height: 2, marginBottom: 10,}} />

              {media?.length > 1 && <View style={{ display: "flex", flexWrap: "wrap" }}>
              {media.map(({ img }, index) => {
                const isSelected = selectedImages.includes(img);
                const circleNumber =
                  selectedImages.indexOf(img) !== -1 ? selectedImages.indexOf(img) + 1 : "+";
                return (
                  <ImageWithBorder
                    key={index}
                    imageUrl={img}
                    onSelect={handleSelectImage}
                    isSelected={isSelected}
                    index={circleNumber}
                  />
                  );
                })}
              </View>}
 <CardLabel>{selectedImages}</CardLabel>
            </Column>
          </Row>
          
      </Modal>

      
        <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{
          content: {
            width: 480,   
            height: 586,
            margin: 'auto',
            borderRadius: 12,
          },
        }}>
            
          <View className='column' >
 
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

          {dataCol1 &&
             <Profile style={{marginTop: 10,}}>
             <ProfileImg src={dataCol1?.avatar}/>
             <Column style={{marginLeft: -80,}}>
              <CardTitle style={{fontSize: 18, marginTop: 10,}}>{dataCol1?.display_name}</CardTitle>
              <CardLabel style={{fontSize:14,}}>{dataCol1?.user_email}</CardLabel>
             </Column>
             <BtSettings onClick={() => handleColaborador(1, 'remove',)}><GrClose style={{color: color.red}}/></BtSettings>
           </Profile>
          }

            {dataCol2 &&
             <Profile>
             <ProfileImg src={dataCol2?.avatar}/>
             <Column style={{marginLeft: -80,}}>
              <CardTitle style={{fontSize: 18, marginTop: 10,}}>{dataCol2?.display_name}</CardTitle>
              <CardLabel style={{fontSize:14,}}>{dataCol2?.user_email}</CardLabel>
             </Column>
             <BtSettings onClick={() => handleColaborador(2, 'remove',)}><GrClose style={{color: color.red}}/></BtSettings>
           </Profile>
          }
          {dataCol3 &&
           <Profile>
           <ProfileImg src={dataCol3?.avatar}/>
           <Column style={{marginLeft: -80,}}>
            <CardTitle style={{fontSize: 18, marginTop: 10,}}>{dataCol3?.display_name}</CardTitle>
            <CardLabel style={{fontSize:14,}}>{dataCol3?.user_email}</CardLabel>
           </Column>
           <BtSettings onClick={() => handleColaborador(3, 'remove',)}><GrClose style={{color: color.red}}/></BtSettings>
         </Profile>
        }
            <Column style={{padding:'0px 20px', marginBottom: 10,}}>
            

            {!dataCol1 && <Row>
              <Input style={{flexGrow: 1,}} type="email" value={colaborador1}
                onChange={(event) => setColaborador1(event.target.value)}
                placeholder="Email do 1º colaborador"/>
              <BtAdd onClick={() => handleColaborador(1, 'add')}>
                {loadingColaborador && <Loader className='fadeUp' type="spin" size={16} color={color.primary}/>}
                {!loadingColaborador && <AiOutlineUsergroupAdd/>}
              </BtAdd>
              </Row>}

           {colaborador1 && <> 
           {!dataCol2 && <Row> <Input  style={{flexGrow: 1,}} type="email" value={colaborador2}
              onChange={(event) => setColaborador2(event.target.value)}
              placeholder="Email do 2º colaborador"/>
              <BtAdd onClick={() => handleColaborador(2, 'add')}>
                {loadingColaborador && <Loader className='fadeUp' type="spin" size={16} color={color.primary}/>}
                {!loadingColaborador && <AiOutlineUsergroupAdd/>}
              </BtAdd>
              </Row>}
            </>}


            {colaborador2 && <>  {!dataCol3 && <Row><Input  style={{flexGrow: 1,}} type="email" value={colaborador3}
              onChange={(event) => setColaborador3(event.target.value)}
              placeholder="Email do 3º colaborador"/>
              <BtAdd onClick={() => handleColaborador(3, 'add')}>
                {loadingColaborador && <Loader className='fadeUp' type="spin" size={16} color={color.primary}/>}
                {!loadingColaborador && <AiOutlineUsergroupAdd/>}
              </BtAdd>
              </Row>} 
            </>}
            </Column>



            

            <View className="column" style={{padding: '10px 20px',}}>
              <CardTitle style={{fontSize: 18,}}>Você é um robo?</CardTitle>
              <CardLabel style={{fontSize:14,}}>Esperamos que não, digite abaixo <CardLabel style={{fontFamily: font.bold, color: color.primary,}}>meunovoimovel</CardLabel>, para confirmar.</CardLabel>
              <Input onKeyDown={handleKeyDown} value={imovelNome} style={{marginBottom: 20,}} onChange={e => setNomeImovel(e.target.value)}  placeholder="Digite o que está escrito acima" type="text"/>

              <ButtonPR off={!next} disabled={!next} onClick={handleClick}>PRÓXIMO</ButtonPR>
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