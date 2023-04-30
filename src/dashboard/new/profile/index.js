import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
  Card,
  UserImg,
  Line,

  Input,
  Label,
  BtIcon,
  TabContainer,
  TabContent,
  Tab,
  Spacing,
  BtUpload
} from './styles';

import Axios from 'axios';
import { API_URL } from '../../../api';

import { ButtonOffColor, Text } from '../../../theme/global'
import { BsCamera} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {  requestUserEdit, requestUserEndpoint} from '../../../api/request';
import { uploadMedia } from '../../../api/request/auth_requests';

import avatar from '../../../assets/imgs/suff.png'
import { Column} from './../../../theme/global';
import Loader from './../../../components/loader/index';
import Skeleton from './../../../components_2/skeleton/index';
import PhoneInput from '../../../components_2/inputs/phone';
import EmailInput from './../../../components_2/inputs/email';

const Profile = ( props ) => {

  const { color, font } = useContext(ThemeContext)

  const navigate = useNavigate()  

  const user = props.user
  const token = props.token
  

  const [loadingUser, setloadingUser] = useState(false);

  const [imagem, setImagem] = useState(user.avatar);
  const id = user.ID
  const email = user.user_email
  const [first_name, setFirstName] = useState(user?.nome)
  const [last_name, setLastName] = useState(user?.sobrenome)
  const [cep, setCEP] = useState(user?.cep)
  const [picture, setPicture] = useState();
  const [telefone, setTelefone] = useState(user?.telefone)
  const [whatsapp, setWhatsapp] = useState(user?.whatsapp)
  const [instagram, setInstagram] = useState(user?.instagram)
  const [facebook, setFacebook] = useState(user?.facebook)
  const [imgLink, setImgLink] = useState(user?.avatar);
  const [emailComercial, setEmailComercial] = useState(user?.email_comercial);
  const [descricao, setDescricao] = useState(user?.descricao);

  const a = false;

  const getUser = () => { 
    setloadingUser(true)
    requestUserEndpoint(user.ID).then(response => {
      setImagem(response?.avatar)
      setFirstName(response?.nome)
      setLastName(response?.sobrenome)
      setCEP(response?.cep)
      setImgLink(response?.avatar)
      setTelefone(response?.telefone)
      setWhatsapp(response?.whatsapp)
      setInstagram(response?.instagram)
      setFacebook(response?.facebook)
      setEmailComercial(response?.email_comercial)
      setDescricao(response?.descricao)
      setloadingUser(false)
    })
   }

  const [loadingImg, setLoadingImg] = useState(false);


  const hiddenFileInput = React.useRef(null);
  const onChangePicture = e => {setPicture(e.target.files[0]); setImagem(URL.createObjectURL(e.target.files[0]));}
 
async function handlePictureUpload(img) {
  setLoadingImg(true);
  const formData = new FormData();
  formData.append("file", img);
  formData.append("title", `avatar ${id}_${first_name}`);
  const uploadedImageUrl = await uploadMedia(formData, token);
  if (uploadedImageUrl) {
    setImgLink(uploadedImageUrl);
    setImagem(uploadedImageUrl);
  }
  setLoadingImg(false);
   };

  const handleEditUser = () => { 
    setloadingUser(true)
    const userData = {
    "token": token, "id":id,  
    "first_name": first_name, 
    "last_name": last_name, 
    "avatar": imgLink,
    "cep": cep, 
    "telefone": telefone,  
    "instagram": instagram, 
    "whatsapp": whatsapp, 
    "email_comercial": emailComercial,
    "facebook": facebook,
    "descricao": descricao,
  }
    requestUserEdit( userData ).then(response => {getUser();})
  }
 
  const [dados, setDados] = useState(true);
  const [contato, setContato] = useState(false);

  const handeClick = (params) => { 
    if(!dados){
      setDados(true)
      setContato(false)
    }else{
      setDados(false)
      setContato(true)
    }
   }

  return (
        <Card>          
          <View style={{position: 'relative', alignSelf: 'center', marginBottom: 20,}}>
            <UserImg src={imagem} onClick={() => hiddenFileInput.current.click()} />

            <BtIcon disabled={loadingImg} onClick={() => hiddenFileInput.current.click()}>
              {loadingImg && <Loader  type="spin" size={12} color={color.light}/>}
              {!loadingImg && <BsCamera/>}
            </BtIcon>

            <input type="file" ref={hiddenFileInput} style={{display: 'none'}} onChange={onChangePicture} />

            </View>



      {user.avatar !== imagem && 
      <BtUpload onClick={() => handlePictureUpload(picture)}> 
        {loadingImg && <Loader  type="spin" size={12} color={color.light}/>}  
        {!loadingImg && <Text>Enviar Imagem</Text>}
      </BtUpload>}


         <TabContainer>
          <Tab className={dados ? "active" : ""} disabled={dados}
          onClick={handeClick}>Dados Gerais</Tab>

          <Tab className={contato ? "active" : ""} disabled={contato}
          onClick={handeClick}>Contato</Tab>
        </TabContainer>


      
        {!loadingUser && <View>  {dados &&
            <Column>
              <Label>E-mail</Label>
              <Input placeholder='E-mail' disabled value={email}/>

              <Label>Nome de usuario</Label>
              <Input placeholder='Ex:joaosousa' disabled value={user.display_name}/>

              <Label>Primeiro Nome</Label>
              <Input placeholder='Ex: João' onChange={e => setFirstName(e.target.value)} 
              value={first_name}/>

              <Label>Sobrenome</Label>
              <Input placeholder='Ex: Sousa' onChange={e => setLastName(e.target.value)} 
              value={last_name}/>


              <Label>Código Postal (CEP)</Label>
              <Input placeholder='Ex: 89251901 * apenas números' onChange={e => setCEP(e.target.value)} 
              value={cep}/>

              <Label>Descrição</Label>
              <Input placeholder='Ex: Escreva uma descrição sobre você' onChange={e => setDescricao(e.target.value)} 
              value={descricao}/>

              
            </Column>
    }
    {contato && 
     <Column>
      <Label>Telefone</Label>
      <PhoneInput onChange={setTelefone}  value={telefone}/>

      
      <Label>WhatsApp</Label>
      <PhoneInput onChange={setWhatsapp}  value={whatsapp}/>

      <Label>E-mail comercial</Label>
      <EmailInput onChange={setEmailComercial} value={emailComercial}/>
      
      <Label>Facebook</Label>
      <Input placeholder='Ex: @username' onChange={e => setFacebook(e.target.value)} 
      value={facebook}/>

      
      <Label>Instagram</Label>
      <Input placeholder='Ex: @username' onChange={e => setInstagram(e.target.value)} 
      value={instagram}/>
    </Column>
    
    }
    </View>}


         {loadingUser && 
         <View>
         <Spacing width={10} height={15}/>
          <Skeleton width="100%" height={40}/>
          <Spacing width={10} height={15}/>
          <Skeleton width="100%" height={40}/>
          <Spacing width={10} height={15}/>
          <Skeleton width="100%" height={40}/>
          <Spacing width={10} height={15}/>
          <Skeleton width="100%" height={40}/>
          </View>}
      

        <View style={{height: 15,}} />
        <Line/>
        <ButtonOffColor onClick={handleEditUser} style={{marginBottom: 20, marginTop: 20,}}>Salvar alterações</ButtonOffColor>
         
    </Card>

  );
};

export default Profile;