import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';

const RightContainer = ({currentDeck, deckComment, deckCommentControlled, handleTextareaChange, handleTagInsertion}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar currentDeck={currentDeck}/>
        <Content currentDeck={currentDeck}
                 handleTextareaChange={handleTextareaChange}
                 deckCommentControlled={deckCommentControlled}
                 handleTagInsertion={handleTagInsertion}
                 deckComment={deckComment}/>
      </div>
  )
};

export default RightContainer;

RightContainer.propTypes = {
  currentDeck: PropTypes.object,
  updateComment: PropTypes.func
};