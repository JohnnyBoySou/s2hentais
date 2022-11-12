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
  Spc,
  ImageBt,
  Img
} from './styles';

import ItemBt from '../../../components/item'
import { ButtonOffColor, Back, ButtonBR, ButtonPR } from '../../../theme/global'
import { BiCheck } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi' 

import Switch from 'react-switch';
import Suff from '../../../assets/imgs/suff.png'

const Details = ( props ) => {

  const { color, font } = useContext(ThemeContext)

  const navigate = useNavigate()

  const [visibility, setVisibility] = useState(true)

  const item = props.item[0]
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
  
        <Card className='fadeUp'>

          <View className='column'>
            <CardImg src={Suff}/> 

          </View>

          <View className='column' style={{paddingTop: 20, paddingBottom: 20,}}>
            <CardTitle>{item.nome}</CardTitle>
            <CardLabel>{item.descricao}</CardLabel>

            
            <Line/>

            <View style={{marginTop: 0, marginBottom: 20,}}>
              

            

              <View style={{display: 'flex', marginBottom: 20, marginTop: 15, flexDirection: 'row'}}>
                
                <ItemBt type={item?.item1} amount={item?.qtd1} />
                <Spc/>
                <ItemBt type={item?.item2} amount={item?.qtd2} />
                <Spc/>
                <ItemBt type='Area' amount={item?.area} />
              </View>
  


              <CardTitle style={{fontSize: 18}}>Galeria</CardTitle>
             
              <View className='row' style={{ marginTop: 10,}}>
                <ImageBt onClick={handleTheme} disabled={dark} on={dark}>
                  <Img src={item.imagem2} />
                </ImageBt>
                <View style={{width: 20,}}/>

                <ImageBt onClick={handleTheme} disabled={light} on={light}>
                  <Img src={item.imagem3} />
                </ImageBt>
              </View>

            </View>

            </View>


        </Card>

  );
};

export default Details;