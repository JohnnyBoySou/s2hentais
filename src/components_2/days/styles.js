import styled from 'styled-components/native';
export const Calendar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 20px;
`


export const DayOn = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: ${props => props.theme.color.primary};

`

export const Day = styled.View`
  flex-direction: column;
`

export const DayOff = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #D9D9D9;
`

export const DayOnLabel = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  font-family: ${props => props.theme.font.medium};
`


export const DayOffLabel = styled.Text`
  color: #D9D9D9;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  font-family: ${props => props.theme.font.book};
`
