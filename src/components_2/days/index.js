
import React, {useContext } from 'react';

import {  
  Day,
  DayOff,
  DayOffLabel,
  DayOn,
  DayOnLabel,
  Calendar
} from './styles';

import { ThemeContext } from 'styled-components/native';

export default function Days({ route, ...props }) {

  
  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)

  const preferences = props?.preferences;

return (<>
    <Calendar>
            <Day> 
              {preferences?.dias[0].final && <><DayOn/><DayOnLabel>D</DayOnLabel></>}
              {preferences?.dias[0].final == false && <><DayOff/><DayOffLabel>D</DayOffLabel></>}
            </Day>
            
            <Day> 
              {preferences?.dias[0].segunda && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
               {preferences?.dias[0].segunda == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].terca && <><DayOn/><DayOnLabel>T</DayOnLabel></>}
               {preferences?.dias[0].terca == false && <><DayOff/><DayOffLabel>T</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].quarta && <><DayOn/><DayOnLabel>Q</DayOnLabel></>}
               {preferences?.dias[0].quarta == false && <><DayOff/><DayOffLabel>Q</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].quinta && <><DayOn/><DayOnLabel>Q</DayOnLabel></>}
               {preferences?.dias[0].quinta == false && <><DayOff/><DayOffLabel>Q</DayOffLabel></>}
            </Day>

            <Day> 
              {preferences?.dias[0].sexta && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
               {preferences?.dias[0].sexta == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].final && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
              {preferences?.dias[0].final == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
          </Calendar>

    

      


    </>
    
  )
}