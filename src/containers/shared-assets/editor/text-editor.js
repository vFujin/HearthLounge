import React from 'react';
import {toolbar} from '../../../data/editor-icons';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const TextEditor = ({handleInputChange, value, handleBBCodeClick}) => {

  const mapToolbar = () => {
    return toolbar.map(tool => {
      return (
          <li key={tool.name}>
            <Tooltip title={_.startCase(tool.name === 'hs-logo' ? tool.abbreviation : tool.name)} placement="bottom">
              <button onClick={handleBBCodeClick} value={tool.abbreviation}>
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
        <textarea id="textarea" placeholder="Your text goes here..." value={value} onChange={handleInputChange}></textarea>
      </div>

  );
};

export default TextEditor;