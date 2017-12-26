import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {icon_filters} from '../../../globals/filters';
import Icon from "../../../components/icon";

const IconFilter = ({handleIconClick, filter, header, header_label, isStandard, filters, wrapper_class}) => {
  const iconType = () =>{
    switch(filter){
      case 'cost': return 'mana';
      case 'rarity': return `rarity`;
      case 'cardSet':   return `set`;
      default: return filter;
    }
  };

  const iconName = (name) => {
    switch(name){
      case 'one-night-in-karazhan': return 'karazhan';
      default: return name;
    }
  };

  const listIcons = () => {
    return (
      icon_filters[filter].filter(icon => icon.isStandard === isStandard).map((icon, index) =>
        <li key={index}
            id={icon.url}
            data-filter={filter}
            onClick={handleIconClick}>

          <Icon name={icon.url}
                type={iconType()}
                className={`${iconName(icon.url)} ${_.kebabCase(_.toLower(filters[filter])) === _.kebabCase(_.toLower(icon.url)) ? 'active' : ''}`}
                tooltip={true}/>
        </li>
      ))
  };

  const showHeader = () =>{
    if(header === true && filter !== null) {
      let showBtn = filters[filter] ? 'display-block' : 'display-none';
      return (
        <div className="icon-filter-wrapper">
          <h3>
            {header_label}
            <button className={`btn-pearl btn-padding-small ${showBtn}`}>x</button>
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
  filters: PropTypes.object.isRequired,
  wrapper_class: PropTypes.string.isRequired,
  handleIconClick: PropTypes.func.isRequired,
  isStandard: PropTypes.bool,
};

export default IconFilter;