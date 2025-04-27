import React from 'react';
import Dropdown from '../../../commonComponents/dropdown/Dropdown';
import {fontOptions, SPAN} from '../../../../constants/constants';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const FontColorDropdown = ({ref, saveState}) => {
  const handleSelect = (option) => {
    saveState(ref.current);
    applyTagToSelection(SPAN, { fontFamily: option.value});
  };

  return (
    <div className="font-style-picker-container">
      <Dropdown options={fontOptions} onSelect={handleSelect}/>
    </div>
  );
};

export default FontColorDropdown;
