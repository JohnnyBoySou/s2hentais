import React, { useContext , useState, } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../api/index.js';
import { MdKeyboardArrowRight } from 'react-icons/md'

import Geocode from "react-geocode";
import Axios from 'react-axios'

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

import { ButtonBR, ButtonPR, Back } from '../../theme/global';
import '../animation.css'


import Modal from 'react-modal';
import Select from 'react-select' 
import makeAnimated from 'react-select/animated';

import Item from '../../components/item';

import Switch from 'react-switch';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { requestNewImovel } from '../../api/request/auth_requests';

import { AiOutlineCloudUpload, AiOutlineEye } from 'react-icons/ai'
import Loader from  '../../components/loader'
import { requestCEP } from '../../api/request';
import { maskValueBR } from '../../utils/masks';

const AddImobiil = ( props ) => {

    const { color, font } = useContext(ThemeContext)

    const userData = props.userData
    const [index, setIndex] = useState(1)

    
    const [imgs, setImgs] = useState()

    const parentProps = ( value ) => {
      console.log(value);
      setImgs(value)
   }

   const [data, setData] = useState('');
  
   const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }
  
  
  

  const tipos = [
    { value: 'valor_mensal', label: 'Por mês' },
    { value: 'valor_unico', label: 'Valor Único' },
  ]

  const taxas = [
    {value: "Taxa de lixo", label:"Taxa de lixo", },
    {value: "Seguro contra incêndio", label: "Seguro contra incêndio" },
    {value: "IPTU", label: "IPTU",  },
    {value: "Condomínio", label: "Condomínio" }
  ]

  const categorias = [
    {value: "Casa", label: "Casa"}, 
    {value: "Apartamento", label: "Apartamento"},
    {value: "Casa Comercial", label: "Casa Comercial"},
    {value: "Chácara", label: "Chácara"},
    {value: "Cobertura", label: "Cobertura"},
    {value: "Galpão", label: "Galpão"},
    {value: "Geminado", label: "Geminado"},
    {value: "Prédio Comercial", label: "Prédio Comercial"},
    {value: "Sala Comercial", label: "Sala Comercial"},
    {value: "Sítio", label: "Sítio"},
    {value: "Sobrado", label: "Sobrado"},
    {value: "Terreno", label: "Terreno"},
    {value: "Kitnet", label: "Kitnet"}
  ]

  const infraestrutura = [
  {value: "Bicicletário", label: "Bicicletário"
  }, 
  {value: "Circuito de TV", label: "Circuito de TV"
  }, 
  {value: "Zelador", label: "Zelador"
  }, {value: "Elevador", label: "Elevador"
  }, {value: "Estacionamento", label: "Estacionamento"
  }, {value: "Jardim", label: "Jardim"
  }, {value: "Playground", label: "Playground"
  }, {value:  "Piscina Coletiva", label: "Piscina Coletiva"
  }, {value: "Piscina", label: "Piscina"
  }, {value: "Área de Serviço", label: "Área de Serviço"
  }, {value:  "Banheiro Social", label: "Banheiro Social"
  }, {value: "Churrasqueira", label: "Churrasqueira"
  }, {value: "Escritório", label: "Escritório"
  }, {value: "Lavabo", label: "Lavabo"
  }, {value: "Sala de Jantar", label: "Sala de Jantar"
  }, {value: "Sala de TV", label: "Sala de TV"
  }, {value: "Espaço Gourmet", label: "Espaço Gourmet"
  }, {value: "Hidromassagem", label: "Hidromassagem"
  }, {value: "Terreno" , label: "Terreno" }
  ]
 




    const animatedComponents = makeAnimated();
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [step5, setStep5] = useState(false)

    const newID = Number(Math.floor(Math.random() * (9999 - 1) + 9999))
    const [nome, setNome] = useState('Residência Anahara')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState(categorias[0])
    const [tipo, setTipo] = useState(tipos[0])
    const [valor_mensal, setValorMensal] = useState('1.200,00')
    const [valor_unico, setValorUnico] = useState('200.000,00')
    const [cidade, setCidade] = useState('Jaraguá do Sul')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('32')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [qtd1, setQtd1] = useState('3')
    const [qtd2, setQtd2] = useState('1')
    const [area, setArea] = useState('56')
    const [CEP, setCEP] = useState('89251300')

    const [conservacao, setConservacao] = useState('')
    






  
  const sendRequest = [
    {
      "ID": newID,
      "title": nome,
      "author": userData.id,
      "token": userData.token,
      
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
        "format": "standard"
    }
  ]


    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? color.off : color.title,
       fontFamily: font.medium,
       fontSize: 18,
      }),
      control: () => ({
        border: '2px solid #00000020',
        display: 'flex',
        borderRadius: 5,  
        fontFamily: font.medium,
        flexDirection: 'row',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
      }),
      indicatorSeparator: () => ({
        width: 0,
        display: 'none'
      }),

      dropdownIndicator : () => ({
        color: "#000",
        fontSize: 28,
        marginRight: 5,
        marginLeft: -5,
      })
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

    const nextStep = () => {
      if(index === 1){
        setStep1(false)
        setStep2(true)
        setStep3(false)
        setStep4(false)
        setStep5(false)
        setIndex(2)
      }else if(index === 2){
        setStep1(false)
        setStep2(false)
        setStep3(true)
        setStep4(false)
        setStep5(false)
        setIndex(3)
      }else if(index === 3){
        setStep1(false)
        setStep2(false)
        setStep3(false)
        setStep4(true)
        setStep5(false)
        setIndex(4)
      }else if(index === 4){
        setStep1(false)
        setStep2(false)
        setStep3(false)
        setStep4(false)
        setStep5(true)
        setIndex(5)
      }

    }

    const previusStep = () => {
      if(index === 2){
        setStep1(true)
        setStep2(false)
        setStep3(false)
        setStep4(false)
        setStep5(false)
        setIndex(1)
      }else if(index === 3){
        setStep1(false)
        setStep2(true)
        setStep3(false)
        setStep4(false)
        setStep5(false)
        setIndex(2)
      }else if(index === 4){
        setStep1(false)
        setStep2(false)
        setStep3(true)
        setStep4(false)
        setStep5(false)
        setIndex(3)
      }else if(index === 5){
        setStep1(false)
        setStep2(false)
        setStep3(false)
        setStep4(true)
        setStep5(false)
        setIndex(3)
      }
    }


    const [hideLocation, setHideLocation] = useState(false)

    const handleVisibilityLocation = () => {
      setHideLocation(!hideLocation)
    } 

      const a = false;



  const [newImovelData, setNewImovelData] = useState([])
  const [loadingNewImovel, setLoadingNewImovel] = useState(false)

  function newImovel (){
    setLoadingNewImovel(true)
    requestNewImovel( sendRequest ).then(
      function(finish, error) {
        if(finish){
          setLoadingNewImovel(false)
          return
        }else if(
          console.log(error)
        )
        return
    })
  }

  const [loadingCEP, setLoadingCEP] = useState(false)

  

  function handleCEP (){
    setLoadingCEP(true)
    requestCEP( CEP ).then(
      function(response, error) {
        console.log(response.logradouro)
        if(response){
          
          setLoadingCEP(false)
          setRua(response.logradouro)
          setBairro(response.bairro)
          setCidade(response.localidade)
          handleLatLong()
        }else if(
          console.log(error)
        )
        return
    })
  }

  const changeCEP = (e) => {
    setCEP(e.target.value)
    if(CEP.length === 8){
      handleCEP()
    }
  }
 

  Geocode.setApiKey("AIzaSyBaT9Nia9XOvVt7BvFVRTtof0ujGMr56rE");
  Geocode.setLanguage("pt-br");
  Geocode.setRegion("br");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  function handleLatLong() {
    Geocode.fromAddress(CEP).then(
      (response) => {
        const address = response.results[0].geometry.location
        setLatitude(address.lat)
        setLongitude(address.lng)
        setLoadingCEP(false)
      },
      (error) => {
      console.error(error);
      }
    );

 
}
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const handleImovel = () => {
    setIsOpen2(true)
    newImovel()
  }

  
  function handleChangeMaskMensal(e) {
    const { value } = e.target; setValorMensal(maskValueBR(value))
  }

  function handleChangeMaskUnico(e) {
    const { value } = e.target; setValorUnico(maskValueBR(value))
  }

  const [newImovelPublish, setNewImovelPublish] = useState(false)
  const [picID1, setPicID1] = useState(1);
  const [picID2, setPicID2] = useState(2);
  const [picID3, setPicID3] = useState(3);
  const [picID4, setPicID4] = useState(4);
  const [picID5, setPicID5] = useState(5);
  const [picID6, setPicID6] = useState(6);
  const [picID7, setPicID7] = useState(7);
  const [picID8, setPicID8] = useState(8);


  const [imagem1, setImagem1] = useState();
  const [imagem2, setImagem2] = useState();
  const [imagem3, setImagem3] = useState();
  const [imagem4, setImagem4] = useState();
  const [imagem5, setImagem5] = useState();
  const [imagem6, setImagem6] = useState();
  const [imagem7, setImagem7] = useState();
  const [imagem8, setImagem8] = useState();

  const [picture1, setPicture1] = useState();
  const [picture2, setPicture2] = useState();
  const [picture3, setPicture3] = useState();
  const [picture4, setPicture4] = useState();
  const [picture5, setPicture5] = useState();
  const [picture6, setPicture6] = useState();
  const [picture7, setPicture7] = useState();
  const [picture8, setPicture8] = useState();

  const [pictureLoad, setPictureLoad] = useState(false)

  const onChangePicture1 = e => {setPicture1(e.target.files[0]); setImagem1(URL.createObjectURL(e.target.files[0]));};
  const onChangePicture2 = e => {setPicture2(e.target.files[0]); setImagem2(URL.createObjectURL(e.target.files[0]));};
  const onChangePicture3 = e => {setPicture3(e.target.files[0]); setImagem3(URL.createObjectURL(e.target.files[0]));};
  const onChangePicture4 = e => {setPicture4(e.target.files[0]); setImagem4(URL.createObjectURL(e.target.files[0]));};
  const onChangePicture5 = e => {setPicture5(e.target.files[0]); setImagem5(URL.createObjectURL(e.target.files[0]));};
  const onChangePicture6 = e => {setPicture6(e.target.files[0]); setImagem6(URL.createObjectURL(e.target.files[0]));};
  const onChangePicture7 = e => {setPicture7(e.target.files[0]); setImagem7(URL.createObjectURL(e.target.files[0]));};
  const onChangePicture8 = e => {setPicture8(e.target.files[0]); setImagem8(URL.createObjectURL(e.target.files[0]));};

  
  

  async function newMedia( picture, path ){
    setPictureLoad(true)
    const formData = new FormData();
  
    formData.append("file", picture);
    formData.append("title", 'idImg');
  
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3MyaGVudGFpcy5jb20vbm92b2ltb3ZlbCIsImlhdCI6MTY2ODYwMzI4MCwibmJmIjoxNjY4NjAzMjgwLCJleHAiOjE2NjkyMDgwODAsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.aAE180UQEvsLw-lqt7GAxsebMvJZJ8ptbkZyTbLBEk4"
   
    const headers = {
      'Content-Type': 'form/multipart',
      'Authorization': 'Bearer' + token,
    }

   Axios.post(`${API_URL}/wp/v2/media`,  
    formData, {headers: headers}
  ).then(response => {
    if(path === 1){setPicID1(response.data.id)}
    else if(path === 2){setPicID2(response.data.id)}
    else if(path === 3){setPicID3(response.data.id)}
    else if(path === 4){setPicID4(response.data.id)}
    else if(path === 5){setPicID5(response.data.id)}
    else if(path === 6){setPicID6(response.data.id)}
    else if(path === 7){setPicID7(response.data.id)}
    else if(path === 8){setPicID8(response.data.id)}
    console.log(response.data.id)
    setPictureLoad(false)
  
  }).catch(error => {
    console.log(error)
  });
  }
  
  const UploadComponent = () => {
    const hiddenFileInput1 = React.useRef(null);
    const hiddenFileInput2 = React.useRef(null);
    const hiddenFileInput3 = React.useRef(null);
    const hiddenFileInput4 = React.useRef(null);
    const hiddenFileInput5 = React.useRef(null);
    const hiddenFileInput6 = React.useRef(null);
    const hiddenFileInput7 = React.useRef(null);
    const hiddenFileInput8 = React.useRef(null);

    const handleClick1 = event => {
      hiddenFileInput1.current.click();
    };
    const handleClick2 = event => {
      hiddenFileInput2.current.click();
    };
    const handleClick3 = event => {
      hiddenFileInput3.current.click();
    };
    const handleClick4 = event => {
      hiddenFileInput4.current.click();
    };
    const handleClick5 = event => {
      hiddenFileInput5.current.click();
    };
    const handleClick6 = event => {
      hiddenFileInput6.current.click();
    };
    const handleClick7 = event => {
      hiddenFileInput7.current.click();
    };
    const handleClick8 = event => {
      hiddenFileInput8.current.click();
    };

    const handleClose = ( value ) => {
      if(value === 1){
        setImagem1()
        setPicture1()
      }else if(value === 2){
        setImagem2()
        setPicture2()
      }else if(value === 3){
        setImagem3()
        setPicture3()
      }else if(value === 4){
        setImagem4()
        setPicture4()
      }else if(value === 5){
        setImagem5()
        setPicture5()
      }else if(value === 6){
        setImagem6()
        setPicture6()
      }else if(value === 7){
        setImagem7()
        setPicture7()
      }else if(value === 8){
        setImagem8()
        setPicture8()
      }
     }

   
    
    const a = false
    return(
      <View style={{paddingLeft:16, paddingRight: 16,}}>
      

      <View className='row'>
      <UpBt >
      <InputImageUpload onClick={handleClick1}>
        {imagem1 && 
        <View>
          <ImageUpload src={imagem1}/>
        </View>}
        {!imagem1 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput1} style={{display: 'none'}} onChange={onChangePicture1} />
      </InputImageUpload>
      {picture1?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture1?.name.substring(0, 13)}...</ImgLabel>}
      {imagem1 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(1)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>


      {picture1 &&  <UpBt >
      <InputImageUpload onClick={handleClick2}>
        {imagem2 && 
        <View>
          <ImageUpload src={imagem2}/>
        </View>}
        {!imagem2 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput2} style={{display: 'none'}} onChange={onChangePicture2} />
      </InputImageUpload>
      {picture2?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture2?.name.substring(0, 13)}...</ImgLabel>}
      {imagem2 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(2)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>}

      {picture2 &&  <UpBt >
      <InputImageUpload onClick={handleClick3}>
        {imagem3 && 
        <View>
          <ImageUpload src={imagem3}/>
        </View>}
        {!imagem3 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput3} style={{display: 'none'}} onChange={onChangePicture3} />
      </InputImageUpload>
      {picture3?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture3?.name.substring(0, 13)}...</ImgLabel>}
      {imagem3 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(3)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>}

      {picture3 &&  <UpBt >
      <InputImageUpload onClick={handleClick4}>
        {imagem4 && 
        <View>
          <ImageUpload src={imagem4}/>
        </View>}
        {!imagem4 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput4} style={{display: 'none'}} onChange={onChangePicture4} />
      </InputImageUpload>
      {picture4?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture4?.name.substring(0, 13)}...</ImgLabel>}
      {imagem4 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(4)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>}



      </View>

      
      <View className='row'>
     {picture4 && <UpBt>
      <InputImageUpload onClick={handleClick5}>
        {imagem5 && 
        <View>
          <ImageUpload src={imagem5}/>
        </View>}
        {!imagem5 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput5} style={{display: 'none'}} onChange={onChangePicture5} />
      </InputImageUpload>
      {picture5?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture5?.name.substring(0, 13)}...</ImgLabel>}
      {imagem5 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(5)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>}


      {picture5 &&  <UpBt >
      <InputImageUpload onClick={handleClick6}>
        {imagem6 && 
        <View>
          <ImageUpload src={imagem6}/>
        </View>}
        {!imagem6 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput6} style={{display: 'none'}} onChange={onChangePicture6} />
      </InputImageUpload>
      {picture6?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture6?.name.substring(0, 13)}...</ImgLabel>}
      {imagem6 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(6)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>}

      {picture6 &&  <UpBt >
      <InputImageUpload onClick={handleClick7}>
        {imagem7 && 
        <View>
          <ImageUpload src={imagem7}/>
        </View>}
        {!imagem7 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput7} style={{display: 'none'}} onChange={onChangePicture7} />
      </InputImageUpload>
      {picture7?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture7?.name.substring(0, 13)}...</ImgLabel>}
      {imagem7 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(7)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>}

      {picture7 &&  <UpBt >
      <InputImageUpload onClick={handleClick8}>
        {imagem8 && 
        <View>
          <ImageUpload src={imagem8}/>
        </View>}
        {!imagem8 && 
        <View className='column txt-center' >
          <AiOutlineCloudUpload className='txt-center'/>
          <ImgLabel>Enviar</ImgLabel>
        </View> }
        <input type="file" ref={hiddenFileInput8} style={{display: 'none'}} onChange={onChangePicture8} />
      </InputImageUpload>
      {picture8?.name && <ImgLabel style={{paddingLeft: 4, paddingTop: 6,}}>{picture4?.name.substring(0, 13)}...</ImgLabel>}
      {imagem8 && 
      <View className='row' style={{justifyContent: 'center', marginTop: -6, width: '100%'}}>
         <ImageClose style={{textAlign: 'center', alignSelf: 'center'}} onClick={() => handleClose(8)} ><FiX style={{paddingTop:5}}/></ImageClose>
      </View>}
      </UpBt>}

      </View>
      
      </View>
    )
  }


  const handleSave = () => {
    if(picture1){newMedia(picture1, 1)}
    if(picture2){newMedia(picture2, 2)}
    if(picture3){newMedia(picture3, 3)}
    if(picture4){newMedia(picture4, 4)}
    if(picture5){newMedia(picture5, 5)}
    if(picture6){newMedia(picture6, 6)}
    if(picture7){newMedia(picture7, 7)}
    if(picture8){newMedia(picture8, 8)} 
}
 

  return (
      
    <View style={{flexDirection: 'column', display:'flex', background: color.light, paddingBottom: 20, }}> 
    
      <Step>
        <StepLine>
          <StepIcon on={step1}><StepLabel>1</StepLabel></StepIcon>
          <StepTitle>Dados Gerais</StepTitle>
        </StepLine>
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={step2}><StepLabel>2</StepLabel></StepIcon>
          <StepTitle>Local e Endereço</StepTitle>
        </StepLine>
        
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={step3}><StepLabel>3</StepLabel></StepIcon>
          <StepTitle>Mídia e Fotos</StepTitle>
        </StepLine>

        
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={step4}><StepLabel>4</StepLabel></StepIcon>
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


        {step1 &&  <FirstStep className='fadeUp'>
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
          <Label>Área em metros quadrados</Label>
          <Input value={area} name="area" onChange={e => setArea(e.target.value)} placeholder="Exemplo: 130" type="number"/>
      
          <Label>Taxas adicionais</Label>         
          <Select isMulti closeMenuOnSelect={false} placeholder="Insira as taxas adicionais"
      components={animatedComponents} styles={customStyles} options={taxas} defaultValue={taxas[0]} />
      
          <Label>Infraestrutura</Label>         
          <Select isMulti closeMenuOnSelect={false} placeholder="Insira itens de infraestrutura"
      components={animatedComponents} styles={customStyles} options={infraestrutura} defaultValue={infraestrutura[0]} />
         

          </Column>
          </FirstStep>}
          

          {step2 && 
            <SecondStep className='fadeUp'>
            <Column style={{width: '50%'}}>

            <Label>CEP</Label>
            <View className="row" style={{justifyContent: 'space-between'}}>
              <Input style={{width: '100%'}} value={CEP} onChange={changeCEP} placeholder="Exemplo: 89999000" name="numero" type="number"/>
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


          {step3 && <ThreeStep className='fadeUp'>
            <Column style={{justifyContent: 'center', marginBottom: 0, width: '100%'}}>
          
              <Upload>
                  <IoIosImages size={52} style={{textAlign: 'center', alignSelf: 'center', marginBottom: 20, color: color.primary,}} />
                  
                  <UploadText>Envie as fotos do seu imóvel aqui</UploadText>
                  <UploadText style={{fontSize: 16, marginTop: 10, marginBottom: 20,}}>Tamanho recomendado: 1024 x 1920 (9:16)</UploadText>
              
                  <UploadComponent/>
                  <ButtonPR onClick={handleSave} style={{marginLeft: 30, marginRight: 30, marginTop: 20,}}>ENVIAR</ButtonPR>
                  <UploadLabel style={{marginTop: 20,}}>Máximo de <UploadLabel style={{fontFamily: font.bold,}}>4 MB </UploadLabel> por imagem.</UploadLabel>

              </Upload>
             </Column>
            </ThreeStep>}



          {step4 && <FourStep className='fadeUp'>
            <Column style={{justifyContent: 'center', marginTop: 20, marginBottom: 0, width: '100%'}}>
            
              <View className='row' style={{flexDirection: 'row', display: 'flex',}}>
              <View className='column' style={{paddingRight: 40, width: "60%"}}>
                <Title style={{ marginBottom: 0,}}>Conte um pouco mais do imóvel</Title>
                <Label style={{ marginBottom: 10,fontSize: 20,}}>Descreva seu imóvel expondo alguns detalhes que possam ser interessantes e chamar a atenção de novos clientes.</Label>
             
                <Label style={{fontFamily: font.medium, color: color.title,}}>Descrição</Label>
                <TextArea style={{height: 240,}}  rows={8} cols={6} value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Exemplo: O imóvel possuí área para churrasco." name="numero" type="textarea"/>
              

              <View className='row' style={{justifyContent: 'space-between',}}>
                <PublishBt onClick={() => setLoadingNewImovel(!loadingNewImovel)}>
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
                <PublishImage src={imagem1}/>
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
            <ButtonBR  disabled={step1} onClick={previusStep}>ANTERIOR</ButtonBR>
            <View>
            
          {!step4 &&  <ButtonPR onClick={nextStep}>PRÓXIMO</ButtonPR>}
            </View>
          </View>


          

        <Modal isOpen={modalIsOpen2} onRequestClose={() => setIsOpen2(false)} style={stylesModal}>
            
            
              <View className="column" style={{padding: 20,}}>

              <View style={{backgroundColor: "#FFFFFF20", padding: 20, borderRadius: 12,  alingSelf: 'center', margin: 'auto', marginBottom: 20, marginTop: 10, }}>
                <Loader className='fadeUp' type="spin" size={42} color={color.light}/>
              </View>
                <CardTitle style={{textAlign: 'center', color: color.light, fontSize: 24,}}>Estamos publicando!</CardTitle>

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