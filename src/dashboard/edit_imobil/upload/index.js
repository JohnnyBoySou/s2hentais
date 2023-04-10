import React, { useContext , useState, } from 'react';

import Axios from 'axios';
import { API_URL } from '../../../api';
import {

    Upload,
    UploadLabel,
    UploadText,
    View,
    InputImageUpload,
    ImageUpload,
    ImgLabel,   
    UploadSide,
    Tag,
    ImageClose,
    UpBt,
} from './stylesUpload'

import { ButtonBR, ButtonPR, Back } from '../../../theme/global';
import '../../animation.css'

import { FiX } from 'react-icons/fi'
import { AiOutlineCloudUpload, AiOutlineEye } from 'react-icons/ai'
import { IoIosImages } from 'react-icons/io';
import { ThemeContext } from 'styled-components';
import { Label, Spacing, Title } from '../styles';

export const UploadBlock = (props) => {

  const { color, font } = useContext(ThemeContext)
  const [picID1, setPicID1] = useState(1);
  const [picID2, setPicID2] = useState(2);
  const [picID3, setPicID3] = useState(3);
  const [picID4, setPicID4] = useState(4);
  const [picID5, setPicID5] = useState(5);
  const [picID6, setPicID6] = useState(6);
  const [picID7, setPicID7] = useState(7);
  const [picID8, setPicID8] = useState(8);

  const imgs = {
    "imagem1": picID1,
    "imagem2": picID2,
    "imagem3": picID3,
    "imagem4": picID4,
    "imagem5": picID5,
    "imagem6": picID6,
    "imagem7": picID7,
    "imagem8": picID8,
  }

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

     const [dragActive, setDragActive] = useState(false);
  
     const handleDrag = function(e) {
       e.preventDefault();
       e.stopPropagation();
       if (e.type === "dragenter" || e.type === "dragover") {
         setDragActive(true);
       } else if (e.type === "dragleave") {
         setDragActive(false);
       }
     };

     const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
     
    };
    
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
    if(picture1){
      newMedia(picture1, 1)
    }
    if(picture2){
      newMedia(picture2, 2)
    }
    if(picture3){
      newMedia(picture3, 3)
    }
    if(picture4){
      newMedia(picture4, 4)
    }
    if(picture5){
      newMedia(picture5, 5)
    }
    if(picture6){
      newMedia(picture6, 6)
    }
    if(picture7){
      newMedia(picture7, 7)
    }
    if(picture8){
      newMedia(picture8, 8)
    }
  }
 
 	const a = false 
  return (
    <View className='row'>
    
    
    <Upload>
        <IoIosImages size={52} style={{textAlign: 'center', alignSelf: 'center', marginBottom: 20, color: color.primary,}} />
        
        <UploadText>Envie as fotos do seu imóvel aqui</UploadText>
        <UploadText style={{fontSize: 16, marginTop: 10, marginBottom: 20,}}>Tamanho recomendado: 1024 x 1920 (9:16)</UploadText>
    
        <UploadComponent/>
        <ButtonPR onClick={handleSave} style={{marginLeft: 30, marginRight: 30, marginTop: 20,}}>ENVIAR</ButtonPR>
        <UploadLabel style={{marginTop: 20,}}>Máximo de <UploadLabel style={{fontFamily: font.bold,}}>4 MB </UploadLabel> por imagem.</UploadLabel>

    </Upload>

  {a && <UploadSide>
      <View>
        <Tag style={{background: color.primary,}}>IMAGEM</Tag>
        <Tag style={{background: color.secundary,}}>PNG</Tag>
      </View>
        <Title>Quarto das crianças.png</Title>
        <Spacing/>
        <Label>Simples. Prático. Confiavél. Deixa que a parte complicada a gente cuida, divulgue seu imóvel na nossa plataforma e veja seus clientes aumentando. Comece hoje mesmo de graça!</Label>
    </UploadSide>

  }
    </View>
  )
}