export const applyTagToSelection = (tagName, style = {}) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;
  
    const range = selection.getRangeAt(0);
  
    const wrapperTemplate = document.createElement(tagName);
    Object.entries(style).forEach(([key, value]) => {
      wrapperTemplate.style[key] = value;
    });
  
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;
  
    const isNodeStyled = (node) => {
      if (!node.parentElement) return false;
      const parent = node.parentElement;
      if (parent.nodeName.toLowerCase() !== tagName.toLowerCase()) return false;
  
      // If styles are passed, match them too
      return Object.entries(style).every(([key, value]) => {
        return parent.style[key] === value;
      });
    };
  
    const unwrapNode = (node) => {
      const parent = node.parentElement;
      if (!parent) return;
  
      const textNode = document.createTextNode(parent.textContent);
      parent.replaceWith(textNode);
    };
  
    if (startContainer === endContainer && startContainer.nodeType === Node.TEXT_NODE) {
      // Selection inside one text node
      const selectedText = range.toString();
      if (!selectedText.trim()) return;
  
      if (isNodeStyled(startContainer)) {
        // Unwrap (undo formatting)
        unwrapNode(startContainer);
      } else {
        // Apply formatting
        const wrapper = wrapperTemplate.cloneNode();
        wrapper.textContent = selectedText;
        range.deleteContents();
        range.insertNode(wrapper);
      }
    } else {
      // Complex multi-node selection
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
  
        if (isNodeStyled(node)) {
          // Unwrap
          unwrapNode(node);
        } else {
          // Wrap
          const wrapper = wrapperTemplate.cloneNode();
          wrapper.textContent = selectedText;
  
          intersectionRange.deleteContents();
          intersectionRange.insertNode(wrapper);
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
  
    // Insert block at selection
    range.collapse(true); // Collapse selection to start
    range.insertNode(block);
  
    // Move caret after the inserted block
    range.setStartAfter(block);
    range.setEndAfter(block);
    selection.removeAllRanges();
    selection.addRange(range);
  };

export const toggleBulletList = (contentRef, type='ul') => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    if (!selection.isCollapsed) {
      // 👈 Text is selected
      makeBulletList(contentRef, type);
    } else {
      // 👈 No text selected
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

    // Create a new empty list
    const listContainer = document.createElement(type);
    const li = document.createElement('li');
    li.innerHTML = '<br>';
    listContainer.appendChild(li);
  
    range.deleteContents();
    range.insertNode(listContainer);
  
    // Move cursor into the <li>
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

  // If it's a text node, go up to the parent element
  if (container.nodeType === Node.TEXT_NODE) {
    container = container.parentNode;
  }

  // If already aligned the same way, remove alignment
  if (container.style.textAlign === alignment) {
    container.style.textAlign = ''; // Reset alignment
  } else {
    container.style.textAlign = alignment; // Apply new alignment
  }
};
