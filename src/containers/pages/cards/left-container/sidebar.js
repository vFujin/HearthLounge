import React from 'react';
import {IsGoldenFilter} from '../../../shared-assets/filters/is-golden';
import IconFilter from '../../../shared-assets/filters/icon-filter';
import InputFilter from '../../../shared-assets/filters/input-filter';

const Sidebar = props => {
  const {faction, mechanics, query, race, type} = props;
  return (
      <div className="sidebar">
        <h3 className="filter-header">Filters</h3>

        <InputFilter attribute={race}      filter="race"/>
        <InputFilter attribute={mechanics} filter="mechanics"/>
        <InputFilter attribute={faction}   filter="faction"/>
        <InputFilter attribute={type}      filter="type"/>

        <IconFilter header={true} filter="expansions" query={query} tooltip={true} wrapper_class="sidebar-icons"/>
        <IconFilter header={true} filter="adventures" query={query} tooltip={true} wrapper_class="sidebar-icons"/>
        <IconFilter header={true} filter="rarity"     query={query} tooltip={true} wrapper_class="sidebar-icons"/>

        <IsGoldenFilter/>

      </div>
  );
};

Sidebar.propTypes = {
  faction: React.PropTypes.array,
  mechanics: React.PropTypes.array,
  query: React.PropTypes.object,
  race: React.PropTypes.array,
  type: React.PropTypes.array,
};

export default Sidebar;