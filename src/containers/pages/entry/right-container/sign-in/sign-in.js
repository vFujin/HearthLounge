import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router';
import ResetPasswordForm from './reset-password-form';
import SignInForm from './sign-in-form';

class SignIn extends Component {
  handleInputChange = (e) => {
    const {updateFormProperty} = this.props;
    let target = e.target;
    let id = target.id;
    let value = target.value;
    updateFormProperty({[id]: value});
  };


  render() {
    return (
      <div className="sign sign-in">
        <Switch>
          <Route exact path="/sign-in" render={() => <SignInForm handleInputChange={this.handleInputChange}/> } />
          <Route exact path="/sign-in/reset-password" render={() => <ResetPasswordForm handleInputChange={this.handleInputChange}/> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  const {resetPasswordView} = state.entry;
  return {resetPasswordView};
};

const mapDispatchToProps = dispatch =>{
  return {
    toggleResetPasswordView: resetPasswordView => dispatch({
      type: 'TOGGLE_RESET_PASSWORD_VIEW', resetPasswordView
    }),
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    })),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

