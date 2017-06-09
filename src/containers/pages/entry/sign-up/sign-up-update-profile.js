import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import Input from '../../../shared-assets/form-assets/input';
import {icon_filters} from '../../../../data/filters';
import {firebaseStorage} from '../../../../keys.js';
import PropTypes from 'prop-types';

class SignUpUpdateProfile extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === false) {
      browserHistory.push('/sign-in');
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
          <input type="file"/>
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
