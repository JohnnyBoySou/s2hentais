import styled from 'styled-components';

export const Card = styled.div`
    background: ${props => props.theme.background};
    margin: 0px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    transition: linear .2s;
    border-bottom: 2px solid #00000020;
    &:hover{
      background: #f9f9f9;
    }

`

export const Description = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  padding-top: 10px;
  padding-bottom:12px;
  display: flex;
  
  `




export const Title = styled.span`
  color: ${props => props.theme.color.title};   
  font-size: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;


export const Label = styled.span`
  color: ${props => props.theme.color.label};   
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 20px;
  font-family: ${props => props.theme.font.book};
`;

export const Spacing = styled.div`
  width: 10px;
  height: 10px;
`


export const Img = styled.img`
  width: 42px;
  height: 42px;
  transition: linear .2s;
  border-radius: 6px;
  object-fit: cover;
  margin: 8px;
  margin-top: px;
`


export const BtValue = styled.button`
  background:  ${props => props.theme.color.primary};
  border: none;
  border-radius: 40px;
  font-size: 14px;
  color: ${props => props.theme.color.light};
  padding: 0px 10px;
  margin-bottom: -10px;
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



export const View = styled.div`
`



export const Location = styled.span`
  color: ${props => props.theme.color.primary};   
  font-size: 16px;
  padding-left: 10px;
  margin-top: -4px;
  font-family: ${props => props.theme.font.book};
`;



export const Column = styled.div`
  text-align: center;
  padding: 8px 20px;
  padding-top: 20px;
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



export const QuickBt = styled.button`
  background:  ${props => props.theme.color.off};
  color: ${props => props.theme.color.primary};
  border: none;
  border-radius: 8px;
  font-size: 18px;
  margin-right: 10px;
  justify-content: center;
  text-align: center;
  margin-top: -6px;
  width: 32px;
  height: 32px;
  transition: .2s linear;
  &:hover{

    background:  ${props => props.theme.color.primary};
    color: ${props => props.theme.color.off};
  }
  `


export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background:  ${props => props.theme.color.red}30;
  color:${props => props.theme.color.red};
  justify-content: center;
  margin: 20px auto;
  font-size: 42px;
  display: flex;
  flex-direction: column;
  `

  export const EditImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    justify-content: center;
    margin: 20px auto;
    ` 