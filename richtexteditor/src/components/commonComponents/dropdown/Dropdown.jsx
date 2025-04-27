import React, { useEffect, useState } from 'react';
import './Dropdown.css';
const Dropdown = ({ options = [], onSelect}) => {
  const [selectedValue, setSelectedValue] = useState(options[0]?.value || '');

  useEffect(() => {
    if (options.length > 0) {
      setSelectedValue(options[0].value);
    }
  }, [options]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
    
    const selectedOption = options.find(opt => opt.value === selectedValue);
    if (onSelect) {
      onSelect(selectedOption);
    }
  };

  return (
    <select 
      onChange={handleChange} 
      className="dropdown" 
      value={selectedValue}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
