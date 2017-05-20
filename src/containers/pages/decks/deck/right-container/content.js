import React from 'react';
import PropTypes from 'prop-types';
import DeckDescription from './sections/deck-description';
import DeckComments from './sections/deck-comments';

const Content = ({currentDeck, deckComment, deckCommentControlled, handleTextareaChange, handleTagInsertion}) =>{
  return (
      <div className="content">
        <div className="container__details">
          <DeckDescription currentDeck={currentDeck}/>
          <DeckComments handleTextareaChange={handleTextareaChange}
                        deckCommentControlled={deckCommentControlled}
                        handleTagInsertion={handleTagInsertion}
                        deckComment={deckComment}/>
        </div>
      </div>
  )
};

export default Content;

Content.propTypes = {
  currentDeck: PropTypes.object,
  updateComment: PropTypes.func
};