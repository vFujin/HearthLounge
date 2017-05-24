import React from 'react';
import PropTypes from 'prop-types';
import SectionFooterHeader from './section-footer-header';
import TextEditor from '../../../../../../shared-assets/editor/text-editor';

const SectionFooterCommentBox = ({deckCommentControlled, updateComment, handleInputChange, handleHideCommentClick, handlePreviewClick, handlePostCommentClick}) => {

  return (
      <div className="section_footer--wrapper">
        <SectionFooterHeader handleHideCommentClick={handleHideCommentClick}
                             handlePreviewClick={handlePreviewClick}
                             handlePostCommentClick={handlePostCommentClick}/>
        <TextEditor editorId="deckCommentControlled"
                    previewId="deckComment"
                    handleInputChange={handleInputChange}
                    value={deckCommentControlled}
                    handleTagInsertion={updateComment}/>
      </div>
  )
};

export default SectionFooterCommentBox;