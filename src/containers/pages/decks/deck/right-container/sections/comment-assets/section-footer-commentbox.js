import React from 'react';
import PropTypes from 'prop-types';
import SectionFooterHeader from './section-footer-header';
import TextEditor from '../../../../../../shared-assets/editor/text-editor';

const SectionFooterCommentBox = ({deckCommentControlled, updateComment, handleInputChange, handleHideCommentClick, handlePreviewClick}) => {

  return (
      <div className="section_footer--wrapper">
        <SectionFooterHeader handleHideCommentClick={handleHideCommentClick}
                             handlePreviewClick={handlePreviewClick} />
        <TextEditor editorId="deckCommentControlled"
                    previewId="deckComment"
                    handleInputChange={handleInputChange}
                    value={deckCommentControlled}
                    handleTagInsertion={updateComment}/>
      </div>
  )
};

export default SectionFooterCommentBox;