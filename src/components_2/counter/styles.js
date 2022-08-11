
import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
`;

export const BarOn = styled.View`
  width: 42px;
  height: 6px;
  border-radius: 100px;
  background: ${props => props.theme.color.primary};

`

export const BarOff = styled.View`
  width: 42px;
  height: 6px;
  border-radius: 100px;
  background: ${props => props.theme.color.label}70;

`

export const Spacing = styled.View`
  width: 12px;
  height: 6px;
`
