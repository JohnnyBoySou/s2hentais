import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  flex-direction: column;
  display: flex;
  width: 460px;
    border: 2px solid #00000020;
    padding: 12px 0px;
    border-radius: 12px;
`;



export const Spacing = styled.div`
  width: 30px;
  height: 16px;
`;



export const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
  
  margin: 0px;
`;



export const Label = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
`;

export const Hr = styled.div`
  height: 2px;
  background-color: #00000020;
`

export const Tag = styled.span`
  font-size: 18px;
  padding: 10px 26px;
  border-radius: 40px;
  margin: 6px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.medium};
  background: ${props => props.theme.color.primary}20;
`;



export const Cords = styled.span`
  font-size: 18px;
  padding: 10px 22px;
  border-radius: 40px;
  height: 26px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
  background: ${props => props.theme.color.light};
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 24px;
`

export const City = styled.div`
    display: flex;
    flex-direction: row;
    padding: 18px 22px;
    transition: linear .2s;
    justify-content: space-between;
    &:hover{
        background:  ${props => props.theme.color.off};
    }
`


export const CityTitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
  margin: 0px;
`;



export const CityLabel = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;


export const CityImoveis = styled.span`
  font-size: 28px;
  color: ${props => props.theme.color.primary};
  background: ${props => props.theme.color.off};
  font-family: ${props => props.theme.font.medium};
  margin: 0px;
  border-radius: 12px;
  padding: 12px;
`;

