import React, { useContext , useState, useEffect, useRef} from 'react';


import Select from 'react-select' 

import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiQuestionMark } from 'react-icons/ri'
import { AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'

import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Title,
  Label,

  Input,
  Spacing,
  Checkbox,
  Left, 
  Right,
  SelectTitle,
  CheckBt,
  CheckTitle,
  CircleCheck,
  CheckImg,
  CheckLabel,
  Side,

  Login,
  Register,

  Route,
  Routes,

  Image,
  GreenAcess,
  RedAcess,
  Logo,
  FinishImg,
  ShowIcon
} from './styles';

import { ButtonPR, Back } from '../../theme/global'

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom';
 
import logo from '../../assets/imgs/logo_h_light.png'
import Bairros from '../../api/bairros'

import './animation.css'
import {mask } from './mask'

import IconPerson from "../../assets/imgs/icon_person.png"
import IconImobil from "../../assets/imgs/icon_imobil.png"

import Suff from '../../assets/imgs/suff.png'

import Loader from  '../../components/loader'
import registerFinishImage from '../../assets/imgs/registerFinishImage.png'
import { requestLogin, requestRegister } from '../../api/request/auth_requests';

import {API_URL} from '../../api/index'

import DocumentMeta from 'react-document-meta'

const Auth = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const [data, setData] = useState([])
  const [loadGet, setLoadGet] = useState(true)
  const [like, setLike] = useState(false)
  
  const [item, setItem] =  useState()
  
  const { qr } = useParams();

  const lengthData = data?.length


  const [register, setRegister] = useState(false)
  const [registerSelect, setRegisterSelect] = useState(true)

  const [registerImobil, setRegisterImobil] = useState()
  const [registerImobil2, setRegisterImobil2] = useState()
  const [registerFinish, setRegisterFinish] = useState(false)
  const [registerPerson, setRegisterPerson] = useState() 
  
  
  const navigate = useNavigate()
  const [login, setLogin] = useState(true)
  const [loginFinish , setLoginFinish] = useState(false)
  const [login1, setLogin1] = useState(true)


  const [imobil, setImobil] = useState(true)
  const [pessoal, setPessoal] = useState(false)
  
  const [userData, setUserData] = useState([])

  const [email, setEmail] = useState('joaodesousa101@gmail.com')
  const [password, setPassword] = useState('223761dejoao')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')

  const [PWT, setPWT] = useState("password")
  

  const [errorLogin, setErrorLogin] = useState(false)
  const [finishLogin, setFinishLogin] = useState(false)
  const [loadLogin, setLoadLogin] = useState(false)

  
  const [errorRegister, setErrorRegister] = useState(false)
  const [finishRegister, setFinishRegister] = useState(false)
  const [loadRegister, setLoadRegister] = useState(false)


    const handlePWT = () => {
      if(PWT === "password"){
        setPWT("text")
      }
      if(PWT === "text"){
        setPWT("password")
      }
    }
  

  function handleLoginSystem(){

    setErrorLogin(false)
    setLoadLogin(true)

    try{
      const user = JSON.parse(localStorage.getItem('@user'))
      if(user){
        navigate('/dashboard/new')
      }
      else{
        requestLogin(email, password).then(
          function(response, error) {
        
          if(response.token){
            setToken(response.token)
            setErrorLogin(false)
            setFinishLogin(true)
            saveUser(response)
          }else{
          setFinishLogin(false)
          setErrorLogin(true)
        }
        setLoadLogin(false)
        })

      }
    }
   catch(e){
     console.log(e)
   }
  }



  const saveUser = ( response ) => {
    localStorage.setItem('@user', JSON.stringify(response)); 
    navigate("/dashboard/new");
  }

  function handleRegisterPerson(){

    setErrorRegister(false)
    setLoadRegister(true)
    const params = {email, password, name, username, }
    
    

   requestRegister(params).then(
      function(response, error) {
        
        if(response){
          setUserData(response.token)
          console.log(response)
          setErrorRegister(false)
          setFinishRegister(true)
          setTimeout(() => {
            navigate('/dashboard')
          }, 1500);
        }else{
          setFinishRegister(false)
          setErrorRegister(true)
        }
        setLoadRegister(false)
        })
  }


  async function getUserData () {
    try{
      const user = JSON.parse(localStorage.getItem('@user'))
      if(user){
        navigate('/dashboard/new')
      }
      
     }
    catch(e){
      console.log(e)
    }
  }


















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

    const handleOption = () => {
      if(imobil === true){
        setImobil(false)
        setPessoal(true)
        return
      }else if(imobil === false){
        setImobil(true)
        setPessoal(false)
      }
    } 

  const handleRegister = () => {
    setRegister(true)
    setLogin(false)
  }

  const handleBack = () => {
   if(register){
    setRegister(false)
    setLogin(true)
   }else{
    setRegister(true)
    setLogin(false)
   }
  }

  const handleSelect = () => {
    if(imobil){
     setRegisterImobil(true)
     setRegisterPerson(false)
     setRegisterSelect(false)
    }else{
      setRegisterImobil(false)
      setRegisterPerson(true)
      setRegisterSelect(false)
    }
   }
   const [valor, setValor] = useState('')

   function handleChangeMask(event) {
    const { value } = event.target
     setValor(mask(value))
}

  const handleImobil2 = () => {
    setRegisterImobil2(true)
    setRegisterImobil(false)
  } 

  const handleFinishRegister = () => {
    setRegisterImobil2(false)
    setRegisterFinish(true)
    setRegisterPerson(false)
  }

  const handleFinishLogin = () => {
    setLoginFinish(true)
    setLogin1(false)
  }
  const handleFAQ = () => {

  }
  const handleHome = () => {
    navigate(`/app`)
  }


  const a = false;

  return (
  
    <Container> 
      <DocumentMeta title="Login" />
      <Left>

        <View style={{justifyContent: 'space-between', marginBottom: 40, display: 'flex', flexDirection: 'row'}}>
          <Back onClick={handleBack} style={{width: 52, height: 52, padding: 0, fontSize: 24, borderRadius: 100, marginBottom: 20,}}><FiArrowLeft style={{marginTop: 6,}}/></Back>
          <Logo src={logo} onClick={handleHome}/>
          <Back onClick={handleFAQ} style={{width: 52, height: 52, padding: 0, fontSize: 24, borderRadius: 100, marginBottom: 20,}}><RiQuestionMark style={{marginTop: 6,}}/></Back>
        </View>
      {login && 
      <Login className='fadeUp'>

        <Title style={{marginBottom: -10,}}>Entrar</Title>

        {login1 &&
        <View style={{flexDirection: 'column', display: 'flex'}}>

        {errorLogin && <RedAcess className='fadeUp'>Credênciais inválidas</RedAcess>}
        {finishLogin && <GreenAcess className='fadeUp'>Autenticação concluída</GreenAcess>}

        <Label>E-mail</Label>
        <Input placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
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
          <Label style={{marginTop: 14}}><Checkbox/> Manter conectado</Label>
          <Label style={{textDecoration: 'underline'}}>Esqueci a senha</Label>
        </View>
      
        </View>
        }
        {loginFinish && 
        <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'column', display: 'flex'}}>

          <GreenAcess>Autenticação concluída</GreenAcess>
          <br/>
        </View>
        }
        <ButtonPR onClick={handleLoginSystem} style={{marginTop: 30,borderRadius: 100, fontSize: 20, padding: 18, }}> 
        {!loadLogin && <span>Entrar</span> } 
        {loadLogin && <Loader className='fadeUp' type="spin" size={24} color={color.light}/>}
    </ButtonPR>
    
        <Label style={{textAlign: 'center', fontFamily: font.book, paddingTop: 20, paddingBottom: 20}}>Não tem uma conta?
        <Label onClick={handleRegister} style={{textDecoration: 'underline', marginLeft: 10, color: color.primary, cursor: 'pointer'}}>Registrar-se</Label>
        </Label>

          </Login>}


  {register && 
    <Register className='fadeUp'>
      <View style={{flexDirection: 'column', display: 'flex'}}>
        
    

      {registerSelect &&
      <View style={{flexDirection: 'column', display: 'flex'}}>
      <Title>Criar conta</Title>
      <Label style={{textAlign: 'center', marginTop: 10,}}>Que tipo de conta se encaixa com você?</Label>
        <CheckBt disabled={imobil} on={imobil} onClick={handleOption}>
          <CheckImg src={IconImobil}/>
          <Side>
            <CheckTitle on={imobil}>Imobiliária</CheckTitle>
            <CheckLabel>Publique, gerencie, edite e venda imóveis.</CheckLabel>
          </Side>
          <CircleCheck on={imobil}><FiCheck style={{marginTop:3,}}/></CircleCheck>
       
        </CheckBt>
        
        <CheckBt disabled={pessoal} on={pessoal} onClick={handleOption}>
          <CheckImg src={IconPerson}/>
          <Side>
            <CheckTitle on={pessoal}>Pessoal</CheckTitle>
            <CheckLabel>Veja, salve e compre ou alugue imóveis.</CheckLabel>
          </Side>
          <CircleCheck on={pessoal}><FiCheck style={{marginTop:3,}}/></CircleCheck>
       
        </CheckBt>
        <ButtonPR onClick={handleSelect} style={{marginTop: 30, borderRadius: 100, width: '100%', fontSize: 18, padding: 14,}}>PRÓXIMO</ButtonPR>
        </View>
      }
      {registerImobil &&
        <View className='fadeUp'>
          <Routes>
          <Route>Criar conta</Route>
          <MdKeyboardArrowRight/>
          <Route style={{textDecoration: 'underline', color: color.title,}}>Proprietário</Route>
          </Routes>

        <View style={{flexDirection: 'column', display: 'flex'}}>
        <Label>E-mail do proprietário</Label>
        <Input type="email" placeholder='E-mail do proprietário'/>
        
        <Label>Nome do proprietário</Label>
        <Input type="text" placeholder='Nome do proprietário'/>
        
        
        <Label>CPF do proprietário</Label>
        <Input type="text" placeholder='Exemplo: Arthur Muller' onChange={handleChangeMask} value={valor}/>
        
        
        
          </View>
          <ButtonPR onClick={handleImobil2} style={{marginTop: 30, borderRadius: 100, width: '100%', fontSize: 18, padding: 14,}}>PRÓXIMO</ButtonPR>
    
        </View>
      }

{registerImobil2 &&
        <View className='fadeUp'>
          <Routes>
          <Route>Criar conta</Route>
          <MdKeyboardArrowRight/>
          <Route>Proprietário</Route>
          <MdKeyboardArrowRight/>
          <Route style={{textDecoration: 'underline', color: color.title,}}>Imobiliária</Route>
          </Routes>

        <View style={{flexDirection: 'column', display: 'flex'}}>
        <Label>Nome da imobiliária</Label>
        <Input type="email" placeholder='Ex: Arthur Muller'/>
        
        <Label>CRECI</Label>
        <Input type="text" placeholder='CRECI'/>
        
        <Label>Bairro</Label>
        <Select styles={customStyles} options={Bairros} defaultValue={Bairros[0]} />
      
        <Label>Rua e número</Label>
        <Input type="text" placeholder='Ex: Gledson Antunes Telles, 98' onChange={handleChangeMask} value={valor}/>
        

        
          </View>
          <ButtonPR onClick={handleFinishRegister} style={{marginTop: 30, borderRadius: 100, width: '100%', fontSize: 18, padding: 14, }}>PRÓXIMO</ButtonPR>
    
        </View>
      }


      {registerFinish && <View className='fadeUp' style={{justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
          <Routes style={{marginLeft: 30, marginBottom: 20,}}>
            <Route>Criar conta</Route>
            <MdKeyboardArrowRight/>
            <Route style={{textDecoration: 'underline', color: color.title,}}>Confirmar e-mail</Route>
          </Routes>


          <Title style={{marginBottom: -10,}}>Confirme seu e-mail</Title>
          <Label style={{textAlign: 'center',}}>Te enviamos um e-mail para confirmar que é você.</Label>
          <FinishImg src={registerFinishImage}/>
        </View>}

      {registerPerson &&
         <View className='fadeUp'>
         <Routes>
         <Route>Criar conta</Route>
         <MdKeyboardArrowRight/>
         <Route style={{textDecoration: 'underline', color: color.title,}}>Para mim</Route>
         </Routes>

       <View style={{flexDirection: 'column', display: 'flex'}}>

       {errorRegister && <RedAcess className='fadeUp'>Credênciais inválidas</RedAcess>}
        {finishRegister && <GreenAcess className='fadeUp'>Registro concluída</GreenAcess>}



       <Label>Nome completo</Label>
       <Input type="text" placeholder='Nome completo'  onChange={e => setName(e.target.value)}/>
       
       <Label>Nome de usuário</Label>
       <Input type="text" placeholder='Nome de usuário'  onChange={e => setUsername(e.target.value)}/>
       
       
       <Label>E-mail</Label>
       <Input type="email" placeholder='Seu e-mail'  onChange={e => setEmail(e.target.value)}/>
       
       <Label>Senha</Label>
       <Input type="password" placeholder='*********'  onChange={e => setPassword(e.target.value)}/>
                
      
         </View>
         <ButtonPR onClick={handleRegisterPerson} style={{marginTop: 30, borderRadius: 100, width: '100%', fontSize: 18, padding: 14,}}>
          {!loadRegister && <span>Entrar</span> } 
          {loadRegister && <Loader className='fadeUp' type="spin" color={color.light}/>}
          </ButtonPR>
   
       </View>
      }




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