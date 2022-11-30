import styled from 'styled-components';

export const Container = styled.div `
  background: ${props => props.theme.background};
  padding: 0px 0px;
  flex-direction: row;
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
  font-size: 24px;
  color: ${props => props.theme.color.primary};
  text-align: center;
  font-family: ${props => props.theme.font.bold};
`;



export const Label = styled.span `
  font-size: 20px;
  color: ${props => props.theme.color.title};
  margin-top: 20px;
  font-family: ${props => props.theme.font.book};
`;


export const Bold = styled.span `
  font-size: 20px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
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
    padding: 20px;
    border-radius: 12px;
    background: ${props => props.theme.background};

`

export const CardTitle = styled.span `
  font-size: 42px;
  margin-top: -12px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const CardLabel = styled.span `
  font-size: 18px;
  margin-top: 5px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  margin-bottom: 12px;
`;



export const CardValue = styled.span `
  font-size: 42px;
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

export const Chip = styled.div`
    font-size: 16px;
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.font.medium};
    padding: 4px 10px;
    margin-left: 16px;
    border-radius: 100px;
    background: ${props => props.theme.color.primary}20;
    justify-content: center;
    height: 26px;
    margin-top: 8px;
    padding-top: 8px;
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
  text-align: center;
  padding: 12px 20px;
  display: flex:
  justify-content: center;
  border-right: 0.5px solid #00000010;
`


export const ColumnLabel = styled.span`
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
  &:hover{
    font-family: ${props => props.theme.font.medium};
    
  }
`

