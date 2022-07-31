import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color:${props => props.theme.color.title};
  font-size: 38px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`;



export const Destaque = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 38px;
  font-family:${props => props.theme.font.bold};
`;


export const Label = styled.Text`
  color:${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 26px;
  text-align: center;
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
