import React from 'react';
import Dropdown from '../../../commonComponents/dropdown/Dropdown';
import {fontSizeOptions} from '../../../../constants/constants';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const FontSizeDropdown = () => {
  const handleSelect = (option) => {
    applyTagToSelection('span', { fontSize: option.value });
  };

  return (
    <div className="font-weight-picker-container">
      <Dropdown options={fontSizeOptions} onSelect={handleSelect}/>
    </div>
  );
};

export default FontSizeDropdown;
