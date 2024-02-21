import React, { useState } from 'react';

const CheckBox = ({ label, checked, onChange,className, id }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <label className={`checkbox ${className ? className : ''}`}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
