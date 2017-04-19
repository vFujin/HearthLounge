import React from 'react';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = ({editorState, handleInputChange}) => {
  return (
      <div>
        <Editor editorState={editorState} onEditorStateChange={handleInputChange}/>
        <textarea
            disabled
            id="foo"
            value={editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>

  );
};

export default TextEditor;