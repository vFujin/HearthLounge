import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from './select';

const InnerLeftContainer = ({activeClass, deckTitle, deckType, deckArchetype, deckAdventure, deckBoss, handleInputChange, handleSelectChange}) =>{
  const typeIsAdventure = () =>{
    if(deckType === 'adventures'){
      return <FormSelect section="adventure" value={deckAdventure} handleSelectChange={handleSelectChange}/>
    }
  };

  const adventureSelected = () =>{
    if(deckAdventure !== "" && deckType === 'adventures'){
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
        <FormSelect section="type" value={deckType} handleSelectChange={handleSelectChange}/>
        {typeIsAdventure()}
        {adventureSelected()}
        <FormSelect section="archetype" value={deckArchetype} hsClass={activeClass} handleSelectChange={handleSelectChange}/>
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