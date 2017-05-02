import React from 'react';
import _ from 'lodash';
import IconFilter from '../../../../shared-assets/filters/icon-filter';
import InputFilter from '../../../../shared-assets/filters/redux-input-filter';
import SliderFilter from '../../../../shared-assets/filters/slider-filter';
import {connect} from 'react-redux';

const FilterSidebar = ({faction, filtersView, mechanics, name, query, race, type, cardName, cardRace, cardMechanics, cardFaction, cardType, cardHealth, cardAttack, cardDurability, setStandard, setWild, setTopbar, setCost, rarity, updateFilter}) => {

  const handleSelect = (value, selector) =>{
    updateFilter({[`card${_.startCase(selector)}`]:value});
    console.log(cardRace)
  };

  const page = "create-deck";
  return (
      <div className={`sidebar__body ${filtersView === true ? 'active' : 'display-none'}`}>
        {console.log(cardRace)}
        <InputFilter attribute={name}      value={cardName}      filter="name"      multiple={false} handleSelect={handleSelect}/>
        <InputFilter attribute={race}      value={cardRace}      filter="race"      multiple={true} handleSelect={handleSelect}/>
        <InputFilter attribute={mechanics} value={cardMechanics} filter="mechanics" multiple={true} handleSelect={handleSelect}/>
        <InputFilter attribute={faction}   value={cardFaction}   filter="faction"   multiple={true} handleSelect={handleSelect}/>
        <InputFilter attribute={type}      value={cardType}      filter="type"      multiple={true} handleSelect={handleSelect}/>

        <SliderFilter filter="health"     query={query} defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}} page={page}/>
        <SliderFilter filter="attack"     query={query} defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}} page={page}/>
        <SliderFilter filter="durability" query={query} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}} page={page}/>

        <IconFilter header={true} header_label="standard sets" filter="cardSet" query={query} wrapper_class="sidebar-icons" isStandard={true} page={page}/>
        <IconFilter header={true} header_label="wild sets"     filter="cardSet" query={query} wrapper_class="sidebar-icons" isStandard={false} page={page}/>
        <IconFilter header={true} header_label="rarity"        filter="rarity"  query={query} wrapper_class="sidebar-icons" page={page}/>
      </div>
  );
};


FilterSidebar.propTypes = {
  faction: React.PropTypes.array,
  mechanics: React.PropTypes.array,
  name: React.PropTypes.array,
  query: React.PropTypes.object,
  race: React.PropTypes.array,
  type: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  const {cardName, cardRace, cardMechanics, cardFaction, cardType, cardHealth, cardAttack, cardDurability, setStandard, setWild, setTopbar, setCost, rarity} = state.createDeckFilters;
  return (
      cardName,
      cardRace,
      cardMechanics,
      cardFaction,
      cardType,
      cardHealth,
      cardAttack,
      cardDurability,
      setStandard,
      setWild,
      setTopbar,
      setCost,
      rarity
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filters) => dispatch({
      type: 'UPDATE_FILTER', filters
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
