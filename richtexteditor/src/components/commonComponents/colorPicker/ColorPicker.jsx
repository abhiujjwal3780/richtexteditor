import React, { useState } from 'react';
import './ColorPicker.css'; // Import the CSS file for styling
const SimpleColorPicker = ({color, onChange, isTextColor}) => {
  const [currentColor, setColor] = useState(color); // Initial color set to black

  const handleColorChange = (e) => {
    setColor(e.target.value);  // Update state with selected color
    onChange(e.target.value);  // Call the onChange prop with the new color
  };

  return (
    <div className="color-input-container" >
        {isTextColor ? <label htmlFor="colorPicker" className="color-label" style={{color:currentColor}}>A</label>  :
        <label htmlFor="colorPicker" className="color-label" style={{backgroundColor:currentColor, border:"1px solid black"}}>A</label>
}
      <input
        className="color-input"
        type="color"
        value={currentColor}  // Show the selected color
        onChange={handleColorChange}
        placeholder='A'/>

    </div>
  );
};

export default SimpleColorPicker;
