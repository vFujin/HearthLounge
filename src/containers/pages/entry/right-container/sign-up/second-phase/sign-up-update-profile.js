import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import Summary from './assets/summary';
import UpdateProfileForm from './assets/update-profile-form';

class SignUpUpdateProfile extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === false) {
      browserHistory.push('/sign-up');
    }
  }

  render() {
    const {signUp_firstStep, signUp_secondStep} = this.props;
    return (signUp_firstStep === "success" && signUp_secondStep === "success")
            ? <Summary/>
            : <UpdateProfileForm {...this.props} />
  }
}

export default SignUpUpdateProfile;

SignUpUpdateProfile.propTypes = {
  signUp_firstStep: PropTypes.string,
  signUp_secondStep: PropTypes.string,
};
