
import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const LikeAs = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.off ? "#5B72F2" : "#F1F3FF"};
  border-radius: 6px;
  align-content: center;
  width: 56px;
  height: 56px;
  margin-left: 10px;
  justify-content: center;
`
