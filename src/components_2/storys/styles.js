
import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #F1F3FF;
  border-radius: 12px;
  align-content: center;
  height: 225px;
  justify-content: center;
  width: 165px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const Image = styled.Image`
  border-radius: 12px;
  width: 165px;
  height: 225px;
`

export const Label = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center; 
  font-family: ${props => props.theme.font.medium};
`


export const ImobilImage = styled.Image`
  border-radius: 100px;
  width: 44px;
  height: 44px;
  border-width: 2px;
  border-color: #fff;
  background: ${props => props.theme.color.primary};
  align-self: center;
  margin: auto;
  margin-bottom: 10px;
`