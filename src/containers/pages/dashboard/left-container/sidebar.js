import React from 'react';

import UserDetails from './details/user';
import HearthstoneDetails from './details/hearthstone';
import SocialMediaDetails from './details/social-media';

const Sidebar = () => {
  return (
      <div className="sidebar">
        <h3 className="sidebar__header">Profile
          <button className="btn-pearl">Edit</button>
        </h3>

        <ul className="sidebar__body">
          <li className="about">
            <div className="avatar"><img src="http://lorempixel.com/100/100/cats/" alt="cat"/></div>
            <div className="username">Joe</div>
          </li>

          <UserDetails/>
          <HearthstoneDetails/>
          <SocialMediaDetails/>
        </ul>
      </div>
  );
};

export default Sidebar;