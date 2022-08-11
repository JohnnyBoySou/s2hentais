import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';


export const Title = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
`;


export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  margin-top: 2px;
  font-family: ${props => props.theme.font.book};
`;


