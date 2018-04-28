import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import Icon from "../../../../../../../components/icon";
import PropTypes from "prop-types";

const SocialMediaDetails = ({deckAuthor}) =>{
  const {username, facebook, twitter, twitch, youtube} = deckAuthor;

  const wrapper = (media, profile, affix = "com") =>{
    return (
      <a href={profile ? `https://www.${media}.${affix}/${profile}` : ""}
         target="_blank"
         className={!profile ? "profile-not-defined" : undefined}>
        <Icon name={media} className={profile && `${media} active`}/>
      </a>
    )
  };

  return (
    <Tooltip title={`${username}'s social media`} placement="bottom">
      <div className="social-media-wrapper">
        {wrapper("facebook", facebook)}
        {wrapper("twitter", twitter)}
        {wrapper("twitch", twitch, "tv")}
        {wrapper("youtube", youtube)}
      </div>
    </Tooltip>
  )
};

export default SocialMediaDetails;

SocialMediaDetails.propTypes = {
  deckAuthor: PropTypes.shape({
    username: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    twitch: PropTypes.string,
    youtube: PropTypes.string
  })
};