import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: #F7F7F7;
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.bold};
  line-height: 24px;
`;



export const Valor = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
  line-height: 26px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 20px;
`;

export const MarkLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 20px;
  text-align: center;
`;


export const Mark = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.bold};
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





export const Subheadline = styled.Text`
  color:${props => props.theme.color.label};
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;



export const Chip = styled.View`
  align-self: flex-end;
  margin-right: 15px;
  justify-content: flex-start;
  margin-top: 15px;
  border-radius: 6px;
  background: ${props => props.theme.color.primary};
`




export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.off ? "#EB5757" : "#5B72F2"};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 12px;
  margin-top: 10px;
  align-content: center;
  flex-direction: row;
  margin-bottom: 20px;

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


export const Modal = styled.View`
  flex-direction: row;
  padding: 20px 12px 20px 24px;
  marign-bottom: 20px;
`

export const ModalImg = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  align-self: center;
  justify-content: center;
  background: #999;
`
export const ModalText = styled.View`
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  width: 60%;
`



export const Quick = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 64px;
  height: 64px;

`



export const Imoveis = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 44px;
  padding: 5px 20px;
`



export const ImoveisLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;



export const Spacing = styled.View`
  width: 14px;
  height: 20px;
`




export const ZoomIn = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #fff;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 64px;
  height: 54px;

`


export const ZoomOut = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #000;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 84px;
  width: 64px;
  height: 54px;

`





export const Back = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #000;
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  top: 40px;
  left: 20px;
  width: 54px;
  height: 54px;
`

export const Img = styled.Image`
  flex-grow: 1;
  height: 80px;
  background: #00000020;
  border-radius: 6px;
`

export const Description = styled.View`
  padding: 18px;
  
`

export const Address = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 2px;
`;



export const Ofertas = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  margin-left: 10px;
  text-align: center;
  font-family: ${props => props.theme.font.bold};
  
`;



export const OfertaBlock = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 24px;
  text-align: center;
  background: #F25B5B;
  border-radius: 4px;
  padding: 4px 12px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.bold};
`;


export const Point = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  justify-content: center;
  padding: 6px 10px; 
  border-radius: 30px;
  border-color: #5B72F2;
`


export const PointLabel = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
  
`;
