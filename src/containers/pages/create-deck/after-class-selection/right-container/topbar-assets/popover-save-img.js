import React from 'react';
import PropTypes from 'prop-types';

const PopoverSaveImg = ({handleImgSaveClick}) =>{
  return (
      <div className="popover-save-img">
        <button onClick={handleImgSaveClick} className="btn-pearl">Save as JPEG</button>
        <button className="btn-pearl">Cancel</button>
      </div>
  )
};

PopoverSaveImg.propTypes = {
  handleImgSaveClick: PropTypes.func.isRequired
};

export default PopoverSaveImg;