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
export const Div = styled.View`
  margin-right: 10px;
  height: 2px;
  background: ${props => props.theme.opacity.dois};
`;

export const Description = styled.View`
  margin-top: 20px;
  
`


export const Title = styled.Text`
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



export const Local = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  flex-direction: row;
padding: 10px 10px 10px 10px;
  margin-top: 10px;
  margin-left: 14px;
  margin-right: 14px;
  justify-content: space-between;
  align-content: center;
  border-radius: 8px;
`;



export const LocalText = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  margin-left: 6px;
  font-family: ${props => props.theme.font.medium};
  
`;





export const LocalLabel = styled.Text`
  color: ${props => props.theme.opacity.oito};
  font-size: 18px;
  margin-bottom: 5px;
  font-family: ${props => props.theme.font.book};
  
`;






export const Profile = styled.Image`
  width: 44px;
  height: 44px;
  background: #000;
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
























export const Label = styled.Text`

  text-transform: uppercase;
  color: ${props => props.theme.color.light};
  font-size: 18px;
  padding: 4px 20px;
  background: ${({ bgColor }) => bgColor};
  border-radius: 4px;
  font-family: ${props => props.theme.font.medium};
`;




export const Texto = styled.Text`
  color: ${props => props.theme.color.font};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;



export const Header = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderImg = styled.View`
  width: 62px;
  height: 62px;
  background: #333;
  border-radius: 8px;
  
`;



export const Banner = styled(ImageBackground)`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const BannerLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
`



export const CloseLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
`

export const IrLabel = styled.Text`
  color: ${props => props.theme.color.blue};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
`




export const Close = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  background: #00000020;
  border-radius: 2px;
  padding: 8px 20px;
  align-content: center;
`

export const Ir = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  background: #FFFFFF;
  border-radius: 2px;
  padding: 8px 20px;
  align-content: center;
  margin-right: 20px;
`


export const Buttons = styled.View`
  flex-direction: row;
  margin-right: 20px;
  padding-top: 10px;
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


export const Modal = styled.View`
  padding: 20px 24px;
  padding-top: 30px;
  flex-direction: row;
`

export const Name = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
  
`



export const Email = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
`





