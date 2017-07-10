import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';
import Input from '../../../../shared-assets/form-assets/input';
import {icon_filters} from '../../../../../data/filters';

import ImageUpload from './image-upload';
// import PropTypes from 'prop-types';

class SignUpUpdateProfile extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === false) {
      browserHistory.push('/sign-up');
    }
  }

  mapPlayerClasses = () =>{
    return icon_filters.playerClass.map(playerClass => <li key={playerClass.url}><span className={`hs-icon icon-${playerClass.url}`}></span></li>)
  };

  uploadedImage = () => {
    return this.props.signUp_profilePic
        ? "✓ Image successfully uploaded."
        : <ImageUpload activeUser={this.props.activeUser}
                       updateFormProperty={this.props.updateFormProperty}/>
  };


  render() {
    return (
      <form onSubmit={(e)=>this.props.handleUpdateProfileFormSubmit(e)}>

        <div className="divider"><span>Required</span></div>

        <Input id="signUp_username"
               type="text"
               placeholder="Joe"
               handleInputChange={this.props.handleInputChange}
               value={this.props.signUp_username}/>

        <div className="divider"><span>Optional</span></div>
        {this.uploadedImage()}
        <div className="social-media"></div>
        <div className="favourite-class-wrapper">
          <p>Choose favourite class:</p>
          <ul className="favourite-class">
            {this.mapPlayerClasses()}
          </ul>
        </div>

        <div className="button-wrapper">
          <button className="btn-pearl">Submit</button>
        </div>
      </form>
    );
  }
}

export default SignUpUpdateProfile;
