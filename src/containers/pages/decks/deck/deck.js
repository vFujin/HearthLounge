import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import _ from 'lodash';

const updateCommentText = _.debounce((updateComment, value) => {
  console.log(value);
  updateComment({deckComment: value})
}, 300);

const Deck = ({currentDeck, deckComment, updateComment, deckCommentControlled}) => {

  const handleTextareaChange = (e) => {
    let value = e.target.value;
    updateComment({deckCommentControlled: value});
    updateCommentText(updateComment, value);
  };

  return (
      <div className="container__page container__page--twoSided deck">
        <LeftContainer currentDeck={currentDeck} />
        <RightContainer currentDeck={currentDeck}
                        handleTextareaChange={handleTextareaChange}
                        deckCommentControlled={deckCommentControlled}
                        handleTagInsertion={updateComment}
                        deckComment={deckComment}/>
      </div>
  );
};

const mapStateToProps = (state) => {
  const {deckComment, deckCommentControlled} = state.deckDetails;
  return {deckComment, deckCommentControlled}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateComment: (deckComment) => (dispatch({
      type: 'UPDATE_COMMENT', deckComment
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck)

Deck.propTypes = {
  currentDeck: PropTypes.object,
  updateComment: PropTypes.func
};