import React, { useContext , useState, useEffect, useRef} from 'react';

import Modal from 'react-modal';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Title,
  Row,
  Like,
  BtAction,
  Spacing,
  ImgLarge, 
  ImgSmall,
  Nav,
  Gallery,
  CardInfo,

  Column,
  Section,
  Code,
  Hr,
  Value,
  ValueLabel,
  ValueTitle,
  Tax,
  TaxLabel,
  TaxLi,

  Address,
  Description,


} from './styles';
import vid from '../../assets/imgs/loader.gif'

import { ButtonBR, ButtonPR, Ripple, Back } from '../../theme/global'

import { useParams } from 'react-router-dom';
 

import { requestSearch } from '../../api/request/index'


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import ListH2 from '../../structure/cards/list_h_2';

const headers = {
  'Accept': "application/json"
}



const Search = ( ) => {

  const { color, font } = useContext(ThemeContext)
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)
  const [like, setLike] = useState(false)
  
  const { qr } = useParams();


  function get(){
    setLoad(true)
    requestSearch(qr).then(
      function(item) {
        console.log(item)
        console.log(data.length)
        setData(item)
        setLoad(false)
      })
  }

  useEffect(() => {
    //get()
  }, [])
  





  return (
    <div>
    <Container>

      Search {qr}
      


























  <div style={{padding: 65, paddingTop: 0, 
    display: 'flex',
    flexWrap: 'wrap', 
    flexDirection: 'row',  
  }}>
    
    {data.length > 1 &&  <div>{data.map((data) => <ListH2 key={data.ID} data={data}/> )}</div> }
    {data.length == 1 &&  <div><ListH2 data={data[0]}/></div> }
    </div>



    </Container>
    </div>
  );
};

export default Search;