import React from 'react';
import { icon_filters } from '../../../../../globals/filters';

const ClassSelection = ({handleFilterClick, activePlayerClassFilter}) => {
  return (
      <ul className="class-selection">
        {icon_filters.playerClass.map((playerClass, index) =>
            <li key={index}
                data-filter="playerClass"
                id={playerClass.url}
                onClick={handleFilterClick}
                className={`${playerClass.url} ${activePlayerClassFilter === playerClass.url && "active"}`}>
                <span className={`hs-icon icon-${playerClass.url}`}></span>
            </li>
        )}
      </ul>
  );
};

export default ClassSelection;