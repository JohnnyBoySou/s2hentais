import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../utils/useTheme';

const Button = styled.button`   
  width: 44px;
    height: 44px;
    text-align: center;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    justify-content: center;
    background:  ${props => props.theme.color.primary}20;
    color:  ${props => props.theme.color.primary};
  padding: 12px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.1s ease-in-out;

  &.clicked {
    transform: scale(0.95);
  }
`;

const ToggleThemeButton = () => {
    const {theme, toggleTheme} = useTheme()  
    const [clicked, setClicked] = React.useState(false);
  const handleClick = () => { 
    setClicked(true);
    toggleTheme();
    setTimeout(() => {
      setClicked(false)
      window.location.reload();
    }, 500);
    }
  return (
    <Button onClick={handleClick}
      className={clicked ? 'clicked' : ''}>
      {theme === 'light' ? <FiSun /> : <FiMoon />}
    </Button>
  );
};

export default ToggleThemeButton;
