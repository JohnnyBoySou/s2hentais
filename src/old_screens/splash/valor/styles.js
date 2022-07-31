import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground, TextInput } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 32px;
  line-height: 34px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-top: 6px;
  line-height: 22px;
`;



export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`


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






export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${({ color }) => color};
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








export const Bt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${({ color }) => color};
  border-radius: 60px;
  align-self: center;
  width: 44px;
  height: 44px;
  justify-content: center;
`





export const AreaValor = styled.View`
  flex-grow: 1;
  margin: 20px;
  align-self: center;
  justify-content: center;
  height: 100px;
  border-radius: 12px;
  background: ${props => props.theme.color.primary}10;

`

export const CheckLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  align-self: center;
`;


export const SplashImg = styled.View`
  width: 150px;
  height: 150px;
  align-self: center;
  justify-content: center;
  border-radius: 100px;
  background: #F1F3FF;
  margin-bottom: 20px;
  margin-top: 20px;

`

export const LabelValor = styled.TextInput`
  color: ${props => props.theme.color.primary};
  font-size: 42px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
  background: ${props => props.theme.color.off};
  height: 90px;
  width: 100%;
  border-radius: 8px;
  margin-left: -20px;
`;




export const ButtonValue = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 12px;
  align-content: center;
  justify-content: center;
  width: 90px;
  height: 90px;

`



export const ButtonValueLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 32px;
  font-family: ${props => props.theme.font.book};
  align-self: center;
`;





export const ValueLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-bottom: 10px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`


export const Bta = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  flex-grow: 1;
  padding: 10px;
`

export const Btd = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #000;
  border-radius: 6px;
  flex-grow: 1;
  padding: 10px;
`


export const BtaLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 14px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;
