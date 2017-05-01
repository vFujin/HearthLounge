import React from 'react';
import {toolbar} from '../../../data/editor-icons';
import {handleBBCodeClick} from './text-editor-functions';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const TextEditor = ({handleInputChange, id, value, handleTagInsertion}) => {

  const mapToolbar = () => {
    return toolbar.map(tool => {
      return (
          <li key={tool.name}>
            <Tooltip title={_.startCase(tool.name === 'hs-logo' ? tool.abbreviation : tool.name)} placement="bottom">
              <button onClick={(e)=>handleBBCodeClick(e, value, handleTagInsertion, id)} value={tool.abbreviation}>
                <span className={`hs-icon icon-${tool.name}`}></span>
              </button>
            </Tooltip>
          </li>
      )
    });
  };
console.log(value);
  return (
      <div className="text-editor">
        <ul className="toolbar">
          {mapToolbar()}
        </ul>
        <textarea id={id} placeholder="Your text goes here..." value={value} onChange={handleInputChange}></textarea>
      </div>
  );
};

export default TextEditor;