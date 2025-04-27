import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const ItalicButton = () => {
    const onClick = () => applyTagToSelection('i');
    return (
        <ButtonWithIcon
            type="italic"
            onClick={onClick}
            isActive={false}
        />
    );
};

export default ItalicButton;