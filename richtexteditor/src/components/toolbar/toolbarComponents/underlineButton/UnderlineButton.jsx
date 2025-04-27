import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import { UNDERLINE, SPAN } from '../../../../constants/constants';
const UnderlineButton = () => {
    const onClick = () => applyTagToSelection(SPAN, { textDecoration: UNDERLINE });
    return (
        <ButtonWithIcon
            type={UNDERLINE}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default UnderlineButton;