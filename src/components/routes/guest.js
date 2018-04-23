import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest}
         render={props =>
           !isAuthenticated ? <Component {...props} /> : <Redirect to="/sign-in" />}
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.users.activeUser && state.users.activeUser.authenticated
  }
};

export default connect(mapStateToProps)(GuestRoute);

GuestRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};