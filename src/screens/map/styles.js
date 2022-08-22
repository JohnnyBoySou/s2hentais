import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;







export const Button = styled.button`
  border-width: 2px;
  border-color: #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
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



export const Title = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
`;



export const QtdText = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
`;




export const Sublabel = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title}99;
  font-family: ${props => props.theme.font.book};
`;



export const Left =  styled.div`
  width: 40%;
  padding: 20px;
  overflow: auto;
  transition: linear .2s;
  

  }
  `
export const Right = styled.div`
  width: 60%;
  margin-right: -8px;
  background:  ${props => props.theme.color.primary}; 
  border-radius: 12px;
  overflow-y: hidden;
`


export const Mapa = styled.div` 
border-radius: 12px;
width: 100%;
margin-right: 0px;
`

export const UserLocation = styled.button`
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 6px;
  justify-content: center;
  text-align: center;
  position: absolute;
  bottom: 0px;
  color: #fff;
  font-size: 24px;
  right: 30px;
  background:  ${props => props.theme.color.primary};
`



export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  background: ${props => props.theme.background};
  position: -webkit-sticky;
  position: sticky;
  top: -12px;
  margin-top: 0px;
  z-index: 99;
  border-radius: 0px 0px 6px 6px;
`


export const Input = styled.input`
  border: none;
  justify-content: center;
  padding: 6px 8px;
  font-size: 24px;
  box-sizing: border-box;
  font-family: ${props => props.theme.font.book};
  color: ${props => props.theme.color.title};
  width: 100%;
  border: 2px solid #00000040;
  border-radius: 6px;
  transition: linear .1s;
  &:focus {
    border: 3px solid #5B72F2;
    outline: none;
}
`;


export const Bt = styled.button`
  border: none;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  padding: 14px 16px;
  cursor: pointer;
  margin-left: 10px;
  background: ${props => props.focus ? "white" : "#5B72F2"};
`


export const Logo = styled.img`
  width: 200px;
  object-fit: cover;
  margin-bottom: -20px;
  margin-left: -10px;
  margin-top: 20px;
  cursor: pointer;
  
`



export const Route = styled.span`
  font-size: 16px;
  margin-top: -2px;
  margin-right: 5px;
  margin-left: 10px;
  cursor: pointer;
   color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
`;


export const Routes = styled.span`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-right: 50px;
`;
