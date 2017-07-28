import React from 'react';
import PropTypes from 'prop-types';

const UserAvatar = ({avatar, username}) => {
  return avatar
      ? <img src={avatar} alt={`${username}'s avatar`} />
      : <span className="hs-icon icon-login"></span>
};

export default UserAvatar;

UserAvatar.propTypes = {
  avatar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
  ]).isRequired,
  username: PropTypes.string.isRequired
};