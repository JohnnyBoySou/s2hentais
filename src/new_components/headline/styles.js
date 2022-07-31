import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  align-items: center;
  justify-content: space-between;
  padding: 12px 80px;
  flex-direction: row;
  display: flex;
`;

export const Main = styled.div`
  padding: 30px;
  padding-top: 0px;
  flex-direction: row;
  display: flex;
`





export const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.color.title};
  margin: 0px;
  font-family: ${props => props.theme.font.bold};
`;

export const Left = styled.div`
  width: 40%;
  display: flex;
  height: 600px;
  justify-content: center;
  flex-direction: column;
`

export const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

export const Rectangle = styled.div`
  background:  ${props => props.theme.color.primary};
  width: 700px;
  height: 500px;
  position: absolute;
  border-radius: 12px;
  margin-left: 80px;
  margin-top: 60px;
 
`

export const Image = styled.img`
  width: 600px; 
  height: 500px;
  border-radius: 8px;
  object-fit: cover;
  position: absolute;
  z-index: 99;
  margin-top: 0px;
`
export const Items = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 30px;
`

export const Item = styled.div`
  width: 150px;
  border-radius: 6px;
  padding: 6px 12px;
  text-align: center;
  font-size: 24px;
  margin-right: 20px;
  color:${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.medium};
  background: ${props => props.theme.color.primary}30;
`


export const Subtitle = styled.span`
  
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.bold};
`;


export const Sublabel = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title}99;
  font-family: ${props => props.theme.font.book};
`;




export const Subheadline = styled.span`
  color:${props => props.theme.color.label};
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;



export const Spacing = styled.div`
  width: 20px;
  height: 10px;
`

export const Spacing1 = styled.div`
  width: 0px;
  height: 00px;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #00000020;
  border-radius: 6px;
`
