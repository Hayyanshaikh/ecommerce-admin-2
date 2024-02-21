import React, { useState, useRef, useEffect } from 'react';
import * as Icons from "react-icons/tb";

const SelectOption = ({ options, placeholder, className, selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedValue || '');
  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedValue && !options.some(option => option.value === selectedValue)) {
      setSelectedOption('');
    }
  }, [selectedValue, options]);

  return (
    <div className={`select ${className ? className : ''}`} ref={selectRef}>
      <div className={`select-trigger ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        {selectedOption ? selectedOption : placeholder}
        <Icons.TbChevronDown />
      </div>
      <div className={`options ${isOpen ? 'open' : ''}`}>
        {options.map((option) => (
          <div
            className={`option ${selectedOption === option.value ? 'selected' : ''}`}
            key={option.value}
            onClick={() => handleOptionClick(option.label)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
