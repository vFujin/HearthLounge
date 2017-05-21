import React from 'react';
import PropTypes from 'prop-types';

const SectionFooterHeader = ({handleHideCommentClick, handlePreviewClick}) => {

  return (
          <div className="section__footer--header">
            <h4>Comment</h4>
            <div>
              <button onClick={handleHideCommentClick} className="btn btn-pearl">Hide</button>
              <button onClick={handlePreviewClick} className="btn btn-pearl">Preview</button>
              <button className="btn btn-pearl">Post Comment</button>
            </div>
          </div>
  )
};

export default SectionFooterHeader;