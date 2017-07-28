import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from './user/user-avatar';

const SimplifiedUserSnippet = ({prestige, avatar, role, username}) =>{
  return (
      <div className="author">
        <div className="avatar">
          <UserAvatar avatar={avatar} username={username}/>
          {/*img must be 50x50*/}
        </div>
        <div className="name">{username}</div>
      </div>
  )
};

export default SimplifiedUserSnippet;

SimplifiedUserSnippet.propTypes = {
  prestige: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string
};
