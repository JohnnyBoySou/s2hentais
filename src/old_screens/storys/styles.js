import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

import {ScrollView} from 'react-native';


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
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
  margin-bottom: 6px;
  text-align: center;
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  text-align: center;
  line-height: 22px;
  font-family: ${props => props.theme.font.book};
`;




export const Tips = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  text-align: center;
  line-height: 22px;
  margin-top: 5px;
  font-family: ${props => props.theme.font.book};
`;

export const B = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.bold};
`;


export const Subtitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.bold};
`;


export const Circle = styled.View`
  width: 84px;
  height: 84px;
  border-radius: 100px;
  background: ${props => props.theme.color.off};
  margin-right: 16px;

`

export const Square = styled.View`
  
  width: 136px;
  height: 184px;
  border-radius: 6px;
  margin-right: 16px;
  background: ${props => props.theme.color.off};
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


export const Calendar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`


export const DayOn = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  background: ${props => props.theme.color.primary};

`

export const Day = styled.View`
  flex-direction: column;
`




export const DayOff = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  background: #D9D9D9;
`

export const DayOnLabel = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 24px;
  text-align: center;
  margin-top: 5px;
  font-family: ${props => props.theme.font.medium};
`


export const DayOffLabel = styled.Text`
  color: #D9D9D9;
  font-size: 24px;
  text-align: center;
  margin-top: 5px;
  font-family: ${props => props.theme.font.book};
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
  rippleColor: "#00000030",
}))`
  background: ${props => props.theme.color.light};
  border-radius: 100px;
  justify-content: center;
  padding: 12px;
  width: 140px;
  margin-top: 10px;
`


export const Head = styled.View`

`

export const Body = styled.View`
  padding: 24px;
`

export const Line = styled(ScrollView).attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
  margin-top: 20px;
  margin-left: -24px;
  margin-right: -24px;
`




export const ButtonLabel = styled.Text`
  color: ${props => props.theme.color.primary};
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
  border-radius: 6px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`

export const SelectLabel = styled.Text`
  color: ${props => props.activity ? "#FFF" : "#5B72F2"};
  font-size: 18px;
  font-family: ${props => props.activity ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;


export const SelectTitle = styled.Text`
  color:${props => props.theme.color.title};
  font-size: 44px;
  margin-top: -4px;
  margin-bottom: -5px;
  font-family: ${props => props.theme.font.bold};
`;




export const Lista = styled.View`
  flex-direction: row;
  margin-top: 10px;
  
`
export const Ball = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 12px;
  margin-left: 12px;
  align-self: center;
  background: ${props => props.theme.color.label};
`


export const ListaLabel = styled.Text`
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  color: ${props => props.theme.color.label};
  margin-left: 10px;
  align-self: center;
  
`;



export const InfraLabel = styled.Text`
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  color: ${props => props.theme.color.label};
  margin-left: 10px;
  align-self: center;
  
`;



export const Infra = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 12px;
  margin-left: 6px;
  align-self: center;
  justify-content: center;
  background: ${props => props.theme.color.primary};
`



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






export const Item = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.off};
  padding: 10px;
  flex-direction: row;
  border-radius: 8px;
  margin-bottom: 20px;
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



export const Edit = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.off};
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
`


export const EditLabel = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
`;


export const Back = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  justify-content: center;
  border-width: 3px;
  border-color: #fff;

`





export const SocialLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
`;


export const SubSocialLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 0px;
`;


export const ModalDois = styled.View`
  padding: 20px 24px;
  justify-content: space-around;
  padding-top: 12px;
`


export const Spacing = styled.View`
  width: 20px;
  height: 20px;
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



export const ImgSquare = styled.Image`
  width: 48%;
  height: 130px;
  border-radius: 8px;
  background: ${props => props.theme.color.label};

`

export const ImgLarge = styled.Image`
  width: 100%;
  height: 130px;
  margin-top: 10px;
  border-radius: 8px;
  flex-grow: 1;
  background: ${props => props.theme.color.label};

`


export const Headline = styled.Text`
  font-size: 38px;
  line-height: 40px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  margin-bottom: 10px;
  margin-top: 10px;
`