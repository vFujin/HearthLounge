import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';
import Input from '../../../../shared-assets/form-assets/input';
import ImageUpload from './image-upload';
// import Loader from '../../../../../utils/loader';
// import PropTypes from 'prop-types';
import UpdateProfileForm from './update-profile-form';
import Summary from './summary';

class SignUpUpdateProfile extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === false) {
      browserHistory.push('/sign-up');
    }
  }

  uploadedImage = () => {
    const {activeUser, signUp_profilePic, updateFormProperty} = this.props;

    return signUp_profilePic
        ? "✓ Image successfully uploaded."
        : <ImageUpload activeUser={activeUser}
                       updateFormProperty={updateFormProperty}/>
  };

  usernameStatus = () =>{
    const {signUp_username, usernameFree} = this.props;
    if((!usernameFree && signUp_username.length < 3) || (usernameFree && signUp_username.length < 3)){
      return null;
    }
    if(usernameFree && signUp_username.length >= 3){
      return <span>x</span>;
    }
    if(!usernameFree && signUp_username.length >= 3) {
      return <span>✓</span>;
    }
  };

  render() {
    const {signUp_firstStep, signUp_secondStep} = this.props;
    return (signUp_firstStep === "success" && signUp_secondStep === "success")
            ? <Summary/>
            : <UpdateProfileForm {...this.props}
                                 usernameStatus={this.usernameStatus}
                                 uploadedImage={this.uploadedImage}/>
  }
}

export default SignUpUpdateProfile;
