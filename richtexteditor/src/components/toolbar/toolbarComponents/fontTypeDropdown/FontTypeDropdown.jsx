import React from 'react';
import Dropdown from '../../../commonComponents/dropdown/Dropdown';
import {fontTypeOptions} from '../../../../constants/constants';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const FontTypeDropdown = ({ref, saveState}) => {
  const handleSelect = (option) => {
    saveState(ref.current);
    applyTagToSelection(option.value);
  };

  return (
    <div className="font-style-picker-container">
      <Dropdown options={fontTypeOptions} onSelect={handleSelect}/>
    </div>
  );
};

export default FontTypeDropdown;
