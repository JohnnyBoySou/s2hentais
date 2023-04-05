
import React from 'react';
import { Input } from './styles';

const PhoneInput = ({ value, onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const newValue = value.replace(/\D/g, '').substring(0, 11);
    const maskedValue = newValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
    onChange(maskedValue);
  }

  return (
    <Input
      type="text"
      value={value}
      placeholder='Ex: DD 9 9999 9999'
      onChange={handleChange}
    />
  );
};

export default PhoneInput;