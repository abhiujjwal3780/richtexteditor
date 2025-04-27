import React from 'react';
import Dropdown from '../../../commonComponents/dropdown/Dropdown';
import {fontTypeOptions} from '../../../../constants/constants';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const FontTypeDropdown = () => {
  const handleSelect = (option) => {
    applyTagToSelection(option.value);
  };

  return (
    <div className="font-style-picker-container">
      <Dropdown options={fontTypeOptions} onSelect={handleSelect}/>
    </div>
  );
};

export default FontTypeDropdown;
