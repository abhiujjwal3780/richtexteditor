import React, { useState } from 'react';
import './ColorPicker.css';
const SimpleColorPicker = ({color, onChange, isTextColor}) => {
  const [currentColor, setColor] = useState(color);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    onChange(e.target.value);
  };
  const applyColor = () => {
    onChange(currentColor);
  }
  return (
    <div className="color-input-container" >
        {isTextColor ? <button onClick={applyColor} className="color-label" style={{color:currentColor}}>A</button>  :
        <button onClick={applyColor} className="color-label" style={{backgroundColor:currentColor, border:"1px solid black"}}>A</button>
}
      <input
        className="color-input"
        type="color"
        value={currentColor}
        onChange={handleColorChange}
        placeholder='A'/>

    </div>
  );
};

export default SimpleColorPicker;
