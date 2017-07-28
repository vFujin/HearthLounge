import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from './user/user-avatar';
import UserRank from './user/user-rank';

const SimplifiedUserSnippet = ({rank, avatar, role, username}) =>{
  return (
      <div className="component simplifiedUser">
        <div className="simplifiedUser__avatar">
          <UserAvatar avatar={avatar} username={username}/>
        </div>
        <div className="simplifiedUser__details">
          <div className="simplifiedUser__details--username">{username}</div>
          <div className="simplifiedUser__details--rank">
            <UserRank rank={rank} />
          </div>
        </div>
      </div>
  )
};

export default SimplifiedUserSnippet;

SimplifiedUserSnippet.propTypes = {
  rank: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
  ]).isRequired
};
