import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 32px;
  font-family: ${props => props.theme.font.bold};
  margin-left: -10px;
`;


export const Imagem = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;

`
