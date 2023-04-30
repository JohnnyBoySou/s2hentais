import React, { useContext , useState, } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md'

import {
  Upload,
  ImgLabel,
  UpBt,
  Tag, 
  InputImageUpload,
  ImageClose,
  ImageUpload,
  UploadLabel,
  UploadText,
} from './stylesUpload';


import { IoIosImages } from 'react-icons/io';
import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Line,
  Title,
  Label,
  Hr,

  Left,
  Right,
  View,
  Input,

  Route,
  Routes,

  Step,
  StepLine,
  Column,
  FirstStep,
  SecondStep,
  ThreeStep,
  FourStep,
  StepLabel,
  StepTitle,
  StepIcon,
  Separetor,
 Arrow,

  CardImg,
  CardLabel,
  CardTitle,

  Spacing,
  PublishBt,
  PublishBtIcon,
  PublishLabel,
  PublishCard,
  PublishDescription,
  PublishTitle,
  PublishType,
  PublishImage,
  TextArea,
  PublishTip,
  PublishTipLabel,
  PublishValue,
  
} from './styles';

import { ButtonBR, ButtonPR, Back, Row } from '../../theme/global';
import '../animation.css'


import Modal from 'react-modal';
import Select from 'react-select' 
import makeAnimated from 'react-select/animated';

import categorias  from '../../api/categorias' 
import taxas  from '../../api/taxas' 
import infraestrutura from './../../api/infraestrutura';
import bairros from './../../api/bairros';

import Item from '../../components/item';

import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { requestNewImovel } from '../../api/request/auth_requests';

import { useNavigate } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import Loader from  '../../components/loader'
import { requestCEP, requestLatLong, } from '../../api/request';
import { maskValueBR , maskCEP } from '../../utils/masks';
import { customStyles } from './../../api/customStyles';
import ImageUploader from './upload';
import { tipos } from '../../api/tipos.js';

const AddImobiil = ( props ) => {
    const { color, font } = useContext(ThemeContext)
    const Navigate = useNavigate()
    const userData = props.user
    const token = props.token
    const authores = props.authores
    const [newImovelPublish, setNewImovelPublish] = useState(false)

    const [images, setImages] = useState([]);
    const handleImagesUploaded = (imageIds) => {
      setImages(imageIds)
    };
    const animatedComponents = makeAnimated();

    const newID = Number(Math.floor(Math.random() * (9999 - 1) + 9999))
    const [nome, setNome] = useState('Residência Anahara')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState(categorias[0])
    const [tipo, setTipo] = useState(tipos[0])
    const [valor_mensal, setValorMensal] = useState('1.200,00')
    const [valor_unico, setValorUnico] = useState('200.000,00')
    const [cidade, setCidade] = useState('Jaraguá do Sul')
    const [bairro, setBairro] = useState('Centro')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('32')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [qtd1, setQtd1] = useState('3')
    const [qtd2, setQtd2] = useState('1')
    const [area, setArea] = useState('56')
    const [areaConstruida, setAreaConstruida] = useState(42);
    const [CEP, setCEP] = useState('')

    const [conservacao, setConservacao] = useState('')
  
    const sendRequest = 
    {
      "ID": newID,
      "title": nome,
      "author": authores,
      "token": token,
      
      "acf": {
        "codigo": newID,
        "nome": nome,
        "descricao": descricao,
        "area": area,

        "tipo": tipo.label,
        "valor_mensal": Number(valor_mensal),
        "valor_unico": Number(valor_unico),
        "cidade": cidade,
        "bairro": bairro,
        "rua": rua,
        "numero": numero,
        
        "item1": "Quarto",
        "qtd1": qtd1,
        "item2": "Banheiro",
        "qtd2": qtd2,

        "latitude": latitude,
        "longitude": longitude,
        "taxas": taxas,
        "categoria": categoria.label,
        "infraestrutura": infraestrutura.label,
        "conservacao": conservacao,
        "criador": authores[0],
        },

        //obrigatorio tratar no back-end
        
        "content": "api_imovel",
        "categories": [2],
        "status": "publish",
        "type": "post",
        "ping_status": "closed",
        "comment_status": "closed",
        "sticky": false,
        "template": "",
        "password": "",
        "slug": "",
        "format": "standard",
    }
  


    const stylesModal = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: 450,
        bottom: 'auto',
        border: '2px solid #00000010',
        borderRadius: '22px',
        backgroundColor: color.primary,
        marginRight: '-50%',
        padding: 0,
        transform: 'translate(-50%, -50%)',
        transition: 'linear .2s',
      },
    };
    
    const [steps, setSteps] = useState([true, false, false, false]);
    const [index, setIndex] = useState(0);
    
    const nextStep = () => {
      const newSteps = [...steps];
      newSteps[index] = false;
      newSteps[index + 1] = true;
      setSteps(newSteps);
      setIndex(index + 1);
    };
    
    const previousStep = () => {
      const newSteps = [...steps];
      newSteps[index] = false;
      newSteps[index - 1] = true;
      setSteps(newSteps);
      setIndex(index - 1);
    };


  const [loadingNewImovel, setLoadingNewImovel] = useState(false)

  function newImovel (){
    setLoadingNewImovel(true)
    requestNewImovel( sendRequest, token ).then(
      function(response, error) {
        if(response){
          setLoadingNewImovel(false)
          Navigate(`/details/${response.ID}`) 
        }else{
          console.log(error)
        }
    })
  }

  const [loadingCEP, setLoadingCEP] = useState(false)

  function handleCEP (){
    setLoadingCEP(true)
    requestCEP( CEP ).then(
      function(response, error) {
        if(response){
          setLoadingCEP(false)
          setRua(response.logradouro)
          setBairro(response.bairro)
          setCidade(response.localidade)
          requestLatLong(CEP).then(address => {
            setLatitude(address?.lat)
            setLongitude(address.lng)
            setLoadingCEP(false)
          })
        }else if(console.log(error))
        return})}


  const changeCEP = (event ) => {
    const value = event.target.value;
    const regex = /^(\d{5})-?(\d{0,3})$/;
    const matches = value.match(regex);
    const cepValue = matches ? `${matches[1]}-${matches[2]}` : value.slice(0, 8);
    setCEP(cepValue);
  }
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const handleNewImovel = () => {setLoadingNewImovel(!loadingNewImovel);newImovel()}
  function handleChangeMaskMensal(e) {const { value } = e.target; setValorMensal(value)}
  function handleChangeMaskUnico(e) {const { value } = e.target; setValorUnico(value)}


  React.useEffect(() => {
    handleImagesUploaded()
  }, [])
  
  const a = false

  return (
      
    <View style={{flexDirection: 'column', display:'flex', background: color.light, paddingBottom: 20, }}> 
    
      <Step>
        <StepLine>
          <StepIcon on={steps[0]}><StepLabel>1</StepLabel></StepIcon>
          <StepTitle>Dados Gerais</StepTitle>
        </StepLine>
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={steps[1]}><StepLabel>2</StepLabel></StepIcon>
          <StepTitle>Local e Endereço</StepTitle>
        </StepLine>
        
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={steps[2]}><StepLabel>3</StepLabel></StepIcon>
          <StepTitle>Mídia e Fotos</StepTitle>
        </StepLine>

        
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={steps[3]}><StepLabel>4</StepLabel></StepIcon>
          <StepTitle>Publicar</StepTitle>
        </StepLine>
      </Step>



    
 
    {a &&  <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
 
    <Routes style={{marginLeft: 20, marginTop: 20,}}>
          <Link to="/dashboard" style={{textDecoration: 'none'}}><Route>Painel</Route></Link>
          <MdKeyboardArrowRight/>
          <Route>Imóvel</Route>
          <MdKeyboardArrowRight/>
          <Route style={{textDecoration: 'underline', color: color.title,}}>Novo</Route>
      </Routes>
          <ButtonPR style={{background:color.red,  fontSize: 14, paddingLeft: 20, paddingRight: 20, paddinTop: 10, paddingBottom: 10, marginTop: 10,}}>SAIR</ButtonPR>
        </View>
        }
  

  



 <Separetor/>


        {steps[0] &&  <FirstStep className='fadeUp'>
          <Column style={{width: '50%'}}>


          <Label>Nome para o imóvel</Label>
          <Input value={nome} onChange={e => setNome(e.target.value)} name="nome" type="text"/>
          
          
          <Label>Tipo de valor</Label>
          <Select styles={customStyles} placeholder="Por mês" onChange={setTipo} options={tipos} defaultValue={tipo} />
         

         <View className='column fadeUp'>
          {tipo.label === "Por mês" && <Label>Valor mensal</Label>}
          {tipo.label === "Por mês" && <Input value={valor_mensal} name="valor_mensal"  onChange={handleChangeMaskMensal} placeholder="Exemplo: 800,00" type="text"/>}
          
          {tipo.label === "Valor Único" && <Label>Valor Único</Label>}
          {tipo.label === "Valor Único" && <Input value={valor_unico} name="valor_unico"  onChange={handleChangeMaskUnico} placeholder="Exemplo: 100.000,00" type="text"/>}
          </View>


          <Label>Categorias</Label>         
          <Select styles={customStyles} onChange={setCategoria} options={categorias} defaultValue={categorias[0]} />
          
          
          
          </Column>
          <Column style={{width: '50%'}}>
          
         
          <View className='row' style={{justifyContent: 'space-between'}}>
          
          <View style={{width:"48%"}} className='column'>
          <Label>Qtd. de quartos</Label>
          <Input value={qtd1} name="qtd1"  onChange={e => setQtd1(e.target.value)} placeholder="Exemplo: 4" type="number"/>
          </View>

          <View className='column' style={{width:"48%"}}>
          <Label>Qtd. de banheiros</Label>
          <Input value={qtd2} name="qtd2" onChange={e => setQtd2(e.target.value)} placeholder="Exemplo: 2" type="number"/>
          </View>
          </View>


          <Row style={{justifyContent: 'space-between'}}>
            <Column  style={{width:"48%"}}>
              <Label>Área construida (m&#178;)</Label>
              <Input value={areaConstruida} name="area" onChange={e => setAreaConstruida(e.target.value)} placeholder="Exemplo: 130" type="number"/>
            </Column>
       <Column  style={{width:"48%"}}>
          <Label>Área total (m&#178;)</Label>
          <Input value={area} name="area" onChange={e => setArea(e.target.value)} placeholder="Exemplo: 130" type="number"/>
          </Column>
          </Row>
          <Label>Taxas adicionais</Label>         
          <Select isMulti closeMenuOnSelect={false} placeholder="Insira as taxas adicionais"
      components={animatedComponents} styles={customStyles} options={taxas} defaultValue={taxas[0]} />
      
          <Label>Infraestrutura</Label>         
          <Select isMulti closeMenuOnSelect={false} placeholder="Insira itens de infraestrutura"
      components={animatedComponents} styles={customStyles} options={infraestrutura} defaultValue={infraestrutura[0]} />
         

          </Column>
          </FirstStep>}
          

          {steps[1] && 
            <SecondStep className='fadeUp'>
            <Column style={{width: '50%'}}>

            <Label>CEP</Label>
            <View className="row" style={{justifyContent: 'space-between'}}>
              <Input style={{width: '100%'}} value={CEP} onChange={changeCEP} placeholder="Exemplo: 89999000" name="numero" type="text" maxLength="9"/>
              <ButtonPR style={{width: 54, height: 44, marginTop: 6, marginLeft: 15, padding: 0, paddingTop: 6, textAlign: 'center', fontSize: 32,}} onClick={handleCEP}><FiCheck/></ButtonPR>
            </View>
            <Label>Bairro</Label>
            <Input disabled value={bairro} onChange={e => setBairro(e.target.value)} styles={customStyles} placeholder="Ex: Centro" />
      
            <Label>Rua</Label>
            <Input disabled value={rua} onChange={e => setRua(e.target.value)} placeholder="Exemplo: Gov. Jorge Lacerda" name="rua" type="text"/>
          
      
            </Column>
            <Column style={{width: '50%'}}>

            <Label>Número</Label>
            <Input value={numero} onChange={e => setNumero(e.target.value)} placeholder="Exemplo: 455" name="numero" type="number"/>
                  
            <Label>Latitude e Longitude</Label>
            <View className="row" style={{justifyContent: 'space-between'}}>
            <Input  style={{width: '80%'}} disabled value={latitude} name="latitude" onChange={e => setLatitude(e.target.value)} placeholder="-32.000000" type="number"/>
            
            <Input style={{marginLeft: 20,}} disabled value={longitude} name="longitude" onChange={e => setLongitude(e.target.value)} placeholder="-46.000000" type="number"/>
            </View>


            
            <Label>Cidade</Label>
            <Input disabled value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Exemplo: Joinville" name="cidade" type="text"/>
                  
            </Column>


            </SecondStep>}


          {steps[2] && <ThreeStep className='fadeUp'>
            <Column style={{justifyContent: 'center', marginBottom: 0, width: '100%'}}>
          
              <Upload>
                  <IoIosImages size={52} style={{textAlign: 'center', alignSelf: 'center', marginBottom: 20, color: color.primary,}} />
                  
                  <UploadText style={{color: color.title, marginBottom: 8,}}>Envie as fotos do seu imóvel aqui</UploadText>
                  <UploadText style={{fontSize: 18, marginTop: 20, marginBottom: 20, width: 500, margin: 'auto',}}>Tamanho recomendado: 1024 x 1920 (9:16), podendo ser enviado até 8 imagens, com no máximo 4MB cada.</UploadText>  
             
                  <ImageUploader token={token}/>
                
              
              </Upload>
             </Column>
            </ThreeStep>}



          {steps[3] && <FourStep className='fadeUp'>
            <Column style={{justifyContent: 'center', marginTop: 20, marginBottom: 0, width: '100%'}}>
            
              <View className='row' style={{flexDirection: 'row', display: 'flex',}}>
              <View className='column' style={{paddingRight: 40, width: "60%"}}>
                <Title style={{ marginBottom: 0,}}>Conte um pouco mais do imóvel</Title>
                <Label style={{ marginBottom: 10,fontSize: 20,}}>Descreva seu imóvel expondo alguns detalhes que possam ser interessantes e chamar a atenção de novos clientes.</Label>
             
                <Label style={{fontFamily: font.medium, color: color.title,}}>Descrição</Label>
                <TextArea style={{height: 240,}}  rows={8} cols={6} value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Exemplo: O imóvel possuí área para churrasco." name="numero" type="textarea"/>
              

              <View className='row' style={{justifyContent: 'space-between',}}>
                <PublishBt onClick={handleNewImovel} disabled={loadingNewImovel}>
                <PublishBtIcon>
                 {!loadingNewImovel && <AiOutlineCloudUpload style={{fontSize: 28, marginBottom: -6, }}/>}
                  {loadingNewImovel &&  <View style={{marginTop: 6,}} ><Loader className='fadeUp' type="spin" size={20} color={color.light}/></View>}
                  {newImovelPublish && <FiCheck style={{fontSize: 24, marginTop: 4,}}/>}
                </PublishBtIcon>
                <PublishLabel>
                  PUBLICAR
                </PublishLabel>
              </PublishBt>

              <PublishTip>
                <FiAlertCircle style={{paddingRight: 15, fontSize: 42, marginTop: -2,}}/>
                <PublishTipLabel>Ao publicar, em alguns minutos seu imóvel estará online.</PublishTipLabel>
              </PublishTip>
              

              </View>
              </View>

              <View style={{ width: "50%"}}>
              <PublishCard>
              
                <View className='row' style={{width: '100%',display: 'flex', justifyContent: 'space-between'}}>
                  <View className='column'>
                    <PublishType>{categoria.label}</PublishType>
                    <PublishTitle>{nome}</PublishTitle>
                  </View>
                  <View style={{paddingTop: 20,}}>
                  {tipo.label === "Por mês" && <PublishValue>R$ {valor_mensal}</PublishValue>}
                  {tipo.label === "Valor Único" && <PublishValue>R$ {valor_unico}</PublishValue>}
                  </View>
                </View>
                
                <View className='row' style={{ marginTop: 20, justifyContent: 'space-between'}}>
                  <Item type="Quarto" amount={qtd1} />
                  
                  <Item type="Banheiro" amount={qtd2} />
                
                  <Item type="Area" amount={area} />

                </View>

                <PublishDescription>{descricao}</PublishDescription>

              </PublishCard>
       

              
            </View>
          </View>
                </Column>
            </FourStep>}

          <Separetor style={{marginLeft: 0, marginBottom: 30,}}/>

        
      <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingLeft: 0, paddingRight: 20,}}>
            <ButtonBR  disabled={steps[0]} onClick={previousStep}>ANTERIOR</ButtonBR>
            <View>
            
          {!steps[3] &&  <ButtonPR onClick={nextStep}>PRÓXIMO</ButtonPR>}
            </View>
          </View>


          

        <Modal isOpen={modalIsOpen2} onRequestClose={() => setIsOpen2(false)} style={stylesModal}>
            
            
              <View className="column" style={{padding: 20,}}>

              <View style={{backgroundColor: "#FFFFFF20", padding: 20, borderRadius: 12,  alingSelf: 'center', margin: 'auto', marginBottom: 20, marginTop: 10, }}>
                <Loader className='fadeUp' type="spin" size={42} color={color.light}/>
              </View>
                <CardTitle style={{textAlign: 'center', color: color.light, fontSize: 24,}}>Estamos publicando!</CardTitle>
+
                <CardLabel style={{textAlign: 'center', fontSize:18, color: color.light,}}>Em alguns segundos você poderá ver seu imóvel na nossa plataforma e no App também!
                </CardLabel>
              </View>

              <View style={{backgroundColor: "#FFFFFF20", padding: 12, textAlign: 'center', borderRadius: 6, width: 100, alingSelf: 'center', margin: 'auto',marginTop: -10, marginBottom: 0, }}>
              <CardTitle style={{textAlign: 'center', color: color.light, fontSize: 16,}}>Aguarde...</CardTitle>

             </View>

              <Line/>
  
  
  
  
             
              {a && <View style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', margin: 20,}}>
                
                {a &&  <ButtonPR style={{width:'100%'}} >PRÓXIMO</ButtonPR>}
                </View>}
              
            
              </Modal>
     
            
    </View>
  );
};

export default AddImobiil;