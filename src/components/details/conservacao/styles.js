import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

import { MotiView } from 'moti'


export const Main = styled.View`
  margin-bottom: 10px;

`



export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;

export const Bar = styled.View`
  flex-direction: row;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;



export const BarOff = styled.View`
  width: 72px;
  height: 14px;
  background: ${props => props.theme.color.off};
`


export const BarOn = styled.View`
  width: 72px;
  height: 14px;
  background: ${props => props.theme.color.green};
`



export const BarOffStart = styled.View`
  width: 72px;
  height: 14px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background: ${props => props.theme.color.off};
`


export const BarOnStart = styled.View`
  width: 72px;
  height: 14px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background: ${props => props.theme.color.green};
`

export const BarOnEnd = styled.View`
  width: 72px;
  height: 14px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${props => props.theme.color.green};
`

export const BarOffEnd = styled.View`
  width: 72px;
  height: 14px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${props => props.theme.color.off};
`
export const Spacing = styled.View`
  width: 20px;
  height: 10px;
`

export const Div = styled.View`
  width: 4px;
  background: #FFF;
  height: 10px;
`
export const Title = styled.Text`
  font-family: ${props => props.theme.font.bold};
  font-size: 18px;
  color: ${props => props.theme.color.title};
  margin-bottom: 10px;
  `


export const LabelOn = styled.Text`
  font-family: ${props => props.theme.font.medium};
  font-size: 16px;
  width: 74px;
  text-align: center;
  color: ${props => props.theme.color.title};
  margin-bottom: 10px;
  `


export const LabelOff = styled.Text`
  font-family: ${props => props.theme.font.book};
  font-size: 16px;
  width: 74px;
  text-align: center;
  color: ${props => props.theme.color.title}80;
  margin-bottom: 10px;
  `

