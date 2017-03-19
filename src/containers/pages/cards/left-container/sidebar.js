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
        <div className="filters-wrapper">
          <InputFilter attribute={name}      filter="name"      query={query} multiple={false}/>
          <InputFilter attribute={race}      filter="race"      query={query} multiple={true}/>
          <InputFilter attribute={mechanics} filter="mechanics" query={query} multiple={true}/>
          <InputFilter attribute={faction}   filter="faction"   query={query} multiple={true}/>
          <InputFilter attribute={type}      filter="type"      query={query} multiple={true}/>

          <SliderFilter filter="health"     query={query} defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}}/>
          <SliderFilter filter="attack"     query={query} defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}}/>
          <SliderFilter filter="durability" query={query} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}}/>

          <IconFilter header={true} filter="expansions" query={query} wrapper_class="sidebar-icons" />
          <IconFilter header={true} filter="adventures" query={query} wrapper_class="sidebar-icons" />
          <IconFilter header={true} filter="rarity"     query={query} wrapper_class="sidebar-icons" />

          <IsGoldenFilter/>
        </div>
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