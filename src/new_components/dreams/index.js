import React, { useContext , useState, useEffect} from 'react';


import { API_URL } from "../../api/index"
import Axios from 'axios';
import { ThemeContext } from 'styled-components';
import { 

  Title,
  Main,

  Subtitle,
  Spacing,
  
} from './styles';

import ListV from '../../structure/cards/list_v';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ButtonBR,   ButtonPR } from '../../theme/global'

const headers = {'Accept': "application/json"}

const DreamsScreen = () => {

  const { color } = useContext(ThemeContext)

  const [prefe, setPrefe] = useState([])
  const [loadGet, setLoadGet] = useState(false)
  const [data, setData] = useState([])
  
  const [dataFull, setDataFull] = useState([])
  
  const getPreferences = () => {
    setLoadGet(true)
    try{
      const JSONA = localStorage.getItem('@preferences')
      const JsonString = JSON.parse(JSONA)
      if(JsonString != undefined){
        setPrefe(JsonString)
        setTimeout(() => {
          setLoadGet(false)
          
        }, 1000);} 
      getData(JsonString)
      }
    catch(e){console.log(e)}
  }


  function getData( params ){
    console.log('getData')
    const valor = params
    const max = 'valor_max=' + valor.valor_max
    const item =  valor.item1 
    if(valor.alugar){
      Axios.get(`${API_URL}/feed/alugar?${item}${max}`, {headers: headers}).then(function (response) {
        setDataFull(response.data)
        setData([response.data[0] , response.data[1], response.data[2]])

    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      Axios.get(`${API_URL}/feed/comprar?${item}${max}`, {
        headers: headers
    }).then(function (response) {
        setDataFull(response.data)
        setData([response.data[0] , response.data[1], response.data[2]])


    }).catch(error => { 
        console.log(error)
    })}}

 

    useEffect(() => {
      getPreferences()
    }, [])


    const [index,setIndex] = useState(0)

    function proximo(){

            if(index == 0){
                setData([dataFull[3], dataFull[4] , dataFull[5]])
                setIndex(index + 1)
            }
            else if(index == 1){
                setData([dataFull[6], dataFull[7] , dataFull[8]])
                
            }}

    function anterior(){

            if(index == 0){
                setData([dataFull[0], dataFull[1] , dataFull[2]])
                
            }
            else if(index == 1){
                setData([dataFull[3], dataFull[4] , dataFull[5]])
                setIndex(index - 1)
            }
            else if(index == 2){
                setData([dataFull[6], dataFull[7] , dataFull[8]])
                setIndex(index - 1)
            }
        }
    
    
    

 

return (
  <Main>
    <div style={{padding: 60, display: 'flex', flexDirection: 'column'}}>
        <Title style={{fontSize: 52, margin: 0, textAlign: 'center'}}>O Sonho de consumo!</Title>
        <Subtitle style={{fontSize: 32, textAlign: 'center'}}>Imóveis dos sonhos</Subtitle>
 


        <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
            {data.map((data) => <ListV key={data.ID} data={data}/> )}
        </div>

        <div style={{justifyContent: 'center', flexDirection: 'row', display: 'flex'}}>
        <ButtonBR onClick={anterior}>
            <FiArrowLeft size={32}/>   
        </ButtonBR>
        <Spacing/>
        <ButtonPR onClick={proximo}>
            <FiArrowRight size={32}/>
        </ButtonPR>
    
    </div>

    </div>
</Main>
  );
};

export default DreamsScreen;