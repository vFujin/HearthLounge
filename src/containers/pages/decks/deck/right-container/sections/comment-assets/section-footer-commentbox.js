import React from 'react';
import PropTypes from 'prop-types';
import SectionFooterHeader from './section-footer-header';
import TextEditor from '../../../../../../../components/text-editor/text-editor';

const SectionFooterCommentBox = ({deckCommentControlled, updateComment, previewIsActive, handleInputChange, handleHideCommentClick, handlePreviewClick, handlePostCommentClick}) => {

  return (
      <div className="section_footer--wrapper">
        <SectionFooterHeader handleHideCommentClick={handleHideCommentClick}
                             previewIsActive={previewIsActive}
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

SectionFooterCommentBox.propTypes = {
  deckCommentControlled: PropTypes.string,
  updateComment: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleHideCommentClick: PropTypes.func,
  handlePreviewClick: PropTypes.func,
  handlePostCommentClick: PropTypes.func,
};