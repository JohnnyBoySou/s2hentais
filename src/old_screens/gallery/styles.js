import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


export const Main = styled.SafeAreaView`
  background: ${props => props.theme.background};
  flex: 1;
  padding-top: 25px;
`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 32px;
  font-family: ${props => props.theme.font.bold};
`;


export const SubHeadline = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
  margin-bottom: 14px;
`;


export const Subtitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
`;





export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 28px;
  margin-bottom: 20px;
`;








export const Spacing = styled.View`
  width: 12px;
  height: 12px;
`



export const Modal = styled.View`
  margin: 24px;
  padding-top: 20px;
`



export const Div = styled.View`
  height: 1px;
  background: ${props => props.theme.opacity.dois};
`;



export const Imagem = styled.Image`
  border-radius: 8px;
  background: ${props => props.theme.opacity.dois};
  width: 100%;
  height: 250px;
  
`