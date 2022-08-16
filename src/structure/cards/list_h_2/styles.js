import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { style } from '@mui/system';


export const Card = styled.div`
    border: 2px solid #00000020;
    background: ${props => props.theme.background};
    margin: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    flex: 1 1 300px;
    transition: linear .2s;

`

export const Description = styled.div`
  margin-left: 16px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom:12px;
  
  `


export const Imgs = styled.div`
  flex-direction: row;
  position: absolute;
  margin-top: 220px;

  justify-content: center;
  
  align-self: center;
  `

export const BtImg = styled.button`
  width: 44px;
  cursor: pointer;
  height: 12px;
  border: none;
  margin: 10px;
  border-radius: 10px;
  transition: linear .2s;
  background: ${props => props.handle ? "#5B72F2": "#D3D3D3"};;   
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


export const Title = styled.span`
  color: ${props => props.theme.color.medium};   
  display: flex;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: ${props => props.theme.font.book};
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


export const Like = styled.button`
  background:  ${props => props.theme.color.off};
  border: none;
  color:  ${props => props.theme.color.primary};
  width: 48px;
  height: 48px;
  border-radius: 8px;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`

export const Img = styled.img`
  width: 100%;
  height: 260px;
  transition: linear .2s;
  border-radius: 6px;
  object-fit: cover;
`

