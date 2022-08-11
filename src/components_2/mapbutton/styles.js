import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
  width: 72px;
  height: 72px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ focused }) => focused ? '#5B72F2' : '#fff'};
  font-family: ${props => props.theme.font.medium};
  
`;