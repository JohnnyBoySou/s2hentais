
import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const ButtonView = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFF",
}))`
  background: ${({ color }) => color};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 15px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Label = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  text-align: center;
  margin-top: 2px;
  flex-grow: 2;
  font-family: ${props => props.theme.font.medium};
`;

export const Icon = styled.View`
  width: 60px;
  border-left-color: #FFF;
  border-left-width: 2px;
  margin-top: -20px;
  margin-bottom: -20px;
`


