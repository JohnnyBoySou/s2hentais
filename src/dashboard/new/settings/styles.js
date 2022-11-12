import styled from 'styled-components';

export const Container = styled.div `
  background: ${props => props.theme.background};
  padding: 0px 0px;
  flex-direction: column;
  display: flex;
`;

export const View = styled.div `

`


export const Row = styled.div `
  background: ${props => props.theme.background};
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;




export const Left = styled.div `
  display: flex;
  flex-direction: column;  
  width: 40%;
  padding: 40px 80px;
`

export const Right = styled.div `
  margin-left: 10px;
  border-radius: 12px;
  padding: 20px;
  width: 60%;
`


export const Title = styled.span `
  font-size: 32px;
  color: ${props => props.theme.color.primary};
  text-align: center;
  font-family: ${props => props.theme.font.bold};
`;



export const Label = styled.span `
  font-size: 20px;
  color: ${props => props.theme.color.title};
  margin-top: 20px;
  font-family: ${props => props.theme.font.medium};
`;

export const Hr = styled.div `
  height: 2px;
  background-color: #00000020;
  margin-right: -12px;
  margin-left: -12px;
`


export const Card = styled.div`
    flex-direction: column;
    display: flex;
    border: 2px solid #00000010;
    padding: 20px 30px;
    width: 260px;
    border-radius: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const CardTitle = styled.span `
  font-size: 20px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const CardLabel = styled.span `
  font-size: 16px;
  margin-top: 5px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  margin-bottom: 12px;
`;



export const CardValue = styled.span `
  font-size: 46px;
  margin-bottom: 10px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`;



export const List = styled.div`
    
`
export const Item = styled.div`
    flex-direction: row;
    display: flex;
`


export const ItemLabel = styled.span`
    font-size: 18px;
    color: ${props => props.theme.color.label};
    font-family: ${props => props.theme.font.book};

`
export const Icon = styled.span`
    font-size: 26px;
    margin-top: -2px;
    margin-right: 10px;
    color: ${props => props.theme.color.green};
`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #00000010 ;
`



export const MenuItem = styled.button`
  border: none;
  font-family: ${props => props.theme.font.book}; 
  color: ${props => props.on ? 'blue' : '#000000020'}; 
  font-size: 20px;
  background: none;
  transition: linear .2s;
  padding: 10px 20px;
  border-bottom: ${props => props.on ? ' 3px solid blue' : '3px solid #00000020'};
  margin-bottom: -2px;
  cursor: pointer;
`

export const Section = styled.section`
`

export const ThemeBt = styled.button`
  border: 2px solid ${props => props.on ? 'blue' : '#000000020'};
  font-family: ${props => props.theme.font.book}; 
  color: ${props => props.on ? 'blue' : '#000000020'}; 
  font-size: 20px;
  background: none;
  transition: linear .2s;
  padding: 10px 20px;
  border-bottom: ${props => props.on ? ' 3px solid blue' : '3px solid #00000020'};
  margin-bottom: -2px;
  cursor: pointer;
`