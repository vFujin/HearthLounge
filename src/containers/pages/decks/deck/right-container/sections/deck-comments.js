import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../../view/comment';
import TextEditor from '../../../../../shared-assets/editor/text-editor';
import {convertBBCode} from '../../../../../shared-assets/editor/text-editor-functions';
const DeckComments = ({deckComment, deckCommentControlled, handleTextareaChange, handleTagInsertion}) =>{
  return (
      <div className="container__details--section container__details--comments">
        <div className="section__header">
          <div className="line"></div>
          <h1>104 comments</h1>
        </div>
        <div className="section__body">
          <div className="comments">
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
          <div className="comment-preview">
            {convertBBCode(deckComment)}
          </div>
        </div>
        <div className="section__footer">

          <TextEditor editorId="deckCommentControlled"
                      previewID=""
                      handleInputChange={handleTextareaChange}
                      value={deckCommentControlled}
                      handleTagInsertion={handleTagInsertion}/>
        </div>
      </div>
  )
};

export default DeckComments;

DeckComments.propTypes = {
  updateComment: PropTypes.func
};