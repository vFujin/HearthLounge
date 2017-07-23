import React from 'react';
import {IsGoldenFilter} from '../../../shared-assets/filters/is-golden';
import IconFilter from '../../../shared-assets/filters/icon-filter';
import InputFilter from '../../../shared-assets/filters/input-filter';
import SliderFilter from '../../../shared-assets/filters/slider-filter';

const Sidebar = ({cards, query}) => {
  const {name, race, mechanics, type, faction} = cards;

  return (
    <div className="sidebar__body">
      <InputFilter attribute={name}      filter="name"      query={query} multiple={false}/>
      <InputFilter attribute={race}      filter="race"      query={query} multiple={true}/>
      <InputFilter attribute={mechanics} filter="mechanics" query={query} multiple={true}/>
      <InputFilter attribute={faction}   filter="faction"   query={query} multiple={true}/>
      <InputFilter attribute={type}      filter="type"      query={query} multiple={true}/>

      <SliderFilter filter="health"     query={query} defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}}/>
      <SliderFilter filter="attack"     query={query} defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}}/>
      <SliderFilter filter="durability" query={query} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}}/>

      <IconFilter header={true} header_label="standard sets" filter="cardSet"         query={query} wrapper_class="sidebar-icons" isStandard={true}/>
      <IconFilter header={true} header_label="wild sets"     filter="cardSet"         query={query} wrapper_class="sidebar-icons" isStandard={false}/>
      <IconFilter header={true} header_label="Family"        filter="multiClassGroup" query={query} wrapper_class="sidebar-icons"/>
      <IconFilter header={true} header_label="rarity"        filter="rarity"          query={query} wrapper_class="sidebar-icons"/>

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