import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View,  
  Card,
  CardTitle,
  CardLabel,
  Label,
  Bold,
  Column,
  ColumnLabel,
} from './styles';
import { TfiStatsUp } from 'react-icons/tfi'
import { ButtonOffColor, Back, ButtonBR, SelectLabel, SelectBt } from '../../../theme/global'
import { BiCheck, BiBuildingHouse } from 'react-icons/bi'
import { FiUsers, FiCheck, FiX } from 'react-icons/fi'
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


  const offset = 20
  const value_total = 38

  const [publish, setPublish] = useState(true)
  
  const handlePublish = ( value ) => {
    if(value){
      setPublish(false)
    }else if(!value){
      setPublish(true)
    }
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
        

        <SelectBt style={{width: 140,}} on={publish} onClick={() => handlePublish(publish)}>
        
        {publish && <SelectLabel on={publish}><FiCheck style={{paddingTop: 4, marginBottom: -3, fontSize: 20,}}/> Publicados</SelectLabel>}
        {!publish && <SelectLabel on={publish}><FiX style={{paddingTop: 4, marginBottom: -3, fontSize: 20,}}/>Rascunhos</SelectLabel>}
        </SelectBt>


        <View className='row'>
         <Label style={{paddingRight: 20,}}><Bold>{offset}</Bold> de <Bold>{value_total}</Bold> imóveis</Label>  
         <Select styles={customStyles} onChange={setOrder} options={options} defaultValue={options[0]} />
       </View>
        </View>


        <View style={{flexDirection: 'row', display: 'flex', borderTop: '2px solid #00000020', borderTopLeftRadius: 12, borderTopRightRadius: 12, borderLeft: '2px solid #00000020',borderRight: '2px solid #00000020',  }}>
          <Column style={{width: 20}}><ColumnLabel></ColumnLabel></Column>
          <Column style={{width: 70,}}><ColumnLabel>Código (ID)</ColumnLabel></Column>
          <Column style={{width: 100,}}><ColumnLabel>Categoria (Tipo)</ColumnLabel></Column>
          <Column style={{width: 70,}}><ColumnLabel>Valor (R$)</ColumnLabel></Column>
          <Column style={{width: 100,}}><ColumnLabel>Qtd. Quartos</ColumnLabel></Column>
          <Column style={{width: 100,}}><ColumnLabel>Qtd. Banheiros</ColumnLabel></Column>
          
          <Column style={{width: 80,}}><ColumnLabel>Área <br/>total (m²) </ColumnLabel></Column>
          <Column style={{ width: 180, textAlign: 'center'  }}>
          <ColumnLabel style={{margin: 'auto'}}>Açãoes <br/> rápidas</ColumnLabel>
        </Column>
        
      </View>

      </View>
  );
};

export default ImoveisList;