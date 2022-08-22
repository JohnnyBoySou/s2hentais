import styled from 'styled-components';

export const Bt = styled.div`
  justify-content: center;
  border-radius: 12px;
  flex-direction: row;
  display: flex;
  `
export const Img = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  object-fit: cover;
  align-self: center;
  text-align: center;
  z-index: 99;
  margin: auto;
  border: 4px solid #fff;
  transition: linear .2s;
  &:hover{
    transform: scale(1.1)
  }
`

export const Popup = styled.div`
  background: #fff;
  border-radius: 8px;
  
  transition: linear .2s;
  flex-direction: row;
  display: flex;
  margin-left: -20px;
  padding-left: 30px;
  height: 80px;
  `


export const Label = styled.span`    
  font-family: 'Font_Bold';
  color: #5B72F2;
  font-size: 32px;
  margin-top: 10px;
  `

  
export const Title = styled.span`    
font-family: 'Font_Book';
color: #00000090;
font-size: 18px;
margin-top: 12px;
`


  
export const Arrow = styled.span`
  background: #5B72F2;
  padding: 5px;
  border-radius: 10px;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  text-align: center;
  width:34px;
  height: 34px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 18px;
  cursor: pointer;
`  


export const Radius = styled.div`
  width: 120px;
  height: 120px;
  top: -20px;
  border-radius: 100px;
  background: #5B72F240;
  border: 3px solid #5B72F2;
  position: absolute;
`