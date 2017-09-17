import React from 'react';

export const handleBBCodeClick = (e, textContainer, handleTagInsertion, id, previewId) =>{
  e.preventDefault();
  let bbcode = e.currentTarget.value;
  let selector = textContainer || '';

  let cursorPosStart = document.getElementById(id).selectionStart;
  let cursorPosEnd = document.getElementById(id).selectionEnd;

  let start = selector.substr(0, cursorPosStart);
  let selection = selector.substr(cursorPosStart, cursorPosEnd - cursorPosStart);
  let end = selector.substr(cursorPosEnd);

  switch(bbcode){
    case 'url': return handleTagInsertion({
      [id]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end,
      [previewId]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end
    });
    case 'ul':
    case 'ol': return handleTagInsertion({
      [id]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end,
      [previewId]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end
    });
    default: return handleTagInsertion({
      [id]: start + `[${bbcode}]` + selection + `[/${bbcode}]` + end,
      [previewId]: start + `[${bbcode}]` + selection + `[/${bbcode}]` + end
    });
  }
};