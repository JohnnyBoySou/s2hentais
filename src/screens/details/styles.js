import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  
  padding: 12px 80px;
  flex-direction: column;
  display: flex;
`;


export const Row = styled.div`
  background: ${props => props.theme.background};
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;



export const Nav = styled.nav`
  background: ${props => props.theme.background};
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  margin-bottom: 20px;
`;




export const Gallery = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;




export const Column = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex; 
  margin-left: 20px;
`;




export const Section = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;





export const ShowImgs = styled.button`
  font-size: 18px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  cursor: pointer;
  border: none;
  background: ${props => props.theme.color.primary};;
  text-align: center;
  padding: 8px 24px;
  position: absolute;
  bottom: -60px;
  border-radius: 100px;
  margin-left: 30px;
`;



export const ImgLarge = styled.img`
  background: ${props => props.theme.color.text};
  width: 100%;
  height: 580px;
  border-radius: 12px;
  object-fit: cover;
  `;



  export const ImgSmall = styled.img`
  background-color: ${props => props.theme.color.text};
  width: 100%;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
  `;



  export const BtSmall = styled.button`
  background-color: ${props => props.theme.color.primary};
  width: 100%;
  height: 174px;
  border-radius: 12px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  color:  ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  `;


  export const CardInfo = styled.div`
    border: 2px solid  ${props => props.theme.color.border};
    padding: 12px;
    border-radius: 10px;
    width: 350px;
    `;
  

  export const CardInfoT = styled.div`
    border: none;
    background: ${props => props.theme.color.primary};
    padding: 12px;
    border-radius: 10px;
    width: 350px;
  
    `;



export const Button = styled.button`
  border-width: 2px;
  border-color: #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
`;


export const Like = styled.button`
  border-width: 2px;
  border-color: #00000020;
  color: #00000080;
  border-radius: 100px;
  width: 46px;
  height: 46px;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
  cursor: pointer;
`;


export const BtAction = styled.button`
  border-width: 2px;
  border-color: #00000020;
  color: #00000080;
  border-radius: 100px;
  width: 46px;
  height: 46px;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
  cursor: pointer;
`;


export const Spacing = styled.div`
  width: 14px;
  height: 20px;
`





export const ButtonLabel = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  font-family: Font_Medium, sans-serif;
`;


export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;

`




export const TitleModal = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`;



export const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.color.title};
  margin-left: 10px;
  margin-top: 6px;
  font-family: ${props => props.theme.font.bold};
`;


export const Code = styled.span`
  font-size: 20px;
  color: ${props => props.theme.color.light};
  border-radius: 30px; 
  justify-content: center;
  width: 100px;
  height: 28px;
  text-align: center;
  margin-top: 0px;
  padding-top: 5px;
  margin-bottom: 10px;
  margin-right: 8px;
  font-family: ${props => props.theme.font.book};
  background-color: ${props => props.theme.color.primary};
`;


export const Hr = styled.div`
  height: 2px;
  background-color: #00000020;
  margin-right: -12px;
  margin-left: -12px;
`


export const Value = styled.div`
  border-radius: 8px;
  border: 2px solid #00000020;
  padding: 16px;
  margin: 12px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

`




export const Tax = styled.div`
  padding: 10px;
  padding-bottom: 0px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: #FCA07960;
  border: 2px dashed #FCA079;
  transition: linear .2s;
`

export const TaxLabel = styled.span`
  font-size: 22px;
  margin-bottom: -10px;
  margin-left: 10px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const TaxLi = styled.li`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
`;




export const Infra = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
border-radius: 8px;
background: ${props => props.theme.color.off};
transition: linear .2s;
padding-right: 30px;
width: 100%;
margin-right: 20px;
`



export const Conservation = styled.div`
  flex-direction: column;
  display: flex;
  padding: 10px 20px;
  border-radius: 8px;
  justify-content: center;
  width: 100%;
  background: ${props => props.theme.color.green}20;
`

export const AnyTitle = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`

export const BarOn = styled.div`
  width: 74px;
  height: 14px;
  border-radius: 100px;
  margin: 0px 5px;
  background: ${props => props.theme.color.green};
`


export const BarOff = styled.div`
  width: 74px;
  height: 14px;
  border-radius: 100px;
  margin: 0px 5px;
  background: ${props => props.theme.color.green}30;
`




export const InfraLi = styled.span`
  font-size: 22px;
  padding-right: 8px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;

export const InfraLabel = styled.span`
  font-size: 22px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const ValueLabel = styled.span`
  font-size: 20px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;




export const ValueTitle = styled.span`
  font-size: 42px;
  margin: 0px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`;


export const Sublabel = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title}99;
  font-family: ${props => props.theme.font.book};
`;




export const Address = styled.button`
  font-size: 22px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;


export const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

`

export const Left = styled.div`
  margin-right: 10px;
  width: 70%;
`


export const Right = styled.div`
  margin-left: 10px;
  border-radius: 12px;
  width: 30%;

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
  margin-right: 50px;
`;

export const Profile = styled.div`
  display: flex;
  padding: 20px;
  border: 2px solid #00000020;
  border-radius: 8px;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 100px;
`

export const ProfileTitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`


export const ProfileAddress = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`

export const ProfileDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  margin-top: 16px;
`




export const ItemBt = styled.button`
  font-size: 20px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.medium};
  cursor: pointer;
  border: none;
  background: ${props => props.theme.color.primary}40;
  text-align: center;
  border-radius: 6px;
  padding: 8px 16px;
`;




export const Alert = styled.span`
  font-size: 18px;
  color: #00000080;
  font-family: ${props => props.theme.font.book};
`





export const BtBuy = styled.button`
  font-size: 22px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  cursor: pointer;
  border: none;
  background: ${props => props.theme.color.primary};;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const LineV = styled.div`
  height: 56px;
  width: 2px;
  background: #fff;
`



export const ContactBt = styled.button`
  font-size: 24px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.medium};
  cursor: pointer;
  border: none;
  background: ${props => props.theme.color.light};
  text-align: center;
  border-radius: 6px;
  padding: 12px 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;


export const QuickPoup = styled.div`
  padding: 12px 10px;
  border-radius: 8px;
  background: ${props => props.theme.color.background};
  position: fixed;
  bottom: 110px;
  right: 88px;
  width: 300px;
  border: 2px solid ${props => props.theme.color.border};
  transition: linear .4s;
`

export const QuickNext = styled.div`
  width: 72px;
  height: 72px; 
  border-radius: 90px;
  color: #fff;
  font-size: 32px;
  background: ${props => props.theme.color.green};
  position: fixed;
  bottom: 30px;
  right: 88px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: linear .4s;
  cursor: pointer;
`
export const QuickTour = styled.img`
  width: 134px;
  height: 200px;
  border-radius: 12px;
  background: #fff;
  border: 4px solid #fff;
  object-fit: cover;
  position: fixed;
  bottom: 30px;
  right: 80px;
  `

  
export const PopularBt = styled.button`
border-radius: 90px;
background: ${props => props.theme.color.secundary};
color: #fff;
font-family: ${props => props.theme.font.medium};
text-align: center;
font-size: 18px;
border: none;
padding: 8px 14px;
justify-content: center;
transition: linear .4s;
cursor: pointer;
margin-left: 30px;
`


export const Lista = styled.div`
  flex-direction: row;
  margin-bottom: 12px;
  display: flex;
  
`
export const Ball = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 12px;
  margin-left: 12px;
  align-self: center;
  background: ${props => props.theme.color.label};
`


export const ListaLabel = styled.span`
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  color: ${props => props.theme.color.label};
  margin-left: 10px;
  align-self: center;
  
`;



export const InfraBall = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 52px;
  margin-right: 10px;
  align-self: center;
  text-align: center;
  justify-content: center;
  background: ${props => props.theme.color.primary};
`
