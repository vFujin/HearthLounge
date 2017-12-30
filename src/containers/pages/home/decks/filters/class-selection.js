import React from 'react';
import { icon_filters } from '../../../../../globals/filters';
import Icon from "../../../../../components/icon";

const ClassSelection = ({handleFilterClick, activePlayerClassFilter}) => {
  return (
      <ul className="class-selection">
        {icon_filters.playerClass.filter(icon => icon.url !== "neutral").map((playerClass, index) =>
            <li key={index}
                data-filter="playerClass"
                id={playerClass.url}
                onClick={handleFilterClick}
                className={`${playerClass.url} ${activePlayerClassFilter === playerClass.url && "active"}`}>
                <Icon name={playerClass.url}/>
            </li>
        )}
      </ul>
  );
};

export default ClassSelection;