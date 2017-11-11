import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../icon";

const UserAvatar = ({deckAuthor}) => deckAuthor && deckAuthor.avatar ? <img src={deckAuthor.avatar} alt={`${deckAuthor.username}'s avatar`}/> : <Icon name="login"/>;

export default UserAvatar;

UserAvatar.propTypes = {
  deckAuthor: PropTypes.shape({
    avatar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    username: PropTypes.string
  })
};