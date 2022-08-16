import React, { useContext , useState, useEffect} from 'react';

import { FaMapMarkerAlt } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";

import Modal from 'react-modal';
import Busca from '../../assets/imgs/busca.png'
import Final from '../../assets/imgs/finish.png'

import { ThemeContext } from 'styled-components';
import { 
  Container, 

  Sublabel,

  Title,
  Local,

  Preferences,
  Type,
  Amount,
  About,
  Input,

  Select,
  SelectLabel,
  Spacing,
  Spacing1,
  Subheadline,

  
  Line,
  Main,
  Finish,
  Tag,
  
} from './styles';


import usePersistedState from '../../utils/usePersistedState';
import Styles from './styles.css'
import { styleModal } from './styleModal'
import { useNavigate } from "react-router-dom";
import { ButtonBR, ButtonPR, Ripple } from '../../theme/global'
import banner from '../../assets/imgs/banner.png'
import line from '../../assets/imgs/line.png'



const PreferencesScreen = () => {

  const { color } = useContext(ThemeContext)
  const navigate = useNavigate()

  const dataLenght = 42

  const [location, setLocation] = useState(true)
  const [types, setTypes] = useState(false)
  const [amounts, setAmounts] = useState(false)
  const [about, setAbout] = useState(false)

  const [name, setName] = useState('')
  const [valor_max, setValorMax] = useState(500)
  
  const [item1, setItem1] = useState('')
  
  
  const [aluguel, setAluguel] = useState(true)
  const [comprar, setComprar] = useState(false)

  
  const [casaComercial, setCasaComercial] = useState(false)
  const [casa, setCasa] = useState(false)
  const [ap, setAp] = useState(false)
  const [chacara, setChacara] = useState(false)
  const [cobertura, setCobertura] = useState(false)
  const [galpao, setGalpao] = useState(false)

  
  const [geminado, setGeminado] = useState(false)

  const [predioComercial, setPredioComercial] = useState(false)
  const [salaComercial, setSalaComercial] = useState(false)
  const [sitio, setSitio] = useState(false)
  const [sobrado, setSobrado] = useState(false)
  const [terreno, setTerreno] = useState(false)
  const [kitnet, setKitnet] = useState(false)

  const [itemView, setItv] = useState('Casa')
  
  const [index, setIndex] = useState(1)


  const [savename, setSaveName] = usePersistedState('name', name)


  const preferences = {'name': name, 'location': 'Jaraguá do Sul', 'valor_max': valor_max, 'item1': item1, 'itemview': itemView, 'alugar': aluguel, 'comprar': comprar,}


  const saveData = () => {
    localStorage.setItem('@preferences', JSON.stringify(preferences));
    setTimeout(() => {
      navigate("../app", { replace: true });
   
    }, 2000);
  }

  const [prefe, setPrefe] = useState([])
  const [loadGet, setLoadGet] = useState(false)
  
  const getData = () => {
    setLoadGet(true)
    try{
      const JSONA = localStorage.getItem('@preferences')
      const JsonString = JSON.parse(JSONA)
      if(!JsonString == null){
        setPrefe(JsonString)
        setTimeout(() => {
          setLoadGet(false)
        }, 2000);
      }

    }
    catch(e){
      console.log(e)
    }
}






  const handleChange = (event) => {
    setName(event.target.value);
  };


  const handleValorMax = (event) => {
    setValorMax(event.target.value);
  };

  const [finish, setFinish] = useState(false)


  const next = () => {
    if(location){
        setLocation(false)
        setTypes(true)
        setAmounts(false)
        openModal()
        setIndex(2)
    }
    if(types){
        setLocation(false)
        setTypes(false)
        setAmounts(true)
        setIndex(3)
    }
    if(amounts){
        setLocation(false)
        setTypes(false)
        setAmounts(false)
        setAbout(true)
        setIndex(4)
    
    }if(about){
        setAbout(false)
        setFinish(true)
        saveData()
    }
  }






  function handleChangeSelect(){
    if(aluguel === true){
      setAluguel(false)
      setComprar(true)
    }
    else if(aluguel === false){
      setAluguel(true)
      setComprar(false)
    }
  }

  

  const [opc, setOpc] = useState(0)

  function handleCasaComercial(){
    if(casaComercial === true){
      setCasaComercial(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(casaComercial === false){
      setItem1('item1=CasaComercial&')
      setItv('Casa comercial')
      setCasaComercial(true)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleCasa(){
    if(casa === true){
      setCasa(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(casa === false){
      setItem1('item1=Casa&')
      setItv('Casa')
      setCasa(true)
      setCasaComercial(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleAp(){
    if(ap === true){
      setAp(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(ap === false){
      setItem1('item1=Apartamento&')
      setItv('Apartamento')
      setAp(true)
      setCasaComercial(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }
  
  function handleChacara(){
    if(chacara === true){
      setChacara(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(chacara === false){
      setItem1('item1=Chácara&')
      setItv('Chácara')
      setChacara(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleCobertura(){
    if(cobertura === true){
      setCobertura(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(cobertura === false){
      setItem1('item1=Cobertura&')
      setItv('Cobertura')
      setCobertura(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setChacara(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleGalpao(){
    if(galpao === true){
      setGalpao(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(galpao === false){
      setItem1('item1=Galpao&')
      setItv('Galpão')
      setGalpao(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setChacara(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleKitnet(){
    if(kitnet === true){
      setKitnet(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(kitnet === false){
      setItem1('item1=Kitnet&')
      setItv('Kitnet')
      setKitnet(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setGalpao(false)
      setCasa(false)
      setPredioComercial(false)
      setSalaComercial(false)
      setSobrado(false)
      setChacara(false)
      setOpc(opc + 1)
    }
  }

  
  function handlePredioComercial(){
    if(predioComercial === true){
      setPredioComercial(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(predioComercial === false){
      setItem1('item1=PredioComercial&')
      setItv('Prédio Comercial')
      setPredioComercial(true)
      
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setGalpao(false)
      setCasa(false)
      setKitnet(false)
      setSalaComercial(false)
      setSobrado(false)
      setChacara(false)
      setOpc(opc + 1)
    }
  }

  
  function handleGeminado(){
    if(geminado === true){
      setGeminado(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(geminado === false){
      setItem1('item1=Geminado&')
      setItv('Geminado')
      setGeminado(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setPredioComercial(false)
      setSitio(false)
      setGalpao(false)
      setCasa(false)
      setKitnet(false)
      setSalaComercial(false)
      setSobrado(false)
      setChacara(false)
      setOpc(opc + 1)
    }
  }

  function handleSalaComercial(){
      if(salaComercial === true){
        setSalaComercial(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(salaComercial === false){
        setItem1('item1=SalaComercial&')
        setItv('Sala Comercial')
        setSalaComercial(true)
        setCasa(false)
        setChacara(false)
        setTerreno(false)
        setCobertura(false)
        setGalpao(false)
        setGeminado(false)
        setSitio(false)
        setKitnet(false)
        setPredioComercial(false)
        setAp(false)
        setCasaComercial(false)
        setSobrado(false)
        setOpc(opc + 1)
      }
    }


  function handleSitio(){
      if(sitio === true){
        setSitio(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(sitio === false){
        setItem1('item1=Sitio&')
        setItv('Sítio')
        setSitio(true)
        setCasa(false)
        setChacara(false)
        setTerreno(false)
        setCobertura(false)
        setGalpao(false)
        setGeminado(false)
        setKitnet(false)
        setPredioComercial(false)
        setAp(false)
        setCasaComercial(false)
        setSalaComercial(false)
        setSobrado(false)
        setOpc(opc + 1)
      }
    }


  function handleSobrado(){
      if(sobrado === true){
        setSobrado(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(sobrado === false){
        setItem1('item1=Sobrado&')
        setItv('Sobrado')
        setSobrado(true)
        setCasa(false)
        setChacara(false)
        setTerreno(false)
        setCobertura(false)
        setGalpao(false)
        setGeminado(false)
        setKitnet(false)
        setPredioComercial(false)
        setAp(false)
        setCasaComercial(false)
        setSalaComercial(false)
        setSitio(false)
        setOpc(opc + 1)
      }
    }


  function handleTerreno(){
      if(terreno === true){
        setTerreno(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(terreno === false){
        setItem1('item1=Terreno&')
        setItv('Terreno')
        setTerreno(true)
        setCasa(false)
        setChacara(false)
        setCobertura(false)
        setGalpao(false)
        setGeminado(false)
        setKitnet(false)
        setPredioComercial(false)
        setAp(false)
        setCasaComercial(false)
        setSalaComercial(false)
        setSobrado(false)
        setSitio(false)
        setOpc(opc + 1)
      }
    }

    const [modalFinishIsOpen, setIsOpenFinish] = useState(false);
    const  openModalFinish = () => {setIsOpenFinish(true)}
    const  closeModalFinish = () => {setIsOpenFinish(false)}



    const [modalIsOpen, setIsOpen] = useState(false);
    const  openModal = () => {setIsOpen(true)}
    const  closeModal = () => {
        setIsOpen(false) 
        setTypes(false) 
        next()}
    const a = false



   

    const nextEnter = ( event ) => {if(event.key === 'Enter'){next()}}



  return (
    <Main>
    <Container>


<div style={{maxWidth: 500,}}>
    <Title style={{fontSize: 56, lineHeight: '64px'}}> {savename}Encontre o  <br/>imóvel dos seus <br/>sonhos!</Title>
    <img src={line} style={{width: 200, marginTop: -70, marginBottom: 20,}} />
<Preferences>
    
    <div>
    { location && <Local>
        <Sublabel>Localização</Sublabel>


        <div style={{display: 'flex', flexDirection: 'row', marginTop: 2,}}>
            <FaMapMarkerAlt size={24} color={color.primary} style={{marginTop: 8}}/>    
            <Title>Jaraguá do Sul</Title>
        </div>
        
    </Local>}

    { types && <Type>
        <Sublabel>Tipo</Sublabel>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 2,}}>
            <BiBuildingHouse size={24} color={color.primary} style={{marginTop: 8}}/>
            {aluguel && <Title>Aluguel,</Title>}
            {comprar && <Title>Comprar,</Title>}
            <Title>{itemView}</Title>
        </div>
    </Type>
    }
    
    { amounts && <Amount>
        <Sublabel>Valor</Sublabel>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 6, marginBottom: -10,}}>
            <Title style={{color: color.primary, marginLeft: 0, marginTop: -4, fontSize: 36, 
            }}>R$</Title>
          <Input onKeyPress={(event) => nextEnter(event)} type="number" style={{marginTop: -10, marginLeft: 6, marginBottom: 25, paddingBottom: 0, fontSize: 36, }} value={valor_max} onChange={handleValorMax} placeholder="1200"/>
        </div>
    </Amount>}

    {about && <About>
        <Sublabel>Como podemos te chamar?</Sublabel>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 6,}}>
            <Input onKeyPress={(event) => nextEnter(event)}  type="text" value={name} onChange={handleChange} placeholder="Seu nome"/>
        </div>
    </About>}

    
    { finish && <Finish>
        <Sublabel>Aguarde</Sublabel>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 2,}}>
            <Title style={{marginLeft: 0,}}>Salvando suas preferências</Title>
        </div>

        </Finish>}

        <div style={{justifyContent: 'space-between', paddingTop: 0, marginTop: -10,  display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}}>
            
            <Ripple><ButtonBR>{index} de 4 etapas</ButtonBR></Ripple>
            {!types && !finish && <Ripple><ButtonPR onClick={next}>PRÓXIMO</ButtonPR></Ripple>}
            {types && <Ripple><ButtonPR onClick={openModal}>EDITAR</ButtonPR></Ripple>} 
            {finish && <Ripple><ButtonPR onClick={openModalFinish}>AGUARDE</ButtonPR></Ripple>} 
        </div>


    </div>


    </Preferences>

    <Sublabel style={{fontSize: 18,}}>Preencha os dados acima para encontrarmos o imóvel perfeito para você *</Sublabel>
</div>

<div>
    <img style={{width: 400, marginRight: 100,}} src={banner}/>
</div>

</Container>


<Modal isOpen={modalFinishIsOpen}
        closeTimeoutMS={300}
        onRequestClose={closeModalFinish}
        style={styleModal}>

<img src={Final} style={{width: 500, marginBottom: 20,}} />

<Main>
    <Title>Encontramos  <Tag>{dataLenght}</Tag>  imóveis que atendem suas preferências</Title>
    <ButtonPR style={{flexGrow: 1, display: 'flex' , width: "96%", alignSelf: 'center', margin: 'auto'}} onClick={openModalFinish}>VER</ButtonPR>

</Main>

        </Modal>


<Modal isOpen={modalIsOpen}
        closeTimeoutMS={300}
        onRequestClose={() => setIsOpen(false)}
        style={styleModal}>

<img src={Busca} style={{width: '100%', marginBottom: 20,}}/>


            <Main>

<Title style={{textAlign: 'center'}}>O que você está buscando?</Title>

<div style={{flexDirection: 'row', display: 'flex', marginTop: 20, marginBottom: 10,}}>
    
    <Select disabled={aluguel} style={{flexGrow: 1,}} activity={aluguel} onClick={handleChangeSelect}>
    <SelectLabel activity={aluguel}>Aluguel</SelectLabel>
  </Select>

  <Spacing1/>
    
  <Select disabled={comprar} style={{flexGrow: 1,}} activity={comprar} onClick={handleChangeSelect}>
    <SelectLabel activity={comprar}>Comprar</SelectLabel>
  </Select>
</div>

<div style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}>


<Spacing/>
<Line />


<Subheadline style={{ textAlign: 'center', fontSize: 24,}}>Selecione apenas um</Subheadline>


<div style={{flexDirection: 'row', flexWrap: 'wrap', display: 'flex', marginBottom: 10, marginTop: 20,}}>

    <Select activity={casa} onClick={handleCasa}>
      <SelectLabel activity={casa}>Casa</SelectLabel>
    </Select>


    <Spacing1/>

    <Select activity={ap} onClick={handleAp}>
      <SelectLabel activity={ap}>Apartamento</SelectLabel>
    </Select>

    <Spacing1/>


    <Select activity={casaComercial} onClick={handleCasaComercial}>
      <SelectLabel activity={casaComercial}>Casa Comercial</SelectLabel>
    </Select>

    <Spacing1/>

    <Select activity={chacara} onClick={handleChacara}>
      <SelectLabel activity={chacara}>Chácara</SelectLabel>
    </Select>

    <Spacing1/>
    <Select activity={cobertura} onClick={handleCobertura}>
      <SelectLabel activity={cobertura}>Cobertura</SelectLabel>
    </Select>
    <Spacing1/>

    <Select activity={galpao} onClick={handleGalpao}>
      <SelectLabel activity={galpao}>Galpão</SelectLabel>
    </Select>
    
    <Spacing1/>

    <Select activity={geminado} onClick={handleGeminado}>
      <SelectLabel activity={geminado}>Geminado</SelectLabel>
    </Select>


    <Spacing1/>

    <Select activity={predioComercial} onClick={handlePredioComercial}>
      <SelectLabel activity={predioComercial}>Prédio Comercial</SelectLabel>
    </Select>
    
    <Spacing1/>

    <Select activity={salaComercial} onClick={handleSalaComercial}>
      <SelectLabel activity={salaComercial}>Sala Comercial </SelectLabel>
    </Select>
    
    <Spacing1/>

    <Select activity={sitio} onClick={handleSitio}>
      <SelectLabel activity={sitio}>Sítio</SelectLabel>
    </Select>
    
    <Spacing1/>

    <Select activity={sobrado} onClick={handleSobrado}>
      <SelectLabel activity={sobrado}>Sobrado </SelectLabel>
    </Select>

    
    <Spacing1/>

    <Select activity={terreno} onClick={handleTerreno}>
      <SelectLabel activity={terreno}>Terreno </SelectLabel>
    </Select>

    <Spacing1/>
    

    <Select activity={kitnet} onClick={handleKitnet}>
      <SelectLabel activity={kitnet}>Kitnet </SelectLabel>
    </Select>

  <Spacing1/>
</div>
<div>

    <Line/>
    <Spacing/><Spacing/>


  <ButtonPR style={{width:420, }} onClick={closeModal}>SALVAR</ButtonPR>
</div>
</div>
</Main>
</Modal>
</Main>
  );
};

export default PreferencesScreen;