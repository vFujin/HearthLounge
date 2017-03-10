import React from 'react';
import {mode} from '../../../../../data/filters';

const ModeSelection  = () => {

  const listModes = () => {
    return mode.map(mode =>
        <li key={mode.name}>
          <span className={`hs-icon icon-${mode.icon}`}></span>
          <p>{mode.name}</p>
        </li>
    )
  };

  return (
      <ul className="mode-selection">
        {listModes()}
      </ul>
  );
};

export default ModeSelection;