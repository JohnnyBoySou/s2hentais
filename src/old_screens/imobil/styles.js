import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};
  padding-top: 20px;

`
export const ModalFundo = styled.Image`
  

`

export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;



export const Subtitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.medium};
`




export const Tag = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 16px;
  letter-spacing: 1;
  text-transform: uppercase;
  font-family: ${props => props.theme.font.medium};
`



export const Ball = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  align-self: center;
  font-family: ${props => props.theme.font.medium};
`


export const Local = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF80",
}))`
  flex-direction: row;
  padding: 12px;
  border-radius: 4px;
  background: ${props => props.theme.color.off};
  margin-bottom: 5px;
  margin-top: 20px;
`

export const LocalLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  
`



export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
  line-height: 34px;
`;





export const Identificacao = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
`;


export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 24px;
`;


export const TitleCenter = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
  line-height: 34px;
  text-align: center;
`;

export const LabelCenter = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 24px;
  text-align: center;
`;



export const Verify = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  width: 54px;
  height: 54px;
  border-radius: 100px;
  background: ${props => props.theme.color.primary};
  justify-content: center;
  align-self: center;
  margin-left: 10px;
  position: absolute;
  top: -50px;
  right: 20px;
`


export const VerifyImg = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  width: 124px;
  height: 124px;
  border-radius: 100px;
  background: ${props => props.theme.color.primary};
  justify-content: center;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 10px;

`


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




export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.off};
  border-radius: 6px;
  justify-content: center;
  padding: 12px;
`


export const ButtonGreat = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${({ color }) => color};
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 16px;
  margin-top: 20px;
  margin-bottom: 10px;

`


export const Spacing = styled.View`
  height: 24px;
  widht: 10px;
`



export const ButtonLabel = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
  align-self: center;
`;

export const ButtonIcon = styled.View`
  background: ${props => props.theme.color.primary}20;
  border-radius: 6px;
  padding: 6px;
`



export const ButtonSocial = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background: ${({ color }) => color};
  justify-content: center;
  align-self: center;

`


export const Circle = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border-width: 16px;
  border-color: #758AFF;
  margin-bottom: 20px;
  margin-top: 10px;
  justify-content: center;

`

export const ModalDois = styled.View`
  padding: 20px 24px;
  justify-content: space-around;
  padding-top: 12px;
`



export const ModalTitle = styled.Text`
  color: #fff;
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
  margin-bottom: 6px;
  text-align: center;
`;

export const ModalLabel = styled.Text`
  color: #ffffff90;
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-bottom: 12px;
`;




export const SocialLabel = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
`;


export const SubSocialLabel = styled.Text`
  color: #ffffff90;
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 0px;
`;



export const Fixed =  styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  position: absolute;
  border-radius: 100px;
  justify-content: center;
  bottom: 24px;
  right: 24px;
  width: 68px;
  height: 68px;

`


export const FixedIcon = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  justify-content: center;
  align-content: center;
  background:  ${props => props.theme.color.primary};
`


export const FixedTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`;



export const FixedLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
`;


export const FixedArrow = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  justify-content: center;
  background:  ${props => props.theme.color.off};
`



export const Modal = styled.View`
  padding: 20px 24px 20px 24px;
  marign-bottom: 20px;
`

export const ModalImg = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 12px;
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
  bottom: 50px;
  right: 40px;
  width: 64px;
  height: 64px;

`

export const Back = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #000;
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 20px;
  width: 54px;
  height: 54px;
`




export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`


export const Item = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #F7F7F7;
  padding: 10px;
  flex-direction: row;
  border-radius: 8px;
  margin-bottom: 30px;
`


export const ItemImg = styled.Image`
  background: #999;
  width: 56px;
  border-radius: 6px;
  height: 56px;
  margin-right: 15px;
`


export const ItemTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.medium};
  line-height: 24px;
`




export const ItemLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 0px;
  line-height: 18px;
`;


export const Valor = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  text-align: center;
  padding: 10px 14px;
  font-family: ${props => props.theme.font.medium};
  border-radius: 4px;

`


export const Chip = styled.View`
  align-self: flex-end;
  margin-right: 15px;
  justify-content: flex-start;
  margin-top: 15px;
  border-radius: 4px;
  background: ${props => props.theme.color.primary};
`




export const Description = styled.View`
  margin-top: 20px;
  
`


export const TitleAd = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 26px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`;

export const Address = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-top: 6px;
`;

