import React, { useRef, useEffect, useState } from 'react';
import ToolBar from '../toolbar/ToolBar';
import './Editor.css';
import { makeBulletList } from './EditorUtil';
const Editor = () => {
  const contentRef = useRef(null);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const saveState = () => {
    if (!contentRef.current) return;
    setUndoStack(prev => [...prev, contentRef.current.innerHTML]);
    setRedoStack([]);
  };

  const undo = () => {
    if (undoStack.length === 0 || !contentRef.current) return;
    const lastState = undoStack[undoStack.length - 1];
    setRedoStack(prev => [...prev, contentRef.current.innerHTML]);
    contentRef.current.innerHTML = lastState;
    setUndoStack(prev => prev.slice(0, prev.length - 1));
  };

  const redo = () => {
    if (redoStack.length === 0 || !contentRef.current) return;
    const nextState = redoStack[redoStack.length - 1];
    setUndoStack(prev => [...prev, contentRef.current.innerHTML]);
    contentRef.current.innerHTML = nextState;
    setRedoStack(prev => prev.slice(0, prev.length - 1));
  };

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
        <ToolBar ref = {contentRef} saveState={saveState} onUndo={undo} onRedo={redo}/>
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
