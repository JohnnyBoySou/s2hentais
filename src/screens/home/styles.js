import { style } from '@mui/system';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  
  padding: 12px 80px;
  flex-direction: column;
  display: flex;
`;

export const Main = styled.div`
padding: 30px;
padding-top: 0px;
margin-left: -20px;

background: ${props => props.theme.background};
`

export const Headere = styled.div`
  padding: 100px 80px;
  background:  ${props => props.theme.color.primary};
  
  margin: 0px;
  display: flex;
  flex-dirction: row;
  padding-bottom: 0px;
  border-radius: 16px;
`


export const Collections = styled.div`
  padding: 100px 80px;
  background:  ${props => props.theme.color.secundary};
  margin: 0px;
  display: flex;
  flex-dirction: row;
  padding-bottom: 0px;
  border-radius: 16px;
`


export const ActionButtons = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
`

export const LineV = styled.div`
  height: 50px;
  width: 2px;
  background: #00000020;
  margin: 0px 25px;
`




export const Button = styled.button`
  border-width: 2px;
  border-color: #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
`;


export const ButtonLabel = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  font-family: Font_Medium, sans-serif;
`;


export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;

`




export const TitleModal = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`;




export const Lenght = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.color.light};
  background: ${props => props.theme.color.secundary};
  width: 64px;
  height: 64px;
  border-radius: 100px;
  text-align:  center;
  font-family: ${props => props.theme.font.bold};
`;




export const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.color.title};
  margin-top: 6px;
  font-family: ${props => props.theme.font.bold};
`;



export const Subtitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;


export const Sublabel = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title}99;
  font-family: ${props => props.theme.font.book};
`;


export const Location = styled.div`
    flexDirection: row;
`

export const Local = styled.div`
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`

export const Preferences = styled.div`
    border: 2px solid #00000020;
    border-radius: 12px;
    padding: 12px 20px;
    margin-bottom: 16px;
`

export const Type = styled.div`
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`


export const Amount = styled.div`   
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`

export const About = styled.div`   
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`


export const Finish = styled.div`   
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`


export const Input = styled.input`
  border: none;
  border-bottom: 3px solid ${props => props.theme.color.primary};
  
  border-radius: 0px;
  justify-content: center;
  padding: 4px;
  background: #fff;
  font-size: 26px;
  box-sizing: border-box;
  font-family: ${props => props.theme.font.medium};
  color: ${props => props.theme.color.title};
  margin-bottom: 20px;
  width: 100%;
  margin-top: 5px; 
`;




export const CollectionsRow = styled.div`
  background: ${props => props.theme.background};
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`


export const CollectionsCard = styled.div`
  background: ${props => props.color};
  justify-content: space-between;
  padding: 20px 20px;
  border-radius: 8px;
  flex-grow: 1;
  width: 50%;
  margin-right: 20px;
  width: 300px;

`


export const CollectionsTitle = styled.span`
  font-size: 54px;
  line-height: 50px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.bold};
`;


export const CollSpacing = styled.div`
  height: 200px;
  width: 40px;
`



export const Subheadline = styled.span`
  color:${props => props.theme.color.label};
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;



export const Select = styled.button`
  background: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  flex-grow: 1;
  border: none;
`

export const SelectLabel = styled.span`
  color: ${props => props.activity ? "#FFF" : "#5B72F2"};
  font-size: 18px;
  font-family: ${props => props.activity ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;


export const Spacing = styled.div`
  width: 20px;
  height: 10px;
`

export const Spacing1 = styled.div`
  width: 0px;
  height: 00px;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #00000020;
  border-radius: 6px;
`


export const Tag = styled.span`
  color: ${props => props.theme.color.light}; 
  font-size: 24px;
  background: ${props => props.theme.color.green};
  border-radius: 6px;
  padding: 8px 8px; 
  margin-left: 6px;
  margin-right: 6px;
  font-family: ${props => props.theme.font.book};  
  text-align: center;
`;



export const Image = styled.img`
  display: flex;
  width: 100px;
  height: 450px;
  margin-top: -80px;
`

export const Spacing2 = styled.div`
  width: 20px;
  height: 5px;
`



export const BtAction = styled.button`
  border: none;
  font-family: ${props => props.theme.font.book}; 
  color: ${props => props.select ? 'blue' : '#000000020'}; 
  font-size: 24px;
  background: none;
  transition: linear .2s;
  padding: 10px 20px;
  border-bottom: ${props => props.select ? ' 3px solid blue' : '3px solid #00000020'};
  margin-bottom: -2px;
`