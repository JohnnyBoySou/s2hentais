import styled from 'styled-components';


export const LikeAs = styled.button`
  background: ${props => props.off ? "#5B72F2" : "#F1F3FF"};
  border-radius: 8px;
  align-content: center;
  width: 46px;
  height: 46px;
  margin-left: 10px;
  justify-content: center;
  z-index: 999;
  border: none;
`


export const LikeEs = styled.button`
  border-radius: 8px;
  align-content: center;
  width: 46px;
  height: 46px;
  margin-left: 0px;
  border: none;
  justify-content: center;
  z-index: 999;
`

