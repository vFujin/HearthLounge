import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../../../../components/inputs/input';
import {imageStatus, usernameStatus} from "../utils";
import Button from "../../../../../../../components/buttons/button";

const UpdateProfileForm = ({activeUser, signUp_username, signUp_avatar, handleInputChange, handleUpdateProfileFormSubmit, updateFormProperty, usernameFree}) =>{
  return (
      <form onSubmit={handleUpdateProfileFormSubmit}>

        <div className="divider"><span>Required</span></div>

        <div className="username-wrapper">
          <Input id="signUp_username"
                 type="text"
                 placeholder="Joe"
                 handleInputChange={handleInputChange}
                 value={signUp_username}/>
          {usernameStatus(signUp_username, usernameFree)}
        </div>

        <div className="divider"><span>Optional</span></div>
        {imageStatus(activeUser, signUp_avatar, updateFormProperty)}

        <div className="button-wrapper">
          <Button text="Complete registration" type="submit" />
        </div>
      </form>
  )
};


export default UpdateProfileForm;

UpdateProfileForm.propTypes = {
  activeUser: PropTypes.object,
  signUp_username: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  handleUpdateProfileFormSubmit: PropTypes.func,
  signUp_avatar: PropTypes.bool,
  usernameFree: PropTypes.bool,
  uploadedImage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  updateFormProperty: PropTypes.func
};