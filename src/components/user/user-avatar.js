import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../icon";

const UserAvatar = ({avatar, username}) => avatar ? <img src={avatar} alt={`${username}'s avatar`}/> : <Icon name="login"/>;

export default UserAvatar;

UserAvatar.propTypes = {
  avatar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
  ]),
  username: PropTypes.string
};