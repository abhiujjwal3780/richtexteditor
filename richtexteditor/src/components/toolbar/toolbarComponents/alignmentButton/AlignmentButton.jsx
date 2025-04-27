
import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyAlignment } from '../../../editor/EditorUtil';
const AlignmentButton = ({type}) => {
    const onClick = () => applyAlignment(type);
    return (
        <ButtonWithIcon
            type={type+"Align"}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default AlignmentButton;