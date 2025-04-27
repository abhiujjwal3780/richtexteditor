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
import { ORDERDLIST, UNORDERDLIST , LEFT, CENTER, RIGHT , UNDO, REDO} from '../../constants/constants';
import UndoRedoButton from './toolbarComponents/undoredoButton/UndoRedoButton';
const ToolBar = ({ref, saveState, onUndo, onRedo}) => {

    return (
        <div className="toolbar-container">
            <div className='tool-container'>
                <FontStyleDropdown ref={ref} saveState={saveState}/>
                <FontSizeDropdown ref={ref} saveState={saveState}/>
                <FontTypeDropdown ref={ref} saveState={saveState}/>
            </div>
            <div className="vertical-line" > </div>
            <div className='tool-container'>
                <BoldButton  ref={ref} saveState={saveState}/>
                <ItalicButton ref={ref} saveState={saveState}/>
                <UnderlineButton ref={ref} saveState={saveState}/>
            </div>
            
            <div className="vertical-line" ></div>
            <div className='tool-container extra-margin'>
                <FontColorDropdown ref={ref} saveState={saveState}/>
                <BackgroundColorDropdown ref={ref} saveState={saveState}/>
            </div>
            <div className="vertical-line"  ></div>
            <div className='tool-container'>
                <ListButton type={ORDERDLIST} ref={ref} saveState={saveState}/>
                <ListButton type={UNORDERDLIST} ref={ref} saveState={saveState}/>
            </div>
            <div className="vertical-line"  ></div>
            <div className='tool-container'>
                <AlignmentButton type={LEFT} ref={ref} saveState={saveState}/>
                <AlignmentButton type={CENTER} ref={ref} saveState={saveState}/>
                <AlignmentButton type={RIGHT} ref={ref} saveState={saveState}/>
            </div>
            <div className="vertical-line"  ></div>
            <div className='tool-container'>
                <UndoRedoButton type={UNDO} onClick={onUndo}/>
                <UndoRedoButton type={REDO} onClick ={onRedo}/>
            </div>

        </div>
    );
};

export default ToolBar;