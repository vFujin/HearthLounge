import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import SectionHeader from './comment-assets/section-header';
import SectionBody from './comment-assets/section-body';
import SectionFooter from './comment-assets/section-footer';

const updateCommentText = _.debounce((updateComment, value) => {
  updateComment({deckComment: value})
}, 300);

const DeckComments = ({deckComment, deckCommentControlled, updateComment, commentBoxIsActive, toggleCommentBox, previewIsActive, togglePreview}) =>{

  const handleInputChange = (e) => {
    let value = e.target.value;
    updateComment({deckCommentControlled: value});
    updateCommentText(updateComment, value);
  };

  const handlePreviewClick = () =>{
    let isActive = previewIsActive === false ? true: false;
    togglePreview(isActive);
  };

  const handleAddCommentClick = () =>{
    toggleCommentBox(true);
  };

  const handleHideCommentClick = () =>{
    toggleCommentBox(false);
    togglePreview(false);
  };


  return (
      <div className="container__details--section container__details--comments">
        <SectionHeader />

        <SectionBody deckComment={deckComment}
                     previewIsActive={previewIsActive}/>

        <SectionFooter commentBoxIsActive={commentBoxIsActive}
                       deckCommentControlled={deckCommentControlled}
                       updateComment={updateComment}
                       handleInputChange={handleInputChange}
                       handleAddCommentClick={handleAddCommentClick}
                       handleHideCommentClick={handleHideCommentClick}
                       handlePreviewClick={handlePreviewClick}/>
      </div>
  )
};

const mapStateToProps = (state) => {
  const {deckComment, deckCommentControlled, commentBoxIsActive, previewIsActive} = state.deckView;
  return {deckComment, deckCommentControlled, commentBoxIsActive, previewIsActive}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateComment: (props) => (dispatch({
      type: 'UPDATE_COMMENT', props
    })),
    toggleCommentBox: (commentBoxIsActive) => (dispatch({
      type: 'TOGGLE_COMMENT_BOX', commentBoxIsActive
    })),
    togglePreview: (previewIsActive) => (dispatch({
      type: 'TOGGLE_PREVIEW', previewIsActive
    }))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(DeckComments)

DeckComments.propTypes = {
  updateComment: PropTypes.func
};