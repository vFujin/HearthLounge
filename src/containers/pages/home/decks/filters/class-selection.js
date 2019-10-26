import React from 'react';
import { icon_filters } from '../../../../../globals/filters';
import { Icon, Tooltip } from 'hearthlounge-design-system';

const ClassSelection = ({ handleFilterClick, activePlayerClassFilter }) => (
  <ul className="class-selection">
    {icon_filters.playerClass
      .filter(icon => icon.url !== 'neutral')
      .map((playerClass, index) => (
        <li
          key={index}
          data-filter="playerClass"
          id={playerClass.url}
          onClick={handleFilterClick}
          className={`${playerClass.url} ${activePlayerClassFilter ===
            playerClass.url && 'active'}`}
        >
          <Tooltip text={playerClass.name}>
            <Icon name={playerClass.url} />
          </Tooltip>
        </li>
      ))}
  </ul>
);

export default ClassSelection;
