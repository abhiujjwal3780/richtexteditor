import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import { UNDERLINE, SPAN } from '../../../../constants/constants';
const UnderlineButton = () => {
    const onClick = () => applyTagToSelection(SPAN, { textDeoration: UNDERLINE });
    return (
        <ButtonWithIcon
            type={UNDERLINE}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default UnderlineButton;