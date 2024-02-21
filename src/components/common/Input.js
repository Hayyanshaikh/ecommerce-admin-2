import React, { useState } from 'react';

const Input = ({ className, type, placeholder, value, onChange, icon, max }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }
  };

  return (
    <div className={`input_field ${className}`}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        min={0}
        max={max}
        onKeyDown={handleKeyDown}
      />
      {icon}
    </div>
  );
};

export default Input;
