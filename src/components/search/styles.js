import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  align-items: center;
  border: 2px solid #00000020;
  border-radius: 8px;
  width: 380px;

`;

export const Input = styled.input`
  border: none;
  justify-content: center;
  padding: 4px;
  font-size: 18px;
  box-sizing: border-box;
  font-family: ${props => props.theme.font.book};
  color: ${props => props.theme.color.title};

  width: 100%;
  background-color: #FFFFFF;
`;


export const Bt = styled.button`
  border: none;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  width: 52px;
  height: 34px;
  padding: 0px;
  cursor: pointer;
  background: ${props => props.focus ? "white" : "#5B72F2"};
`


export const Complement = styled.div`
  position: absolute;
  background: #F7F7F7;
  padding: 0px;
  width: 380px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 6px 6px;
  z-index: -99;
`

export const BtLabel = styled.button`
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
  `



  export const SideBar = styled.div`
    background:#ECF4FA;
    padding: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 0px 0px 6px 6px;

`


export const BtBar = styled.button`
  border: none;
  cursor: pointer;
  margin-bottom: 12px;
  width: 100%;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 24px;
  text-align: left;
  transition: linear .2s;
  color: ${props => props.activity ? "#FFFFFF" : "#072942"};
  font-family: ${props => props.theme.font.book};
  background: ${props => props.activity ? "#5B72F2" : "#ECF4FA"};
   `


   export const Sublabel = styled.span`
   color: ${props => props.theme.color.label};
   font-size: 16px;
   letter-spacing: 3px;
   margin-bottom: 10px;
  font-family: ${props => props.theme.font.medium};

   `

   export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color:${props => props.theme.color.label}30;
   `