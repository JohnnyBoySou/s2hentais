import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';



export const Valor = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  text-align: center;
  padding: 10px 14px;
  font-family: ${props => props.theme.font.medium};
  border-radius: 4px;

`


export const Chip = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  align-self: flex-end;
  margin-right: 15px;
  justify-content: flex-start;
  margin-top: 15px;
  border-radius: 8px;
  background: ${props => props.theme.color.primary};
`


export const ID = styled.View`
  justify-content: center;
  align-self: center;
  border-radius: 30px;
  background: #FCA079;
  padding: 6px 10px;
  margin-top: 6px;
  margin-bottom: 10px;
`

export const IDLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;



export const Description = styled.View`
  margin-top: 20px;
  
`


export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
`;


export const Ofertas = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  margin-left: 10px;
  text-align: center;
  font-family: ${props => props.theme.font.bold};
  
`;



export const OfertaBlock = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 24px;
  text-align: center;
  background: #F25B5B;
  border-radius: 8px;
  padding: 4px 12px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.bold};
`;




export const Expand = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 60px;
  background-color:  ${props => props.theme.color.primary};
  width: 32px;
  height: 32px;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  align-self: center;

`


export const Gallery = styled.View`
  flex-direction: row;
  flex-grow: 1;
  padding: 12px;
  justify-content: space-between;
`
export const GalleryBt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: #144B74;
  border-width: ${props => props.state ? "3px" : "0px"};
  border-color: #fff;

`


export const GalleryImg = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 6px;


`