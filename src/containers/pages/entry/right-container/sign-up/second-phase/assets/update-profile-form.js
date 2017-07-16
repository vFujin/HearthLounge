import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../../../shared-assets/form-assets/input';

const UpdateProfileForm = ({signUp_username, usernameStatus, uploadedImage, handleInputChange, handleUpdateProfileFormSubmit}) =>{
  return (
      <form onSubmit={handleUpdateProfileFormSubmit}>

        <div className="divider"><span>Required</span></div>

        <div className="username-wrapper">
          <Input id="signUp_username"
                 type="text"
                 placeholder="Joe"
                 handleInputChange={handleInputChange}
                 value={signUp_username}/>
          {usernameStatus()}
        </div>
        <div className="divider"><span>Optional</span></div>
        {uploadedImage()}

        <div className="button-wrapper">
          <button className="btn-pearl" type="submit">Complete registration</button>
        </div>
      </form>
  )
};


export default UpdateProfileForm;

UpdateProfileForm.propTypes = {
  signUp_username: PropTypes.string.isRequired,
  usernameStatus: PropTypes.func,
  uploadedImage: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleUpdateProfileFormSubmit: PropTypes.func
};