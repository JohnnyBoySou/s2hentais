import styled, { css , keyframes} from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.color.header};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  padding: 10px 35px;
  z-index: 999;
`;



export const Button = styled.button`
  border-width: 2px;
  border-color: #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
`;



export const BtLocation = styled.button`
  border: none;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  transition: linear .2s;
  height: 44px;
  font-size: 16px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
  margin-top: 8px;
  &:hover {
    background:  ${props => props.theme.color.off};
  }
`;



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


export const Spacing = styled.div`
  width: 16px;
  height: 16px;

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
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;
  font-family: ${props => props.theme.font.bold};
`;




export const BtPrefe = styled.button`
  border-width: 2px;
  border-color: #00000020;
  border-radius: 10px;
  justify-content: center;
  padding: 20px;
  background: ${props => props.theme.background};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const BtLabel = styled.span`
  font-size: 18px;
  color:  ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};

`

export const BtTitle = styled.span`
  font-size: 28px;
  margin-top: 2px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`


export const Main = styled.div`
  padding: 0px 30px;

`

export const DarkMode = styled.div`
  font-size: 18px;
  justify-content: center;
  align-content: center;
  padding-top: 34px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
`





export const BtPolitica = styled.button`
  border: 2px solid #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 8px 12px;
  background: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
`;


export const BtDelete = styled.button`
  border:none;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 6px;
  background: ${props => props.activity ? "#333" : "red"};
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
  color: #fff;
`;



export const Nav = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  
  position: fixed;
  align-self: center;
  padding-top: 10px;
  border-radius: 24px;
  width: 84px;
  left: 30px;
  border: 2px solid #d1d1d1;

  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  z-index: 9999;

  `

export const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const slideUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;
export const NavBt = styled.button`
  font-size: 26px;
  background:  ${props => props.theme.color.primary}00;;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  cursor: pointer;
  border: none;
  padding: 14px 16px 8px 16px;
  border-radius: 16px;
  margin-bottom: 12px;
  transition: color 0.3s ease-in-out;

  &:hover{
    color: ${props => props.theme.color.primary};
    background:  ${props => props.theme.color.primary}20;
  }
  
`;

export const LogoX1 = styled.img`
  width: 45px;
  height: 45px;
`