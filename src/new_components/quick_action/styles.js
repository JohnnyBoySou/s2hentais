import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';



export const Valor = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 14px;
  text-align: center;
  padding: 8px 10px;
  font-family: ${props => props.theme.font.medium};
  

`


export const Chip = styled.View`
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
`

export const IDLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;



export const Description = styled.View`
  margin-top: 10px;
  
`


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.bold};
`;





export const HeadLine = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
`;



export const Div = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.color.off};

`


export const Ofertas = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  background: ${props => props.theme.color.primary};
  border-radius: 8px;
  padding: 6px 14px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.bold};
`;



export const OfertaBlock = styled.Text`
  

  
  color: #fff;
  font-size: 20px;
  text-align: center;
  background: ${props => props.theme.color.primary};
  border-radius: 8px;
  padding: 4px 12px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.bold};
`;



export const More = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 8px;
  padding: 6px 10px;
  margin-top: -5px;
  aling-self: flex-end;
  background: #E1E4F9;

`

export const Spacing = styled.View`
  width: 10px;
  height: 10px;
`


export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 100px;
  width: 72px;
  height: 72px;
  background: #fff;
  justify-content: center;
  border-width: 2px;
  border-color: #E1E4F9;
`

export const ButtoLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.medium};
  margin-top: 6px;
`;

