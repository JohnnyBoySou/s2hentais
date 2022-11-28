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

  Chip,
} from './styles';
import { TfiStatsUp } from 'react-icons/tfi'
import { ButtonOffColor, Back, ButtonBR } from '../../../theme/global'
import { BiCheck, BiBuildingHouse } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
 
import Select from 'react-select' 

const ImoveisList = ( props ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()

  const options = [
    {value: 'popular', label: 'Popular'},
    {value: 'recentes', label: 'Recentes'}  
  ]

  const options2 = [
    {value: 'ativos', label: 'Publicados'},
    {value: 'desativados', label: 'Rascunho'}  
  ]

  const [order, setOrder] = useState()

  

  const item = props?.item

  const a = false;

  
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

  return (

    <View className='column'>
      <View style={{marginBottom: 20, justifyContent: 'space-between'}} className='row'>
        <Card className='fadeUp'>
          <CardLabel>Seus Imóveis</CardLabel>
          <View className='row'>
            <BiBuildingHouse style={{fontSize: 32, marginBottom: 5, marginRight: 10, color: color.primary,}}/>
            <CardTitle>23</CardTitle>
          </View>
        </Card>

        <Card className='fadeUp'>
          <CardLabel>Sua equipe</CardLabel>
          <View className='row'>
            <FiUsers style={{fontSize: 32, marginBottom: 5, marginRight: 10, color: color.primary,}}/>
            <CardTitle>1</CardTitle>
          </View>
        </Card>
        </View>
        <View style={{marginBottom: 20, justifyContent: 'space-between'}} className='row'>
        <Select styles={customStyles} onChange={setOrder} options={options2} defaultValue={options2[0]} />
        
        <Select styles={customStyles} onChange={setOrder} options={options} defaultValue={options[0]} />
          
        
        </View>

      </View>
  );
};

export default ImoveisList;