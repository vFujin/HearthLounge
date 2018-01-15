import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from "../../../../../components/buttons/button";
import {Link} from "react-router-dom";
import inputVal from "../utils/input-val";
import {firebaseSignInRequest} from "../../../../../redux/firebase/actions/sign-in.action";

class SignInForm extends Component {

  componentDidMount(){
    document.title = "Sign In"
  }

  handleSignIn = (e) => {
    e.preventDefault();
    const {signIn_email, updateSignInStatus} = this.props;
    updateSignInStatus({email: signIn_email, pass: inputVal('signIn_password')});
  };

  render() {
    const {handleInputChange, signIn_email} = this.props;
    return (
      <form onSubmit={e => this.handleSignIn(e, signIn_email)}>
        <div className="input-wrapper">
          <label htmlFor="signIn_email">E-mail:</label>
          <input id="signIn_email"
                 type="text"
                 onChange={handleInputChange}
                 value={signIn_email}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="signIn_password">Password:</label>
          <input id="signIn_password" type="password"/>
        </div>
        <div className="button-wrapper">
          <Button text="Submit" type="submit--light" requiresAuth={false}/>
          <Link to="/sign-in/reset-password" className="btn btn__default" >
            Forgot password?
          </Link>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state =>{
  const {signIn_email, signIn_password} = state.entry;
  return {signIn_email, signIn_password};
};

const mapDispatchToProps = dispatch =>{
  return {
    updateSignInStatus: payload => dispatch(firebaseSignInRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);