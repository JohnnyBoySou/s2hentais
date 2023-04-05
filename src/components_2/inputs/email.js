
import React from 'react';
import { Input } from './styles';

const EmailInput = ({ value, onChange, onBlur  }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  }


  
  const handleBlur = () => {
    const atIndex = value.indexOf('@');
    const dotIndex = value.lastIndexOf('.');
    const length = value.length;
    if (atIndex < 0 || dotIndex < atIndex + 1 || length < dotIndex + 2) {
      onChange('');
    } 
    onBlur();
  }

  return (
    <Input
      type="email"
      value={value}
      placeholder='Ex: email@comercial.com'
      onChange={handleChange}
     // onBlur={handleBlur}
    />
  );
};

export default EmailInput;