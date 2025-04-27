import React from 'react';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import SimpleColorPicker from '../../../commonComponents/colorPicker/ColorPicker';
import { COLOR, DEFAULTFONTCOLOR, SPAN } from '../../../../constants/constants';
const FontColorDropdown = () => {
  const handleSelect = (color) => {
    applyTagToSelection(SPAN, { color:color});
  };

return (
  <div className="color-picker-container">
    <SimpleColorPicker color={DEFAULTFONTCOLOR} onChange={handleSelect} isTextColor={true}/>
  </div>
);
};

export default FontColorDropdown;
