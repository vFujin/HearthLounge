import React from 'react';
import {Link} from 'react-router';
import {icon_filters} from '../../../data/filters';
import Tooltip from 'antd/lib/tooltip';

const IconFilter = (props) => {
  const {cards, filter, header, header_label, isStandard, query, wrapper_class} = props;

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

  const listIcons = () => {
    return (
      icon_filters[filter].filter(icon => icon.isStandard === isStandard).map((icon, index) =>
        <li key={index} id={icon.name}>
          <Link className="icon-tooltip-wrapper" to={{pathname: 'cards', query: queries(icon.name)}}>
            <Tooltip title={icon.name} placement="bottom">
              <span id={`${filter}-set`} className={`hs-icon ${iconUrl(icon)} icon-${iconUrl(icon)} ${query[header_label] === icon.name ? 'active' : ''}`}></span>
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
          <h3>{header_label} <button className={`btn-pearl btn-padding-small ${span === true ? 'display-none' : ''}`}>x</button></h3>
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
  cards: React.PropTypes.array,
  header: React.PropTypes.bool,
  header_label: React.PropTypes.string,
  filter: React.PropTypes.string,
  query: React.PropTypes.object,
  wrapper_class: React.PropTypes.string,
};

export default IconFilter;