import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';
import Input from '../../../../shared-assets/form-assets/input';
import ImageUpload from './image-upload';
// import Loader from '../../../../../utils/loader';
// import PropTypes from 'prop-types';

class SignUpUpdateProfile extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === false) {
      browserHistory.push('/sign-up');
    }
  }

  uploadedImage = () => {
    return this.props.signUp_profilePic
        ? "✓ Image successfully uploaded."
        : <ImageUpload activeUser={this.props.activeUser}
                       updateFormProperty={this.props.updateFormProperty}/>
  };

  usernameStatus = () =>{
    const {signUp_username, usernameFree} = this.props;
    if(!usernameFree && signUp_username.length < 3 || usernameFree && signUp_username.length < 3){
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
    return (
      <form onSubmit={this.props.handleUpdateProfileFormSubmit}>

        <div className="divider"><span>Required</span></div>

        <div className="username-wrapper">
        <Input id="signUp_username"
               type="text"
               placeholder="Joe"
               handleInputChange={this.props.handleInputChange}
               value={this.props.signUp_username}/>
        {this.usernameStatus()}
        </div>
        <div className="divider"><span>Optional</span></div>
        {this.uploadedImage()}

        <div className="button-wrapper">
          <button className="btn-pearl">Submit</button>
        </div>
      </form>
    );
  }
}

export default SignUpUpdateProfile;
