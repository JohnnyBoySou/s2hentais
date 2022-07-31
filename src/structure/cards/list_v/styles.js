import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const Card = styled(Link)`
    border: none;
    background: ${props => props.theme.background};
   
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 30px;
    padding: 0px;
    text-decoration: none;

`

export const Description = styled.div`
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
  margin-top: 20px;
  margin-left: 20px;
  position: absolute;
  text-align: center;
  border-radius: 100px;
  color: ${props => props.theme.color.light};
  background: ${props => props.theme.color.primary};
`



export const InputTitle = styled.span`
  color: ${props => props.theme.color.light};
  font-size: 22px;
  text-align: center;
  padding: 6px 12px;
  font-family: ${props => props.theme.font.medium};
`


export const InputLabel = styled.span`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  display: flex;
  font-family: ${props => props.theme.font.book};
`;





export const Address = styled.span`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
  display: flex;
`;



export const Img = styled.img`
  width: 300px;
  height: 380px;
  border-radius: 8px;
  object-fit: cover;
`

