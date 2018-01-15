import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from "../../../../../components/buttons/button";
import {Link} from "react-router-dom";
import {firebaseResetPasswordRequest} from "../../../../../redux/firebase/actions/reset-password.action";

class ResetPasswordForm extends Component{

  componentDidMount(){
    document.title = "Restore Password";
  }

  handleResetPassword = (e) =>{
    e.preventDefault();
    const {resetPassword, resetPass_email} = this.props;
    resetPassword(resetPass_email);
  };

  render() {
    const {handleInputChange, resetPass_email} = this.props;

    return (
      <form action="">
        <div className="input-wrapper">
          <label htmlFor="resetPass_email">E-mail:</label>
          <input id="resetPass_email"
                 type="text"
                 onChange={handleInputChange}
                 value={resetPass_email}/>
        </div>

        <div className="button-wrapper">
          <Button text="Reset password"
                  handleClick={(e) => this.handleResetPassword(e, resetPass_email)}
                  requiresAuth={false}
                  type="submit--light"/>
          <Link to="/sign-in">Cancel</Link>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  const {resetPass_email} = state.entry;
  return {resetPass_email};
};

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: payload => dispatch(firebaseResetPasswordRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);