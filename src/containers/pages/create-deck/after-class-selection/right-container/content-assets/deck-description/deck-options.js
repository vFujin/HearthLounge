import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import AboutDeck from './save-deck-assets/about-deck';
import Preview from './save-deck-assets/preview';
import {default as saveDeck} from '../../../../../../../firebase/decks/deck/create/deck';
import {error} from '../../../../../../../utils/messages';

const updateDeckText = _.debounce((updateDeckProperty, value) => {
  updateDeckProperty({deckText: value})
}, 300);

const DeckOptions = ({authenticated, activeClass, deckstring, patch, user, deckType, deckTitle, deckArchetype, deckText, deckAdventure, deckBoss, deckTextControlled, simplifiedDeck, updateDeckProperty}) => {

  const handleInputChange = (e) => {
    let target = e.target.id;
    let value = e.target.value;
    if(target === 'deckTextControlled') {
      updateDeckProperty({deckTextControlled: value});
      updateDeckText(updateDeckProperty, value);
    }
    else {
      updateDeckProperty({[target]: value});
    }
  };

  const handleSelectChange = (v, selector) => {
    let key= `deck${_.upperFirst(selector)}`;
    updateDeckProperty({[key]: v})
  };

  const handleSaveDeckSubmit = (e) => {
    e.preventDefault();
    if(authenticated && user){
      saveDeck(patch, activeClass, deckTitle, deckType, deckArchetype, deckAdventure, deckBoss, simplifiedDeck, deckText, deckstring, user.uid);
    } else {
      error("You have to be logged in in order to save your deck.", 6)
    }
  };


  return (
      <div className='container__details'>
        <AboutDeck activeClass={activeClass}
                   deckTitle={deckTitle}
                   deckType={deckType}
                   deckArchetype={deckArchetype}
                   deckAdventure={deckAdventure}
                   deckBoss={deckBoss}
                   deckTextControlled={deckTextControlled}
                   handleInputChange={handleInputChange}
                   handleSelectChange={handleSelectChange}
                   handleSaveDeckSubmit={(e)=>handleSaveDeckSubmit(e)}
                   handleTagInsertion={updateDeckProperty}/>
        <Preview deckText={deckText}/>
      </div>
  )
};

const mapStateToProps = (state) => {
  const {deckTitle, deckType, deckArchetype, deckAdventure, deckBoss, deckText, deckTextControlled} = state.deckDetails;
  return {
    deckTitle, deckType, deckArchetype, deckAdventure, deckBoss, deckText, deckTextControlled
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckProperty: (props) => (dispatch({
      type: 'EDIT_DECK_PROPERTY', props
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckOptions)

DeckOptions.propTypes = {
  activeClass: PropTypes.string,
  user: PropTypes.object,
  deckType: PropTypes.string,
  deckTitle: PropTypes.string,
  deckArchetype: PropTypes.string,
  deckText: PropTypes.string,
  deckTextControlled: PropTypes.string,
  simplifiedDeck: PropTypes.object,
  updateDeckProperty: PropTypes.func
};