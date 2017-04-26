import React from 'react';
import PropTypes from 'prop-types';

const InnerRightContainer = ({handleSaveDeckSubmit}) =>{
  return(
      <div className="inner inner__right">
        <button onClick={handleSaveDeckSubmit} type="submit" className="btn-pearl">Submit</button>
      </div>
  )
};

InnerRightContainer.propTypes = {
  handleSaveDeckSubmit: PropTypes.func.isRequired
};

export default InnerRightContainer;