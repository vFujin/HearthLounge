import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Icon from "../../../components/icon";
import EntryMobile from "./entry/entry-mobile";
import EntryDesktop from "./entry/entry-desktop";

const EntryNode = ({activeUser, handleSignOut, mobileMenuActive}) =>{
  const {username, avatar, authenticated} = activeUser;

  return (
      <li className="nav__list--item login">
        <Link className="nav__list--linkContainer" to={(activeUser && authenticated) ? '/dashboard' : '/sign-in'}>
          <div className="nav__list--link">
            {(activeUser && avatar && authenticated)
                ? <div className="nav__list--imageWrapper">
                    <img src={avatar} alt={`${username}'s profile`}/>
                  </div>
                : <Icon name="login"/>}
            {mobileMenuActive
              ? <EntryMobile handleSignOut={handleSignOut}/>
              : <EntryDesktop handleSignOut={handleSignOut}/>}
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
  handleSignOut: PropTypes.func.isRequired
};