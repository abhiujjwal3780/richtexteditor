import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
import { ITALIC , SPAN} from '../../../../constants/constants';
const ItalicButton = ({ref, saveState}) => {
    const onClick = () => {
        saveState(ref.current);
        applyTagToSelection(SPAN, { fontStyle: ITALIC })};
    return (
        <ButtonWithIcon
            type={ITALIC}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default ItalicButton;