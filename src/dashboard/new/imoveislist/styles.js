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
  color: ${props => props.theme.color.title};
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;



export const Label = styled.span `
  font-size: 20px;
  color: ${props => props.theme.color.label};
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
  border-right: 0.5px solid ${props => props.theme.color.border};
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


export const ImoveisContainer = styled.div`
  border: 2px solid #00000020;
  border-bottom: none;
` 

export const Circle = styled.div`
width: 100px;
height: 100px;
background: linear-gradient(to bottom right, #5B72F2, #FE7359);
border-radius: 50%;
display: flex;
margin: auto;
align-items: center;
justify-content: center;=
color: #FFF;
margin-bottom: 10px;
margin-top: 30px;
align-self: center;

&::before {
  content: "notfound";
  position: absolute;
  text-align: center;
  line-height: 1;
  color: #FFF;
  width: 100%;
  height: 100%;
  z-index: -1;
  -webkit-text-stroke: 2px #5B72F2;
  text-stroke: 2px #5B72F2;
}
`;

export const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid ${props => props.theme.color.border};
  border-bottom: 0px;
`

export const GridRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid ${props => props.theme.color.border};
  border-bottom: 0px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`