import React from 'react';
import {toolbar} from '../../../data/editor-icons';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const TextEditor = ({handleInputChange, selector}) => {

  const mapToolbar = () => {
    return toolbar.map(item => {
      return (
          <Tooltip title={_.startCase(item)} placement="bottom">
            <span className={`hs-icon icon-${item}`}></span>
          </Tooltip>
      )
    });
  };

  return (
      <div className="text-editor">
        <ul className="toolbar">
          {mapToolbar()}
        </ul>
        <div className="">
          <textarea></textarea>
        </div>
      </div>

  );
};

export default TextEditor;