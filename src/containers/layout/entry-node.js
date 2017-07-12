import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const EntryNode = ({user, handleLogout}) =>{
  const userObjExist = (user && !(Object.keys(user).length === 1 && user.constructor === Object));

  const entryLabel = () =>{
    if(userObjExist) {
      return (
          <div className="nav__list--labelWrapper">
            {user.username}
            <ul className="submenu">
              <li onClick={(e) => handleLogout(e)}>
                <Link to="/">
                  <span className="hs-icon icon-logout"></span>
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
        <Link className="nav__list--linkContainer" to={user ? '/dashboard' : '/sign-in'}>
          <div className="nav__list--link">
            {(user && user.photoURL)
                ? <div className="nav__list--imageWrapper">
                    <img src={user.photoURL} alt={`${user.username}'s profile`}/>
                  </div>
                : <span className="hs-icon icon-login"></span>}
            {entryLabel()}
          </div>
        </Link>
      </li>
  )
};

export default EntryNode;

EntryNode.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    photoURL: PropTypes.string
  }),
  handleLogout: PropTypes.func.isRequired
};