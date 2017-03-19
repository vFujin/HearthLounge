import React from 'react';
import {Link} from 'react-router';
import {icon_filters} from '../../../data/filters';
import Tooltip from 'antd/lib/tooltip';

const IconFilter = (props) => {
  const {filter, header, query, tooltip, wrapper_class} = props;

  const queries = icon_url =>{
    return Object.assign({}, query, {[filter]: icon_url});
  };

  const iconUrl = icon =>{
    switch(filter){
      case 'rarity': return `rarity`;
      case 'cost':   return `mana-${icon.url} mana`;
      default: return icon.url;
    }
  };

  const iconName = icon =>{
    switch(filter){
      case 'rarity': return icon.name.toLowerCase();
      case 'cost':   return icon.name;
      case 'expansions': return encodeURI(icon.name);
      default: return icon.name;
    }
  };

  const listIcons = () => {
    return (
      icon_filters[filter].map((icon, index) =>
        <li key={index} id={iconName(icon)}>
          <Link className="icon-tooltip-wrapper" to={{pathname: 'cards', query: queries(iconName(icon))}}>
            <Tooltip title={icon.name} placement="bottom">
              <span id={`${filter}-set`} className={`hs-icon ${iconUrl(icon)} icon-${iconUrl(icon)} ${query[filter] === iconName(icon) ? 'active' : ''}`}></span>
            </Tooltip>
          </Link>
        </li>
      ))
  };


  const showHeader = () =>{
    if(header === true && filter !== null) {
      const span = document.getElementById(filter+'-set');
      return (
        <div className="icon-filter-wrapper">
          <h3>{filter} <button className={`btn-pearl btn-padding-small ${span === true ? 'display-none' : ''}`}>x</button></h3>
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
  header: React.PropTypes.bool,
  filter: React.PropTypes.string,
  query: React.PropTypes.object,
  tooltip: React.PropTypes.bool,
  wrapper_class: React.PropTypes.string,
};

export default IconFilter;