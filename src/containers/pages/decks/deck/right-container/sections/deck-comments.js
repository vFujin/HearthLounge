import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../../view/comment';
import TextEditor from '../../../../../shared-assets/editor/text-editor';

const DeckComments = () =>{
  return (
      <div className="container__details--section container__details--comments">
        <div className="section__header">
          <div className="line"></div>
          <h1>104 comments</h1>
        </div>
        <div className="section__body">
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
        <div className="section__footer">
          <TextEditor/>
        </div>
      </div>
  )
};

export default DeckComments;

// DeckComments.propTypes = {
//   currentDeck: PropTypes.object
// };