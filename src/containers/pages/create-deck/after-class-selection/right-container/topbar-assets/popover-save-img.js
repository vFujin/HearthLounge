import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../../components/buttons/button';

const PopoverSaveImg = ({handleImgSaveClick}) =>{
  return (
      <div className="popover-save-img">
        <Button handleClick={handleImgSaveClick} id="save-img" text="Save as JPEG" type="update"/>
        <Button handleClick={handleImgSaveClick} id="cancel-img-save" text="Cancel" type="default--active"/>
      </div>
  )
};

PopoverSaveImg.propTypes = {
  handleImgSaveClick: PropTypes.func.isRequired
};

export default PopoverSaveImg;