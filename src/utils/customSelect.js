import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const CustomSelectStyles = () => {
  const { color, font } = useContext(ThemeContext);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontFamily: font.medium,
        
    }),
    control: () => ({
      border: `2px solid ${color.border}`,
      display: 'flex',
      color: color.title,
      minWidth: 180,
      borderRadius: 5,  
      fontFamily: font.medium,
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 10,
      background: color.off,
    }),
    indicatorSeparator: () => ({
      width: 0,
      display: 'none'
    }),
    dropdownIndicator : () => ({
      color: color.title,
      marginRight: 5,
      marginLeft: -5,
    }),
    menu: () => ({
      color: color.title,
      background: color.background,
    })
  };

  return customStyles;
}