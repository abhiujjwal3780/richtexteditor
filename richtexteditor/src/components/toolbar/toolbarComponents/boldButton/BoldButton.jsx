import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const BoldButton = () => {
    const onClick = () => applyTagToSelection('span', { fontWeight: "700" });
    return (
        <ButtonWithIcon
            type="bold"
            onClick={onClick}
            isActive={false}
        />
    );
};

export default BoldButton;
