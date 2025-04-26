import React from 'react';
import './App.css';
import Editor from './components/editor/Editor';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        Multi-Modal Content Editor
      </header>
      <Editor/>
    </div>
  );
}

export default App;
