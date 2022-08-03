import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  justify-content: space-between;
  flex-direction: column;
  display: flex;
`;



export const Spacing = styled.div`
  width: 30px;
  height: 16px;
`;



export const Title = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.bold};
  
  margin: 0px;
`;



export const Label = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 2px solid #00000020;
  border-radius: 12px;
`;

export const Right = styled.div`
  width: 100%;
  height:360px;
  background: ${props => props.theme.color.off};
  border-radius: 12px;
  margin-right: 0px;
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


export const Map = styled.div`
height: 400px;
`

export const Cords = styled.span`
  font-size: 18px;
  padding: 10px 22px;
  border-radius: 40px;
  height: 26px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
  background: ${props => props.theme.color.light};
`;


export const ZoomIn = styled.button`
  font-size: 28px;
  display: flex;
  width: 38px;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 0px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  background: ${props => props.theme.color.title};
`;


export const ZoomOut = styled.button`
font-size: 28px;
display: flex;
width: 38px;
justify-content: center;
border-radius: 5px;
margin-bottom: 10px;
border: 0px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  background: ${props => props.theme.color.primary};
`;