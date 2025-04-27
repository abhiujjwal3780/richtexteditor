import React from 'react';
import './ButtonWithIcon.css';
import { svgCenterAlign, svgLeftAlign, svgOrderedList, svgUnorderedList, svgRightAlign, svgRedo, svgUndo } from '../../../constants/svgImage';  

const ButtonWithIcon = ({ type, onClick, isActive }) => {
    const renderIcon = () => {
        switch (type) {
            case 'bold':
                return <strong>B</strong>;
            case 'italic':
                return <em>I</em>;
            case 'underline':
                return <u>U</u>;
            case 'ulList':
                return svgUnorderedList;
            case 'olList':
                return svgOrderedList;
            case 'leftAlign':
                return svgLeftAlign;
            case 'centerAlign':
                return svgCenterAlign;
            case 'rightAlign':
                return svgRightAlign;
            case 'undo':
                return svgUndo;
            case 'redo':
                return svgRedo;
            
            default:
                return null;
        }
    };

    return (
        <button
            className={`icon-button ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {renderIcon()}
        </button>
    );
};

ButtonWithIcon.defaultProps = {
    isActive: false,
};

export default ButtonWithIcon;