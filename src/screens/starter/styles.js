import styled from 'styled-components';

export const Container = styled.div `
  background: ${props => props.theme.background};
  padding: 0px 0px;
  flex-direction: column;
  display: flex;
  margin: -8px;
  padding-top: 80px;
`;

export const View = styled.div `

`


export const Row = styled.div `
  background: ${props => props.theme.background};
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;





export const Title = styled.span `
  font-size: 24px;
  color: ${props => props.theme.color.primary};
  text-align: center;
  font-family: ${props => props.theme.font.bold};
`;



export const HeadTitle = styled.span `
  font-size: 42px;
  color: ${props => props.theme.color.title};
  text-align: center;
  font-family: ${props => props.theme.font.book};
`;



export const Label = styled.span`
  font-size: 20px;
  color: ${props => props.theme.color.label};
  margin-top: 10px;
  font-family: ${props => props.theme.font.book};
`;


export const HeadLabel = styled.span`
  font-size: 20px;
  color: ${props => props.theme.color.label};
  margin-top: 10px;
  width: 600px;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
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


export const Nav = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  position: fixed;
  padding-top: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme.color.background}70;
  backdrop-filter: blur(10px);
  z-index: 9999;
  `


export const NavBt = styled.button`
  font-size: 20px;
  border: none;
  padding: 10px;
  margin: 10px 20px;
  background: none;
  color: ${props => props.theme.color.label};
  margin-top: 10px;
  font-family: ${props => props.theme.font.book};
  position: relative;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    background-color: ${props => props.theme.color.primary};
    transition: all 0.3s ease-in-out;
  }

  &::before {left: 50%;}
  &::after {right: 50%;}
  &:hover::before {left: 0;width: 50%;}
  &:hover::after {
    right: 0;
    width: 50%;
  }
`;

export const LogoX1 = styled.img`
  width: 45px;
  height: 45px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${props => props.theme.color.background};
`



export const BtStart = styled.button`
  font-size: 20px;
  border: none;
  padding: 10px;
  margin: 10px 20px;
  border-radius: 6px;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.light};
  margin-top: 10px;
  transition: .2s linear;
  cursor: pointer;
  font-family: ${props => props.theme.font.book};
  &:hover{
    background: ${props => props.theme.color.primary}40;
  color: ${props => props.theme.color.primary};
  }
`;


export const BigImg = styled.img`
  width: 90%;
  margin: auto;
  margin-top: 40px;
  border-radius: 12px;
  background: #00000020;
`


export const Resources = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 80%;
  margin: auto;
  justify-content: center;
`


export const ResourceBt = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

export const Line = styled.div`
  width: 2px;
  height: 170px;
  background: #00000020;
`




export const ResourceTitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  margin-bottom: 0px;
  font-family: ${props => props.theme.font.medium};
`;



export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  margin-bottom: 40px;
  border-radius: 12px;
  background: ${props => props.theme.color.primary};
  justify-content: center;
`


export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  border-radius: 12px;
  background: ${props => props.theme.color.off};
  padding: 40px 80px;
  justify-content: space-between;
`


export const Link = styled.a `
  font-size: 16px;
  text-decoration: none;
  margin-top: 10px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;




export const TitleLink = styled.a `
  font-size: 22px;
  text-decoration: none;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const Tips = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  margin-bottom: 30px;
  background: ${props => props.theme.color.background};
  width: 80%;
  padding: 40px 80px 0px 80px;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.color.border};
`

export const TipsImg = styled.img`
  width: 600px;
  height: 550px;
  margin: auto;
  margin-bottom: -4px;
`




export const Planos = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 0px;
  width: 80%;
  margin-bottom: 40px;
  border-radius: 12px;
  justify-content: space-between;
`
