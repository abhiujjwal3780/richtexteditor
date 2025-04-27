import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { applyTagToSelection } from '../../../editor/EditorUtil';
const BoldButton = () => {
    const onClick = () => applyTagToSelection('b');
    return (
        <ButtonWithIcon
            type="bold"
            onClick={onClick}
            isActive={false}
        />
    );
};

export default BoldButton;





// <h1 className="text-2xl font-bold mb-4">Modern Rich Text Editor (Selection & Range)</h1>

// {/* Toolbar */}
// <div className="flex flex-wrap gap-2 mb-4">
//   <button className="px-3 py-1 border rounded bg-blue-500 text-white" onClick={makeBold}>
//     Bold
//   </button>
//   <button className="px-3 py-1 border rounded bg-blue-500 text-white" onClick={makeItalic}>
//     Italic
//   </button>
//   <button className="px-3 py-1 border rounded bg-blue-500 text-white" onClick={makeUnderline}>
//     Underline
//   </button>
//   <button className="px-3 py-1 border rounded bg-green-500 text-white" onClick={makeBulletList}>
//     Bullet List
//   </button>
//   <button className="px-3 py-1 border rounded bg-purple-500 text-white" onClick={startNewList}>
//       Start List
//   </button>
//   <button onClick={() => insertBlockElement('blockquote', {}, 'This is a quote.')}>Quote</button>

// <button onClick={() => insertBlockElement('pre', {}, 'const a = 10;\nconsole.log(a);')}>Code Block</button>

// <button onClick={() => insertBlockElement('div', { class: 'callout info' }, 'This is an info callout.')}>Callout Info</button>

// <button onClick={() => insertBlockElement('div', { class: 'callout warning' }, 'This is a warning callout.')}>Callout Warning</button>


//   {/* Font Selector */}
//   <select
//     onChange={(e) => changeFont(e.target.value)}
//     className="px-2 py-1 border rounded"
//     defaultValue=""
//   >
//     <option value="" disabled>Font</option>
//     <option value="Arial">Arial</option>
//     <option value="Courier New">Courier New</option>
//     <option value="Georgia">Georgia</option>
//     <option value="Times New Roman">Times New Roman</option>
//     <option value="Verdana">Verdana</option>
//   </select>

//   {/* Color Picker */}
//   <input
//     type="color"
//     onChange={(e) => changeColor(e.target.value)}
//     className="w-10 h-10 p-1 border rounded"
//   />

//   {/* Font Size Selector */}
//   <select
//     onChange={(e) => changeFontSize(e.target.value)}
//     className="px-2 py-1 border rounded"
//     defaultValue=""
//   >
//     <option value="" disabled>Size</option>
//     <option value="12px">Small</option>
//     <option value="16px">Normal</option>
//     <option value="20px">Large</option>
//     <option value="24px">Extra Large</option>
//   </select>
// </div>

// Editor