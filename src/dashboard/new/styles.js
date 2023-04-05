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
  width: 18%;
  border-right: 2px solid #00000010;
  `

export const Right = styled.div `
  margin-left: 10px;
  border-radius: 12px;
  padding: 20px;
  width: 80%;
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



export const Logo = styled.img`
  width: 200px;
  align-self: center;
  margin: 0px auto;
  margin-top: -30px;
  `



export const Input = styled.input `
  font-size: 22px;
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

export const GreenAcess = styled.span `
  color: ${props => props.theme.color.green};
  background:  ${props => props.theme.color.green}30;
  font-family: ${props => props.theme.font.medium};
  padding: 12px 16px;
  font-size: 24px;
  margin-top: 20px;
  border-radius: 0px 4px 4px 0px;
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



export const FinishImg = styled.img `
  width: 300px;
  border-radius: 12px;
  margin: auto;
  align-self: center;
  
`



export const Bar = styled.div`
    flex-direction: column;
    display: flex;
    padding-right: 30px;
    background: ${props => props.theme.color.background};
    }
`

export const LineBar = styled.div`
  color: ${props => props.theme.color.label};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 20px;
  margin-left: 10px;
  transition: linear .2s;
  justify-content: center;
  background: ${props => props.theme.color.background};
    &:hover{
        background: ${props => props.theme.color.off};
        color: ${props => props.theme.color.primary};
   
    }
`


export const LineSpan = styled.span`
  font-family: ${props => props.theme.font.medium};
  font-size: 20px;
  margin-left: 8px;
 
`

export const Img = styled.img`
    width: 160px;
    height: 76px;
    align-self: center;
    margin-bottom: 16px;
`

export const Line = styled.div`
    width: 92%;
    height: 2px; 
    background: #00000010;
    align-self: center;
    margin-left: 20px;
`



export const SpanSeparetator = styled.span`
  font-family: ${props => props.theme.font.book};
  font-size: 16px;
  letter-spacing: 4;
  color: ${props => props.theme.color.label};
  margin-left: 20px;
  margin-bottom: 10px;
 
`

export const Head = styled.div`
  display: flex;
  flex-direction: row;  
  margin-bottom: 20px;
  justify-content: space-between;
`


export const HeadTitle = styled.span `
  font-size: 28px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`;

export const HeadLabel = styled.span `
  font-size: 18px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;


export const IconBt = styled.button`
    width: 44px;
    height: 44px;
    text-align: center;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    justify-content: center;
    background:  ${props => props.theme.color.primary}20;
    color:  ${props => props.theme.color.primary};
    transition: .2s linear;
    margin-left: 16px;
    &:hover{
      background:  ${props => props.theme.color.primary};
      color:  ${props => props.theme.color.light};

    }
`



export const SideBar = styled.aside`
  width: 560px;
  padding: 20px 0px;
`


export const MarkerRead = styled.span`
font-size: 14px;
margin-right: 20px;
margin-top: 0px;
color: ${props => props.theme.color.label};
border-radius: 30px;
background: ${props => props.theme.color.off};
padding: 8px 12px;
transition: .2s linear;
font-family: ${props => props.theme.font.book};
&:hover{
  background:${props => props.theme.color.primary}; 
  color:${props => props.theme.color.light}; 

}
  `


  
export const ActionButtons = styled.div`
flex-direction: row;
justify-content: space-between;
display: flex;
margin-top: 0px;
margin-bottom: 10px;
`


export const BtAction = styled.button`
border: none;
font-family: ${props => props.theme.font.book}; 
color: ${props => props.select ? 'blue' : '#000000020'}; 
font-size: 20px;
background: none;
transition: linear .2s;
padding: 10px 20px;
border-bottom: ${props => props.select ? ' 3px solid blue' : '3px solid #00000020'};
margin-bottom: -2px;
cursor: pointer;
`

export const SubTitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const ProfileContainer = styled.div`
  flex-direction: row;
  display: flex;
  height: 46px;
  padding-right: 10px;
  padding-left: 20px;
  margin-left: 20px;
  border-left: 2px solid #00000010;
  align-items: center;
  cursor: pointer;
  
`

export const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  margin-right: 10px;
`

export const BtSettings = styled.button`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  font-size: 24px;
  padding-top: 6px;
  border: none;
  border-radius: 100px;
  color: ${props => props.theme.color.primary};
  background: ${props => props.theme.color.primary}20;
`


export const CardTitle = styled.span `
  font-size: 18px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const CardLabel = styled.span `
  font-size: 14px;
  margin-top: 0px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  margin-bottom: 12px;
`;

export const Notification = styled.div`
  background: ${props => props.theme.color.primary}10;
  padding: 12px 16px;
  flex-direction: column;
  display: flex;
  margin: 20px;
  border-radius: 8px;
`

export const NotificationTitle = styled.span`
  font-size: 20px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`


export const NotificationLabel = styled.span`
  font-size: 16px;
  margin-top: 6px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`

export const ImoveisContainer = styled.div`
  border: 2px solid #00000020;
  border-bottom: none;
` 