import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Comment from '../../view/comment';
import TextEditor from '../../../../../shared-assets/editor/text-editor';
import {convertBBCode} from '../../../../../shared-assets/editor/text-editor-functions';

const updateCommentText = _.debounce((updateComment, value) => {
  console.log(updateComment, value)
  updateComment({deckComment: value})
}, 300);

const DeckComments = ({deckComment, deckCommentControlled, updateComment, commentBoxIsActive, toggleCommentBox, previewIsActive, togglePreview}) =>{


  const handleInputChange = (e) => {
    let value = e.target.value;
    updateComment({deckCommentControlled: value});
    console.log(updateCommentText, updateComment, value);
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
        <div className="section__header">
          <div className="line"></div>
          <h1>104 comments</h1>
        </div>
        <div className="section__body">
          <div className={previewIsActive ? "display-none" : "comments"}>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
          <div className={!previewIsActive ? "display-none" : "comment-preview"}>
            {convertBBCode(deckComment)}
          </div>
        </div>
        <div className="section__footer">

          {!commentBoxIsActive ?
              <div className="add-comment">
                <button onClick={handleAddCommentClick} className="btn btn-pearl">Add comment</button>
              </div>
              : <div>
                  <div className="section__footer--header">
                    <h4>Comment</h4>
                    <div>
                      <button onClick={handleHideCommentClick} className="btn btn-pearl">Hide</button>
                      <button onClick={handlePreviewClick} className="btn btn-pearl">Preview</button>
                      <button className="btn btn-pearl">Post Comment</button>
                    </div>
                  </div>
                  <TextEditor editorId="deckCommentControlled"
                              previewId="deckComment"
                              handleInputChange={handleInputChange}
                              value={deckCommentControlled}
                              handleTagInsertion={updateComment}/>
              </div>
          }
        </div>
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