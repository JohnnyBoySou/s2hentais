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
  margin-left: 10px;
  justify-content: center;
  margin-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
`


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.bold};
  width: 200px;
`;


export const Tag = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 14px;
  font-family: ${props => props.theme.font.medium};
  letter-spacing: 2px;
  text-transform: uppercase;
`;



export const Toast = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 4px;
  padding: 6px 8px;
  background: ${props => props.theme.color.off2};
  flex-grow: 1;
  justify-content: center;
`




export const ToastLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 16px;
  text-aling: center;
  align-self: center;
  font-family: ${props => props.theme.font.medium};
`;

export const Spacing = styled.View`
  width: 6px;
  height: 10px;
`


export const Input = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`


export const InputButton = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 8px;
  background: ${props => props.theme.color.primary};
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
`


export const InputTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 26px;
  font-family: ${props => props.theme.font.bold};
`


export const InputLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
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


export const Address = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
`;



export const Img = styled.Image`
  width: 148px;
  height: 182px;
  border-radius: 6px;
`

