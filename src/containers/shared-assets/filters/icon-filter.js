import React from 'react';
import {Link} from 'react-router';
import {icon_filters} from '../../../data/filters';

const IconFilter = (props) => {
  const {filter, header, query, tooltip, wrapper_class} = props;

  const queries = icon_url =>{
    return Object.assign({}, query, {[filter]: icon_url}); // [filter]
  };

  const isRarity = icon =>{
    return filter === 'rarity' ? icon.name.toLowerCase() : icon.url;
  };

  const isManaCrystal = icon =>{
    return filter === 'cost' ? `mana-${icon.url}` : icon.url;
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
          <Link to={{pathname: 'cards', query: queries(isRarity(icon))}}>
            <span className={`hs-icon ${isRarity(icon)} icon-${isManaCrystal(icon)} ${query[icon] === icon.url ? 'active' : ''}`}></span>
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