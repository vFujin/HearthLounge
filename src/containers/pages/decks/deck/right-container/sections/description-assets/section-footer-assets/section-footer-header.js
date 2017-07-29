import React from 'react';
import PropTypes from 'prop-types';
import DeckCreatorOptions from './deck-creator-options';

const SectionFooterHeader = ({authorId, activeUser, deckEditing, handleDeckEditingClick, descriptionsNotEqual, decksNotEqual}) => {


  const deckCratorOptions = () =>{
    if((activeUser && authorId === activeUser.uid)){
      return <DeckCreatorOptions deckEditing={deckEditing}
                                 descriptionsNotEqual={descriptionsNotEqual}
                                 decksNotEqual={decksNotEqual}
                                 handleDeckEditingClick={handleDeckEditingClick}/>
    }
  };

  return (
      <div className="section__footer--header">
        <h4>About author</h4>
        {deckCratorOptions()}
      </div>
  )
};

export default SectionFooterHeader;

SectionFooterHeader.propTypes = {
  author: PropTypes.string
};