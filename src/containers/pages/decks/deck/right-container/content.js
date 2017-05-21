import React from 'react';
import PropTypes from 'prop-types';
import DeckDescription from './sections/description';
import DeckComments from './sections/comments';

const Content = ({currentDeck}) =>{
  return (
      <div className="content">
        <div className="container__details">
          <DeckDescription currentDeck={currentDeck}/>
          <DeckComments currentDeck={currentDeck}/>
        </div>
      </div>
  )
};

export default Content;

Content.propTypes = {
  currentDeck: PropTypes.object
};