import React, { useContext , useState, useEffect} from 'react';
import { ThemeContext } from 'styled-components';
import { 
  Container, 

  Sublabel,

  Title,
  Main,
  
} from './styles';
import {  useNavigate } from 'react-router-dom';


const AsyncScreen = () => {

  
  const [prefe, setPrefe] = useState([])
  const [loadGet, setLoadGet] = useState(false)
  
  const navigate = useNavigate()
  
  const getPreferences = () => {
    setLoadGet(true)
    try{
      const JSONA = localStorage.getItem('@preferences')
      const JsonString = JSON.parse(JSONA)
      if(JsonString != undefined){
        setPrefe(JsonString)
        setTimeout(() => {
          setLoadGet(false)
          navigate("../app", { replace: true });
        }, 500);}
      else{
        navigate("../preferences", { replace: true });
        
      }
      
    
    }
    catch(e){console.log(e)}
  }

    
    useEffect(() => {
      getPreferences()
    }, [])
    



return (
  <Main>

  
    <Container>

    <div style={{maxWidth: 500,}}>
      <Title style={{fontSize: 36, lineHeight: '38px'}}>O que encontramos <br/>para você!</Title>
      <Sublabel style={{fontSize: 18,}}>Com base em suas preferências</Sublabel>
    </div>

    </Container>




<div style={{padding: 60, paddingTop: 0, paddingRight: 40, flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
    
</div>






</Main>
  );
};

export default AsyncScreen;