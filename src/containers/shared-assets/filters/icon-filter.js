import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {icon_filters} from '../../../globals/filters';
import {removeQuery} from '../../../utils/utils-router';
import Icon from "../../../components/icon";

const IconFilter = ({filter, header, header_label, isStandard, query, wrapper_class}) => {
  const queries = (icon_url) =>{
    return Object.assign({}, query, {[filter]: icon_url});
  };

  const iconType = () =>{
    switch(filter){
      case 'cost': return 'mana';
      case 'rarity': return `rarity`;
      case 'cardSet':   return `set`;
      default: return filter;
    }
  };

  const listIcons = () =>{
    return (
      icon_filters[filter].filter(icon => icon.isStandard === isStandard).map((icon, index) =>
        <li key={index} id={icon.url}>
          <Link className={`icon-tooltip-wrapper`} to={{pathname: 'cards', query: queries(icon.name)}}>
            <Icon id={`${filter}-set`}
                  name={icon.url}
                  type={iconType()}
                  className={`${icon.url} ${query[filter] === icon.name ? 'active' : ''}`}
                  tooltip={true}/>
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