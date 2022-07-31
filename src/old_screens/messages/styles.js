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




export const HeaderMsg = styled.View`
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.color.border};
  padding-bottom: 12px;
  justify-content: space-between;

`




export const HeaderMsgProfile = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background-color: ${props => props.theme.color.title};
  margin-right: 10px;
`



export const HeaderMsgTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};

`


export const HeaderMsgLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 14px;
  font-family: ${props => props.theme.font.book};
  max-width: 190px;

`


export const HeaderMsgbButton = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  justify-content: center;
  background-color: ${props => props.theme.color.primary};
`

export const MsgContainer = styled.ScrollView`
  background: ${props => props.theme.color.border};
  padding: 12px;
`

export const Msg = styled.View`
  border-radius: 4px;
  background:  ${props => props.theme.color.light};
  max-width: 190px;
  padding: 8px;
  margin: 6px;
  align-self: flex-start;
`

export const Rsp = styled.View`
  border-radius: 4px;
  background:  ${props => props.theme.color.light};
  max-width: 190px;
  padding: 8px;
  margin: 6px;
  align-self: flex-end;
`


export const MsgLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  max-width: 190px;

`


export const Question = styled.View`
  padding: 12px;
  background: #4D61D1;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

`


export const QuestionButton = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  padding: 12px;
  background:  ${props => props.theme.color.primary};
  border-radius: 6px;
  justify-content: center;
  margin-bottom: 15px;

`


export const QuestionLabel = styled.View`
  text-align: center;
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};


`

