import React from 'react';
import PropTypes from 'prop-types';
import {updateAvatar} from '../../../../../../../firebase/user/update/index';

const ImageUpload = ({activeUser, updateFormProperty}) => {
  return(
      <div className="avatar-wrapper">
        <p>Upload your avatar</p>
        <progress value="0" max="100" id="uploader">0%</progress>
        <input onChange={(e)=>updateAvatar(e, activeUser, updateFormProperty)} type="file"  id="fileButton"/>
      </div>
  )
};

export default ImageUpload;

ImageUpload.propTypes = {
  updateFormProperty: PropTypes.func.isRequired,
  activeUser: PropTypes.object
};