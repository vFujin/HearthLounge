import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';
import Input from '../../../shared-assets/form-assets/input';
import {icon_filters} from '../../../../data/filters';
import {updateUserProfilePic} from '../../../../server/user';
// import PropTypes from 'prop-types';

class SignUpUpdateProfile extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === false) {
      browserHistory.push('/sign-up');
    }
  }

  mapPlayerClasses(){
    return icon_filters.playerClass.map(playerClass => <li key={playerClass.url}><span className={`hs-icon icon-${playerClass.url}`}></span></li>)
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
        <div className="avatar-wrapper">
          <p>Upload your avatar</p>
          <progress value="0" max="100" id="uploader">0%</progress>
          <input onChange={(e)=>updateUserProfilePic(e, this.props.activeUser)} type="file"  id="fileButton"/>
        </div>
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
