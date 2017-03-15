import React from 'react';
import {Link} from 'react-router';
import {icon_filters} from '../../../data/filters';

const IconFilter = (props) => {
  const {filter, header, query, tooltip, wrapper_class} = props;

  const queries = icon_url =>{
    return Object.assign({}, query, {[filter]: icon_url});
  };


  // const isManaCrystal = icon =>{
  //   return filter === 'cost' ?  : icon.url;
  // };

  const iconUrl = icon =>{
    switch(filter){
      case 'rarity': return `rarity`;
      case 'cost':   return `mana-${icon.url}`;
      default: return icon.url;
    }
  };

  const iconName = icon =>{
    switch(filter){
      case 'rarity': return icon.name.toLowerCase();
      case 'cost':   return icon.name;
      default: return icon.url;
    }
  };

  const showTooltip = icon =>{
    if(tooltip){
      return (
        <div className="tooltip">
          <div className="caret-up"></div>
          <p>{icon.name}</p>
        </div>
      )
    }
  };

  const listIcons = () => {
    return (
      icon_filters[filter].map((icon, index) =>
        <li key={index}>
          <Link to={{pathname: 'cards', query: queries(iconName(icon))}}>
            <span className={`hs-icon ${iconName(icon)} icon-${iconUrl(icon)} ${query[filter] === iconName(icon) ? 'active' : ''}`}></span>
            {showTooltip(icon)}
          </Link>
        </li>
      ))
  };

  const showHeader = () =>{
    if(header === true) {
      return (
        <div className="icon-filter-wrapper">
          <h3>{filter}</h3>
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