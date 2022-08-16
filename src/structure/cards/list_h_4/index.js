
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
BtValue,
BtLocation,

Line,
LineArrow,
 } from './styles'


 import { FaMapMarkerAlt , FaHeart } from "react-icons/fa";


import { FiArrowRight , FiArrowLeft} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


export default function ListH4( props ){

  const item = props.data
  const tilt = `${item?.categoria} com ${item?.qtd1} ${item?.item1}s, ${item?.qtd2} ${item?.item2} e ${item?.area}m²`

  const [imgUrl, setImgUrl] = useState(item?.imagem1)

  const [img1, setImg1] = useState(true)
  const [img2, setImg2] = useState(false)
  const [img3, setImg3] = useState(false)

  

  const changeImage1 = () => {
    setImgUrl(item?.imagem1)
    setImg1(true)
    setImg2(false)
    setImg3(false)
  }

  
  const changeImage2 = () => {
    setImgUrl(item?.imagem2)
    setImg1(false)
    setImg2(true)
    setImg3(false)
  }

  
  const changeImage3 = () => {
    setImgUrl(item?.imagem3)
    setImg1(false)
    setImg2(false)
    setImg3(true)
  }

  const [index,setIndex] = useState(2)
  

  const handleImgsNext = (index) => {
    if(index == 1){
      changeImage1()
      setIndex(2)
    }else if(index == 2){
      changeImage2()
      setIndex(3)
    }else if(index == 3){
      changeImage3()
    }
  }

  
  
  const handleImgsPrevius = (index) => {
   if(index == 2){
      changeImage1()
      setIndex(1)
    }else if(index == 3){
      changeImage2()
      setIndex(2)
    }
  }


  const navigate = useNavigate()

  const getDetails = () => {
    navigate(`/details/${item.ID}`)
  }

  React.useEffect(() => {
    handleImgsNext()
  }, [])

  const a = false
  
  return(

  <Card >
      <LineArrow>
        <BtArrow onClick={() => handleImgsPrevius(index)}><FiArrowLeft style={{marginTop: 4,}}/></BtArrow>
        <BtArrow onClick={() => handleImgsNext(index)}><FiArrowRight style={{marginTop: 4,}}/></BtArrow>
      </LineArrow>
      <Img onClick={getDetails} src={imgUrl} />

     {a && <Imgs>
        <BtImg disabled={img1} handle={img1} onClick={changeImage1}/>
        <BtImg disabled={img2} handle={img2} onClick={changeImage2}/>
        <BtImg disabled={img3} handle={img3} onClick={changeImage3}/>
      </Imgs> }


    <Line>
      <BtValue>R$ {item?.valor_mensal}</BtValue>
      <BtLocation>
        <FaMapMarkerAlt size={14} style={{marginRight: 5,}}/>{item?.bairro}</BtLocation>
    </Line>

      
      <Description onClick={getDetails}>

        
        <Title>{tilt}</Title>
      
      
      </Description>    
  </Card>
  )
}




