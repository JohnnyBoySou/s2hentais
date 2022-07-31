import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color: #fff;
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
`;



export const SubTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`;


export const Label = styled.Text`
  color: #F1F3FF;
  font-size: 18px;
  margin-top: 2px;
  font-family: ${props => props.theme.font.book};
`;



export const SubLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-top: 0px;
`;



export const Subheadline = styled.Text`
  color:${props => props.theme.color.label};
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;




export const Valor = styled.Text`
  color:${props => props.theme.color.title};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;


export const B = styled.Text`
  color:${props => props.theme.color.title};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.bold};
  
`;




export const SplashImg = styled.View`
  width: 300px;
  height: 300px;
  align-self: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;

`








export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF20",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  width: 62px;
  height: 56px;
  justify-content: center;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

export const Input = styled.TextInput`
  height: 56px;
  flex-grow: 2;
  border-radius: 4px;
  background: ${props => props.theme.color.off};
  padding: 10px 20px;
  font-family: ${props => props.theme.font.book};
  font-size: 20px;
  color: ${props => props.theme.color.title};
  border-top-right-radius: 0px;
  border-color: #000;
  border-bottom-right-radius: 0px;
  border-color: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-width: 2.5px;
  border-right-width: 0px;
`








export const Filter = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF20",
}))`
  background: ${props => props.theme.color.title};
  border-radius: 100px;
  padding: 10px 20px;
  justify-content: center;
  width: 100px;
  margin-left: 24px;
  margin-top: 14px;
  margin-bottom: 20px;
`






export const Spacing = styled.View`
  width: 20px;
  height: 20px;
`

export const Spacing1 = styled.View`
  width: 10px;
  height: 10px;
`
export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`




export const Selects = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  margin-top: -10px;
`


export const Select = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  
  flex-grow: 1;
`

export const SelectLabel = styled.Text`
  color: ${props => props.activity ? "#FFF" : "#5B72F2"};
  font-size: 18px;
  font-family: ${props => props.activity ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;













export const Clean = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.red};
  border-radius: 40px;
  width: 100px;
  margin-left: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 5px;
`

export const CleanLabel = styled.Text`
  color: ${props => props.theme.color.light}
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
`;





export const Modal = styled.View`
  margin: 20px 24px;
  padding-top: 0px;
  padding-bottom: 20px;

`
