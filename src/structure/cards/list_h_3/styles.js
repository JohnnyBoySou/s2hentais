import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const Card = styled.div`
    border: 2px solid #00000020;
    background: ${props => props.theme.background};
    margin: 10px;
    border-radius: 8px;
    display: flex;
    padding: 0px;
    text-decoration: none;
    margin-bottom: 25px;
    text-align: left;
    cursor: pointer;
    height: 234px;

`

export const Description = styled.div`
  margin-left: 16px;
  margin-right: 10px;
  padding-top: 20px;
  width: 60%;
  padding-bottom: 0px;
  `


export const Title = styled.span`
  color: ${props => props.theme.color.title};   
  display: flex;
  margin-top: 10px; 
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
  background: ${props => props.theme.color.off};
  border-radius: 8px;
  padding: 8px;
  align-items: center;
  padding-left: 18px;
  margin-right: 6px; 
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


export const Codigo = styled.span`
  color: ${props => props.theme.color.light};
  font-size: 16px;
  font-family: ${props => props.theme.font.medium};
  padding: 6px 12px;
  border-radius: 30px;
  background: ${props => props.theme.color.secundary};
`;



export const Img = styled.img`
  height: 234px;
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
`


export const BtArrow = styled.button`
  width: 56px;
  cursor: pointer;
  height: 52px;
  border: none;
  margin: 10px;
  border-radius: 10px;
  font-size: 32px;
  transition: linear .2s;
  text-align: center;
  justify-content: center;
  color: ${props => props.theme.color.light};  
  background:${props => props.theme.color.primary};   ;`

  export const Imgs = styled.div`
    flex-direction: row;
    justify-content: center;
    align-self: center;
    display: flex;
    margin-top: -30px;  
    
  `

export const BtImg = styled.button`
  width: 32px;
  cursor: pointer;
  height: 8px;
  border: none;
  margin: 6px;
  border-radius: 10px;
  transition: linear .2s;
  background: ${props => props.handle ? "#5B72F2": "#D3D3D3"};;   
`