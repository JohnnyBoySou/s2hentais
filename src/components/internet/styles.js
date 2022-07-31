import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.medium};
  margin-bottom: 2px;
`;
export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 14px;
  font-family: ${props => props.theme.font.book};
`;

export const HeaderMain = styled.SafeAreaView`
  margin-left: 24px;
  margin-right: 24px;
  flex-direction: row;
  height: 84px;
  border-radius: 8px;
  align-items: center;
  padding: 16px;
  background: ${props => props.theme.color.off};
`;


export const Back = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 100px;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-content: center;
  margin-right: 10px;
  background: ${props => props.theme.color.primary}20;
`