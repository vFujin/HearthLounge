import React from 'react';
import PropTypes from 'prop-types';
import DeckDescription from './sections/description';
import DeckComments from './sections/comments';

const Content = ({activeUser, currentDeck, params}) =>{
  return (
      <div className="content">
        <div className="container__details">
          <DeckDescription currentDeck={currentDeck}/>
          <DeckComments currentDeck={currentDeck} activeUser={activeUser} params={params}/>
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