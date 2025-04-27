import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const UnderlineButton = () => {
    const onClick = () => applyTagToSelection('u');
    return (
        <ButtonWithIcon
            type="underline"
            onClick={onClick}
            isActive={false}
        />
    );
};

export default UnderlineButton;