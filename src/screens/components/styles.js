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
  font-size: 16px;
  color: ${props => props.theme.color.title};
  
  font-family: ${props => props.theme.font.book};
`;

export const Hr = styled.div `
  height: 2px;
  background-color: #00000020;
  margin-right: -12px;
  margin-left: -12px;
`



export const Logo = styled.img`
  width: 200px;
  align-self: center;
  margin: 0px auto;
  margin-top: -30px;
  `





export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})
`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background: ${props => props.theme.color.primary};
`;


export const CheckBt = styled.button `
  border: 2px solid ${props => props.on ? "#5B72F2" : "#00000020"};
  border-radius: 8px;
  padding: 12px 20px;
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  transition: .2s linear;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  color: ${props => props.on ? "#5B72F2" : "#000"};
  background: ${props => props.on ? "#5B72F240" : "#f7f7f7"}


  `

export const CheckTitle = styled.span `
  font-size: 24px;
  text-align: left;
  font-family: ${props => props.theme.font.medium};
  color: ${props => props.theme.color.title};
  `

export const CheckLabel = styled.span `
  font-size: 16px;
  text-align: left;
  font-family: ${props => props.theme.font.book};
  color: ${props => props.theme.color.label};
`

export const CircleCheck = styled.div `
  width: 24px;
  height: 24px;
  border-radius: 100px;
  font-size: 18px;
  text-align: center;
  transition: .2s linear;
  background: ${props => props.on ? "#5B72F2" : "#00000000"};
  border: 3px solid ${props => props.on ? "#5B72F2" : "#00000020"};
  color: ${props => props.on ? "#fff" : "#00000000"};
`

export const CheckImg = styled.img `
  width: 52px;
  height: 52px;
  border-radius: 100px;

`

export const Side = styled.div `
  margin: 4px 10px;
  flex-direction: column;
  display: flex;
`


export const Login = styled.div `
  display: flex;
  flex-direction: column;
`
export const Register = styled.div ``



export const Route = styled.span `
  font-size: 16px;
  margin-top: -2px;
  margin-right: 5px;
  margin-left: 10px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
`;


export const Routes = styled.span `
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-left: -10px;
  margin-right: 50px;
`;

export const Image = styled.img `
  width: 100%;
  height: 90%;
  border-radius: 12px;
`



export const YourPlan = styled.div`
  border: 1px solid #00000020;
  padding: 20px;
  border-radius: 8px;

`

export const Line = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 2px; 
  background: #00000020;
`


export const ValueLabel = styled.span`
  font-size: 32px;
  margin: 5px 0px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.bold};
`


export const MiddleValueLabel = styled.span`
  font-size: 16px;
  margin-top: 10px;
  margin-right:5px; 
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
`

export const Card = styled.div`
  display: flex;
  flex-direction: column ;

`



export const Input = styled.input `
  font-size: 18px;
  margin: 8px 0px;
  border-radius: 6px;
  border: 2px solid #00000020;
  transition: .2s linear;
  padding: 6px 8px;
  margin-bottom: 15px;
  &:focus {
    outline: none; 
    box-shadow: 0px 0px 0px 3px ${props => props.theme.color.primary}60;
    border: 2px solid ${props => props.theme.color.primary};
  }
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`