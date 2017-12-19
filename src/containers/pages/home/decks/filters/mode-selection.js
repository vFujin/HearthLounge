import React from 'react';
import {icon_filters} from '../../../../../globals/filters';
import Icon from "../../../../../components/icon";

const ModeSelection  = ({activeModeFilter, handleFilterClick}) => {

  const listModes = () => {
    return icon_filters.mode.map(mode =>
        <li key={mode.name}
            data-filter="mode"
            id={mode.url}
            onClick={handleFilterClick}
            className={`${mode.url} ${activeModeFilter === mode.url && "active"}`}>
          <Icon name={mode.url} type="mode"/>
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