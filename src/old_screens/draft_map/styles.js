import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';
import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 0px;
  background: ${props => props.theme.background};

`

export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color: #111C5A;
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





export const Subheadline = styled.Text`
  color:${props => props.theme.color.label};
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;

export const Modal = styled.View`
  margin: 24px 24px;
  padding: 20px;

`

export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.off ? "#EB5757" : "#5B72F2"};
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



export const Spacing = styled.View`
  width: 20px;
  height: 10px;
`
export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`




export const Header = styled.View`
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.color.border};
  padding-bottom: 12px;
`




export const HeaderProfile = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background-color: ${props => props.theme.color.light}20;
  margin-top: 20px;
  margin-left: 20px;
  justify-content: center;
`



export const HeaderTitle = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 32px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};

`


export const HeaderLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  max-width: 190px;
  margin-left: 14px;
  text-align: cente;
  margin-top: 4px;

`


export const HeaderbButton = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  justify-content: center;
  background-color: ${props => props.theme.color.primary};
`

export const Map = styled.View`
  background: ${props => props.theme.color.primary};
`


export const Cards = styled.ScrollView`
  left: 0px;
  right: 0px;
  position: absolute;
  bottom: 40px;
  border-radius: 12px;

`

export const Card = styled.View`
  width: ${props => props.width};
  margin: 12px;
  background: ${props => props.theme.color.light}40;
  padding: 12px;
  border-radius: 12px;

`
