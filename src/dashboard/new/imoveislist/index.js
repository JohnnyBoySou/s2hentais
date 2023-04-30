import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View,  
  Label,
  Bold,
  Column,
  ColumnLabel,
  Title,
  Circle,
  GridRow,
  GridRow2
} from './styles';
import { SelectLabel, SelectBt } from '../../../theme/global'
import { FiCheck, FiX, FiSearch } from 'react-icons/fi'
import { BsHandIndex , BsImage} from 'react-icons/bs'
import Categories  from '../../../api/categories.json'
import Select from 'react-select' 
import { requestAuthorImoveisByCategories } from '../../../api/request';
import ListH7 from './../../../structure/cards/list_h_7/index';
import { ImoveisContainer, Input, Row } from '../styles';

import vid from '../../../assets/imgs/loader.gif'
import { IconBt } from '../styles';
import { CustomSelectStyles } from '../../../utils/customSelect';

function ImoveisList(props) {

  const { color, font } = useContext(ThemeContext);
  const categories = Categories;
  const token = props.token;
  const user = props.user;
  const userID = props.userID.ID;
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(true);

  const customStyles = CustomSelectStyles();

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


  const [selectedIds, setSelectedIds] = useState([]);

  const handleIdClick = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }
  const [dataResult, setDataResult] = useState([]);
  const [search, setSearch] = useState('');
  const handleSearch = ( type ) => {
    const result = data.filter(item => item.nome === search)
    setDataResult(result) 
   }

  return (

    <View className='column'>




        {a &&
        <SelectBt style={{ width: 240, }} on={publish} >
          {publish && <SelectLabel on={publish}><FiCheck style={{ paddingTop: 4, marginBottom: -3, fontSize: 20, marginRight: 5, }} /> Seus imóveis</SelectLabel>}
          {!publish && <SelectLabel on={publish}><FiX style={{ paddingTop: 4, marginBottom: -3, marginRight: 10, fontSize: 20, }} />Rascunhos</SelectLabel>}
        </SelectBt>
          }

      <GridRow2>
        <Row style={{marginLeft: 10,}}>
          <Input style={{borderTopRightRadius:0, borderBottomRightRadius:0,}} onChange={e => setSearch(e.target.value)} placeholder='Pesquise por nome' />
          <IconBt style={{width: 36, height: 35, marginTop: 8, borderRadius: 0,borderBottomRightRadius:4, borderTopRightRadius:4, marginLeft: 0,}} onClick={handleSearch}><FiSearch/></IconBt>
          <Label style={{ paddingLeft: 20, marginTop: 12, }}>Encontramos <Bold>{value_total}</Bold> imóveis</Label>
       
        </Row>

        <Row style={{marginRight: 10, marginTop: -5,}}>
          <Label style={{ paddingRight: 10, }}>Filtrar por</Label>
          <Select  styles={{
            ...customStyles,
            
            input: (provided) => ({
              ...provided,
              color: color.title,
            })
          }} onChange={(selectedOption) => setCategory(selectedOption)} options={categories} defaultValue={categories[0]} />
           </Row>

        </GridRow2>

    {value_total >= 1 && <>  {!loading && <GridRow>
       <Column style={{ width: 20 }}><ColumnLabel style={{justifyContent: 'center'}}> <BsHandIndex style={{marginTop: 10,}}/></ColumnLabel></Column>
        <Column style={{ width: 20 }}><ColumnLabel style={{justifyContent: 'center'}}><BsImage style={{marginTop: 10,}}/></ColumnLabel></Column>
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

      </GridRow>}
      </>}
      
      {loading && <img alt='loader novo imovel' src={vid} style={{ width: 400, height: 300, alignSelf: 'center', }} />}


      {!loading &&<View>
      
      {dataResult?.length === 0 && <ImoveisContainer>
        {data.map((data, index) => <ListH7 user={user} key={index} token={token} data={data}  onIdClick={handleIdClick} isSelected={selectedIds.includes(data.ID)} />)}
      </ImoveisContainer>}

      {dataResult?.length >= 1 && <ImoveisContainer>
        {dataResult.map((data, index) => <ListH7 user={user} key={index} token={token} data={data}  onIdClick={handleIdClick} isSelected={selectedIds.includes(data.ID)} />)}
      </ImoveisContainer>}
      
      </View>}
      {!loading && <>
        {value_total === 0 && 
        <Column style={{flexDirection: 'column', display: 'flex'}}>
        <div style={{position: 'relative'}}><Circle/></div>
          <Title>Não encontramos nada!</Title>
          <Label style={{marginTop: 0,width: 600, alignSelf: 'center'}}>Aparentemnte você não tem nenhum imóvel que corresponde a essa categoria, tente procurar por outra para obter resultados relevantes.</Label>
        </Column>} 
        </>}
    </View>
  );
}

export default ImoveisList;