import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {icon_filters} from '../../../globals/filters';
import Icon from "../../icon";
import Loader from "../../loaders/diamond/loader";
import FilterHeader from "./filter-header";

const IconFilter = ({tooltip = true, header = true, handleIconClick, filter, header_label, data, mode, inDeckCreation, filters, wrapper_class, handleFilterReset}) => {
  const iconType = () =>{
    switch(filter){
      case 'cost': return 'mana';
      case 'rarity': return `rarity`;
      case 'cardSet':   return `set`;
      default: return filter;
    }
  };

  const isCardSet = () => {
    if(data && data[mode]){
      if(mode === "wild") return data[mode].filter(set => !data.standard.includes(set));
      return data[mode];
    }
    if(inDeckCreation){
      return icon_filters[filter].filter(filter => filter.name === inDeckCreation.playerClass || filter.name === "Neutral");
    }
    return icon_filters[filter];
  };

  const listIcons = () => {
    if(data && data.loading){
      return <Loader theme="light" />
    }
    else {
      return isCardSet().map((icon, index) => {
          return (
            <li key={index}
                id={mode ? _.kebabCase(_.toLower(icon)) : icon.url}
                data-filter={filter}
                onClick={handleIconClick}>

              <Icon name={mode ? _.kebabCase(_.toLower(icon)) : icon.url}
                    type={iconType()}
                    className={`${mode ? _.kebabCase(_.toLower(icon)) : icon.url} ${_.kebabCase(_.toLower(filters[filter])) === _.kebabCase(_.toLower(mode ? icon : icon.url)) ? 'active' : ''}`}
                    tooltip={tooltip}/>
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
          <FilterHeader headerTitle={header_label} filter={filter} filters={filters} handleFilterReset={handleFilterReset}/>
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
  header_label: PropTypes.string,
  filter: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  wrapper_class: PropTypes.string.isRequired,
  handleIconClick: PropTypes.func.isRequired,
  header: PropTypes.bool,
  isStandard: PropTypes.bool,
};

export default IconFilter;