import React from 'react';
import {icon_filters} from '../../../../../data/filters';

const ModeSelection  = () => {

  const listModes = () => {

    return icon_filters.mode.map(mode =>
        <li key={mode.name}>
          <span className={`hs-icon icon-${mode.url}`}></span>
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