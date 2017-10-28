import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../../../components/loader";
import UploadStatusBtn from "../../../../../../../components/buttons/upload-status";

const SectionFooterHeader = ({handleHideCommentClick, handlePreviewClick, handlePostCommentClick, previewIsActive, deckCommentPostingStatus}) => {
  return (
          <div className="section__footer--header">
            <h4>Comment</h4>
            <div>
              <button onClick={handleHideCommentClick} className="btn btn__default--active btn__darkBorder">Hide</button>
              <button onClick={handlePreviewClick} className={`btn btn__default--dark btn__darkBorder ${previewIsActive && "btn__default--active"}`}>{!previewIsActive ? 'Show' : 'Hide'} Preview</button>
              <UploadStatusBtn uploadStateKey={deckCommentPostingStatus} buttonValue="Post Comment" handleClick={handlePostCommentClick}/>
            </div>
          </div>
  )
};

export default SectionFooterHeader;

SectionFooterHeader.propTypes = {
  handleHideCommentClick: PropTypes.func,
  handlePreviewClick: PropTypes.func,
  handlePostCommentClick: PropTypes.func,
};