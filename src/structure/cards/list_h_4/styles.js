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
  display: flex;
  
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



export const Title = styled.span`
  color: ${props => props.theme.color.title};   
  display: flex;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: ${props => props.theme.font.medium};
`;

export const Spacing = styled.div`
  width: 6px;
  height: 10px;
`


export const Img = styled.img`
  width: 100%;
  height:380px;
  transition: linear .2s;
  border-radius: 6px;
  object-fit: cover;
`


export const BtValue = styled.button`
  background:  ${props => props.theme.color.primary};
  border: none;
  border-radius: 40px;
  font-size: 20px;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.color.light};
  padding: 8px 16px;
  font-family: ${props => props.theme.font.book};
`


export const BtLocation= styled.button`
  background:  ${props => props.theme.color.secundary};
  border: none;
  border-radius: 40px;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.color.light};
  padding: 8px 16px;
  font-family: ${props => props.theme.font.book};
`


export const Line = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  padding: 0px 12px;
  margin-top: -55px;
  margin-bottom: 20px;  
`


export const LineArrow = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  width: 90px;
  padding: 0px 12px;
  position: absolute;
  z-index: 99;
  margin-top: 12px;
`


export const BtArrow = styled.button`
  width: 38px;
  cursor: pointer;
  height: 38px;
  border: none;
  border-radius: 50px;
  font-size: 22px;
  transition: linear .2s;
  text-align: center;
  justify-content: center;
  transition: linear .2s;
  color: ${props => props.theme.color.primary};  
  background:${props => props.theme.color.off};   
  &:hover{
    background: ${props => props.theme.color.primary}; 
    color: ${props => props.theme.color.light};  
  }
  `
