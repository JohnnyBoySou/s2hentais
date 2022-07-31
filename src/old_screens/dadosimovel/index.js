import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Image, ImageBackground } from 'react-native';

import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TextInput } from 'react-native-paper';

import {
  Wrapper,
  Container,
  Title,
  Main,
  Label,
  Subtitle,
  ImgSubtitle,
  ImgTitle,
  Lista,
  Infra,
  InfraLabel,
  Button,
  ButtonIcon,
  ButtonLabel,
  SubHeadline,
  Spacing,
  Number,
  Div,
  Select,
  SelectLabel,
  Spacing1,
} from './styles';

import { MotiView, useAnimationState, AnimatePresence } from 'moti';
import Header from '../../components/header/index';
import { ThemeContext } from 'styled-components/native';
import { Modalize } from 'react-native-modalize';

export default function DadosImovel({ navigation, route }) {
  const { color } = useContext(ThemeContext);
  const { opacity } = useContext(ThemeContext);
  const { font } = useContext(ThemeContext);


  
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const [loading, setLoading] = useState(66);
  const [nome, setNome] = useState();
  const [erroNome, setErroNome] = useState();

  const [telefone, setTelefone] = useState();
  const [erroTelefone, setErroTelefone] = useState();

  const [email, setEmail] = useState();
  const [erroEmail, setErroEmail] = useState();

  const validate = (email) => {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      console.log('Email is Not Correct');
      setEmail(email);
    } else {
      setEmail(email);
      console.log('Email is Correct');
    }
  };

  const [aluguel, setAluguel] = useState(true);
  const [comprar, setComprar] = useState(false);

  function handleChangeSelect() {
    if (aluguel == true) {
      setAluguel(false);
      setComprar(true);
    } else if (aluguel == false) {
      setAluguel(true);
      setComprar(false);
    }
  }


  const [valorMes, setValorMes] = useState()
  const [valorUnico, setValorUnico] = useState()


  
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

  const [bt, setBt] = useState(true)


  

  const [item1, setItem1] = useState('')


  const [opc, setOpc] = useState(0)

  function handleCasaComercial(){
    if(casaComercial == true){
      setCasaComercial(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(casaComercial == false){
      setItem1('item1=CasaComercial&')
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
    if(casa == true){
      setCasa(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(casa == false){
      setItem1('Casa')
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
    if(ap == true){
      setAp(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(ap == false){
      setItem1('Apartamento')
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
    if(chacara == true){
      setChacara(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(chacara == false){
      setItem1('Chácara')
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
    if(cobertura == true){
      setCobertura(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(cobertura == false){
      setItem1('Cobertura')
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
    if(galpao == true){
      setGalpao(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(galpao == false){
      setItem1('Galpão')
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
    if(kitnet == true){
      setKitnet(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(kitnet == false){
      setItem1('Kitnet')
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
    if(predioComercial == true){
      setPredioComercial(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(predioComercial == false){
      setItem1('Prédio Comercial')
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
    if(geminado == true){
      setGeminado(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(geminado == false){
      setItem1('Geminado')
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
      if(salaComercial == true){
        setSalaComercial(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(salaComercial == false){
        setItem1('Sala Comercial')
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
      if(sitio == true){
        setSitio(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(sitio == false){
        setItem1('Sítio')
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
      if(sobrado == true){
        setSobrado(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(sobrado == false){
        setItem1('Sobrado')
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
      if(terreno == true){
        setTerreno(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(terreno == false){
        setItem1('Terreno')
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


  const regx = item1.slice(6)

  const item = regx?.slice(0, regx.length - 1)


  return (
    <Main>
      <Header title="Imóvel" />
      <Wrapper>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 24,
            alignContent: 'center',
          }}>
          <View>
            <Subtitle>Seu</Subtitle>
            <Title>Imóvel</Title>
          </View>

          <AnimatedCircularProgress
            size={65}
            width={8}
            fill={loading}
            tintColor={color.primary}
            rotation={0}
            lineCap="round"
            duration={1000}
            children={() => (
              <View
                style={{
                  backgroundColor: color.off,
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Number>2</Number>
              </View>
            )}
          />
        </View>

        <View style={{ marginHorizontal: 24, marginBottom: 20 }}>
          <Label>Queremos saber mais um pouco sobre seu imóvel!</Label>
          <Div />

          <View
            style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
            <Select
              disabled={aluguel}
              style={{ flexGrow: 1 }}
              activity={aluguel}
              onPress={handleChangeSelect}>
              <SelectLabel activity={aluguel}>Alugar</SelectLabel>
            </Select>
            <Spacing />
            <Select
              disabled={comprar}
              style={{ flexGrow: 1 }}
              activity={comprar}
              onPress={handleChangeSelect}>
              <SelectLabel activity={comprar}>Vender</SelectLabel>
            </Select>
          </View>

           <Select
              style={{ flexGrow: 1, paddingTop: 18, paddingBottom: 18,}}
              activity={false}
              onPress={onOpen}>
              <SelectLabel style={{textAlign: 'left',}} activity={false}>Tipo: {item1}</SelectLabel>
            </Select>



         {aluguel && <TextInput
            error={erroNome}
            label="Valor por mês"
            value={valorMes}
            onChangeText={(valorMes) => setValorMes(valorMes)}
            mode="outlined"
            keyboardType="numeric"
            theme={{
              colors: {
                primary: '#5B72F2',
                underlineColor: 'transparent',
                placeholder: '#00000060',
                background: '#fff',
              },
              fonts: { regular: { fontFamily: font.book } },
            }}
          />}

          {comprar && <TextInput
            error={erroNome}
            label="Valor único"
            value={valorUnico}
            onChangeText={(valorUnico) => setValorUnico(valorUnico)}
            mode="outlined"
            keyboardType="numeric"
            theme={{
              colors: {
                primary: '#5B72F2',
                underlineColor: 'transparent',
                placeholder: '#00000060',
                background: '#fff',
              },
              fonts: { regular: { fontFamily: font.book } },
            }}
          />}
          <Spacing />

         

       <TextInput
            error={erroTelefone}
            label="Tamanho em metros quadrados"
            value={telefone}
            onChangeText={(telefone) => setTelefone(telefone)}
            mode="outlined"
            keyboardType="number-pad"
            theme={{
              colors: {
                primary: '#5B72F2',
                underlineColor: 'transparent',
                placeholder: '#00000060',
                background: '#fff',
              },
              fonts: { regular: { fontFamily: font.book } },
            }}
          />
          <Spacing />

          <TextInput
            error={erroEmail}
            label="Localização"
            value={email}
            onChangeText={(email) => validate(email)}
            mode="outlined"
            placeholder="Rua, Bairro, Número, Complemento"
            keyboardType="email-address"
            autoComplete="email"
            theme={{
              colors: {
                primary: '#5B72F2',
                underlineColor: 'transparent',
                placeholder: '#00000060',
                background: '#fff',
              },
              fonts: { regular: { fontFamily: font.book } },
            }}
          />

          <Spacing />

          <Div />
        </View>

        <Button color="#5B72F2" onPress={() => navigation.navigate('Mapa')}>
          <>
            <ButtonLabel>Continuar</ButtonLabel>
            <ButtonIcon />
            <AntDesign
              style={{ marginLeft: -35, marginRight: 28 }}
              name="arrowright"
              size={28}
              color="#FFF"
            />
          </>
        </Button>
      </Wrapper>


        <Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
          <View style={{marginHorizontal: 24, paddingVertical: 20,}}>
          <SubHeadline>Escolha apenas um</SubHeadline>

          <Div/>
          <Spacing/>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', }}>

            
            <Select activity={casa} onPress={handleCasa}>
              <SelectLabel activity={casa}>Casa</SelectLabel>
            </Select>
            <Spacing1/>

            <Select activity={ap} onPress={handleAp}>
              <SelectLabel activity={ap}>Apartamento</SelectLabel>
            </Select>
            <Spacing1/>



            <Select activity={casaComercial} onPress={handleCasaComercial}>
              <SelectLabel activity={casaComercial}>Casa Comercial</SelectLabel>
            </Select>
            <Spacing1/>

            <Select activity={chacara} onPress={handleChacara}>
              <SelectLabel activity={chacara}>Chácara</SelectLabel>
            </Select>
             <Spacing1/>

            <Select activity={cobertura} onPress={handleCobertura}>
              <SelectLabel activity={cobertura}>Cobertura</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select activity={galpao} onPress={handleGalpao}>
              <SelectLabel activity={galpao}>Galpão</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select activity={geminado} onPress={handleGeminado}>
              <SelectLabel activity={geminado}>Geminado</SelectLabel>
            </Select>
            
            <Spacing1/>

            <Select activity={predioComercial} onPress={handlePredioComercial}>
              <SelectLabel activity={predioComercial}>Prédio Comercial</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select activity={salaComercial} onPress={handleSalaComercial}>
              <SelectLabel activity={salaComercial}>Sala Comercial </SelectLabel>
            </Select>
            
             <Spacing1/>
            <Select activity={sitio} onPress={handleSitio}>
              <SelectLabel activity={sitio}>Sítio</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select activity={sobrado} onPress={handleSobrado}>
              <SelectLabel activity={sobrado}>Sobrado </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select activity={terreno} onPress={handleTerreno}>
              <SelectLabel activity={terreno}>Terreno </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select activity={kitnet} onPress={handleKitnet}>
              <SelectLabel activity={kitnet}>Kitnet </SelectLabel>
            </Select>
          <Spacing1/>




        </View>
          <Spacing1/>
          <Div/>
        </View>
          
          {item1.length != 0 && <Button color="#5B72F2" onPress={() => modalizeRef.current?.close()}>
          <>
            <ButtonLabel>Pronto</ButtonLabel>
            <ButtonIcon />
            <AntDesign
              style={{ marginLeft: -35, marginRight: 28 }}
              name="arrowright"
              size={28}
              color="#FFF"
            />
          </>
        </Button>}
        
        
        </Modalize>
    </Main>
  );
}
