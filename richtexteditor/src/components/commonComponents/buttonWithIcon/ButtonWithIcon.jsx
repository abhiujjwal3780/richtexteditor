import React from 'react';
import PropTypes from 'prop-types';
import './ButtonWithIcon.css';
import { svgCenterAlign, svgLeftAlign, svgOrderedList, svgUnorderedList, svgRightAlign } from '../../../constants/svgImage';  

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