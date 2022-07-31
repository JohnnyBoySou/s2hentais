import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const Item = styled.button`
    border: 2px solid #00000020;
    background: ${props => props.theme.background};
    margin: 10px;
    border-radius: 8px;
    display: flex;
    padding: 10px 20px; 

    text-decoration: none;

`
export const Arrow  = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 100px;
    background: red;
`


export const Description = styled.div`
  margin-left: 16px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 6px;
  
  `


export const Title = styled.span`
  color: ${props => props.theme.color.title};   
  display: flex;
  font-size: 22px;
  font-family: ${props => props.theme.font.bold};
`;


export const Toast = styled.div`
  border-radius: 4px;
  padding: 6px 8px;
  background: ${props => props.theme.color.off2};
  flex-grow: 1;
  display: flex;
  justify-content: center;
`




export const ToastLabel = styled.span`
  color: ${props => props.theme.color.title};
  font-size: 16px;
  text-aling: center;
  align-self: center;
  font-family: ${props => props.theme.font.medium};
`;

export const Spacing = styled.div`
  width: 6px;
  height: 10px;
`


export const Input = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`



export const InputTitle = styled.span`
  color: ${props => props.theme.color.title};
  font-size: 26px;
  font-family: ${props => props.theme.font.bold};
`


export const InputLabel = styled.span`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  display: flex;
  font-family: ${props => props.theme.font.book};
`;





export const Address = styled.span`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  display: flex;
`;



export const Img = styled.img`
  width: 148px;
  height: 182px;
  border-radius: 6px;
`

