import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Icon from "../../../../components/icon";
import './styles/nav-entry-mobile-styles.css';

const EntryMobile = ({handleSignOut, activeUser}) => {
  const {authenticated, username, rank} = activeUser;

  if(activeUser && authenticated) {
    return (
      <div className="nav__list--labelWrapper">
        <div className="nav__list--aboutUser">
          <p className="aboutUser__username">{username}</p>
          <p className="aboutUser__rank">{rank}</p>
        </div>

        <div className="nav__list--logout" onClick={handleSignOut}>
          <Icon name="login"/>
          <p>Logout</p>
        </div>
      </div>
    )
  }
  return <div>Sign In</div>
};

EntryMobile.propTypes = {
  handleSignOut: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {activeUser} = state.users;
  return { activeUser };
};

export default connect(mapStateToProps)(EntryMobile);
