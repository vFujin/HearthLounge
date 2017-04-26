import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({deckText, handlePreviewCompiling}) =>{
  return (
      <div className="container__details--section container__details--description">
        <div className="section__header">
          <div className="line"></div>
          <h1>Preview</h1>
        </div>
        <div className="section__body">
          {handlePreviewCompiling(deckText)}
        </div>
      </div>
  )
};

Preview.propTypes = {
  deckText: PropTypes.string.isRequired,
  handlePreviewCompiling: PropTypes.func.isRequired
};

export default Preview;