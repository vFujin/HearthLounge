import React from 'react';
import {IsGoldenFilter} from '../../../shared-assets/filters/is-golden';
import IconFilter from '../../../shared-assets/filters/icon-filter';
import InputFilter from '../../../shared-assets/filters/input-filter';

const Sidebar = props => {
  const {faction, handleInputChange, handleIconClick, mechanics, name,  query, race, type} = props;
  return (
      <div className="sidebar">
        <h3 className="filter-header">Filters</h3>


        <InputFilter attribute={name}      filter="name"      handleInputChange={handleInputChange}/>
        <InputFilter attribute={race}      filter="race"      handleInputChange={handleInputChange}/>
        <InputFilter attribute={mechanics} filter="mechanics" handleInputChange={handleInputChange}/>
        <InputFilter attribute={faction}   filter="faction"   handleInputChange={handleInputChange}/>
        <InputFilter attribute={type}      filter="type"      handleInputChange={handleInputChange}/>

        <IconFilter header={true} filter="expansions" query={query} tooltip={true} wrapper_class="sidebar-icons" handleIconClick={handleIconClick}/>
        <IconFilter header={true} filter="adventures" query={query} tooltip={true} wrapper_class="sidebar-icons" handleIconClick={handleIconClick}/>
        <IconFilter header={true} filter="rarity"     query={query} tooltip={true} wrapper_class="sidebar-icons" handleIconClick={handleIconClick}/>

        <IsGoldenFilter/>

      </div>
  );
};

Sidebar.propTypes = {
  faction: React.PropTypes.array,
  handleInputChange: React.PropTypes.func,
  handleIconClick: React.PropTypes.func,
  mechanics: React.PropTypes.array,
  name: React.PropTypes.string,
  query: React.PropTypes.object,
  race: React.PropTypes.array,
  type: React.PropTypes.array,
};

export default Sidebar;