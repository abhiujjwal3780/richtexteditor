export const isNodeStyled = (node, style = {}) => {
  if (!node.parentElement) {
    return false;
  }
  const parent = node.parentElement;
  const computedStyles = window.getComputedStyle(parent);
  const result = Object.entries(style).every(([key, value]) => {
    return computedStyles[key] === value;
  });
  return result;
};

export const getDefault = (property) => {
  switch (property) {
    case "fontWeight": return "normal";
    case "fontStyle": return "normal";
    case "textDecoration": return "none";
    case "color": return "#000000";
    case "fontFamily": return "Arial";
    case "fontSize": return "16px";
    case "textAlign": return "left";
    default: return "";
  }
};


const updateStyles = (node, style = {}) => {
  const parent = node.parentElement;
  if (!parent) return;
  let newStyles = {};
  const computedStyles = window.getComputedStyle(parent);
  Object.entries(style).every(([key, value]) => {
    if(computedStyles[key] === value) {
      newStyles[key] = getDefault(key)
    }else {
      newStyles[key] = value;
    }
  }); 
  return newStyles
};

export const updateTextNodeStyles = (range, node, tagName,style = {}) => {
    const wrapperTemplate = document.createElement(tagName);

    const selectedText = range.toString();

    if (!selectedText.trim()) return;
    let newStyles = style;
    if (isNodeStyled(node, style)) {
      newStyles = updateStyles(node, style);
    }
    Object.entries(newStyles).forEach(([key, value]) => {
      wrapperTemplate.style[key] = value;
    });
    const wrapper = wrapperTemplate.cloneNode();
    wrapper.textContent = selectedText;
    range.deleteContents();
    range.insertNode(wrapper);
}

export const updateElementNodeStyles = (node, style = {}) => {
  Object.entries(style).forEach(([key, value]) => {
    node.style[key] = value;
  });
}

export const applyTagToSelection = (tagName, style = {}) => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const startContainer = range.startContainer;

  const endContainer = range.endContainer;
  if (startContainer === endContainer) {
    if(startContainer.nodeType === Node.TEXT_NODE){
      updateTextNodeStyles(range, startContainer, tagName, style);
    }else{
      updateElementNodeStyles(startContainer, style);
    }  
  } else {
    const walker = document.createTreeWalker(
      range.commonAncestorContainer,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
      }
    );

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    nodes.forEach((node) => {
      const nodeType = node.nodeType;
      const nodeRange = document.createRange();
      nodeRange.selectNodeContents(node);

      const intersectionRange = nodeRange.cloneRange();

      if (node === startContainer) {
        intersectionRange.setStart(startContainer, range.startOffset);
      }
      if (node === endContainer) {
        intersectionRange.setEnd(endContainer, range.endOffset);
      }

      const selectedText = intersectionRange.toString();
      if (!selectedText.trim()) return;

      let newStyles = style;
      if (isNodeStyled(node, style)) {
        newStyles = updateStyles(startContainer, style);
      }
      if (nodeType === Node.TEXT_NODE) {
        updateTextNodeStyles(intersectionRange, node, tagName, newStyles);
      } else if (nodeType === Node.ELEMENT_NODE) {
        updateElementNodeStyles(node, newStyles);
      }

    });
  }
  selection.removeAllRanges();
  selection.addRange(range);
};



export const insertBlockElement = (tagName, attributes = {}, textContent = '') => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
  
    const block = document.createElement(tagName);
    Object.entries(attributes).forEach(([key, value]) => {
      block.setAttribute(key, value);
    });
    block.textContent = textContent || 'Your content here...';
  
    range.collapse(true);
    range.insertNode(block);
  
    range.setStartAfter(block);
    range.setEndAfter(block);
    selection.removeAllRanges();
    selection.addRange(range);
  };

export const toggleBulletList = (contentRef, type='ul') => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    if (!selection.isCollapsed) {
      makeBulletList(contentRef, type);
    } else {
      startNewList(contentRef, type);
    }
  };
  
export const makeBulletList = (contentRef, type='ul') => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    if (!selectedText.trim()) return;

    const lines = selectedText.split('\n').filter(line => line.trim() !== '');

    const listContainer = document.createElement(type);
    lines.forEach(line => {
      const li = document.createElement('li');
      li.textContent = line.trim();
      listContainer.appendChild(li);
    });

    range.deleteContents();
    range.insertNode(listContainer);

    contentRef.current.focus();
  };

export const startNewList = (contentRef, type="ul") => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);

    const listContainer = document.createElement(type);
    const li = document.createElement('li');
    li.innerHTML = '<br>';
    listContainer.appendChild(li);
  
    range.deleteContents();
    range.insertNode(listContainer);
  
    const newRange = document.createRange();
    newRange.setStart(li, 0);
    newRange.collapse(true);
  
    selection.removeAllRanges();
    selection.addRange(newRange);
  
    contentRef.current.focus();
};

export const applyAlignment = (alignment) => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  let container = range.commonAncestorContainer;

  if (container.nodeType === Node.TEXT_NODE) {
    container = container.parentNode;
  }

  while (container && window.getComputedStyle(container).display === 'inline') {
    container = container.parentNode;
  }

  if (!container) return;

  if (container.style.textAlign === alignment) {
    container.style.textAlign = '';
  } else {
    container.style.textAlign = alignment;
  }
};

