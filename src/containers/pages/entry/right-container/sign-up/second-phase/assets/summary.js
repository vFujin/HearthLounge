import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Summary extends PureComponent{
  componentDidMount() {
    document.title = "Registration Complete!";
    this.props.updateSignUpStatus("success", "success");
  }

  render() {
    return (
      <div className="summary">
        <p>Sign Up Complete!</p>
        <br/>
        <p>On your <Link to="/dashboard">profile page</Link> you can edit your user info.</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    updateSignUpStatus: (signUp_firstStep, signUp_secondStep) => (dispatch({
      type: 'UPDATE_SIGN_UP_STATUS', signUp_firstStep, signUp_secondStep
    }))
  }
};

export default connect(null, mapDispatchToProps)(Summary);