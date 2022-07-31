import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};
  padding-top: 30px;

`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
`;


export const Title = styled.Text`
  color: #000;
  font-size: 36px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
  line-height: 40px;
`;

export const Label = styled.Text`
  color: #717485;
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-top: 6px;
  line-height: 28px;
`;



export const Local = styled.View`
  flex-direction: row;
padding: 0px 24px 0px 24px;
  margin-top: 20px;
  justify-content: space-between;
  align-content: center;
`;



export const LocalText = styled.Text`
  color: ${props => props.theme.opacity.dez};
  font-size: 24px;
  margin-left: 6px;
  font-family: ${props => props.theme.font.medium};
  
`;





export const LocalLabel = styled.Text`
  color: ${props => props.theme.opacity.oito};
  font-size: 18px;
  margin-bottom: 5px;
  font-family: ${props => props.theme.font.book};
  
`;






export const Bt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 20px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;

`




export const ButtonLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 20px;
  text-align: center;
  margin-top: 2px;
  flex-grow: 2;
  font-family: ${props => props.theme.font.medium};
`;

export const ButtonIcon = styled.View`
  width: 60px;
  border-left-color: #FFF;
  border-left-width: 2px;
  margin-top: -20px;
  margin-bottom: -20px;
`

export const AreaValor = styled.View`
  width: 80%;
  margin: 20px;
  align-self: center;
  justify-content: center;
  height: 100px;
  border-radius: 12px;
  background: ${props => props.theme.color.primary}10;

`
export const LabelValor = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 52px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`;


export const Img = styled.Image`
  width: 100%;
  height: 300px;
  background: #F1F3FF;
`


