
import styled from 'styled-components';

export const Button = styled.button`
  background: #F1F3FF;
  border-radius: 6px;
  align-content: center;
  height: 44px;
  justify-content: center;
  padding: 12px;
  border: none;
`

export const Image = styled.img`
  height: 28px;
  width: 28px;
  margin-top: -5px;
`

export const Label = styled.span`
  color: ${props => props.theme.color.primary};
  font-size: 18px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.medium};
`

export const View = styled.div``
