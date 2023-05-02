import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  flex-direction: row;
  display: flex;
    border: 2px solid #00000020;
    padding: 0px;
    border-radius: 12px;
    justify-content: space-between;
`;



export const Route = styled.span`
  font-size: 16px;
  margin-top: -2px;
  margin-right: 5px;
  margin-left: 10px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
`;


export const Routes = styled.span`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-left: 10px;
  margin-top: 10px;
`;


export const Spacing = styled.div`
  width: 30px;
  height: 16px;
`;



export const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
  
  margin: 0px;
  margin-bottom: -10px;
`;


export const Subtitle = styled.h2`
  font-size: 18px;
  color: ${props => props.theme.color.title}50;
  font-family: ${props => props.theme.font.book};
  letter-spacing: 2px;
  margin: 0px;
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


export const Separetor = styled.div`
  
  height: 2px;
  margin: 20px 20px 0px 0px;
  background: ${props => props.theme.color.border};
`


export const Left = styled.div`
  width: 30%;
  background: #142064;
  margin: -10px 0px 0px -10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: -10px;

`

export const Right = styled.div`
  width: 70%;
  background: ${props => props.theme.color.light};
`

export const View = styled.div`
`

export const Error = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.red};
  font-family: ${props => props.theme.font.book};
`;


export const Label = styled.label`
  font-size: 22px;
  margin-top: 10px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;

export const Input = styled.input `
  font-size: 20px;
  margin: 8px 0px;
  border-radius: 6px; 
  border: 2px solid ${props => props.theme.title === 'dark' ? 'transparent' : props.theme.color.border};  
  background: ${props => props.theme.color.off2};
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



export const Stepper = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`


export const Step = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 6px; 
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: -20px;
  transition: linear .2s;
  `;

export const StepLine = styled.div`
 display: flex;
 flex-direction: row; 
`

export const StepLabel = styled.span`
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.bold};
  font-size: 20px;
  padding-top: 6px;
  text-align: center;
`

export const StepTitle = styled.span`
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
  font-size: 24px;
  margin-left: 15px;
  margin-top: 6px;
`


export const Arrow = styled.span`
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.medium};
  font-size: 18px;
  margin-left: 15px;
  margin-top: 12px;
`

export const StepIcon = styled.div`
  width: 38px;
  height: 38px;
  font-family: ${props => props.theme.font.medium};
  background: ${props => props.on ? "#ED274A" : "#33333350" }; 
  border-radius: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  color: #fff;
  font-size: 32px;
  transition: linear .2s;
  &:hover{
    transform: scale(1.02)
  }
`


export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px 0px 0px;
`

export const Select = styled.select`
  width: 100%;
  padding: 4px 8px;
  color: ${props => props.theme.color.title};
  font-size: 18px;
  border: 2px solid #00000020;
  border-radius: 6px;
  margin: 10px 0px;
  font-family: ${props => props.theme.font.book};
  height: 40px;
  option {
    color: ${props => props.theme.color.title};
    background: ${props => props.theme.color.off};
    display: flex;
    font-size: 16px;
    padding: 4px 8px;
    font-family: ${props => props.theme.font.medium};
  }
`;


export const FirstStep = styled.div`
  display: flex;
  flex-direction: row;

`
export const SecondStep = styled.div`
  display: flex;
  flex-direction: row;
`

export const ThreeStep = styled.div`
  display: flex;
  flex-direction: column;
`

export const FourStep = styled.div`
  display: flex;
  flex-direction: row;

`


export const FiveStep = styled.div`
  display: flex;
  flex-direction: row;

`
export const ProgressBar = styled.div`
  width: 101.3%;
  height: 24px;
  margin: -10px -10px 0px -10px;
  background: ${props => props.theme.color.primary};
`

export const Upload = styled.div`
  width: 600px;
  align-self: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: auto;
  border-radius: 12px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 3px dashed #00000020;
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
  margin-top: -20px;
  color: ${props => props.theme.color.title};
 
`

export const Impulsionar = styled.div`

  width: 600px;
  align-self: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: auto;
  border-radius: 12px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  background:  ${props => props.theme.color.primary};
`

export const CircleIcon = styled.div`
  width: 104px;
  border-radius: 100px;
  align-self: center;
  justify-content: center;
  font-size: 62px;
  height: 104px;
  border: 10px solid  ${props => props.theme.color.green};
  color: #fff;
  margin-bottom: 20px;
  background: ${props => props.theme.color.green};

`

export const ImpulsionarText = styled.span`
  font-family: ${props => props.theme.font.medium};
  font-size: 24px;
  text-align: center;
  color: ${props => props.theme.color.light};
`


export const ImpulsionarLabel = styled.span`
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.color.light}90;
`


export const Publish = styled.img`
  width: 350px;
  height: 320px;
  align-self: center;
  border-radius: 24px;
`


export const CardTitle = styled.span `
  font-size: 20px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
`;


export const CardLabel = styled.span `
  font-size: 16px;
  margin-top: 5px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
  margin-bottom: 12px;
`;



export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 0px;
  margin-bottom: 20px;
`
export const ImageUpload = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 6px;
`

export const InputImageUpload = styled.button`
  border: none;
  width: 120px;
  height: 104px;
  margin: 10px;
  background: ${props => props.theme.color.primary}20;
  border-radius: 12px;
  font-size: 32px;
  cursor: pointer;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.book};
`


export const ImgLabel = styled.span `
  font-size: 16px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};

`;


export const PublishBt = styled.button`
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 6px;
  display: flex;
  border: none;
  flex-direction: row;
  transition: .2s linear;
  &:hover{
    background: ${props => props.theme.color.primary}20;
    color: ${props => props.theme.color.primary};
      
  }
`

export const PublishBtIcon = styled.div`
  padding: 14px;
  margin-left: -5px;
  height: 28px;
  background: #00000020;
  justify-content: center;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`

export const PublishLabel = styled.span`
font-family: ${props => props.theme.font.medium};
font-size: 20px;
padding-top: 15px;
padding-left: 20px;
padding-right: 20px;
`

export const PublishType = styled.span`
font-family: ${props => props.theme.font.medium};
color: ${props => props.theme.color.primary};
letter-spacing: 4;
font-size: 16px;
padding-top: 10px;
text-transform: uppercase;
`

export const PublishTitle = styled.span`
font-family: ${props => props.theme.font.medium};
color: ${props => props.theme.color.title};

font-size: 24px;
padding-top: 4px;
`

export const PublishDescription = styled.span`
font-family: ${props => props.theme.font.book};
color: ${props => props.theme.color.label};
font-size: 18px;
padding-top: 10px;
margin-bottom: 20px;
`

export const PublishCard = styled.div`
  border: 2px solid #00000020;
  border-radius: 12px;
  margin: auto;
  margin-top: 10px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`


export const PublishImage = styled.img`
  width: 104%;
  margin: -8px;

  margin-bottom: 10px;
  height: 300px;
  border-radius: 12px;
`


export const TextArea = styled.textarea`
  font-size: 22px;
  margin: 8px 0px;
  border-radius: 6px;
  border: 2px solid #00000020;
  transition: .2s linear;
  resize: vertical;
  padding: 6px 8px;
  &:focus {
    outline: none; 
    box-shadow: 0px 0px 0px 3px ${props => props.theme.color.primary}60;
    border: 2px solid ${props => props.theme.color.primary};
  }
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};`



  
export const PublishTip = styled.div`
  color: ${props => props.theme.color.secundary};
  background:  ${props => props.theme.color.secundary}30;
  font-family: ${props => props.theme.font.book};
  padding: 10px 16px;
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  border-radius: 0px 8px 8px 0px;
  border-left: 4px solid  ${props => props.theme.color.secundary};
  margin-left: 20px;
`


export const PublishTipLabel = styled.span`
  color: ${props => props.theme.color.secundary};
  font-size: 16px;
  padding-top: 2px;
  font-family: ${props => props.theme.font.book};
`


export const PublishValue = styled.span`
  color: ${props => props.theme.color.light};
  background: ${props => props.theme.color.primary};
  font-size: 18px;
  border-radius: 6px;
  text-align: center;
  padding: 8px 12px;
  margin: auto;
  font-family: ${props => props.theme.font.medium};
`
