
import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #F1F3FF;
  border-radius: 12px;
  align-content: center;
  height: 225px;
  justify-content: center;
  width: 165px;
`

export const Image = styled.Image`
  border-radius: 12px;
  width: 165px;
  height: 225px;
  margin-bottom: 10px;
`


export const Mark = styled.View`
  background: #E1E4F9;
  width: 2px;
  height: 80px;
`

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
`



export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`

export const ImobilImage = styled.Image`
  border-radius: 12px;
  width: 150px;
  height: 150px;
  align-self: center;
  margin: auto;
  margin-bottom: 10px;
`



export const Background = styled.Image`
  height: 180px;
  background: #f1f3f1;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-radius: 12px;
  margin-bottom: 0px;
  margin-top: 24px;
`



export const Direct = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.off};
  border-radius: 6px;
  align-content: center;
  justify-content: center;
  padding: 10px;
`



export const Open = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  flex-grow: 1;
`


export const OpenLabel = styled.Text`
  color:#fff;
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`





export const HeadLine = styled.Text`
  color: ${props => props.theme.color.title};;
  font-size: 42px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`



export const SubHeadLine = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 26px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
`