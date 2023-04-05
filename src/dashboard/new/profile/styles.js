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
  font-size: 18px;
  color: ${props => props.theme.color.title};
  margin-top: 12px;
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
    width: 380px;
    border-radius: 12px;
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
  align-self: center;
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
  margin-bottom: 15px;
  border: 2px solid #00000020;
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #00000020;
`


export const Input = styled.input `
  font-size: 16px;
  margin: 8px 0px;
  border-radius: 6px;
  border: 2px solid #00000020;
  transition: .2s linear;
  padding: 6px 8px;
  &:focus {
    outline: none; 
    box-shadow: 0px 0px 0px 3px ${props => props.theme.color.primary}60;
    border: 2px solid ${props => props.theme.color.primary};
  }
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`





export const BtIcon = styled.button`
  border-radius: 100px;
  justify-content: center;
  border: 2px solid #fff;
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.light};
  font-size: 18px;
  padding-top: 4px;
  cursor: pointer;
`;



export const BtUpload = styled.button`
  border-radius: 60px;
  justify-content: center;
  border: 2px solid #fff;
  align-self: center;
  background: ${props => props.theme.color.green};
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.book};
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
  margin-top:-10px;
  margin-bottom: 5px;
`;



export const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  width: ${props => props.style.width};
  height: 2px;
  background-color: ${props => props.theme.color.primary};
  transition: linear 0.3s;
  transform: translateX(${props => props.style.left});
`;




export const TabContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row; 
  width: 100%;
  text-align: center;
`;


export const Tab = styled.button`
  padding: 8px 10px;
  border-bottom: 2px solid #ccc;
  cursor: pointer;
  font-size: 18px;
  align-self: center;
  text-align: center;
  border-top: none;
  border-right: none;
  border-left: none;
  transition: linear .2s;
  background: none;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  width: 50%;
  &.active {
    border-bottom: 2px solid ${props => props.theme.color.primary};
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.font.bold};
  }
`;

export const TabContent = styled.div`
padding: 0px;
`;

export const Spacing = styled.div`
  width: 10px;
  height: 15px;
`