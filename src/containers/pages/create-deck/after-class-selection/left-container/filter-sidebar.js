import React from 'react';
import _ from 'lodash';
import IconFilter from '../../../../shared-assets/filters/redux-icon-filter';
import InputFilter from '../../../../shared-assets/filters/redux-input-filter';
import SliderFilter from '../../../../shared-assets/filters/redux-slider-filter';
import {connect} from 'react-redux';

const FilterSidebar = ({faction, filtersView, mechanics, name, race, type, cardName, cardRace, cardMechanics, cardFaction, cardType, cardHealth, cardAttack, cardDurability, cardStandardSet, cardWildSet, cardTopbarSet, cardCost, cardRarity, updateFilter}) => {

  const handleSelect = (value, selector) =>{
    updateFilter({[`card${_.startCase(selector)}`]:value});
  };

  const handleIconClick = (e, selector) =>{
    let target = e.currentTarget;
    let targetId = target.id;
    let targetClassList = target.classList;

    if(targetClassList.contains('active')){
      updateFilter({[`card${_.upperFirst(_.camelCase(selector))}`]:''});
    }
    else{
      updateFilter({[`card${_.upperFirst(_.camelCase(selector))}`]:targetId});
    }
  };

  return (
      <div className={`sidebar__body ${filtersView === true ? 'active' : 'display-none'}`}>
        <InputFilter attribute={name}      value={cardName}      filter="name"      multiple={false} handleSelect={handleSelect}/>
        <InputFilter attribute={race}      value={cardRace}      filter="race"      multiple={true}  handleSelect={handleSelect}/>
        <InputFilter attribute={mechanics} value={cardMechanics} filter="mechanics" multiple={true}  handleSelect={handleSelect}/>
        <InputFilter attribute={faction}   value={cardFaction}   filter="faction"   multiple={true}  handleSelect={handleSelect}/>
        <InputFilter attribute={type}      value={cardType}      filter="type"      multiple={true}  handleSelect={handleSelect}/>

        <SliderFilter filter="health"     value={cardHealth}     defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}} handleSelect={handleSelect}/>
        <SliderFilter filter="attack"     value={cardAttack}     defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}}   handleSelect={handleSelect}/>
        <SliderFilter filter="durability" value={cardDurability} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}}   handleSelect={handleSelect}/>

        <IconFilter header={true} headerLabel="standard set" filter="cardSet" value={cardStandardSet} wrapperClass="sidebar-icons" isStandard={true}  handleIconClick={handleIconClick}/>
        <IconFilter header={true} headerLabel="wild set"     filter="cardSet" value={cardWildSet} wrapperClass="sidebar-icons"     isStandard={false} handleIconClick={handleIconClick}/>
        <IconFilter header={true} headerLabel="rarity"       filter="rarity"  value={cardRarity} wrapperClass="sidebar-icons"  handleIconClick={handleIconClick}/>
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
  const {cardName, cardRace, cardMechanics, cardFaction, cardType, cardHealth, cardAttack, cardDurability, cardStandardSet, cardWildSet, cardTopbarSet, cardCost, cardRarity} = state.deckCreationFilters;
  return {
    cardName,
    cardRace,
    cardMechanics,
    cardFaction,
    cardType,
    cardHealth,
    cardAttack,
    cardDurability,
    cardRarity,
    cardStandardSet,
    cardWildSet,
    cardTopbarSet,
    cardCost
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filters) => dispatch({
      type: 'UPDATE_FILTER', filters
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
