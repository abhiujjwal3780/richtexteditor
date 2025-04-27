import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import { BOLD, SPAN, BOLDFONT } from '../../../../constants/constants';
const BoldButton = ({saveState, ref}) => {
    const onClick = () => {
        saveState(ref.current);
        applyTagToSelection(SPAN, { fontWeight: BOLDFONT })
        };
    return (
        <ButtonWithIcon
            type={BOLD}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default BoldButton;
