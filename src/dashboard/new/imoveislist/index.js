import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View,  
  Label,
  Bold,
  Column,
  ColumnLabel,
  Title,
  Circle
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
  const token = props.token;
  const user = props.user;
  const userID = props.userID.ID;
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(true);


  const handleData = () => {
    setLoading(true);
    if(userID){
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
      });}
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


        {a &&
        <SelectBt style={{ width: 240, }} on={publish} >
          {publish && <SelectLabel on={publish}><FiCheck style={{ paddingTop: 4, marginBottom: -3, fontSize: 20, marginRight: 5, }} /> Seus imóveis</SelectLabel>}
          {!publish && <SelectLabel on={publish}><FiX style={{ paddingTop: 4, marginBottom: -3, marginRight: 10, fontSize: 20, }} />Rascunhos</SelectLabel>}
        </SelectBt>
          }

        <View className='row'>
          <Select styles={customStyles} onChange={(selectedOption) => setCategory(selectedOption)} options={categories} defaultValue={categories[0]} />
        </View>
        <Label style={{ paddingRight: 20, }}><Bold>{value_total}</Bold> imóveis</Label>
          
      </View>


    {value_total >= 1 && <>  {!loading &&   <View style={{ flexDirection: 'row', display: 'flex', borderTop: '2px solid #00000020', borderTopLeftRadius: 12, borderTopRightRadius: 12, borderLeft: '2px solid #00000020', borderRight: '2px solid #00000020', }}>
        <Column style={{ width: 20 }}><ColumnLabel></ColumnLabel></Column>
        <Column style={{ width: 70, }}><ColumnLabel>Código (ID)</ColumnLabel></Column>
        <Column style={{ width: 100, }}><ColumnLabel>Categoria (Tipo)</ColumnLabel></Column>
        <Column style={{ width: 80, }}><ColumnLabel>Valor (R$)</ColumnLabel></Column>
        <Column style={{ width: 80, }}><ColumnLabel>Qtd. Quartos</ColumnLabel></Column>
        <Column style={{ width: 80, }}><ColumnLabel>Qtd. Banheiros</ColumnLabel></Column>

        <Column style={{ width: 90, }}><ColumnLabel>Área <br />total (m²) </ColumnLabel></Column>

        <Column style={{width: 60,}}><ColumnLabel>Acessos Curtidas</ColumnLabel></Column>
        
        <Column style={{ width: 70, textAlign: 'center',  }}>
          <ColumnLabel style={{ margin: 'auto' }}>Açãoes <br /> rápidas</ColumnLabel>
        </Column>

      </View>}
      </>}
      
      {loading && <img alt='loader novo imovel' src={vid} style={{ width: 400, height: 300, alignSelf: 'center', }} />}

      {!loading && <ImoveisContainer>
        {data.map((data, index) => <ListH7 user={user} key={index} token={token} data={data} />)}
      </ImoveisContainer>}

      {!loading && <>
        {value_total === 0 && 
        <Column style={{flexDirection: 'column', display: 'flex'}}>
        <div style={{position: 'relative'}}><Circle/></div>
          <Title>Não encontramos nada!</Title>
          <Label style={{marginTop: 0,width: 600, alignSelf: 'center'}}>Aparentemnte você não tem nenhum imóvel que corresponde a essa categoria, tente procurar por outra para obter resultados relevantes.</Label>
        </Column>} ? <></>

        </>}
    </View>
  );
}

export default ImoveisList;