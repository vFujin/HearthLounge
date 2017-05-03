import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {icon_filters} from '../../../data/filters';
import Tooltip from 'antd/lib/tooltip';

const IconFilter = ({filter, header, headerLabel, isStandard, wrapperClass, value, handleIconClick}) => {

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
            <ul className={`${wrapperClass} ${filter}`}>
              {listIcons()}
            </ul>
          </div>
      )
    }

    else{
      return (
          <ul className={`${wrapperClass} ${filter}`}>
            {listIcons()}
          </ul>
      )
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
  handleIconClick: PropTypes.func.isRequired
};

export default IconFilter;