import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {icon_filters} from '../../../data/filters';
import Tooltip from 'antd/lib/tooltip';
import {removeQuery} from '../../../utils/utils-router';

const IconFilter = ({filter, header, header_label, isStandard, query, wrapper_class}) => {
  const queries = (icon_url) =>{
    return Object.assign({}, query, {[filter]: icon_url});
  };

  const iconUrl = (icon) =>{
    switch(filter){
      case 'classic': return 'hs-logo';
      case 'rarity': return `rarity`;
      case 'cost':   return `mana-${icon.url} mana`;
      default: return icon.url;
    }
  };

  const listIcons = () =>{
    return (
      icon_filters[filter].filter(icon => icon.isStandard === isStandard).map((icon, index) =>
        <li key={index} id={icon.url}>
          <Link className={`icon-tooltip-wrapper`} to={{pathname: 'cards', query: queries(icon.name)}}>
            <Tooltip title={icon.name} placement="bottom">
              <span id={`${filter}-set`} className={`hs-icon ${iconUrl(icon)} icon-${iconUrl(icon)} ${query[filter] === icon.name ? 'active' : ''}`}></span>
            </Tooltip>
          </Link>
        </li>
      ))
  };

  const showHeader = () =>{
    if(header === true && filter !== null) {
      let showBtn = query[filter] ? 'display-block' : 'display-none';
      return (
        <div className="icon-filter-wrapper">
          <h3>
            {header_label}
            <button onClick={() => removeQuery(filter)} className={`btn-pearl btn-padding-small ${showBtn}`}>
              {/*<Link className={`icon-tooltip-wrapper`} to={{pathname: 'cards', query: this.queries(icon.name)}}>x</Link>*/}
            x
              </button>
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
  query: PropTypes.object.isRequired,
  wrapper_class: PropTypes.string.isRequired,
  isStandard: PropTypes.bool,
};

export default IconFilter;