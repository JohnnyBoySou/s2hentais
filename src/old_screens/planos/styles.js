import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: #FFF;
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`;


export const SubTitle = styled.Text`
  color:  ${props => props.theme.color.title};
  font-size: 48px;
  font-family: ${props => props.theme.font.bold};
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 22px;
`;


export const Icones = styled.View`
  flex-direction: row;
`


export const IconeLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.medium};
  margin-left: 6px;
  align-self: center;
`;

export const IconeLabel2 = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-family: ${props => props.theme.font.medium};
  margin-left: 6px;
  align-self: center;
`;




export const Title2 = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`;


export const SubTitle2 = styled.Text`
  color: #FFF;
  font-size: 48px;
  font-family: ${props => props.theme.font.bold};
`;

export const Label2 = styled.Text`
  color: #F7F7F7;
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 22px;
`;

export const MainTitle = styled.Text`
  color:  ${props => props.theme.color.title};
  font-size: 42px;
  font-family: ${props => props.theme.font.bold};
`;

export const MainLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 22px;
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

export const Modal = styled.View`
  margin: 24px 24px;
  padding: 20px;

`




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
`






export const ButtonLabel = styled.Text`
  color: ${({ color }) => color};
  font-size: 20px;
  text-align: center;
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


export const SplashImg = styled.View`
  width: 150px;
  height: 150px;
  align-self: center;
  justify-content: center;
  border-radius: 100px;
  background: #F1F3FF;
  margin-bottom: 20px;
  margin-top: 0px;

`

export const Select = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-radius: 30px;
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 20px;
  flex-grow: 1;

`

export const SelectLabel = styled.Text`
  color:  ${props => props.activity ? "#F1F3FF" : "#144B74"};
  font-size: 18px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;




export const SubConfig = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000020",
}))`
  background: ${props => props.theme.color.light};
  border-radius: 6px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 20px;
  padding-right: 20px;
`

export const SubConfigLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.medium};
`;



export const Icon = styled.View`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.color.title};
  border-radius: 6px;
`


export const Card =styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000020",
}))`
  padding: 16px 16px;
  background: #fff;
  border-radius: 8px;

`

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`



export const CardTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 26px;
  font-family: ${props => props.theme.font.medium};
`;


export const CardLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  margin-top: 5px;
  line-height: 22px;
  font-family: ${props => props.theme.font.book};
`;










export const Spacing = styled.View`
  width: 20px;
  height: 10px;
`

export const Spacing1 = styled.View`
  width: 10px;
  height: 10px;
`


export const Spacing2 = styled.View`
  width: 20px;
  height: 20px;
`

export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`