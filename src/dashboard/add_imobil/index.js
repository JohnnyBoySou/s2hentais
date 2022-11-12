import React, { useContext , useState, } from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from 'react-icons/md'

import { AiOutlineQuestionCircle } from 'react-icons/ai'


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
  Stepper,
  StepLine,
  FirstColumn,
  Error,
  Column,
  FirstStep,
  SecondStep,
  ThreeStep,
  FourStep,
  FiveStep,
  StepLabel,
  StepTitle,
  StepIcon,
  Separetor,

  Upload,
  UploadText,
  UploadLabel,
  Impulsionar,
  CircleIcon,
  ImpulsionarText,
  ImpulsionarLabel, 
  Subtitle,
  
  ProgressBar,
  Publish,
  Arrow,

  CardImg,
  CardLabel,
  CardTitle,
  Spacing
} from './styles';
import { ButtonBR, ButtonPR, Back } from '../../theme/global';
import '../animation.css'


import Modal from 'react-modal';
import PublishImg from '../../assets/imgs/publish.png'
import Suff from '../../assets/imgs/suff.png'
import Select from 'react-select' 
import makeAnimated from 'react-select/animated';


import Switch from 'react-switch';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { FiAward, FiCheckCircle, FiMap, FiTool, FiUpload, FiArrowLeft } from 'react-icons/fi';
import { requestNewImovel } from '../../api/request/auth_requests';

import Loader from  '../../components/loader'
import LoadingImg from '../../assets/imgs/loading_imovel.webp'

const AddImobiil = ( props ) => {

    const { color, font } = useContext(ThemeContext)

    const userData = props.userData
    const [index, setIndex] = useState(1)

    const animatedComponents = makeAnimated();
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [step5, setStep5] = useState(false)

    const newID = Number(Math.floor(Math.random() * (9999 - 1) + 9999))
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')
    const [tipo, setTipo] = useState('')
    const [valor_mensal, setValorMensal] = useState('')
    const [valor_unico, setValorUnico] = useState('')
    //const [cidade, setCidade] = useState('Jaraguá do Sul')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [qtd1, setQtd1] = useState('')
    const [qtd2, setQtd2] = useState('')
    const [area, setArea] = useState('')
    const [CEP, setCEP] = useState('')

    const [conservacao, setConservacao] = useState('')
    





  const tipos = [
    { value: 'valor_mensal', label: 'Por mês' },
    { value: 'valor_unico', label: 'Valor Único' },
  ]


  const cidade = [
    { value: 'Jaraguá do Sul', label: 'Jaraguá do Sul' },
    { value: 'Joinville', label: 'Joinville' },
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

  const bairros = [ 
    {value: 'Centro', label: 'Centro', }, 
    {value: 'Água Verde', label: 'Água Verde', }, 
    {value: 'Águas Claras', label: 'Águas Claras',  },
    {value: 'Barra do Rio Cerro', label: 'Barra do Rio Cerro', },
    {value: 'Barra do Rio Molha', label: 'Barra do Rio Molha' },
    {value: 'Boa Vista', label: 'Boa Vista', },
    {value: 'Braço do Ribeirão Cavalo', label: 'Braço do Ribeirão Cavalo', },
    {value: 'Centenário', label: 'Centenário',},
    {value: 'Chico de Paulo', label: 'Chico de Paulo',  },
    {value: 'Czerniewicz', label: 'Czerniewicz', },
    {value: 'Estrada Nova', label: 'Estrada Nova', },
    {value: 'Ilha da Figueira', label: 'Ilha da Figueira', },
    {value: 'Jaraguá 84', label: 'Jaraguá 84',  },
    {value: 'Jaraguá 99', label: 'Jaraguá 99',  },
    {value: 'Jaraguá Esquerdo', label: 'Jaraguá Esquerdo',  },
    {value: 'João Pessoa', label: 'João Pessoa', },
    {value: 'Nova Brasília', label: 'Nova Brasília', },
    {value: 'Nereu Ramos', label: 'Nereu Ramos', },
    {value: 'Parque Malwee 10', label: 'Parque Malwee 10' },
    {value: 'Rau', label: 'Rau', },
    {value: 'Rio Cerro I', label: 'Rio Cerro I',  },
    {value: 'Rio Cerro II', label: 'Rio Cerro II' },
    {value: 'Rio da Luz', label: 'Rio da Luz' },
    {value: 'Rio Molha', label: 'Rio Molha',  },
    {value: 'Santa Luzia', label: 'Santa Luzia', },
    {value: 'Santo Antônio 10', label: 'Santo Antônio 10'  },
    {value: 'São Luís', label: 'São Luís', },
    {value: 'Tifa Martins', label: 'Tifa Martins' },
    {value: 'Tifa Monos', label: 'Tifa Monos' },
    {value: 'Três Rios do nsao: 10', label: 'Três Rios do nsao: 10' },
    {value: 'Três Rios do ao: 10', label: 'Três Rios do ao: 10' },
    {value: 'Vieira', label: 'Vieira'},
    {value: 'Vila Baependi 10', label: 'Vila Baependi 10' },
    {value: 'Vila Lalau', label: 'Vila Lalau',  },
    {value: 'Vila Lenzi', label: 'Vila Lenzi',  },
    {value: 'Vila Nova', label: 'Vila Nova',  },
  ]


  const imgs = {
    
    "imagem1": null,
    "imagem2": null,
    "imagem3": null,
    "imagem4": null,
    "imagem5": null,
    "imagem6": null,
    "imagem7": null,
    "imagem8": null,
    "imagem9": null,
    "imagem10": null,
  }
  
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
        "valor_mensal": valor_mensal,
        "valor_unico": valor_unico,
        "cidade": cidade.label,
        "bairro": bairro.label,
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




  const [modalIsOpen2, setIsOpen2] = useState(false);
  const handleImovel = () => {
    setIsOpen2(true)
    //newImovel()
  }

      
  return (
      
    <View style={{flexDirection: 'column', display:'flex', background: color.light, paddingBottom: 20, }}> 
    
      <Step>
        <StepLine>
          <StepIcon on={true}><StepLabel>1</StepLabel></StepIcon>
          <StepTitle>Dados Gerais</StepTitle>
        </StepLine>
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={false}><StepLabel>2</StepLabel></StepIcon>
          <StepTitle>Local e Endereço</StepTitle>
        </StepLine>
        
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={false}><StepLabel>3</StepLabel></StepIcon>
          <StepTitle>Mídia e Fotos</StepTitle>
        </StepLine>

        
        <Arrow>
          <MdOutlineArrowForwardIos/>
        </Arrow>
        <StepLine>
          <StepIcon on={false}><StepLabel>4</StepLabel></StepIcon>
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
          
          
          <Label>Tipo</Label>
          <Select styles={customStyles} options={tipos} defaultValue={tipos[0]} />
      

          <Label>Categorias</Label>         
          <Select styles={customStyles} options={categorias} defaultValue={categorias[0]} />
          
          
          <Label>Infraestrutura</Label>         
          <Select isMulti closeMenuOnSelect={false} placeholder="Insira itens de infraestrutura"
      components={animatedComponents} styles={customStyles} options={infraestrutura} defaultValue={infraestrutura[0]} />
         
          </Column>
          <Column style={{width: '50%'}}>
          
          {tipo.label === "Por mês" && <Label>Valor mensal</Label>}
          {tipo.label === "Por mês" && <Input value={valor_mensal} name="valor_mensal"  onChange={e => setValorMensal(e.target.value)} placeholder="Exemplo: 4" type="number"/>}
          
          {tipo.label === "Valor Único" && <Label>Valor Único</Label>}
          {tipo.label === "Valor Único" && <Input value={valor_unico} name="valor_unico"  onChange={e => setValorUnico(e.target.value)} placeholder="Exemplo: 4" type="number"/>}
          

          <Label>Quantidade de quartos</Label>
          <Input value={qtd1} name="qtd1"  onChange={e => setQtd1(e.target.value)} placeholder="Exemplo: 4" type="number"/>
          
          <Label>Quantidade de banheiros</Label>
          <Input value={qtd2} name="qtd2" onChange={e => setQtd2(e.target.value)} placeholder="Exemplo: 2" type="number"/>
      
          <Label>Área em metros quadrados</Label>
          <Input value={area} name="area" onChange={e => setArea(e.target.value)} placeholder="Exemplo: 130" type="number"/>
      
          <Label>Taxas adicionais</Label>         
          <Select isMulti closeMenuOnSelect={false} placeholder="Insira as taxas adicionais"
      components={animatedComponents} styles={customStyles} options={taxas} defaultValue={taxas[0]} />
      

          </Column>
          </FirstStep>}
          

          {step2 && 
            <SecondStep className='fadeUp'>
            <Column style={{width: '50%'}}>

            <Label>Bairro</Label>
            <Select styles={customStyles} options={bairros} defaultValue={bairros[0]} />
      
            <Label>Rua</Label>
            <Input value={rua} onChange={e => setRua(e.target.value)} placeholder="Exemplo: Gov. Jorge Lacerda" name="rua" type="text"/>
          
            
            <Label>Número</Label>
            <Input value={numero} onChange={e => setNumero(e.target.value)} placeholder="Exemplo: 455" name="numero" type="number"/>
          

            </Column>
            <Column style={{width: '50%'}}>
            
            <Label>CEP</Label>
            <Input value={CEP} onChange={e => setCEP(e.target.value)} placeholder="Exemplo: 89999000" name="numero" type="number"/>
          
            <Label>Latitude</Label>
            <Input value={latitude} name="latitude" onChange={e => setLatitude(e.target.value)} placeholder="-32.000000" type="number"/>
            
            <Label>Longitude</Label>
            <Input value={longitude} name="longitude" onChange={e => setLongitude(e.target.value)} placeholder="-46.000000" type="number"/>
          

          <View style={{border: '2px solid #00000020', borderRadius: 6, borderColor: "#00000020", marginTop: 16}}>
            <View style={{marginTop: 10, flexDirection: 'row', display: 'flex', marginBottom: 20, marginLeft: 14,}}>
            <Label>Esconder localização</Label>
            <View style={{marginLeft: 10, marginTop: 14,}}>
            <Switch
              onChange={handleVisibilityLocation}
              checked={hideLocation}
              checkedIcon={false}
              uncheckedIcon={false}
              height={18}
              width={40}
              handleDiameter={20}
              offColor="#D1D1D1"
              onColor="#8D9FFF"
              onHandleColor={color.primary}
              offHandleColor="#9C9C9C"
            /></View></View></View>
            </Column>


            </SecondStep>}


          {step3 && <ThreeStep className='fadeUp'>
            <Column style={{justifyContent: 'center', width: '100%'}}>
              <Upload>
                <IoIosImages size={52} style={{textAlign: 'center', alignSelf: 'center', marginBottom: 20, color: color.primary,}} />
                
                <UploadText>Arraste e solte suas <br/>imagens aqui ou 
                <UploadText style={{color: color.primary, paddingLeft: 10, fontFamily: font.medium, textDecoration: 'underline', }}>Pesquise</UploadText></UploadText>
                <UploadText style={{fontSize: 16, marginTop: 20,}}>- Max de 6MB e (28MB para vídeos)    <br/>Tamanho recomendado: 1024 x 1920 (9:16)</UploadText>
                
           
              </Upload>
              <UploadLabel><UploadLabel style={{fontFamily: font.bold,}}>4</UploadLabel> imagens enviadas de <UploadLabel style={{fontFamily: font.bold,}}>16</UploadLabel>.</UploadLabel>
              </Column>
            </ThreeStep>}



          {step4 && <FourStep className='fadeUp'>
            <Column style={{justifyContent: 'center', marginTop: 30, marginBottom: 20, width: '100%'}}>
              <Publish src={PublishImg} />
              
             
              <Title style={{textAlign: 'center', marginTop: 20,}}>Tudo pronto para publicar seu imóvel!</Title>
              <Label></Label>
            </Column>
            </FourStep>}


          {step5 && <FiveStep>
              <Column>

              </Column>
            </FiveStep>}
          <Separetor style={{marginLeft: 0, marginBottom: 30,}}/>

        
      <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingLeft: 0, paddingRight: 20,}}>
            <ButtonBR  disabled={step1} onClick={previusStep}>ANTERIOR</ButtonBR>
            <View>
            
          {step4 && <ButtonPR style={{borderRadius: 60, width: 200, marginTop: 30, margin: 'auto'}} onClick={handleImovel}>
            PUBLICAR
            {loadingNewImovel &&  <Loader className='fadeUp' type="spin" color={color.light}/>}
            </ButtonPR>}
          
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