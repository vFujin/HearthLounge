import React from 'react';
import PropTypes from 'prop-types';
import SectionFooterCommentBox from './section-footer-commentbox';

const SectionFooter = ({commentBoxIsActive, handleInputChange, handlePostCommentClick, handleAddCommentClick, handleHideCommentClick, handlePreviewClick, deckCommentControlled, updateComment}) => {

  return (
      <div className="section__footer">

        {!commentBoxIsActive ?
            <div className="add-comment">
              <button onClick={handleAddCommentClick} className="btn btn-pearl">Add comment</button>
            </div>
            : <SectionFooterCommentBox deckCommentControlled={deckCommentControlled}
                                       updateComment={updateComment}
                                       handlePostCommentClick={handlePostCommentClick}
                                       handleInputChange={handleInputChange}
                                       handleHideCommentClick={handleHideCommentClick}
                                       handlePreviewClick={handlePreviewClick}/>
        }
      </div>
  )
};

export default SectionFooter;

SectionFooterCommentBox.propTypes = {
  commentBoxIsActive: PropTypes.bool,
  handleInputChange: PropTypes.func,
  handlePostCommentClick: PropTypes.func,
  handleAddCommentClick: PropTypes.func,
  handleHideCommentClick: PropTypes.func,
  handlePreviewClick: PropTypes.func,
  deckCommentControlled: PropTypes.string,
  updateComment: PropTypes.func,
};