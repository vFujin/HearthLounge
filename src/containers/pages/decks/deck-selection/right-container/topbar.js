import React from 'react';
import {icon_filters} from '../../../../../data/filters';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const Topbar = ({handleModeFilterClick, handleClassFilterClick}) => {

  const mapFilters = (filter) => {
    return (
        icon_filters[filter].map(el => {
          return (
              <li key={el.url} id={el.url} onClick={filter==="type" ? handleModeFilterClick : handleClassFilterClick}>
                <Tooltip placement="bottom" title={_.startCase(el.name)}>
                  <span className={`hs-icon icon-${el.url}`}></span>
                </Tooltip>
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