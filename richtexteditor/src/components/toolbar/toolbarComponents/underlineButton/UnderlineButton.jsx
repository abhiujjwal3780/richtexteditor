import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import { UNDERLINE, SPAN } from '../../../../constants/constants';
const UnderlineButton = ({ref, saveState}) => {

    const onClick = () => {
        saveState(ref.current);
        applyTagToSelection(SPAN, { textDecoration: UNDERLINE })};
    return (
        <ButtonWithIcon
            type={UNDERLINE}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default UnderlineButton;