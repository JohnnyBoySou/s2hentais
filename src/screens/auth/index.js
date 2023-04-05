/* eslint-disable eqeqeq */
import React, { useContext , useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'

import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Title,
  Label,

  Input,
  Checkbox,
  Left, 
  Right,
  
  Login,
  Register,

  
  Image,
  GreenAcess,
  RedAcess,
  Logo,
  ShowIcon
} from './styles';

import { ButtonPR, Back, Row } from '../../theme/global'
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../assets/imgs/logo_s.png'
import './animation.css'
import Suff from '../../assets/imgs/auth_img.png'
import Loader from  '../../components/loader'
import { requestLogin, requestRegister, requestUser, requestSaveUser } from '../../api/request/index';
import DocumentMeta from 'react-document-meta'
import { Column, } from './../../theme/global';
import { TitleName } from './styles';

const Auth = ( ) => {

  const { color, font } = useContext(ThemeContext)

  const navigate = useNavigate()



  const { qr } = useParams();
  const [register, setRegister] = useState(false)
  const [login, setLogin] = useState(true)
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [checked, setChecked] = useState(false);


  const [loginFinish , setLoginFinish] = useState(false)

const handlePWT = () => {
  if(PWT === "password"){
    setPWT("text")
  }
  else if(PWT === "text"){
    setPWT("password")
  }
}
  const [PWT, setPWT] = useState("password")
  const [passwordRepet, setPasswordRepet] = useState();

  const [errorLogin, setErrorLogin] = useState(false)
  const [finishLogin, setFinishLogin] = useState(false)
  const [loadLogin, setLoadLogin] = useState(false)

  const [errorRegister, setErrorRegister] = useState(false)
  const [finishRegister, setFinishRegister] = useState(false)
  const [loadRegister, setLoadRegister] = useState(false)
  const [back, setBack] = useState(false);


  
 function handleRegister(){
  setErrorRegister(false)
  setLoadRegister(true)
  const params = {email, password, first_name, last_name, username }
  if(password  === passwordRepet){
   requestRegister(params).then(
      function(response) {
        if(response){
          setErrorRegister(false)
          setFinishRegister(true)          
        }
        else{
          setFinishRegister(false)
          setErrorRegister(true)
        }
        setLoadRegister(false)
        })
      }else{
        setLoadRegister(false)
        setErrorRegister(true)
  }}


  

 function handleLogin(){
  setLoadLogin(true)
  console.log(password)
  requestLogin(email, password).then(
    function(response) {
      if(response){
        const userValue = {email: response.email, password: password, token: response.token, id: response.id, username: response.name}
        requestSaveUser(userValue).then(function(response){
          setLoadLogin(false)
          navigate('/dashboard/new')
        })
      }
      else if(response?.status){
        setFinishRegister(false)
        setErrorRegister(true)
      }
      setLoadLogin(false)
      })
}

const changeMethod = () => {
  if(login){
    setLogin(false)
    setRegister(true)
  }else if(!login){
    setLogin(true)
    setRegister(false)
  }
}
  

    useEffect(() => {
      requestUser().then(
        function(response) {
          if(response){
            setEmail(response.email)
            setPassword(response.password)
            setFirstName(response.name)
            setChecked(true)
            setBack(true)
          }
        }
      )
    }, []);

  const a = false
  return (
  
    <Container> 
      <DocumentMeta title="Login" />
      <Left>

        <View style={{justifyContent: 'space-between', marginBottom: 20, display: 'flex', flexDirection: 'row'}}>
          {a &&<Back onClick={() => navigate('/starter')} style={{width: 52, height: 52, padding: 0, fontSize: 24, borderRadius: 100, marginBottom: 20,}}><FiArrowLeft style={{marginTop: 6,}}/></Back>}
          <Logo src={logo} onClick={() => navigate('/app')}/>
           </View>
      {login && 
      <Login className='fadeUp'>

        <Title style={{marginBottom: -10,}}>Olá, <TitleName>{first_name}!</TitleName></Title>

        <View style={{flexDirection: 'column', display: 'flex'}}>

        {errorLogin && <RedAcess className='fadeUp'>Credênciais inválidas</RedAcess>}
        {finishLogin && <GreenAcess className='fadeUp'>Autenticação concluída</GreenAcess>}

        <Label>E-mail</Label>
        <Input placeholder='E-mail' onChange={e => setEmail(e.target.value)} 
        value={email}
        
        />
        <Label> Senha</Label>
        <View style={{flexDirection: 'row', display: 'flex'}}>
        <Input 
          style={{width: '100%', marginRight: 5,}}
          type={PWT}
          value={password}
          placeholder='Senha' 
          onChange={e => setPassword(e.target.value)}/>
        
        <ShowIcon onClick={handlePWT}>
          {PWT === "password" && <AiOutlineEye/>}
          {PWT === "text" && <AiOutlineEyeInvisible/>}
        </ShowIcon>
        </View>
        
        <View style={{justifyContent: 'space-between', display: 'flex'}}>
          <Label style={{marginTop: 14}}><Checkbox checked={checked} readOnly/> Manter conectado</Label>
          <Label style={{textDecoration: 'underline'}}>Esqueci a senha</Label>
        </View>
        </View>
        
        {loginFinish && 
        <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'column', display: 'flex'}}>
          <GreenAcess>Autenticação concluída</GreenAcess>
          <br/>
        </View>
        }

        <ButtonPR onClick={handleLogin} disabled={loadLogin} style={{marginTop: 30,borderRadius: 100, fontSize: 20, padding: 18, }}> 
        {!loadLogin && <span>Entrar</span> } 
        {loadLogin && <Loader className='fadeUp' type="spin" size={24} color={color.light}/>}
    </ButtonPR>
    
        <Label style={{textAlign: 'center', fontFamily: font.book, paddingTop: 20, paddingBottom: 20}}>Não tem uma conta?
        <Label onClick={changeMethod} style={{textDecoration: 'underline', marginLeft: 10, color: color.primary, cursor: 'pointer'}}>Registrar-se</Label>
        </Label>

          </Login>}


  {register && 
    <Register className='fadeUp'>
      <View style={{flexDirection: 'column', display: 'flex'}}>
      
      <Title style={{marginBottom: -10,}}>Criar conta, <TitleName>agora!</TitleName></Title>
       <View style={{flexDirection: 'column', display: 'flex'}}>

       {errorRegister && <RedAcess className='fadeUp'>Credênciais inválidas</RedAcess>}
        {finishRegister && <GreenAcess className='fadeUp'>Registro concluída</GreenAcess>}


        <Label>E-mail</Label>
       <Input type="email" defaultValue={email} value={email} placeholder='Seu e-mail'  onChange={e => setEmail(e.target.value)}/>
       
      <Row style={{width: 460,}}>
        <Column>
        <Label>Primeiro Nome</Label>
        <Input style={{width: '90%',}} type="text" placeholder='Primeiro nome' value={first_name} onChange={e => setFirstName(e.target.value)}/>
        </Column>
        <View style={{width: 15, height: 10,}}/>
        <Column>
        <Label>Sobrenome</Label>
        <Input style={{width: '90%',}} type="text" placeholder='Sobrenome' value={last_name} onChange={e => setLastName(e.target.value)}/>
        </Column>
      </Row>

       <Label>Nome de usuário</Label>
       <Input type="text" placeholder='Nome de usuário'  value={username} onChange={e => setUsername(e.target.value)}/>
       
  
       <Label>Senha</Label>
        <View style={{flexDirection: 'row', display: 'flex'}}>
        <Input 
          style={{width: '100%', marginRight: 5,}}
          type={PWT}
          value={password}
          placeholder='Senha' 
          onChange={e => setPassword(e.target.value)}/>
        
        <ShowIcon onClick={handlePWT}>
          {PWT === "password" && <AiOutlineEye/>}
          {PWT === "text" && <AiOutlineEyeInvisible/>}
        </ShowIcon>
        </View>

        
       <Label>Repetir a Senha</Label>
        <View style={{flexDirection: 'row', display: 'flex'}}>
        <Input 
          style={{width: '100%', marginRight: 5,}}
          type={PWT}
          value={passwordRepet}
          placeholder='Senha' 
          onChange={e => setPasswordRepet(e.target.value)}/>
        
        <ShowIcon onClick={handlePWT}>
          {PWT === "password" && <AiOutlineEye/>}
          {PWT === "text" && <AiOutlineEyeInvisible/>}
        </ShowIcon>
        </View>


         </View>


         <ButtonPR onClick={handleRegister} disabled={loadRegister} style={{marginTop: 30, borderRadius: 100, width: '100%', fontSize: 18, padding: 14,}}>
          {!loadRegister && <span>Criar Conta</span> } 
          {loadRegister && <Loader className='fadeUp' type="spin" size={24} color={color.light}/>}
          </ButtonPR>


          
        <Label style={{textAlign: 'center', fontFamily: font.book, paddingTop: 0, paddingBottom: 20}}>Já tem uma conta?
        <Label onClick={changeMethod} style={{textDecoration: 'underline', marginLeft: 10, color: color.primary, cursor: 'pointer'}}>Entrar</Label>
        </Label>
   
       </View>  

       
      

      </Register>}


    
      </Left>
      <Right>
      <Image src={Suff} />
      </Right>


    </Container>
  );
};

export default Auth;