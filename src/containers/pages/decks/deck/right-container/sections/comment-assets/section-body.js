import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../../../view/comment';
import {convertBBCode} from '../../../../../../shared-assets/editor/text-editor-functions';

const SectionBody = ({deckComment, previewIsActive}) => {
  return (
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
  )
};

export default SectionBody;