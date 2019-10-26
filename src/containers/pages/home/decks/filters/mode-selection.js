import React from 'react';
import { icon_filters } from '../../../../../globals/filters';
import { Icon, colors } from 'hearthlounge-design-system';

const ModeSelection = ({ activeModeFilter, handleFilterClick }) => {
  const listModes = () => {
    return icon_filters.mode.map(mode => (
      <li
        key={mode.name}
        data-filter="mode"
        id={mode.url}
        onClick={handleFilterClick}
        className={`${mode.url} ${activeModeFilter === mode.url && 'active'}`}
      >
        <Icon name={mode.url} type="mode" />
        <p style={{ color: colors.neutral50 }}>{mode.name}</p>
      </li>
    ));
  };

  return <ul className="mode-selection">{listModes()}</ul>;
};

export default ModeSelection;
