import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

import { MotiView } from 'moti'


export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 30px;
  background: ${props => props.theme.background};

`



export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;
export const Div = styled.View`
  height: 1px;
  background: ${props => props.theme.opacity.dois};
  margin-bottom: 20px;
  margin-top: 10px;
`;



export const Local = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF80",
}))`
  flex-direction: row;
  margin: 0px 24px;
  padding: 12px;
  border-radius: 4px;
  background: ${props => props.theme.color.off};
  margin-bottom: -8px;
  margin-top: 20px;
`

export const LocalLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  
`







export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 26px;
  font-family: ${props => props.theme.font.bold};
`;


export const Dual = styled.ScrollView.attrs(() => ({
  horizontal: true,
  
}))`
  flex-direction: row;
  padding: 0px 24px 0px 24px;
  margin-top: 20px;
`;



export const Options = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 160px;
  margin-left: -30px;
  margin-right: 0px;
`;


export const Option = styled.View`
  background: #000000;
  width: 56px;
  height: 56px;
  margin: auto;
`;



export const OptionLabel = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;




export const LerMais = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  margin-right: 4px;
`;



export const Descricao = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  line-height: 24px;
  font-family: ${props => props.theme.font.book};
  
`;



export const Codigo = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000000",
}))`
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: -15px;
  margin-left: 24px;
`

export const CodigoLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  text-align: left;
  font-family: ${props => props.theme.font.medium};
  
`;



export const Preco = styled.View`
  padding: 10px 20px;
  border-color: ${props => props.theme.opacity.dois};
  border-width: 1px;
  border-radius: 6px;
  padding-bottom: 6px;
  flex-grow: 2;
`;

export const Tempo = styled.Text`
  color: ${props => props.theme.color.font}90;
  font-size: 18px;
  margin-top: -20px;
  align-self: flex-start;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: -5px;
  font-family: ${props => props.theme.font.book};
  background: #FFF;
`;

export const Valor = styled.Text`
  color: ${props => props.theme.color.font};
  font-size: 32px;
  margin-bottom: 5px;
  font-family: ${props => props.theme.font.medium};
  
`;









export const Images = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000030",
}))`
  height: 350px;
  border-radius: 12px;
  flex-direction: row;
`;



export const More =  styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000030",
}))`
  border-radius: 6px;
  justify-content: center;
  margin-top: 150px;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  margin-left: -10px;
  background: ${props => props.activity ? "#F25B5B" : "#00000000"};

`


export const MapButton =  styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#00000030",
}))`
  border-radius: 6px;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-left: 10px;
`



export const Icone = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  width: 64px;
  height: 64px;
`;



export const Img = styled.Image.attrs(() => ({
}))`
  width: 350px;
  border-radius: 12px;
`;

export const Press = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFF",
}))`
  border-radius: 12px;
`;

export const Spacing = styled.View`
  width: 20px;
  height: 10px;
`






export const Alugar = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFF",
}))`
  background: ${({ color }) => color};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 15px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
`

export const AlugarLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  text-align: center;
  margin-top: 2px;
  flex-grow: 2;
  font-family: ${props => props.theme.font.medium};
`;

export const AlugarIcon = styled.View`
  width: 60px;
  border-left-color: #FFF;
  border-left-width: 2px;
  margin-top: -20px;
  margin-bottom: -20px;
`



export const Modal = styled.View`
  padding: 20px 0px;
  padding-top: 15px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: ${props => props.theme.color.light};
`

export const ModalDois = styled.View`
  padding: 20px 20px;
  padding-top: 30px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: ${props => props.theme.color.light};
`




export const Mapa = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  margin-top: 10px;
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


export const Sublabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: ${props => props.theme.font.medium};
  
`;


export const Quick = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;

`

export const ClientImg = styled.Image`
  width: 100%;
  height: 160px;
  background: #00000020;
  border-radius: 8px;

`


export const Client = styled.View`
  border-radius: 12px;
  width: 300px;
  padding: 20px;
  background: #F9F9F9;
  margin-right: 50px;
  

`


export const ClientLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
  margin-top: 6px;
  width: 98%;
  font-family: ${props => props.theme.font.book};
  
`;

export const ClientTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  margin-top: 10px;
  font-family: ${props => props.theme.font.bold};
  
`;

export const Verify = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background: ${props => props.theme.color.primary};
  margin-top: 10px;
  justify-content: center;
  align-self: center;
  margin-left: 6px;
`



export const Imobil = styled(TouchableRipple).attrs(() => ({
  borderless: true,
  rippleColor: "#00000020",
}))`
  flex-direction: row;
  margin-bottom: 20px;
  border-radius: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 0px;
  background: ${props => props.theme.color.off}70;
  border-width: 2px;
  border-color: ${props => props.theme.color.primary}40;

`

export const ImobilImg = styled.Image`
  width: 42px;
  height: 42px;
  background: #00000020;
  border-radius: 100px;
  align-self: center;
`


export const ImobilTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  margin-top: 10px;
  font-family: ${props => props.theme.font.medium};
`;


export const ImobilLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 0px;
  font-family: ${props => props.theme.font.book};
  
`;


export const Taxas = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#70779C",
}))`
  border-radius: 4px;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 0px;
  margin-left: -10px;
  width: 180px;

`

export const TaxasLabel = styled.Text`
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  color: ${props => props.theme.color.primary};
  
`;

export const Lista = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  
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
  font-size: 22px;
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