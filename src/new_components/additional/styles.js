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


export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  margin-right: 15px;
  justify-content: center;
  border-radius: 8px;
  padding: 12px;
  width: 160px;
  `


export const Title = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`;

export const Spacing = styled.View`
  height: 120px;
  width: 10px;
`