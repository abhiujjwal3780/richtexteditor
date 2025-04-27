import React from 'react';
import Dropdown from '../../../commonComponents/dropdown/Dropdown';
import {fontOptions} from '../../../../constants/constants';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import SimpleColorPicker from '../../../commonComponents/colorPicker/ColorPicker';
const BackgroundColorDropdown = () => {

  const handleSelect = (color) => {
      applyTagToSelection('span', { backgroundColor:color});
    };
  
  return (
    <div className="color-picker-container">
      <SimpleColorPicker color={"white"} onChange={handleSelect} isTextColor={false} />
    </div>
  );
};

export default BackgroundColorDropdown;
