import React, { useRef, useState, useEffect } from 'react';
import ToolBar from '../toolbar/ToolBar';
import './Editor.css';
import { makeBulletList } from './EditorUtil';
const Editor = () => {
  const contentRef = useRef("<div>abhi</div>");
//   const [showCommandMenu, setShowCommandMenu] = useState(false);
//   const [commandText, setCommandText] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 1. Detect Combo Keys (e.g., Cmd + Shift + 8)
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === '8') {
        e.preventDefault();
        makeBulletList(contentRef.current, 'bullet');
        return;
      }

    //   //  2. Detect Slash Command Start
    //   if (e.key === '/') {
    //     setShowCommandMenu(true);
    //     setCommandText('');
    //   }

    //   // 3. If command menu is open, capture command text
    //   if (showCommandMenu && e.key.length === 1) {
    //     setCommandText((prev) => prev + e.key);
    //   }

    //   // 4. Navigation: Tab between interactive elements
    //   if (e.key === 'Tab') {
    //     e.preventDefault();
    //     focusNextInteractive();
    //   }
    };


    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

//   const focusNextInteractive = () => {
//     const interactiveElements = contentRef.current.querySelectorAll('[data-interactive="true"]');
//     if (!interactiveElements.length) return;

//     const active = document.activeElement;
//     let index = Array.from(interactiveElements).indexOf(active);

//     const next = interactiveElements[(index + 1) % interactiveElements.length];
//     if (next) next.focus();
//   };

  return (
    <div className="editor-container">
        <ToolBar ref = {contentRef}/>
        <div
            className="text-area"
            ref={contentRef}
            contentEditable={true}
            suppressContentEditableWarning={true}
        />
    </div>
  );
};

export default Editor;
