import React from 'react';
import { icon_filters } from '../../../../../globals/filters';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';
import Icon from '../../../../../components/icon';

const Topbar = ({
  adventuresToggled,
  handleFiltersClick,
  activeAdventure,
  activeMode,
  activeClass,
}) => {
  const adventures = () => {
    return (
      <ul>
        {icon_filters.adventures.map(adventure => {
          return (
            <li id={adventure.url}>
              <Tooltip placement="bottom" title={_.startCase(adventure.name)}>
                <Icon name={adventure.url} />
              </Tooltip>
            </li>
          );
        })}
      </ul>
    );
  };
  const mapFilters = filter => {
    return icon_filters[filter]
      .filter(i => i !== 'Neutral')
      .map(icon => {
        return (
          <li
            key={icon.url}
            id={icon.url}
            data-filter={filter}
            onClick={handleFiltersClick}
          >
            <Tooltip placement="bottom" title={_.startCase(icon.name)}>
              <Icon name={icon.url} />
            </Tooltip>
            {adventuresToggled && filter === 'type' && icon.url === 'adventures'
              ? adventures()
              : null}
          </li>
        );
      });
  };

  return (
    <div className="topbar">
      <ul className="topbar-left">{mapFilters('mode')}</ul>
      <ul className="topbar-right">{mapFilters('playerClass')}</ul>
    </div>
  );
};

export default Topbar;
