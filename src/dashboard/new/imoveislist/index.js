import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View,  
  Label,
  Bold,
  Column,
  ColumnLabel,
} from './styles';
import { SelectLabel, SelectBt } from '../../../theme/global'
import { FiCheck, FiX } from 'react-icons/fi'
import Categories  from '../../../api/categories.json'
import Select from 'react-select' 
import { customStyles } from './../../../api/customStyles';
import { requestAuthorImoveisByCategories } from '../../../api/request';
import ListH7 from './../../../structure/cards/list_h_7/index';
import { ImoveisContainer } from '../styles';
import Skeleton from '../../../components_2/skeleton';

import vid from '../../../assets/imgs/loader.gif'

function ImoveisList(props) {

  const { color, font } = useContext(ThemeContext);
  const categories = Categories;
  const userID = props.userID.id;
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(true);


  const handleData = () => {
    setLoading(true);
    requestAuthorImoveisByCategories(userID, category).then(
      function (response, error) {
        if (response) {
          setData(response);
          setLoading(false);
          return;
        } else {
          console.log(error);
          setLoading(false);
        }
        return;
      });
  };



  const a = false;

  React.useEffect(() => {
    handleData();
  }, [category]);

  const offset = data.length;
  const value_total = data.length;

  const [publish, setPublish] = useState(true);

  const handlePublish = (value) => {
    if (value) {
      setPublish(false);
    } else if (!value) {
      setPublish(true);
    }
  };

  return (

    <View className='column'>


      <View style={{ marginBottom: 20, justifyContent: 'space-between' }} className='row'>


        <SelectBt style={{ width: 140, }} on={publish} onClick={() => handlePublish(publish)}>

          {publish && <SelectLabel on={publish}><FiCheck style={{ paddingTop: 4, marginBottom: -3, fontSize: 20, marginRight: 5, }} /> Publicados</SelectLabel>}
          {!publish && <SelectLabel on={publish}><FiX style={{ paddingTop: 4, marginBottom: -3, marginRight: 10, fontSize: 20, }} />Rascunhos</SelectLabel>}
        </SelectBt>


        <View className='row'>
          <Label style={{ paddingRight: 20, }}><Bold>{value_total}</Bold> imóveis</Label>
          <Select styles={customStyles} onChange={(selectedOption) => setCategory(selectedOption)} options={categories} defaultValue={categories[0]} />
        </View>
      </View>


      <View style={{ flexDirection: 'row', display: 'flex', borderTop: '2px solid #00000020', borderTopLeftRadius: 12, borderTopRightRadius: 12, borderLeft: '2px solid #00000020', borderRight: '2px solid #00000020', }}>
        <Column style={{ width: 20 }}><ColumnLabel></ColumnLabel></Column>
        <Column style={{ width: 70, }}><ColumnLabel>Código (ID)</ColumnLabel></Column>
        <Column style={{ width: 100, }}><ColumnLabel>Categoria (Tipo)</ColumnLabel></Column>
        <Column style={{ width: 70, }}><ColumnLabel>Valor (R$)</ColumnLabel></Column>
        <Column style={{ width: 100, }}><ColumnLabel>Qtd. Quartos</ColumnLabel></Column>
        <Column style={{ width: 100, }}><ColumnLabel>Qtd. Banheiros</ColumnLabel></Column>

        <Column style={{ width: 80, }}><ColumnLabel>Área <br />total (m²) </ColumnLabel></Column>
        <Column style={{ width: 180, textAlign: 'center' }}>
          <ColumnLabel style={{ margin: 'auto' }}>Açãoes <br /> rápidas</ColumnLabel>
        </Column>

      </View>
      
      {loading && <img alt='loader novo imovel' src={vid} style={{ width: 400, height: 300, alignSelf: 'center', }} />}

      {!loading && <ImoveisContainer>
        {data.map((data, index) => <ListH7 key={index} data={data} />)}
      </ImoveisContainer>}


    </View>
  );
}

export default ImoveisList;