import styled from 'styled-components';

export const SideBar = styled.aside`
  width: 460px;
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

export const View = styled.div``



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