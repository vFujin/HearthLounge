import React from 'react';

import UserDetails from './details/user';
import HearthstoneDetails from './details/hearthstone';
import SocialMediaDetails from './details/social-media';

const Sidebar = (props) => {
  return (
      <div className="sidebar">
        <h3 className="sidebar__header">Profile</h3>

        <ul className="sidebar__body">
          <li className="about">
            <div className="avatar"><img src="http://lorempixel.com/100/100/cats/" alt="cat"/></div>
            <div className="username">{props.username}</div>
          </li>

          <UserDetails email={props.email}/>
          <HearthstoneDetails/>
          <SocialMediaDetails/>
        </ul>
      </div>
  );
};

export default Sidebar;