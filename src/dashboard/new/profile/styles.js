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
    padding: 20px 30px;
    width: 260px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`

export const CardTitle = styled.span `
  font-size: 24px;
  margin-top: 20px;
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

export const UserImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100px;
`

export const CardIcon = styled.div`
  background:${props => props.theme.color.primary};
  color: #fff;
  padding: 6px 8px;
  text-align: center;
  border-radius: 6px;
  justify-content:center;
`

export const CardInputText = styled.span`
    font-size: 18px;
    margin-top: 4px;
    margin-left: 10px;
    text-align: center;
    margin-right: 10px;
    color: ${props => props.theme.color.label};
    font-family: ${props => props.theme.font.medium};
`

export const CardInput = styled.div`
  flex-direction: row;
  text-align: center;
  display: flex;
  margin: 10px;
  border-radius: 6px;
  margin-button: 15px;
  border: 2px solid #00000020;
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #00000020;
`