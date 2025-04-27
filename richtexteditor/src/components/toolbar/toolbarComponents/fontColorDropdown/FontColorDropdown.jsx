import React from 'react';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import SimpleColorPicker from '../../../commonComponents/colorPicker/ColorPicker';
const FontColorDropdown = () => {
  const handleSelect = (color) => {
    applyTagToSelection('span', { color:color});
  };

return (
  <div className="color-picker-container">
    <SimpleColorPicker color={"black"} onChange={handleSelect} isTextColor={true}/>
  </div>
);
};

export default FontColorDropdown;
