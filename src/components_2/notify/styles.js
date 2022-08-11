import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 8px;
  font-family: ${props => props.theme.font.bold};
`;

export const Card = styled.View`
  background: #F1F3FF;
  border-radius: 8px;
  margin-bottom: 14px;
`
export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  margin-top: 2px;
  line-height: 22px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 12px;
  font-family: ${props => props.theme.font.book};
`;



