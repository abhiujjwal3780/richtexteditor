
import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
const UndoRedoButton = ({type, onClick}) => {
    const onClickHandler = () => {
        onClick();
    }
    return (
        <ButtonWithIcon
            type={type}
            onClick={onClickHandler}
            isActive={false}
        />
    );
};

export default UndoRedoButton;