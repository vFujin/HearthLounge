import React from 'react';
import {icon_filters} from '../../../../../data/filters';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const Topbar = ({adventuresToggled, handleModeFilterClick, handleAdventureFilterClick, handleClassFilterClick}) => {

  const adventures = () =>{
    return (
        <ul>
          {icon_filters.adventures.map(adventure =>{
            return (
                <li id={adventure.url} onClick={handleAdventureFilterClick}>
                  <Tooltip placement="bottom" title={_.startCase(adventure.name)}>
                    <span className={`hs-icon icon-${adventure.url}`}></span>
                  </Tooltip>
                </li>
            )
          })}
        </ul>
    )
  };
  const mapFilters = (filter) => {
    return (
        icon_filters[filter].map(el => {
          return (
              <li key={el.url} id={el.url} onClick={filter==="type" ? handleModeFilterClick : handleClassFilterClick}>
                <Tooltip placement="bottom" title={_.startCase(el.name)}>
                  <span className={`hs-icon icon-${el.url}`}></span>
                </Tooltip>
                {(adventuresToggled && filter === 'type' && el.url === "adventures") ? adventures() : null}
              </li>
          )}
        )
    )
  };

  return (
      <div className="topbar">
        <ul className="topbar-left">{mapFilters('type')}</ul>
        <ul className="topbar-right">{mapFilters('playerClass')}</ul>
      </div>
  );
};

export default Topbar;