import styled from 'styled-components';

export const Valor = styled.span`
  color: ${props => props.theme.color.light};
  font-size: 14px;
  text-align: center;
  padding: 8px 10px;
  font-family: ${props => props.theme.font.medium};
  

`


export const Chip = styled.div`
  align-self: flex-end;
  margin-right: 15px;
  justify-content: flex-start;
  margin-top: 15px;
  border-radius: 8px;
  background: ${props => props.theme.color.primary};
`











export const ID = styled.div`
  justify-content: center;
  align-self: center;
  border-radius: 30px;
  background: #FCA079;
`

export const IDLabel = styled.span`
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;



export const Description = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  width: 100%;
`


export const Title = styled.span`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.bold};
  width: 200px;
`;


export const Tag = styled.span`
  color: ${props => props.theme.color.primary};
  font-size: 14px;
  font-family: ${props => props.theme.font.medium};
  letter-spacing: 2px;
  span-transform: uppercase;
`;





export const ToastLabel = styled.span`
  color: ${props => props.theme.color.primary};
  font-size: 16px;
  span-aling: center;
  align-self: center;
  font-family: ${props => props.theme.font.medium};
`;

export const Spacing = styled.div`
  width: 6px;
  height: 10px;
`


export const Input = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`


export const InputButton = styled.button`
  border-radius: 8px;
  background: ${props => props.theme.color.primary};
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
`


export const InputTitle = styled.span`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`


export const InputLabel = styled.span`
  color: ${props => props.theme.color.label};
  font-size: 14px;
  font-family: ${props => props.theme.font.book};
`;



export const Div = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.color.off};

`


export const Ofertas = styled.span`
  color: #fff;
  font-size: 20px;
  text-align: center;
  background: ${props => props.theme.color.primary};
  border-radius: 8px;
  padding: 6px 14px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.bold};
`;



export const OfertaBlock = styled.span`
  

  
  color: #fff;
  font-size: 20px;
  text-align: center;
  background: ${props => props.theme.color.primary};
  border-radius: 8px;
  padding: 4px 12px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.bold};
`;


export const Address = styled.span`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
`;



export const Img = styled.img`
  width: 324px;
  height: 200px;
  border-radius: 8px;
  flex: 1;
  object-fit: cover;
  `


export const Icon = styled.img`
  width: 28px;
  height: 26px;
  align-self: center;
  margin: auto;
`


export const Toast = styled.button`
  border-radius: 4px;
  padding: 6px 8px;
  border: none;
  background: ${props => props.theme.color.primary}20;
  margin-left: 10px;
  justify-content: center;
`
