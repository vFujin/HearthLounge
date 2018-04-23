import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Icon from "../../../../components/icon";
import './styles/nav-entry-styles.css';

const EntryDesktop = ({handleSignOut, activeUser}) => {
  const {authenticated, username} = activeUser;

  if(activeUser && authenticated) {
    return (
      <div className="nav__list--labelWrapper">
        {username}
        <ul className="submenu">
          <li onClick={handleSignOut}>
            <div>
              <Icon name="logout"/>
              Logout
            </div>
          </li>
        </ul>
      </div>
    )
  }
  return <div>Sign In</div>
};

EntryDesktop.propTypes = {
  handleSignOut: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {activeUser} = state.users;
  return { activeUser };
};

export default connect(mapStateToProps)(EntryDesktop);
