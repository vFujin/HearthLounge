import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Icon from "../../components/icon";

const EntryNode = ({activeUser, handleLogout}) =>{
  const {username, avatar, authenticated} = activeUser;
  const isAuthenticated = (activeUser && authenticated);

  const entryLabel = () =>{
    if(isAuthenticated) {
      return (
          <div className="nav__list--labelWrapper">
            {username}
            <ul className="submenu">
              <li onClick={(e) => handleLogout(e)}>
                <Link to="/">
                  <Icon name="logout"/>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
      )
    }
    return <div>Sign In</div>
  };

  return (
      <li className="nav__list--item login">
        <Link className="nav__list--linkContainer" to={(activeUser && authenticated) ? '/dashboard' : '/sign-in'}>
          <div className="nav__list--link">
            {(activeUser && avatar && authenticated)
                ? <div className="nav__list--imageWrapper">
                    <img src={avatar} alt={`${username}'s profile`}/>
                  </div>
                : <Icon name="login"/>}
            {entryLabel()}
          </div>
        </Link>
      </li>
  )
};

export default EntryNode;

EntryNode.propTypes = {
  activeUser: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string
  }),
  handleLogout: PropTypes.func.isRequired
};