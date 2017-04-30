import React from 'react';
import PropTypes from 'prop-types';
import AboutDeck from './save-deck-assets/about-deck';
import Preview from './save-deck-assets/preview';
import {saveDeck} from '../../../../../../../server/deck-creation';
import {debounceEventHandler} from '../../../../../../../utils/debouncer';
import 'antd/lib/select/style/css';
import {connect} from 'react-redux';
import _ from 'lodash';


const DeckOptions = ({activeClass, user, deck, deckType, deckTitle, deckArchetype, deckText,  updateDeckProperty}) => {

  const handleInputChange = (e) => {
    let target = e.target.id;
    let value = e.target.value;
    updateDeckProperty({[target]: value});
  };

  const handleSelectChange = (v, selector) => {
    let key= `deck${_.upperFirst(selector)}`;
    updateDeckProperty({[key]: v})
  };

  const handleSaveDeckSubmit = (e) => {
    e.preventDefault();
    console.log(deckType);
    saveDeck(activeClass, user.username, deckTitle, deckType, deckArchetype, deck, deckText, user.uid);
  };

  return (
      <div className='container__details'>
        <AboutDeck activeClass={activeClass}
                   deckTitle={deckTitle}
                   deckType={deckType}
                   deckArchetype={deckArchetype}
                   deckText={deckText}
                   handleInputChange={debounceEventHandler(handleInputChange, 300)}
                   handleSelectChange={handleSelectChange}
                   handleSaveDeckSubmit={(e)=>handleSaveDeckSubmit(e)}
                   handleTagInsertion={updateDeckProperty}/>
        <Preview deckText={deckText}/>

      </div>
  )
};

const mapStateToProps = (state) => {
  const {deckTitle, deckType, deckArchetype, deckText} = state.deckOptions;
  return {
    deckTitle, deckType, deckArchetype, deckText
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