import styled from 'styled-components';

export const Container = styled.div `
    background: ${props => props.theme.background};
    flex-direction: row;
    display: flex;
    border: 2px solid #00000020;
    padding: 0px;
    border-radius: 12px;
    justify-content: space-between;
`;



export const Upload = styled.div`
  width: 90%;
  align-self: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: auto;
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 3px dashed #00000020;
`

export const UploadSide = styled.div`
  width: 40%;
  margin-top: 20px;
  padding-left: 30px;
`

export const UploadText = styled.span`
  font-family: ${props => props.theme.font.book};
  font-size: 24px;
  text-align: center;
  color: ${props => props.theme.color.label};
`

export const UploadLabel = styled.span`
  font-family: ${props => props.theme.font.book};
  font-size: 24px;
  align-self: center;
  text-align: center;
  margin-top: 0px;
  color: ${props => props.theme.color.title};
 
`

export const ImageUpload = styled.img `
    width: 100px;
    height: 100px;
    border-radius: 6px;
    margin-top: 5px;
    border: 2px solid ${props => props.theme.color.primary};
`
export const ImageClose = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 4px;
  cursor: pointer;
  font-size: 22px;
  background: ${props => props.theme.color.red};
  border-radius: 100px;
  color: ${props => props.theme.color.light};
  transition: .2s linear;
  z-index: 999;
  &:hover{
    color: ${props => props.theme.color.light};
    background: ${props => props.theme.color.black};
  }
`

export const InputImageUpload = styled.button `
    border: none;
    
    background: ${props => props.theme.color.primary}20;
    border-radius: 12px;
    width: 130px;
    height: 130px;
    font-size: 32px;
    cursor: pointer;
    color: ${props => props.theme.color.title};
    font-family: ${props => props.theme.font.book};
`


export const ImgLabel = styled.span `
    font-size: 16px;
    color: ${props => props.theme.color.title};
    font-family: ${props => props.theme.font.medium};
    margin-top: 5px;
`;


export const View = styled.div`
`


export const Tag = styled.button`
    border: none;
    background: none;
    padding: 8px 12px;
    border-radius:6px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: ${props => props.theme.color.light};
    font-family: ${props => props.theme.font.medium};
`


export const UpBt = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  `