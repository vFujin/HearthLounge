import React from 'react';
import { icon_filters } from '../../../../../data/filters';

const ClassSelection = ({handlePlayerClassFilterClick}) => {
  return (
      <ul className="class-selection">
        {icon_filters.playerClass.map((playerClass, index) =>
            <li key={index} id={playerClass.url} onClick={handlePlayerClassFilterClick} className={playerClass.url}>
              <span className={`hs-icon icon-${playerClass.url}`}></span>
            </li>
        )}
      </ul>
  );
};

export default ClassSelection;