import styled from "styled-components";


export const Input = styled.input `
  font-size: 16px;
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