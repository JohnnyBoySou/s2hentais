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


export const LikeAs = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.off ? "#5B72F2" : "#F1F3FF"};
  border-radius: 8px;
  align-content: center;
  width: 46px;
  height: 46px;
  margin-left: 10px;
  justify-content: center;
`

