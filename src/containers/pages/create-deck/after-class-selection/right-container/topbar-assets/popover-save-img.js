import React from 'react';
import PropTypes from 'prop-types';

const PopoverSaveImg = ({handleImgSaveClick}) =>{
  return (
      <div className="popover-save-img">
        <button onClick={handleImgSaveClick} id="save-img" className="btn-pearl">Save as JPEG</button>
        <button onClick={handleImgSaveClick} id="cancel-img-save" className="btn-pearl">Cancel</button>
      </div>
  )
};

PopoverSaveImg.propTypes = {
  handleImgSaveClick: PropTypes.func.isRequired
};

export default PopoverSaveImg;