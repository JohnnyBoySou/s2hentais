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


import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { requestNewImovel } from '../../api/request/auth_requests';

import { useNavigate } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import Loader from  '../../components/loader'
import ImageUploader from './upload'; 
import { tipos } from '../../api/tipos.js';
import { cores } from '../../api/cores.js'
import { categorias }  from '../../api/categorias.js';


const AddImobiil = ( props ) => {
    const { color, font } = useContext(ThemeContext)
    const Navigate = useNavigate()
    const token = props.token
    const author = props.user.ID    
    const [newImovelPublish, setNewImovelPublish] = useState(false)

    const [images, setImages] = useState([]);
    const handleImagesUploaded = (imageIds) => {
      setImages(imageIds)
    };

    const newID = Number(Math.floor(Math.random() * (9999 - 1) + 9999))

    const [nome, setNome] = useState('')
    const [nomeEstrangeiro, setNomeEstrangeiro] = useState();
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState()
    const [tipo, setTipo] = useState()
    const [paginas, setPaginas] = useState();
    const [cor, setCor] = useState();
    const [artista, setArtista] = useState();
    const [tradutor, setTradutor] = useState();
  
    
  
    const sendRequest = 
    {
      "ID": newID,
      "title": nome,
      "author": author,
      "token": token,
      
      "acf": {
        "codigo": newID,
        "nome": nome,
        "nome_estrangeiro": nomeEstrangeiro,
        "descricao": descricao,
        "cor": cor,
        "artista": artista,
        "tradutor": tradutor,
        "tipo": tipo,
        "categoria": categoria,
        },

        //obrigatorio tratar no back-end
        
        "content": "api_s2hentais",
        "categories": [5],
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
    
    const [steps, setSteps] = useState([true, false, false,]);
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

  const [modalIsOpen2, setIsOpen2] = useState(false);
  const handleNewImovel = () => {setLoadingNewImovel(!loadingNewImovel);newImovel()}

  const customStyles = {
    
    singleValue: ( provided ) => ({
      ...provided, 
      color: "#fff",
     }),
    control: () => ({
      display: 'flex',
      minWidth: 180,
      color: "#fff",
      borderRadius: 5,  
      background: "#2F2F2F",
      fontFamily: "Font_Medium, sans-serif",
      flexDirection: 'row',
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
    }),
    indicatorSeparator: () => ({
      background: color.off,
    }),
    dropdownIndicator : () => ({
      color: "#fff",
      fontSize: 28,
      marginRight: 5,
      marginLeft: -5,
    }),
    menu: (provided) => ({
      ...provided,
      background: color.off2,
      fontFamily: "Font_Medium, sans-serif",
      color: "#fff",
    }),
    option: (provided) => ({
      ...provided,
      '&:hover': {
        backgroundColor: color.hover,
      },
    })
  }
  

  React.useEffect(() => {
    handleImagesUploaded()
  }, [])
  
  const a = false

  return (
      
    <View style={{flexDirection: 'column', display:'flex', background: color.off, paddingBottom: 20, borderRadius: 12, padding: 20, }}> 
    
      <Step>
        <View style={{marginLeft: 20,}}>
          {!steps[0] && <ButtonBR  disabled={steps[0]} onClick={previousStep}>ANTERIOR</ButtonBR>}       
          {!steps[1] && <ButtonPR onClick={nextStep}>PRÓXIMO</ButtonPR>}
        </View>

        <View style={{alingSelf: 'center', flexDirection: 'row', display: 'flex'}}>  
        <StepLine>
          <StepIcon on={steps[0]}><StepLabel>1</StepLabel></StepIcon>
          <StepTitle>Dados Gerais</StepTitle>
        </StepLine>
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        
        <StepLine>
          <StepIcon on={steps[1]}><StepLabel>2</StepLabel></StepIcon>
          <StepTitle>Mídia e Fotos</StepTitle>
        </StepLine>
        </View>
        
      </Step>


 <Separetor/>


        {steps[0] &&  <FirstStep className='fadeUp'>
          <Column style={{width: '40%'}}>

          <Label>Nome</Label>
          <Input value={nome} onChange={e => setNome(e.target.value)} name="nome" type="text"/>
          
          <Label>Nome estrangeiro</Label>
          <Input value={nomeEstrangeiro} onChange={e => setNomeEstrangeiro(e.target.value)} name="nome" type="text"/>
          
          <Label>Páginas</Label>
          <Input value={paginas} onChange={e => setPaginas(e.target.value)} name="nome" type="number"/>
          
          
          </Column>
          <Column style={{width: '60%'}}>

          <Label>Cor</Label>
          <Select styles={customStyles} placeholder="Colorido" onChange={setCor} options={cores} defaultValue={cor} />
         

          <Label>Tipo</Label>
          <Select styles={customStyles} placeholder="Doujin" onChange={setTipo} options={tipos} defaultValue={tipo} />
         

          <Label>Categorias</Label>         
          <Select styles={customStyles} placeholder="Chubby, Colegial..." onChange={setCategoria} isMulti options={categorias} defaultValue={categoria} />
          
          
          </Column>
          </FirstStep>}
          

          {steps[1] && <ThreeStep className='fadeUp'>
            <Column style={{justifyContent: 'center', marginBottom: 0, width: '100%'}}>
          
              <Upload>
                  <IoIosImages size={52} style={{textAlign: 'center', alignSelf: 'center', marginBottom: 20, color: color.primary,}} />
                  
                  <UploadText style={{color: color.title, marginBottom: 8,}}>Envie as fotos do seu Hentai aqui</UploadText>
                  <UploadText style={{fontSize: 18, marginTop: 20, marginBottom: 20, width: 500, margin: 'auto',}}>Tamanho recomendado: 1024 x 1920 (9:16), podendo ser enviado até 50 imagens, com no máximo 4MB cada.</UploadText>  
             
                  <ImageUploader token={token}/>
                
              
              </Upload>
             </Column>
             
             <View className='row' style={{justifyContent: 'space-between', alignSelf: 'center', marginTop: -20,}}>
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

              

              </View>
            </ThreeStep>}

          <Separetor style={{marginLeft: 0, marginBottom: 30,}}/>

        
          <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingLeft: 0, paddingRight: 20,}}>
            {!steps[0] && <ButtonBR  disabled={steps[0]} onClick={previousStep}>ANTERIOR</ButtonBR>}
            <View>
            
            {!steps[1] && <ButtonPR onClick={nextStep}>PRÓXIMO</ButtonPR>}
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