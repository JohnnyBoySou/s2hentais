
import React , { useState } from 'react';

import { Description, Title, Address, 


Img,
Toast,
ToastLabel,
Spacing,

Input,
InputLabel,
InputTitle,

Card,
Like,

Imgs,
BtImg,
BtArrow,
 } from './styles'


 import { FaMapMarkerAlt , FaHeart } from "react-icons/fa";


import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


export default function ListH2( props ){

  const item = props.data
  const tilt = `${item?.categoria} com ${item?.qtd1} ${item?.item1}s, ${item?.qtd2} ${item?.item2} e ${item?.area} m2`

  const [imgUrl, setImgUrl] = useState(item.imagem1)

  const [img1, setImg1] = useState(true)
  const [img2, setImg2] = useState(false)
  const [img3, setImg3] = useState(false)

  

  const changeImage1 = () => {
    setImgUrl(item.imagem1)
    setImg1(true)
    setImg2(false)
    setImg3(false)
  }

  
  const changeImage2 = () => {
    setImgUrl(item.imagem2)
    setImg1(false)
    setImg2(true)
    setImg3(false)
  }

  
  const changeImage3 = () => {
    setImgUrl(item.imagem3)
    setImg1(false)
    setImg2(false)
    setImg3(true)
  }

  const navigate = useNavigate()

  const getDetails = () => {
    navigate(`/details/${item.ID}`)
  }
  return(

  <Card >
     
      <Img onClick={getDetails} src={imgUrl} />

      <Imgs>
        <BtImg disabled={img1} handle={img1} onClick={changeImage1}/>
        <BtImg disabled={img2} handle={img2} onClick={changeImage2}/>
        <BtImg disabled={img3} handle={img3} onClick={changeImage3}/>
      </Imgs>

      
      
      <Description onClick={getDetails}>

        
        <Title>{tilt}</Title>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          <FaMapMarkerAlt size={14} color="#5B72F2" style={{marginTop: 5, marginRight: 5, display: 'flex'}}/>
          <Address>{item.bairro}</Address>
        </div>

        <Input>
          <div style={{display: 'flex', flexDirection: 'column', }}>
            <InputLabel>Por mês</InputLabel>
            <InputTitle>R$ {item.valor_mensal}{item.valor_unico}</InputTitle>
          </div>
          <BtArrow>
            <FiArrowRight style={{marginTop: 6,}}/>
          </BtArrow>

        </Input>




      </Description>    
  </Card>
  )
}




