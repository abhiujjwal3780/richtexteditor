import React from 'react';
import Dropdown from '../../../commonComponents/dropdown/Dropdown';
import {fontSizeOptions, SPAN} from '../../../../constants/constants';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const FontSizeDropdown = ({ref, saveState}) => {
  const handleSelect = (option) => {
    saveState(ref.current);
    applyTagToSelection(SPAN, { fontSize: option.value });
  };
  return (
    <div className="font-weight-picker-container">
      <Dropdown options={fontSizeOptions} onSelect={handleSelect}/>
    </div>
  );
};

export default FontSizeDropdown;
