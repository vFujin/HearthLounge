import React from 'react';
import {IsGoldenFilter} from '../../../shared-assets/filters/is-golden';
import IconFilter from '../../../shared-assets/filters/icon-filter';
import InputFilter from '../../../shared-assets/filters/input-filter';
import SliderFilter from '../../../shared-assets/filters/slider-filter';

const Sidebar = props => {
  const {faction, mechanics, name, query, race, type} = props;
  return (
      <div className="sidebar">
        <h3 className="filter-header">Filters</h3>

        <InputFilter attribute={name}      filter="name"      query={query} multiple={false}/>
        <InputFilter attribute={race}      filter="race"      query={query} multiple={true}/>
        <InputFilter attribute={mechanics} filter="mechanics" query={query} multiple={true}/>
        <InputFilter attribute={faction}   filter="faction"   query={query} multiple={true}/>
        <InputFilter attribute={type}      filter="type"      query={query} multiple={true}/>

        <SliderFilter filter="health" query={query} defaultValue={[0, 30]} max={50}/>

        <IconFilter header={true} filter="expansions" query={query} tooltip={true} wrapper_class="sidebar-icons" />
        <IconFilter header={true} filter="adventures" query={query} tooltip={true} wrapper_class="sidebar-icons" />
        <IconFilter header={true} filter="rarity"     query={query} tooltip={true} wrapper_class="sidebar-icons" />

        <IsGoldenFilter/>

      </div>
  );
};

Sidebar.propTypes = {
  faction: React.PropTypes.array,
  mechanics: React.PropTypes.array,
  name: React.PropTypes.array,
  query: React.PropTypes.object,
  race: React.PropTypes.array,
  type: React.PropTypes.array,
};

export default Sidebar;