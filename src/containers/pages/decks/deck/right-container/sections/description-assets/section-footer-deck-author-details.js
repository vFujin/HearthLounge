import React from 'react';
import PropTypes from 'prop-types';

const AuthorDetails = (props) =>{
  console.log(props)
  const {username, prestige, photoURL} = props.deckAuthor;
  const hasAvatar = () =>{
    return photoURL
        ? <img src={photoURL} alt={`${username}s avatar`}/>
        : <span className="hs-icon icon-login"></span>;
  };

  return (
      <div className="details">
        {hasAvatar()}
        <div className="general-info-wrapper">
          <p>{username}</p>
          <p>{prestige}</p>
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