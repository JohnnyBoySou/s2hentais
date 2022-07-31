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
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.book};
  line-height: 34px;
  text-align: center;
`;

export const Bold = styled.Text`
  font-family: ${props => props.theme.font.bold};
`;


export const Img = styled.Image`
  width: 100px;
  height: 100px;
  justify-content: center;
  margin: auto;
`

export const Vetor = styled.View`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
`


export const VetorCenter = styled.View`
  margin: auto;
  background: #00000020;
`
export const Circle = styled.View`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 100px;
  background: ${props => props.theme.color.primary};
`



export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 20px;
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

export const Column = styled.View`
  flex-direction: row;
  height: 150px;
  justify-content: center;
  margin-bottom: -50px;
`





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
  background: ${({ color }) => color};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 0px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

`
export const Spacing = styled.View`
  height: 24px;
  widht: 10px;
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
  background: ${props => props.theme.color.off};
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
