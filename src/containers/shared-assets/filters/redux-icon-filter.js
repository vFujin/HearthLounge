import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { icon_filters } from '../../../globals/filters';
import Tooltip from 'antd/lib/tooltip';

const IconFilter = ({
  filter,
  header,
  headerLabel,
  isStandard,
  wrapperClass,
  value,
  handleIconClick,
}) => {
  const iconUrl = icon => {
    let classic = 'classic icon-hs-logo';
    let def = `${icon.url} icon-${icon.url}`;
    let isClassic = icon.url === 'classic' ? classic : def;

    switch (filter) {
      case 'rarity':
        return `${_.toLower(icon.name)} icon-rarity `;
      case 'cost':
        return `mana icon-mana-${icon.url}`;
      default:
        return isClassic;
    }
  };

  const isActive = icon => {
    return value === _.kebabCase(icon.name) ? 'active' : null;
  };

  const listIcons = () => {
    return icon_filters[filter]
      .filter(icon => icon.isStandard === isStandard)
      .map((icon, index) => (
        <li
          key={index}
          id={_.kebabCase(icon.name)}
          className={isActive(icon)}
          onClick={e => handleIconClick(e, headerLabel)}
        >
          <Tooltip title={icon.name} placement="bottom">
            <span
              className={`hs-icon ${iconUrl(icon)} ${isActive(icon)}`}
            ></span>
          </Tooltip>
        </li>
      ));
  };

  const showHeader = () => {
    if (header === true && filter !== null) {
      return (
        <div className="icon-filter-wrapper">
          <h3>
            {filter === 'cardSet' ? `${headerLabel}s` : headerLabel}
            <button className={`btn-pearl btn-padding-small`}>x</button>
          </h3>
          <ul className={`${wrapperClass} ${filter}`}>{listIcons()}</ul>
        </div>
      );
    } else {
      return <ul className={`${wrapperClass} ${filter}`}>{listIcons()}</ul>;
    }
  };

  return showHeader();
};

IconFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  header: PropTypes.bool.isRequired,
  headerLabel: PropTypes.string.isRequired,
  isStandard: PropTypes.bool,
  wrapperClass: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleIconClick: PropTypes.func.isRequired,
};

export default IconFilter;
