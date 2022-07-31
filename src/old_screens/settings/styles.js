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
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
`

export const SelectLabel = styled.Text`
  color:${props => props.theme.color.label};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 16px;
  font-family: ${props => props.theme.font.medium};
`;



export const Tag = styled.Text`
  color: ${props => props.theme.color.off};
  font-size: 16px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
  border-radius: 6px;
  background:  ${props => props.theme.color.primary};
  position: absolute;
  right: 10px;
  width: 34px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: -5px;
`;




export const SubConfig = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000020",
}))`
  background: ${props => props.theme.color.light};
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-width: 2px;
  border-bottom-color:  ${props => props.theme.color.off};
`

export const SubConfigLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.medium};
`;





export const Profile = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  background: ${props => props.theme.background};
  `

export const ProfileImg = styled.Image`
  width: 36px; 
  height: 36px;
  border-radius: 50px;
`

export const ProfileUsername = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
  margin-top: 6px;
  margin-left: -16px;
  `;





export const QRCode = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000020",
}))`
  background: ${props => props.theme.color.primary};
  width: 36px;
  height: 36px;
  border-radius: 8px
  justify-content: center;  
  
  `







export const Spacing = styled.View`
  width: 20px;
  height: 10px;
`

export const Spacing1 = styled.View`
  width: 10px;
  height: 10px;
`


export const Spacing2 = styled.View`
  width: 40px;
  height: 40px;
`

export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`