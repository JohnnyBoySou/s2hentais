
import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  align-content: center;
  height: 44px;
  justify-content: center;
  padding: 12px 18px;
`

export const Image = styled.Image`
  height: 28px;
  width: 28px;
`

export const Label = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-left:6px;
  font-family: ${props => props.theme.font.medium};
`