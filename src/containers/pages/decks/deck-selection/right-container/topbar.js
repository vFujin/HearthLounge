import React from 'react';
import {icon_filters} from '../../../../../globals/filters';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const Topbar = ({adventuresToggled, handleFiltersClick, activeAdventure, activeMode, activeClass}) => {

  const adventures = () =>{
    return (
        <ul>
          {icon_filters.adventures.map(adventure =>{
            return (
                <li id={adventure.url}>
                  <Tooltip placement="bottom" title={_.startCase(adventure.name)}>
                    <span className={`hs-icon icon-${adventure.url} ${adventure.url} ${(adventure.url === activeAdventure) ? 'active' : ''}`}></span>
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
              <li key={el.url} id={el.url} data-filter={filter} onClick={handleFiltersClick}>
                <Tooltip placement="bottom" title={_.startCase(el.name)}>
                  <span className={`hs-icon ${el.url} icon-${el.url} ${el.url === activeMode ? "active-without-background" : el.url === activeClass ? "active" : "" }`}></span>
                </Tooltip>
                {(adventuresToggled && filter === 'type' && el.url === "adventures") ? adventures() : null}
              </li>
          )}
        )
    )
  };

  return (
      <div className="topbar">
        <ul className="topbar-left">{mapFilters('mode')}</ul>
        <ul className="topbar-right">{mapFilters('playerClass')}</ul>
      </div>
  );
};

export default Topbar;