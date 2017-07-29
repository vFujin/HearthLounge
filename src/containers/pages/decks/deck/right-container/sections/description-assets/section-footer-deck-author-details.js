import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from '../../../../../../../components/user/user-avatar'
import Icon from "../../../../../../../components/icons/icon";

const AuthorDetails = (props) =>{
  const {username, rank, avatar} = props.deckAuthor;

  return (
      <div className="details">
        <UserAvatar avatar={avatar} username={username} />
        <div className="general-info-wrapper">
          <p>{username}</p>
          <p>{rank}</p>
        </div>
        <div className="game-details-wrapper">
          <Icon name="battletag"/>
          <p>region</p>
          <p>favourite class</p>
        </div>
        <div className="social-media-wrapper">
          <Icon name="facebook"/>
          <Icon name="twitter"/>
          <Icon name="twitch"/>
          <Icon name="youtube"/>
        </div>
      </div>
  )
};

export default AuthorDetails;

AuthorDetails.propTypes = {
  props: PropTypes.shape({
    username: PropTypes.string,
    rank: PropTypes.number,
    avatar: PropTypes.string,
  })
};