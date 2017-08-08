import React from 'react';
import PropTypes from 'prop-types';
import DeckDescription from './sections/description';
import DeckComments from './sections/comments';

const Content = ({activeUser, patch, deckAuthor, currentDeck, handleDeckEditingClick, deckEditing, decksNotEqual, descriptionsNotEqual, params}) =>{
  return (
      <div className="content scrollable">
        <div className="container__details">
          <DeckDescription currentDeck={currentDeck}
                           deckAuthor={deckAuthor}
                           activeUser={activeUser}
                           deckEditing={deckEditing}
                           decksNotEqual={decksNotEqual}
                           descriptionsNotEqual={descriptionsNotEqual}
                           handleDeckEditingClick={handleDeckEditingClick}/>
          <DeckComments currentDeck={currentDeck} patch={patch} activeUser={activeUser} params={params}/>
        </div>
      </div>
  )
};

export default Content;

Content.propTypes = {
  activeUser: PropTypes.object,
  currentDeck: PropTypes.object,
  params: PropTypes.object
};