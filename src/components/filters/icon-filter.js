import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {icon_filters} from '../../globals/filters';
import Icon from "../icon";
import Loader from "../loaders/loader";
import FilterHeader from "./filter-header";

const IconFilter = ({handleIconClick, filter, header, header_label, data, mode, filters, wrapper_class}) => {
  const iconType = () =>{
    switch(filter){
      case 'cost': return 'mana';
      case 'rarity': return `rarity`;
      case 'cardSet':   return `set`;
      default: return filter;
    }
  };

  const listIcons = () => {
    if(data && data.loading){
      return <Loader theme="light" />
    }
    else {

      const isCardSet = (data && data[mode])
        ? mode === "wild"
          ? data[mode].filter(set => !data.standard.includes(set))
          : data[mode]
        : icon_filters[filter];

      return isCardSet.map((icon, index) => {
          return (
            <li key={index}
                id={mode ? _.kebabCase(_.toLower(icon)) : icon.url}
                data-filter={filter}
                onClick={handleIconClick}>

              <Icon name={mode ? _.kebabCase(_.toLower(icon)) : icon.url}
                    type={iconType()}
                    className={`${mode ? _.kebabCase(_.toLower(icon)) : icon.url} ${_.kebabCase(_.toLower(filters[filter])) === _.kebabCase(_.toLower(mode ? icon : icon.url)) ? 'active' : ''}`}
                    tooltip={true}/>
            </li>
          )
        }
      )
    }
  };

  const showHeader = () =>{
    if(header === true && filter !== null) {
      return (
        <div className="sidebar__body--filter-wrapper">
          <FilterHeader headerTitle={header_label} filter={filter} filters={filters}/>
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