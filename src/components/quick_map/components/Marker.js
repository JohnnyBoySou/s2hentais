import React from 'react';
import styled from 'styled-components';
import { Popup, Bt, Img,
  Label,
  Title,
  Arrow,



} from './styles'

import './animation.css'

import { FiArrowRight} from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

const Marker = ( props,  ) => {
 
  const [popup, setPoup] = React.useState(false)
  const handleClick = () => {
    setPoup(!popup)
  }

  //const navigate = useNavigate()
  const item = props.data


  return (
    <Bt onClick={handleClick}>
      <Img src={item.imagem1}/>
      {popup && <Popup className='fade'>

        <div style={{flexDirection: 'column', display: 'flex'}}>
      {item?.tipo === "Por mês" && <Title>{item?.categoria}, Aluguel</Title>}
      {item?.tipo === "Valor Único" && <Title>{item?.categoria}, Comprar</Title> }
            
        <Label>R$ {item.valor_mensal}</Label>
        </div>

        <Arrow>
          <FiArrowRight style={{marginTop: 3,}}/>

        </Arrow>
        </Popup>}
    </Bt>
  );
};


export default Marker;