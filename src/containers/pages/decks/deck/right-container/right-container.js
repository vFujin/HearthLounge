import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';

const RightContainer = ({activeDeck, activeUser, patch, deckAuthor, handleDeckVotingClick, deckEditView, descriptionsNotEqual, decksNotEqual, params}) =>{
  return (
      <div className="container__page--inner container__page--right">

        <Topbar activeDeck={activeDeck}
                deckEditView={deckEditView}
                handleDeckVotingClick={handleDeckVotingClick}/>
        <Content activeDeck={activeDeck}
                 deckAuthor={deckAuthor}
                 patch={patch}
                 activeUser={activeUser}
                 deckEditView={deckEditView}
                 decksNotEqual={decksNotEqual}
                 descriptionsNotEqual={descriptionsNotEqual}
                 params={params}/>
      </div>
  )
};

export default RightContainer;

RightContainer.propTypes = {
  activeDeck: PropTypes.object
};