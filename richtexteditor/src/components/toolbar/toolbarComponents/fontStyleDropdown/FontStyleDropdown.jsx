import React from 'react';
import Dropdown from '../../../commonComponents/dropdown/Dropdown';
import {fontOptions} from '../../../../constants/constants';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const FontColorDropdown = () => {
  const handleSelect = (option) => {
    applyTagToSelection('span', { fontFamily: option.value});
  };

  return (
    <div className="font-style-picker-container">
      <Dropdown options={fontOptions} onSelect={handleSelect}/>
    </div>
  );
};

export default FontColorDropdown;
