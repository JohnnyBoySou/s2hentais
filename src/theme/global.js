import styled from 'styled-components';

import Ripples from 'react-ripples'

export const Ripple = styled(Ripples).attrs(() => ({
  color: "#ffffff50",
  during: 700,
}))`
`;



export const ButtonBR = styled.button`
  border: 2px solid #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 10px 20px;
  background: ${props => props.theme.color.light};
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor: pointer;
`;


export const ButtonPR = styled.button`
  border-radius: 6px;
  justify-content: center;
  border: 0px;
  padding: 10px 20px;
  background:  ${props => props.theme.color.primary};
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor: pointer;
`;


export const Back = styled.button`
border: 2px solid #00000020;
border-radius: 6px;
justify-content: center;
padding: 10px 20px;
background: ${props => props.theme.color.light};
color: ${props => props.theme.color.title};
font-size: 18px;
font-family: ${props => props.theme.font.medium};
text-transform: uppercase;
cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`

export const Label = styled.label`
  font-size: 18px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`
