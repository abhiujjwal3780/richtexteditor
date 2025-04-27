import React from 'react';
import './ToolBar.css';
import BoldButton from './toolbarComponents/boldButton/BoldButton';
import ItalicButton from './toolbarComponents/italicButton/ItalicButton';
import UnderlineButton from './toolbarComponents/underlineButton/UnderlineButton';
import FontStyleDropdown from './toolbarComponents/fontStyleDropdown/FontStyleDropdown';
import FontColorDropdown from './toolbarComponents/fontColorDropdown/FontColorDropdown';
import BackgroundColorDropdown from './toolbarComponents/backgroundColorDropdown/backgroundColorDropdown';
import FontSizeDropdown from './toolbarComponents/fontSizeDropdown/FontSizeDropdown';
import ListButton from './toolbarComponents/listButton/ListButton';
import AlignmentButton from './toolbarComponents/alignmentButton/AlignmentButton';
import FontTypeDropdown from './toolbarComponents/fontTypeDropdown/FontTypeDropdown';

const ToolBar = ({ref}) => {

    return (
        <div className="toolbar-container">
            <div className='tool-container'>
                <FontStyleDropdown />
                <FontSizeDropdown />
                <FontTypeDropdown />
            </div>
            <div className="vertical-line" > </div>
            <div className='tool-container'>
                <BoldButton />
                <ItalicButton />
                <UnderlineButton />
            </div>
            
            <div className="vertical-line" ></div>
            <div className='tool-container extra-margin'>
                <FontColorDropdown />
                <BackgroundColorDropdown />
            </div>
            <div className="vertical-line"  ></div>
            <div className='tool-container'>
                <ListButton type="ol" ref={ref}/>
                <ListButton type="ul" ref={ref} />
            </div>
            <div className="vertical-line"  ></div>
            <div className='tool-container'>
                <AlignmentButton type="left" />
                <AlignmentButton type="center" />
                <AlignmentButton type="right" />
            </div>

        </div>
    );
};

export default ToolBar;