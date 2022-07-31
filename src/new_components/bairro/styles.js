import styled from 'styled-components';

export const Title = styled.span`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  display:flex;
  margin-bottom: -15px;
  margin-top: 10px;
  font-family: ${props => props.theme.font.medium};
`;


export const Label = styled.p`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  display:flex;
`;



export const Img = styled.div`
  width: 62px;
  height: 62px;
  display:flex;
  background-color: ${props => props.theme.color.primary};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
`

