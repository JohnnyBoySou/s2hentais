import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Card,
  CardTitle,
  CardLabel,
  CardValue,
  List,
  Item,
  Icon,
  ItemLabel,

  CardImg,
  Chip,
  Line,
  Header,
  ThemeBt,
} from './styles';

import { ButtonOffColor, Back, ButtonBR, ButtonPR } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi' 

import Switch from 'react-switch';


const Appearance = ( props ) => {

  const { color, font } = useContext(ThemeContext)

  const navigate = useNavigate()

  const [visibility, setVisibility] = useState(true)

  
  const a = false;

  const [theme, setTheme] = useState()
  
  const [dark, setDark] = useState(false)
  const [light, setLight] = useState(true)


  const handleTheme = () => {
    if(light === true){
      setLight(false)
      setDark(true)
    } 
    if(dark === true){
      setLight(true)
      setDark(false)
    }
  }
  return (
  
        <Card>

            <CardTitle>Appearance</CardTitle>
            <CardLabel>
            Change how Untitled UI looks and feels in your browser.
            </CardLabel>

            
            <Line/>

            <View style={{marginTop: 20, marginBottom: 20,}}>
              <View className='column'>
                <CardTitle style={{fontSize: 16,}}>Interface Theme</CardTitle>
                <CardLabel style={{fontSize: 14,}}>Select or customize your UI theme.</CardLabel>
              </View>

              <View className='row' style={{justifyContent: 'space-between'}}>
                <ThemeBt onClick={handleTheme} disabled={dark} on={dark}>
                  Dark
                </ThemeBt>
                <View style={{width: 20,}}/>

                <ThemeBt onClick={handleTheme} disabled={light} on={light}>
                  Light
                </ThemeBt>


              </View>


            </View>



        
            <Line/>

            <View style={{justifyContent: 'space-between', marginTop: 16, marginBottom: 10, flexDirection: 'row', display: 'flex',}}>
             
              <View className='column'>
                <CardTitle style={{fontSize: 16,}}>Transparent Sidebar</CardTitle>
                <CardLabel style={{fontSize: 14,}}>Make the desktop sidebar transparent.</CardLabel>
              </View>


              <Switch 
                onChange={() => setVisibility(!visibility)}
                checked={visibility} checkedIcon={false} uncheckedIcon={false}
                height={14} width={30} handleDiameter={20}
                offColor="#D1D1D1" onColor="#8D9FFF"
                onHandleColor={color.primary} offHandleColor="#9C9C9C" 
               />
    
            </View>
            <Line style={{marginBottom: 20,}}/>

            <ButtonPR>SALVAR ALTERAÇÕES</ButtonPR>
       
        </Card>

  );
};

export default Appearance;