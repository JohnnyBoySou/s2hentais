import styled, { keyframes } from 'styled-components';

import back_create from '../../../assets/imgs/back_create.png';

import back_stats from '../../../assets/imgs/back_stats.png';

import most_like from '../../../assets/imgs/most_likes.png';

export const Container = styled.div `
  background: ${props => props.theme.background};
  padding: 0px 0px;
  flex-direction: row;
  display: flex;
`;

export const View = styled.div `

`


export const Row = styled.div `
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
  font-size: 28px;
  color: ${props => props.theme.color.title};
  margin-top: 10px;
  font-family: ${props => props.theme.font.medium};
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
    padding: 10px 20px 20px 20px;
    flex-grow: 1;
    border-radius: 12px;  
    background-image: url(${back_create});
    background-position: top-left;
    cursor: pointer;
     `

export const CardTitle = styled.span `
  font-size: 20px;
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


export const Icon = styled.span`
    font-size: 26px;
    margin-top: -2px;
    margin-right: 10px;
    color: ${props => props.theme.color.green};
`

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
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

export const Line = styled.div`
  height: 2px;
  width: 100%;
  background: #00000010;
`

export const Header  = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`


export const ThemeBt = styled.button`
  font-family: ${props => props.theme.font.book}; 
  color: ${props => props.on ? 'blue' : '#000000020'}; 
  font-size: 20px;
  background: none;
  transition: linear .2s;
  border-radius: 8px;
  padding: 10px 20px;
  width: 100%;
  border: ${props => props.on ? ' 2px solid blue' : '2px solid #00000020'};
  margin-bottom: -2px;
  cursor: pointer;
`



export const Main = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

`

export const Premium  = styled.span`
  font-size: 16px;
  color: ${props => props.theme.color.secundary};
  font-family: ${props => props.theme.font.medium};

`

export const Profile = styled.div`
  flex-direction: row;
  display: flex;
  border: 2px solid #00000010;
  border-radius: 8px;
  padding: 8px;
  margin: 0px 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100px;
  margin-left: 10px;
`

export const BtSettings = styled.button`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  font-size: 24px;
  padding-top: 6px;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  color: ${props => props.theme.color.primary};
  background: ${props => props.theme.color.primary}20;
  &:hover{
    
  background: ${props => props.theme.color.primary}40;
  }
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


export const InputSearch = styled.input `
  font-size: 17px;
  border-radius: 6px;
  border: 2px solid #00000020;
  height: 34px;
  transition: .2s linear;
  padding: 0px 6px;
  &:focus {
    outline: none; 
    box-shadow: 0px 0px 0px 3px ${props => props.theme.color.primary}60;
    border: 2px solid ${props => props.theme.color.primary};
  }
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`

export const ImgBt = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 2px solid ${({ isSelected }) => (isSelected ? 'blue' : 'transparent')};
  background-color: transparent;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
`;


export const ImgWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 12px;
  margin: 6px;
  height: 150px;
  object-fit: cover;
`

export const Spacing = styled.div`
  width: 20px;
  height: 10px;
`

export const SpacingX1 = styled.div`
  width: 10px;
  height: 10px;
`

export const Add = styled.div`
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  padding-top: 35px;
  background: ${props => props.theme.color.primary};
`

export const Banner = styled.div`
  width: 100%;    
  margin-bottom: 20px;
  background: ${props => props.theme.color.primary};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  `

export const Img = styled.img`
  width: 320px;
  height: 380px;
  margin-top: 45px;
`


export const ItemImg = styled.img`
  width: 140px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  `


export const ItemCard = styled.div`
    flex-direction: column;
    display: flex;
    border: 2px solid #00000010;
    padding: 10px 0px 10px 0px;
    border-radius: 12px;
    margin-right: 20px;
    width: 70%;
     `


export const ItemCard2 = styled.div`
    flex-direction: column;
    display: flex;
    padding: 20px;
    border-radius: 12px;
    flex-grow: 1;
    background-image: url(${back_stats});
    background-position: bottom-left;
    justify-content: center;
     `
     
export const ItemCard3 = styled.div`
    flex-direction: column;
    display: flex;
    padding: 20px;
    border-radius: 12px;
    flex-grow: 1;
    background-image: url(${most_like});
    background-position: right;
    justify-content: center;
     `

export const ItemLabel = styled.span`
     font-size: 18px;
     color: ${props => props.theme.color.label};
     font-family: ${props => props.theme.font.book};
 
 `

 
export const ItemTitle = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  position: relative;
  font-family: ${props => props.theme.font.medium};
  padding: 5px;
`
export const B = styled.span`
  font-family: ${props => props.theme.font.bold};

`

export const ViewCard = styled.div`
  border: 2px solid #00000010;
  padding: 6px;
  border-radius: 8px;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
  display: flex;
`



export const SpecialTitle = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  position: relative;
  font-family: ${props => props.theme.font.medium};
  padding: 5px;
`
export const SpecialView = styled.div`
  position: relative;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  
  ::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, #5B72F2, #FE7359);
    opacity: 0.5;
    z-index: -1;
    animation: ondular 2s ease-in-out infinite;
  }
  
`


export const NewImovel = styled.div`
  background: #ffffff30; 
  position: relative;
  align-self: center; 
  border-radius: 80px; 
  width: 80px; 
  height: 80px;
  transition: transform 0.2s ease-in-out;
  justify-content: center;
  flex-direction: column;
  display: flex;
  &:hover {
    transform: scale(1.2);
  }
`

export const BtAdd = styled.button`
  border: 2px solid #00000020;
  border-radius: 10px;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-top: 8px;
  margin-left: 10px;
  background: ${props => props.theme.color.light};
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor: pointer;
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
  margin-right: 50px;
`;


export const BtIcon = styled.button`
  border-radius: 10px;
  justify-content: center;
  border: none;
  width: 38px;
  padding-top: 5px;
  height: 38px;
  background: #5B72F230;
  color: #5B72F2;
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
  cursor: pointer;
  transition: .2s linear;
  &:hover{
    background: #5B72F2;
    color: #fff;
  }
  
`;



export const BtRow = styled.button`
  border-radius: 10px;
  justify-content: center;
  border: none;
  padding: 10px 20px;
  background: ${props => props.off ? "#d1d1d1" : "#5B72F2"};
  color:${props => props.off ? "#fff" : "#fff"};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-transform: uppercase;
  cursor:  ${props => props.off ? "default" : "pointer"};
  transition: .2s linear;
  &:hover{
    background: ${props => props.off ? "#d1d1d1" : "#5B72F220"};
    color:${props => props.off ? "#fff" : "#5B72F2"};
  }
  
   &:disabled {
    background: #FE7359;
    color: white;
    pointer-events: none;
  }
`;