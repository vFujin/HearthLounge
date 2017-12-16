import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FormSelect from './select';
import {updateDeckProperty} from "../../../../../../../../redux/actions/create-deck/deck-options.action";

const InnerLeftContainer = ({playerClass, deckDetails, handleInputChange, updateDeckProperty}) =>{
  const {deckTitle, deckMode, deckArchetype, deckAdventure, deckBoss, isPrivate} = deckDetails;

  const handleIsPrivateClick = () => updateDeckProperty({isPrivate: !isPrivate});

  const handleSelectChange = (v, selector) => {
    let key= `deck${_.upperFirst(selector)}`;
    updateDeckProperty({[key]: v});
  };

  const typeIsAdventure = () =>{
    if(deckMode === 'adventures'){
      return <FormSelect section="adventure" value={deckAdventure} handleSelectChange={handleSelectChange}/>
    }
  };

  const adventureSelected = () =>{
    if(deckAdventure !== "" && deckMode === 'adventures'){
      return <FormSelect section="boss" value={deckBoss} deckAdventure={deckAdventure} handleSelectChange={handleSelectChange}/>
    }
  };

  return(
      <div className="inner inner__left">
        <div className="input-wrapper">
          <label htmlFor="deck_title">Deck title:</label>
          <input id="deckTitle"
                 type="text"
                 placeholder="SMOrc hunter"
                 onChange={handleInputChange}
                 value={deckTitle}/>
        </div>
        <FormSelect section="mode" value={deckMode} handleSelectChange={handleSelectChange}/>
        {typeIsAdventure()}
        {adventureSelected()}
        <FormSelect section="archetype" value={deckArchetype} playerClass={playerClass} handleSelectChange={handleSelectChange}/>
        <input onChange={handleIsPrivateClick} id="isPrivate" checked={isPrivate} type="checkbox"/>
      </div>
  )
};

const mapStateToProps = state => {
  const {deckDetails} = state;
  return{deckDetails}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckProperty: props => dispatch(updateDeckProperty(props))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InnerLeftContainer);

InnerLeftContainer.propTypes = {
  playerClass: PropTypes.string.isRequired,
  deckTitle: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired
};