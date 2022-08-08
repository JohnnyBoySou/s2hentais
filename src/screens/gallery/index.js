import React, { useContext , useState, useEffect} from 'react';


import { ThemeContext } from 'styled-components';
import { 
  Container, 
  Button,    
  ButtonLabel,
  Buttons,
  Spacing,

  Title,
  Main,

  Right,
  Left,
  ImgLarge,
  ImgSmall,
  Column,

  Next,
  Previus
} from './styles';
import { Ripple } from '../../theme/global';
import { useParams } from 'react-router-dom';


const GalleryFull = ( props ) => {

    //const {id} = useParams()


    const imagesTrash = props.imgs;

    const clearArray = () => {
        imagesTrash.forEach(element => {
            if (element !== undefined) {
            images.push(element);
            }
        });
    }

    const images = []
   // const { color, title } = useContext(ThemeContext)

    const [imgFull, setImgFull] = useState(imagesTrash[0])


    const a = false;
    const handleImage = ( url ) => {
        setImgFull(url)
    }

    
    clearArray()
  

return (
    
    <Container>
        <div style={{flexDirection: 'row', 
        display: 'flex', width: '100%'}}>
            <Left>
                
                <Column>
                {images?.map((images) => <ImgSmall onClick={() => handleImage(images)} src={images} key={images}/> )}
              
                </Column>
                
            </Left>
    
            <Right>            
                <ImgLarge src={imgFull}/>
            </Right>
        </div>
        
        {a &&
        <Buttons>
            <Previus>ANTERIOR</Previus>
            <Next>PRÓXIMO </Next>
        </Buttons>
        }

    </Container>
  );
};

export default GalleryFull;