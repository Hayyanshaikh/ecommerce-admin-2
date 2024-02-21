import React, { useState } from "react";
import CheckBox from "./CheckBox.js";
const Table = ({ body, header, className, showCheck = false }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleHeaderCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    body.map(function(index, elem) {
      if (e === elem) {
        console.log(index);
      }
    })
  };

  const handleCheckboxItemChange = (index) => {
    body[index].isSelected = !body[index].isSelected;
  };

  return (
    <table className={`table ${className}`}>
      <thead>
        <tr>
          {showCheck ? (
            <th>
              <CheckBox
                checked={isChecked}
                onChange={handleHeaderCheckboxChange}
              />
            </th>
          ) : (
            ""
          )}
          {header.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((item, key) => (
          <tr key={key}>
            {showCheck ? (
              <th>
                <CheckBox
                  id={key}
                  checked={isChecked}
                  onChange={() => handleHeaderCheckboxChange(key)}
                />
              </th>
            ) : (
              ""
            )}
            {header.map((field, index) => {
              return <td key={index}>{item[field.toLowerCase()]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
