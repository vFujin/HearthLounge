import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from './select';

const InnerLeftContainer = ({activeClass, deckTitle, deckType, deckArchetype, handleInputChange, handleSelectChange}) =>{
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
        <FormSelect section="type" type={deckType} archetype={deckArchetype} handleSelectChange={handleSelectChange}/>
        <FormSelect section="archetype" type={deckType} archetype={deckArchetype} hsClass={activeClass} handleSelectChange={handleSelectChange}/>
      </div>
  )
};

InnerLeftContainer.propTypes = {
  activeClass: PropTypes.string.isRequired,
  deckTitle: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired
};

export default InnerLeftContainer;