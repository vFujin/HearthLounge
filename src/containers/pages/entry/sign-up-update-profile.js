import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import Input from '../../shared-assets/form-assets/input';
import {firebaseStorage} from '../../../keys.js';
import PropTypes from 'prop-types';

class SignUpUpdateProfile extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === false) {
      browserHistory.push('/sign-in');
    }
  }

  render() {
    return (
        <div className="sign sign-up active">
          <div className="progress-steps">
            <div className="circle">1</div>
            <div className="circle">2</div>
          </div>

          <form onSubmit={(e)=>this.props.handleUpdateProfileFormSubmit(e, this.props.activeUser)}>
            <div className="signUp_profile-picture"></div>
            <Input id="signUp_username"
                   type="text"
                   placeholder="Joe"
                   handleInputChange={this.props.handleInputChange}
                   value={this.props.signUp_username}
                   pattern=""/>

            <div className="button-wrapper">
              <button className="btn-pearl">Submit</button>
            </div>
          </form>
        </div>
    );
  }
}

export default SignUpUpdateProfile;
