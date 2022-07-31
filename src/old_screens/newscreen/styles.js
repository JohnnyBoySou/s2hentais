import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


export const Main = styled.SafeAreaView`
  background: ${props => props.theme.background};
  flex: 1;
  padding-top: 20px;
`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 32px;
  font-family: ${props => props.theme.font.bold};
  line-height: 38px;
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
  font-family: ${props => props.theme.font.book};
`;




export const ImgTitle = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: ${props => props.theme.font.bold};
  line-height: 36px;
  margin-top: 5px;
`;


export const ImgSubtitle = styled.Text`
  color:#fff;
  font-size: 24px;
  font-family: ${props => props.theme.font.book};
`;



export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  line-height: 28px;
  margin-bottom: 20px;
`;



export const Lista = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  
`


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





















export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.off ? "#EB5757" : "#5B72F2"};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 0px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 20px;

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

