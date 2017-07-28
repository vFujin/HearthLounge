import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from '../../../../../../../components/user/user-avatar'
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
          <span className="hs-icon icon-battletag"></span>
          <p>region</p>
          <p>favourite class</p>
        </div>
        <div className="social-media-wrapper">
          <span className="hs-icon icon-facebook"></span>
          <span className="hs-icon icon-twitter"></span>
          <span className="hs-icon icon-twitch"></span>
          <span className="hs-icon icon-youtube"></span>
        </div>
      </div>
  )
};

export default AuthorDetails;