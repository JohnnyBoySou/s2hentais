import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  flex-direction: row;
  display: flex;
    border: 2px solid #00000020;
    padding: 12px 20px;
    border-radius: 12px;
    justify-content: space-between;
`;



export const Spacing = styled.div`
  width: 30px;
  height: 16px;
`;



export const Title = styled.h2`
  font-size: 36px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
  
  margin: 0px;
  margin-bottom: -10px;
`;



export const Label = styled.span`
  font-size: 24px;
  margin: 20px 0px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;

export const Hr = styled.div`
  height: 2px;
  background-color: #00000020;
`

export const Line = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    justify-content: center;
`
