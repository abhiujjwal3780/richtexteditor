import React, { useRef, useEffect } from 'react';
import ToolBar from '../toolbar/ToolBar';
import './Editor.css';
import { makeBulletList } from './EditorUtil';
const Editor = () => {
  const contentRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === '8') {
        e.preventDefault();
        makeBulletList(contentRef.current, 'bullet');
        return;
      }
    };


    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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
