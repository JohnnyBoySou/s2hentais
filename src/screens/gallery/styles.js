import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.color.header};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  z-index: 999;
`;



export const Button = styled.button`
  border-width: 2px;
  border-color: #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
`;



export const BtLocation = styled.button`
  border: none;
  justify-content: center;
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  transition: linear .2s;
  height: 44px;
  font-size: 16px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
  margin-top: 8px;
  &:hover {
    background:  ${props => props.theme.color.off};
  }
`;



export const ButtonLabel = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  font-family: Font_Medium, sans-serif;
`;



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
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;
  font-family: ${props => props.theme.font.bold};
`;




export const BtPrefe = styled.button`
  border-width: 2px;
  border-color: #00000020;
  border-radius: 10px;
  justify-content: center;
  padding: 20px;
  background: ${props => props.theme.background};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const BtLabel = styled.span`
  font-size: 18px;
  color:  ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};

`

export const BtTitle = styled.span`
  font-size: 28px;
  margin-top: 2px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`


export const Main = styled.div`
  padding: 0px 30px;

`

export const DarkMode = styled.div`
  font-size: 18px;
  justify-content: center;
  align-content: center;
  padding-top: 34px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
`





export const BtPolitica = styled.button`
  border: 2px solid #00000020;
  border-radius: 6px;
  justify-content: center;
  padding: 8px 12px;
  background: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
`;


export const BtDelete = styled.button`
  border:none;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 6px;
  background: ${props => props.activity ? "#333" : "red"};
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
  color: #fff;
`;



export const Left = styled.div`
    width: 25%;
    padding-right: 20px;
`

export const Right = styled.div`
    width: 76%;
    `

export const ImgLarge = styled.img`
  background: #00000020;
  border-radius: 12px;
  width: 100%;
  object-fit: cover;
  transition: linear .2s;
  height: 620px;
  &:hover {
   
  }
`

export const ImgSmall = styled.img`
  background: #00000020;
  border-radius: 12px;
  width:90%;
  align-self: center;
  height: 200px;
  transition: linear .2s;
  margin: 0px 10px 20px 10px;

  &:hover {
    transform: scale(1.05);
  }
`

export const Column = styled.div`
  flex-direction: column;
  height: 620px;
  overflow: auto;
  justify-content: center;
  align-items: center; 
`


export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;
  position: absolute;
  bottom: 10px;
  right: 120px;

`


export const Next = styled.button`
  border: none;
  background: #000;
  color: #fff;
  border-radius: 30px;
  padding: 8px 20px;
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
  margin-left: 16px;
`


export const Previus = styled.button`
  border: none;
  border-radius: 30px;
  padding: 8px 20px;
  background: #000;
  color: #fff;
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
`