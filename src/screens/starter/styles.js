import styled from 'styled-components';

export const Container = styled.div `
  background: ${props => props.theme.background};
  padding: 0px 0px;
  flex-direction: column;
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


export const Nav = styled.nav`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  padding-right: 70px;
  padding-left: 70px;
  padding-top:15px;
  `


export const NavBt = styled.button`
  font-size: 20px;
  border: none;
  padding: 10px;
  margin: 10px 20px;
  cursor: pointer;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color.label};
  margin-top: 10px;
  font-family: ${props => props.theme.font.book};
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


export const BigImg = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 40px;
  height: 560px;
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
  height: 200px;
  background: #00000020;
`




export const ResourceTitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  margin-bottom: 10px;
  font-family: ${props => props.theme.font.medium};
`;



export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  margin: auto;
  background: ${props => props.theme.color.title};
  justify-content: center;
`
