import React from 'react';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import SimpleColorPicker from '../../../commonComponents/colorPicker/ColorPicker';
import { DEFAULTBACKGROUNDCOLOR , SPAN} from '../../../../constants/constants';
const BackgroundColorDropdown = ({ref, saveState}) => {

  const handleSelect = (color) => {
      saveState(ref.current);
      applyTagToSelection(SPAN, { backgroundColor:color});
    };
  
  return (
    <div className="color-picker-container">
      <SimpleColorPicker color={DEFAULTBACKGROUNDCOLOR} onChange={handleSelect} isTextColor={false} />
    </div>
  );
};

export default BackgroundColorDropdown;
