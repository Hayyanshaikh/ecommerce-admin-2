import React, { useState, useEffect } from 'react';

const Textarea = ({ placeholder, className, value, onChange }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(value || '');
  }, [value]);

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    setText(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`input_field ${className ? className : ''}`}>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
