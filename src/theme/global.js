import styled from 'styled-components';

import Ripples from 'react-ripples'

export const Ripple = styled(Ripples).attrs(() => ({
  color: "#ffffff50",
  during: 700,
}))`
`;



export const ButtonBR = styled.button`
  border: 2px solid #00000020;
  border-radius: 10px;
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
  border-radius: 10px;
  justify-content: center;
  border: 0px;
  padding: 10px 20px;
  background: ${props => props.off ? "#d1d1d1" : "#5B72F2"};
  color:${props => props.off ? "#fff" : "#fff"};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor:  ${props => props.off ? "default" : "pointer"};
  transition: .2s linear;
  &:hover{
    background: ${props => props.off ? "#d1d1d1" : "#5B72F220"};
    color:${props => props.off ? "#fff" : "#5B72F2"};
  }
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


export const ButtonChecked = styled.button`
  border:${props => props.checked ? '2px solid #00000020' : '2px solid #5B72F2'};
  border-radius: 6px;
  justify-content: center;
  padding: 10px 20px;
  background: ${props => props.checked ? '#fff' : '#5B72F2'};
  color:${props => props.checked ? '#072942' : '#fff'};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor: pointer;
  transition: .2s linear;
`;



export const ButtonOffColor = styled.button`
  border-radius: 10px;
  justify-content: center;
  border: 0px;
  padding: 10px 20px;
  background:  ${props => props.theme.color.primary}20;
  color: ${props => props.theme.color.primary};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor: pointer;
  transition: linear .2s;
  &:hover{
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.light};

}
`;




export const SelectBt = styled.button`
  background: ${props => props.on ? "#5B72F2" : "#F1F3FF"};
  border-radius: 6px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 0px;
  padding-bottom: 4px;
  text-align: center;
  border: none;
  transition: linear .2s;
  cursor: pointer;
`

export const SelectLabel = styled.span`
  color: ${props => props.on ? "#FFF" : "#5B72F2"};
  font-size: 18px;
  font-family: ${props => props.on ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;



export const ButtonLight = styled.button`
  border-radius: 10px;
  justify-content: center;
  border: 0px;
  padding: 10px 20px;
  background: ${props => props.off ? "#d1d1d1" : "#FFF"};
  color:${props => props.off ? "#fff" : "#FE7359"};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor:  ${props => props.off ? "default" : "pointer"};
  transition: .2s linear;
  &:hover{
    background: ${props => props.off ? "#d1d1d1" : "#FFFFFF90"};
    color:${props => props.off ? "#fff" : "#FFF"};
  }
`;

export const TouchableOpacity = styled.button`
  border: none;
  border-radius: 6px;
  justify-content: center;
  cursor: pointer;
`;


export const View = styled.div`
`;


export const Row = styled.div`
  flex-direction: row;
  display: flex;
`


export const Column = styled.div`
  flex-direction: column;
  display: flex;
`



export const Spacing = styled.div`
width: ${props => props.width || '100%'};
  display: flex;
  height: ${props => props.height};
`

export const Text = styled.span`
`