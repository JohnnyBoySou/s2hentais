import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 25px;
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

