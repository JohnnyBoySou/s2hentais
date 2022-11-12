import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  flex-direction: row;
  display: flex;
  padding: 0px;
  border-radius: 12px;
  justify-content: space-between;
`;




export const Spacing = styled.div`
  width: 30px;
  height: 16px;
`;



export const Title = styled.span`
  font-size: 36px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
  
  margin: 0px;
  margin-bottom: -10px;
`;



export const Label = styled.span`
  font-size: 24px;
  margin: 20px 0px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;

export const Hr = styled.div`
  height: 2px;
  background-color: #00000020;
`

export const Line = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    justify-content: center;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    background: #F3f3f3;
    width: 3%;
    margin: -10px;
`

export const Middle = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    padding: 12px 6px;
    margin: -10px;
`


export const SideRight = styled.div`
    display: flex;
    background: #f3f3f3;
    width: 20%;
    margin: -10px;
    flex-direction: column;
    padding: 12px 24px;
    padding-top: 20px;
`


export const Profile = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  background : ${props => props.theme.color.light};
  padding: 12px ;
`

export const ImgProfile = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  margin-right: -30px;
  background:  ${props => props.theme.color.label};
`



export const Username = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const Company = styled.span`
  font-size: 14px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;





export const Exit = styled.button`
  border: none;
  padding: 10px 12px 6px 12px;
  border-radius: 6px;
  color: #fff;
  font-size: 24px;
  background: ${props => props.theme.color.black};
  transition: linear .2s;
  text-align: center;
  &:hover{
    background: ${props => props.theme.color.black}80; 
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

export const YourBalance = styled.div`
  border: 2px solid #00000020;
  border-radius: 12px;
  padding: 10px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


export const SubTitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;



export const BtSettings = styled.button`
  width: 42px; 
  height: 42px; 
  border-radius: 30px; 
  background: ${props => props.theme.color.off}90;
  text-align: center;
  border: none;
`

export const Nav = styled.nav`
  flex-direction: row;
  display: flex;
  border-bottom: 2px solid #00000020;
  padding-bottom: 20px;
  padding-top: 20px;
  justify-content: space-between;
  padding-right: 5px;

`

export const SearchInput = styled.input`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
  border: none;
  margin-left: 20px;
  background: #fff; 
  border-radius: 6px;
  height: 50px;
  padding-left: 14px;
  width: 72%;
  margin-right: 20px;
`



export const BtNotifications = styled.button`
  width: 38px; 
  height: 38px; 
  border-radius: 8px; 
  padding-top: 4px;

  background: ${props => props.theme.color.off};;
  color: ${props => props.theme.color.primary};
      
  text-align: center;
  border: none;
  font-size: 18px;
  transition: .2s linear;
  margin-right: 15px;
  &:hover{
    
  background: ${props => props.theme.color.primary};
  color: #fff;
  }
`


export const SideBar = styled.aside`
  width: 340px;
  padding: 30px 0px;
`

export const View = styled.div``


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


export const Details = styled.div``


export const Feed = styled.div``

export const Imoveis = styled.div`
  margin: 10px 20px;
`


export const Stats = styled.div`
  margin: 10px 20px;
`


  

export const Route = styled.span`
  font-size: 16px;
  margin-top: -2px;
  margin-right: 5px;
  margin-left: 10px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
`;


export const Routes = styled.span`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-left: 10px;
  margin-top: 10px;
`;


export const StsCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 18px 22px;
  transition: .2s linear;
  margin-right: 20px;

  &:hover{
    transform: scale(1.02)
  }
`

export const StsLabel = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`

export const Img = styled.img``

export const StsTitle = styled.div`
  font-size: 38px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`
export const IndicatorSts = styled.div`
  width: 26px;
  margin-top: 12px;
  height: 26px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  border-radius: 100px;
  background: ${props => props.up ? '#37CB84' : 'red' }
`

export const IndicatorLabel = styled.span`
  font-size: 20px;
  margin-top: 14px;
  margin-right: 10px;
  margin-left: 10px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`





export const Highlight = styled.div`
  padding: 40px;
  border: 2px solid #00000020;
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `

export const HighlightImg = styled.img`
  width: 150px;
  height: 150px;
`


export const AddImovel = styled.button`
  border-radius: 8px;
  justify-content: center;
  border: 0px;
  padding: 10px 25px;
  background:  ${props => props.theme.color.primary};
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor: pointer;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`
export const DivAddImovel = styled.div`
  height: 44px;
  width: 2.5px;
  margin-top: -10px;
  margin-bottom: -10px;
  background: #fff;
`


