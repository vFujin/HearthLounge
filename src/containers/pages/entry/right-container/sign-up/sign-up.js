import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Switch, Route} from 'react-router';
import SignUpForm from './first-phase/sign-up-form';
import StepProgressBar from './step-progress-bar';
import {getUsername} from "../../../../../firebase/user/read";
import UpdateProfileForm from "./second-phase/assets/update-profile-form";
import Summary from "./second-phase/assets/summary";

const findUsername = _.debounce((input, updateUsernameExistStatus) => {
  getUsername(input, (value) => updateUsernameExistStatus(value))
}, 500);

class SignUp extends Component {

  handleInputChange = (e) => {
    const {updateFormProperty, updateUsernameExistStatus} = this.props;
    let target = e.target;
    let id = target.id;
    let value = target.value;
    updateFormProperty({[id]: value});
    if (id === "signUp_username") {
      findUsername(value, updateUsernameExistStatus);
    }
  };

  render() {
    const {signUp_firstStep, signUp_secondStep} = this.props;
    return (
      <div className="sign sign-up active">
        <StepProgressBar signUp_firstStep={signUp_firstStep} signUp_secondStep={signUp_secondStep}/>
        <Switch>
          <Route exact path="/sign-up" render={() => <SignUpForm handleInputChange={this.handleInputChange} />}/>
          <Route exact path="/sign-up/update-profile" render={()=> <UpdateProfileForm handleInputChange={this.handleInputChange} />} />
          <Route exact path="/sign-up/update-profile/complete" component={Summary}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  const {signUp_firstStep, signUp_secondStep} = state.entry;
  return {signUp_firstStep, signUp_secondStep};
};

const mapDispatchToProps = dispatch =>{
  return {
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    })),
    updateUsernameExistStatus: (usernameFree) => (dispatch({
      type: 'UPDATE_USERNAME_EXIST_STATUS', usernameFree
    })),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);