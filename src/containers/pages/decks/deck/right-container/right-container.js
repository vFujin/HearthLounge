import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';

const RightContainer = ({activeUser, deckAuthor, currentDeck, handleDeckVotingClick, deckEditing, handleDeckEditingClick, descriptionsNotEqual, decksNotEqual, params}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar currentDeck={currentDeck} deckEditing={deckEditing} handleDeckVotingClick={handleDeckVotingClick}/>
        <Content currentDeck={currentDeck}
                 deckAuthor={deckAuthor}
                 activeUser={activeUser}
                 deckEditing={deckEditing}
                 decksNotEqual={decksNotEqual}
                 descriptionsNotEqual={descriptionsNotEqual}
                 params={params}
                 handleDeckEditingClick={handleDeckEditingClick}/>
      </div>
  )
};

export default RightContainer;

RightContainer.propTypes = {
  currentDeck: PropTypes.object
};