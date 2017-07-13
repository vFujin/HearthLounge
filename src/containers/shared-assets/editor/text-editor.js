import React from 'react';
import PropTypes from 'prop-types';
import {toolbar} from '../../../data/editor-icons';
import {handleBBCodeClick} from './text-editor-functions';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const TextEditor = ({handleInputChange, editorId, previewId, value, handleTagInsertion}) => {
  const mapToolbar = () => {
    return toolbar.map(tool => {
      return (
          <li key={tool.name}>
            <Tooltip title={_.startCase(tool.name === 'hs-logo' ? tool.abbreviation : tool.name)} placement="bottom">
              <button onClick={(e)=>handleBBCodeClick(e, value, handleTagInsertion, editorId, previewId)} value={tool.abbreviation}>
                <span className={`hs-icon icon-${tool.name}`}></span>
              </button>
            </Tooltip>
          </li>
      )
    });
  };
  return (
      <div className="text-editor">
        <ul className="toolbar">
          {mapToolbar()}
        </ul>
        <textarea id={editorId}
                  placeholder="Your text goes here..."
                  value={value}
                  onChange={handleInputChange}>
        </textarea>
      </div>
  );
};

export default TextEditor;

TextEditor.propTypes = {
  editorId: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleTagInsertion: PropTypes.func.isRequired,
  previewId: PropTypes.string,
  value: PropTypes.string
};