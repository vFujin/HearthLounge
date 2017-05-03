import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {icon_filters} from '../../../data/filters';
import Tooltip from 'antd/lib/tooltip';

const IconFilter = ({filter, header, headerLabel, isStandard, wrapper_class, value, handleIconClick}) => {

  const iconUrl = (icon) =>{
    switch(filter){
      case 'Classic': return 'hs-logo';
      case 'rarity': return `rarity`;
      case 'cost':   return `mana-${icon.url} mana`;
      default: return icon.url;
    }
  };

  const listIcons = () =>{
    return (
        icon_filters[filter].filter(icon => icon.isStandard === isStandard).map((icon, index) =>
            <li key={index} id={_.kebabCase(icon.name)} onClick={(e)=>handleIconClick(e, headerLabel)}>
              <Tooltip title={icon.name} placement="bottom">
                <span className={`hs-icon ${iconUrl(icon)} icon-${iconUrl(icon)} ${value !== undefined ? 'active' : ''}`}></span>
              </Tooltip>
            </li>
        ))
  };

  const showHeader = () =>{
    if(header === true && filter !== null) {
      return (
          <div className="icon-filter-wrapper">
            <h3>
              {headerLabel}
              <button className={`btn-pearl btn-padding-small`}>x</button>
            </h3>
            <ul className={`${wrapper_class} ${filter}`}>
              {listIcons()}
            </ul>
          </div>
      )
    }

    else{
      return (
          <ul className={`${wrapper_class} ${filter}`}>
            {listIcons()}
          </ul>
      )
    }
  };

  return showHeader();
};

IconFilter.propTypes = {
  header: PropTypes.bool.isRequired,
  header_label: PropTypes.string,
  filter: PropTypes.string.isRequired,
  isStandard: PropTypes.bool.isRequired,
  wrapper_class: PropTypes.string.isRequired,
};

export default IconFilter;