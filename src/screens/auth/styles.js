import styled from 'styled-components';

export const Container = styled.div `
  background: ${props => props.theme.background};
  padding: 0px 0px;
  flex-direction: row;
  display: flex;
  margin: -8px;
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
  align-items: center;
  justify-content: center;
  
`

export const Right = styled.div `
  margin-left: 10px;
  border-radius: 12px;
  padding: 20px;
  width: 60%;
`


export const Title = styled.span `
  font-size: 32px;
  color: ${props => props.theme.color.title};
  text-align: center;
  font-family: ${props => props.theme.font.bold};
`;

export const TitleName = styled.span `
  font-size: 32px;
  color: ${props => props.theme.color.primary};
  text-align: center;
  font-family: ${props => props.theme.font.book};
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



export const Logo = styled.img`
  width: 60px;
  align-self: center;
  margin: 0px auto;
  margin-top: -30px;
  margin-bottom: 20px;
  align-self: center;
  border-radius: 8px;
  `




export const Input = styled.input `
  font-size: 22px;
  margin: 8px 0px;
  border-radius: 6px; 
  border: 2px solid ${props => props.theme.title === 'dark' ? 'transparent' : props.theme.color.border};  
  background: ${props => props.theme.color.off};
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
  width: 460px;
`
export const Register = styled.div `
width: 460px;`



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
  border-radius: 12px;
  object-fit: cover;
`

export const GreenAcess = styled.span `
  color: ${props => props.theme.color.green};
  background:  ${props => props.theme.color.green}30;
  font-family: ${props => props.theme.font.medium};
  padding: 12px 16px;
  font-size: 24px;
  margin-top: 20px;
  border-radius: 0px 8px 8px 0px;
  border-left: 4px solid  ${props => props.theme.color.green};

`


export const RedAcess = styled.span `
  color: ${props => props.theme.color.red};
  background:  ${props => props.theme.color.red}30;
  font-family: ${props => props.theme.font.medium};
  padding: 12px 16px;
  font-size: 24px;
  margin-top: 20px;
  border-radius: 0px 8px 8px 0px;
  border-left: 4px solid  ${props => props.theme.color.red};

`


export const RedAcessLabel = styled.span `
  color: ${props => props.theme.color.red};
  font-family: ${props => props.theme.font.book};
  font-size: 16px;
`



export const FinishImg = styled.img `
  width: 300px;
  border-radius: 12px;
  margin: auto;
  align-self: center;
  
`


export const ShowIcon = styled.div`
  font-size: 24px;
  color:  ${props => props.theme.color.label};
  margin-left: -40px;
  margin-right: 10px;
  margin-top: 15px;
  cursor: pointer;

`