import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  align-items: center;
  justify-content: space-between;
  padding: 12px 80px;
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
  font-family: ${props => props.theme.font.bold};
`;




export const Sublabel = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color.title}99;
  font-family: ${props => props.theme.font.book};
`;


export const Location = styled.div`
    flexDirection: row;
`

export const Local = styled.div`
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`

export const Preferences = styled.div`
    border: 2px solid #00000020;
    border-radius: 12px;
    padding: 12px 20px;
    margin-bottom: 16px;
`

export const Type = styled.div`
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`


export const Amount = styled.div`   
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`

export const About = styled.div`   
    padding: 12px 20px;
    justify-content: center;
    align-content: center;
    margin-top: 16px;
`


export const Input = styled.input`
  border: none;
  border-bottom: 3px solid ${props => props.theme.color.primary};
  
  border-radius: 0px;
  justify-content: center;
  padding: 4px;
  background: #fff;
  font-size: 26px;
  box-sizing: border-box;
  font-family: ${props => props.theme.font.medium};
  color: ${props => props.theme.color.title};
  margin-bottom: 20px;
  width: 100%;
  margin-top: 5px; 
`;



export const Collections = styled.div`
  background: ${props => props.theme.background};
  align-items: center;
  justify-content: space-between;
  padding: 12px 80px;

`


export const CollectionsRow = styled.div`
  background: ${props => props.theme.background};
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`


export const CollectionsCard = styled.div`
  background: ${props => props.color};
  justify-content: space-between;
  padding: 20px 20px;
  border-radius: 8px;
  flex-grow: 1;
  width: 50%;
  margin-right: 20px;
  width: 300px;

`


export const CollectionsTitle = styled.span`
  font-size: 54px;
  line-height: 50px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.bold};
`;


export const CollSpacing = styled.div`
  height: 200px;
  width: 40px;
`
