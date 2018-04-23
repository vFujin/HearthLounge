import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import {NavLink} from 'react-router-dom';
import {LeftContainer} from './left-container/left-container';
import SignUp from "./right-container/sign-up/sign-up";
import SignIn from './right-container/sign-in/sign-in';
import './entry-styles.css';

class Entry extends PureComponent {

  componentWillUnmount(){
    const {updateFormProperty} = this.props;
    updateFormProperty({
      signIn_password: "",
      signUp_firstStep: "",
      signUp_secondStep: "",
      signUp_confirmEmail: "",
      signUp_password: "",
      signUp_confirmPassword: "",
      signUp_avatar: "",
      tos: false
    });
  }

  render(){
    return (
        <div className={`container__page container__page--oneSided entry`}>
          <div className="wrapper">
            <LeftContainer/>

            <div className="breakline v-breakline"></div>

            <div className="container__page--inner container__page--right">
              <div className="topbar">
                <NavLink to="/sign-in" activeClassName="active">
                  <p>Sign In</p>
                </NavLink>
                <NavLink to="/sign-up" activeClassName="active">
                  <p>Sign Up</p>
                </NavLink>
              </div>
              <Switch>
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    })),
  }
};

export default connect(null, mapDispatchToProps)(Entry);