
import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyAlignment } from '../../../editor/EditorUtil';
import { ALIGN } from '../../../../constants/constants';
const AlignmentButton = ({type}) => {
    const onClick = () => applyAlignment(type);
    return (
        <ButtonWithIcon
            type={type+ALIGN}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default AlignmentButton;